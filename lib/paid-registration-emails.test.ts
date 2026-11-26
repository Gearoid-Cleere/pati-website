import assert from "node:assert/strict"
import { describe, it } from "node:test"
import Stripe from "stripe"
import {
  EMAIL_SENT_VALUE,
  LEGACY_SCHOOL_PARENT_PAYMENT_LINK,
  LEGACY_SCHOOL_RENEWAL_PRICE,
  OPS_EMAIL_SENT_KEY,
  PURCHASER_EMAIL_SENT_KEY,
  deliverPaidRegistrationEmails,
  isPaidEmailEvent,
  isRecognisedPaidJourney,
  normaliseCheckoutSession,
  opsIdempotencyKey,
  purchaserIdempotencyKey,
  resolveOpsEmail,
  type DeliveryDependencies,
} from "./paid-registration-emails.ts"
import {
  JANUARY_ACCESS_NOTICE,
  decideProgrammeAccess,
  JANUARY_SCHOOL_INVOICE_ACKNOWLEDGEMENT,
  formatJanuarySchoolInvoiceRequestEmail,
  formatJanuaryTeacherAccessEmail,
  formatOpsEmail,
  formatPurchaserEmail,
  formatSchoolInvoiceRequestEmail,
  januarySchoolSuccessBody,
} from "./emails.ts"
import {
  OFFERING_AGE_OF_AI,
  OFFERING_ANNUAL_ACCESS,
  OFFERING_TECH_SAVVY,
  januaryRegistrationPaths,
} from "./programme-id.ts"
import { aiProgramme } from "./programmes.ts"
import {
  INVOICE_REQUEST_TYPE,
  JANUARY_SCHOOL_INVOICE_AMOUNT,
  aiSchoolInvoiceRequestSchema,
  checkoutRequestSchema,
  toStripeMetadata,
} from "./registration.ts"
import {
  MissingOfferingPriceError,
  UnsupportedOfferingJourneyError,
  getPriceIdForJourney,
  unavailableOfferingMessage,
} from "./stripe.ts"
import { applyRegistrationEmailOverride } from "./registration-email.ts"
import { handleStripeWebhook } from "./stripe-webhook.ts"

function sessionFixture(
  overrides: Partial<Stripe.Checkout.Session> = {}
): Stripe.Checkout.Session {
  return {
    id: "cs_test_123",
    object: "checkout.session",
    payment_status: "paid",
    metadata: {
      journey: "parent",
      email: "parent@example.com",
    },
    customer_email: "parent@example.com",
    amount_total: 7995,
    currency: "eur",
    ...overrides,
  } as Stripe.Checkout.Session
}

function createDeps(initial: Stripe.Checkout.Session, options?: {
  sendOps?: DeliveryDependencies["sendOpsEmail"]
  sendPurchaser?: DeliveryDependencies["sendPurchaserEmail"]
  failMetadataUpdateOn?: "ops" | "purchaser" | "always"
  lineItems?: Stripe.LineItem[]
}) {
  const store: { session: Stripe.Checkout.Session } = {
    session: {
      ...initial,
      metadata: { ...(initial.metadata || {}) },
    },
  }

  const opsKeys: string[] = []
  const purchaserKeys: string[] = []
  let metadataUpdates = 0

  const deps: DeliveryDependencies = {
    retrieveSession: async () => ({
      ...store.session,
      metadata: { ...(store.session.metadata || {}) },
    }),
    listLineItems: async () => options?.lineItems || [],
    updateSessionMetadata: async (_id, metadata) => {
      metadataUpdates += 1
      const shouldFail =
        options?.failMetadataUpdateOn === "always" ||
        (options?.failMetadataUpdateOn === "ops" &&
          metadata[OPS_EMAIL_SENT_KEY] === EMAIL_SENT_VALUE &&
          metadata[PURCHASER_EMAIL_SENT_KEY] !== EMAIL_SENT_VALUE) ||
        (options?.failMetadataUpdateOn === "purchaser" &&
          metadata[PURCHASER_EMAIL_SENT_KEY] === EMAIL_SENT_VALUE)

      if (shouldFail) {
        throw new Error("metadata update failed")
      }

      store.session = {
        ...store.session,
        metadata: { ...metadata },
      }
    },
    sendOpsEmail:
      options?.sendOps ||
      (async (_session, key) => {
        opsKeys.push(key)
      }),
    sendPurchaserEmail:
      options?.sendPurchaser ||
      (async (_session, key) => {
        purchaserKeys.push(key)
      }),
  }

  return { deps, store, opsKeys, purchaserKeys, getMetadataUpdates: () => metadataUpdates }
}

describe("isPaidEmailEvent", () => {
  it("handles completed and delayed payment success events", () => {
    assert.equal(isPaidEmailEvent("checkout.session.completed"), true)
    assert.equal(isPaidEmailEvent("checkout.session.async_payment_succeeded"), true)
    assert.equal(isPaidEmailEvent("checkout.session.expired"), false)
  })
})

describe("resolveOpsEmail", () => {
  it("rejects missing or invalid PATI_OPS_EMAIL and trims a valid address", () => {
    assert.throws(() => resolveOpsEmail(undefined), /missing or invalid/)
    assert.throws(() => resolveOpsEmail(""), /missing or invalid/)
    assert.throws(() => resolveOpsEmail("  "), /missing or invalid/)
    assert.throws(() => resolveOpsEmail("not-an-email"), /missing or invalid/)
    assert.throws(() => resolveOpsEmail("ops@"), /missing or invalid/)
    assert.throws(() => resolveOpsEmail("schools@parentingandtechnologyinstitute.com extra"), /missing or invalid/)
    assert.equal(
      resolveOpsEmail("  schools@parentingandtechnologyinstitute.com  "),
      "schools@parentingandtechnologyinstitute.com"
    )
  })
})

describe("isRecognisedPaidJourney", () => {
  it("accepts the five paid PATI registration journeys", () => {
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: { journey: "parent" } })), true)
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: { journey: "school" } })), true)
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: { journey: "organisation" } })), true)
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: { journey: "schoolParent" } })), true)
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: { journey: "organisationUser" } })), true)
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: {} })), false)
    assert.equal(isRecognisedPaidJourney(sessionFixture({ metadata: { journey: "teacher" } })), false)
  })
})

describe("deliverPaidRegistrationEmails", () => {
  it("does not send email for unpaid checkout sessions", async () => {
    const { deps, opsKeys, purchaserKeys } = createDeps(
      sessionFixture({ payment_status: "unpaid" })
    )

    const result = await deliverPaidRegistrationEmails("cs_test_123", deps)

    assert.equal(result.skipped, true)
    assert.equal(result.incomplete, false)
    assert.equal(result.opsAttempted, false)
    assert.equal(result.purchaserAttempted, false)
    assert.deepEqual(opsKeys, [])
    assert.deepEqual(purchaserKeys, [])
  })

  it("sends both emails for a paid session and records independent metadata flags", async () => {
    const { deps, store, opsKeys, purchaserKeys } = createDeps(sessionFixture())

    const result = await deliverPaidRegistrationEmails("cs_test_123", deps)

    assert.equal(result.skipped, false)
    assert.equal(result.incomplete, false)
    assert.equal(store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.equal(store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.deepEqual(opsKeys, [opsIdempotencyKey("cs_test_123")])
    assert.deepEqual(purchaserKeys, [purchaserIdempotencyKey("cs_test_123")])
  })

  it("does not resend on duplicate webhook delivery when metadata flags are set", async () => {
    const first = createDeps(sessionFixture())
    await deliverPaidRegistrationEmails("cs_test_123", first.deps)

    const second = createDeps(first.store.session)
    const result = await deliverPaidRegistrationEmails("cs_test_123", second.deps)

    assert.equal(result.incomplete, false)
    assert.equal(result.opsAttempted, false)
    assert.equal(result.purchaserAttempted, false)
    assert.deepEqual(second.opsKeys, [])
    assert.deepEqual(second.purchaserKeys, [])
  })

  it("retries only the failed purchaser email after a partial failure", async () => {
    let purchaserShouldFail = true
    const first = createDeps(sessionFixture(), {
      sendPurchaser: async () => {
        if (purchaserShouldFail) {
          throw new Error("resend purchaser failed")
        }
      },
    })

    const firstResult = await deliverPaidRegistrationEmails("cs_test_123", first.deps)

    assert.equal(firstResult.incomplete, true)
    assert.equal(first.store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.notEqual(
      first.store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY],
      EMAIL_SENT_VALUE
    )

    purchaserShouldFail = false
    const retry = createDeps(first.store.session, {
      sendPurchaser: async (_session, key) => {
        retry.purchaserKeys.push(key)
      },
    })
    const retryResult = await deliverPaidRegistrationEmails("cs_test_123", retry.deps)

    assert.equal(retryResult.incomplete, false)
    assert.equal(retryResult.opsAttempted, false)
    assert.equal(retryResult.purchaserAttempted, true)
    assert.deepEqual(retry.opsKeys, [])
    assert.deepEqual(retry.purchaserKeys, [purchaserIdempotencyKey("cs_test_123")])
    assert.equal(retry.store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
  })

  it("sends emails on delayed payment success once the session is paid", async () => {
    const unpaid = createDeps(sessionFixture({ payment_status: "unpaid" }))
    const unpaidResult = await deliverPaidRegistrationEmails("cs_test_123", unpaid.deps)

    assert.equal(isPaidEmailEvent("checkout.session.async_payment_succeeded"), true)
    assert.equal(unpaidResult.skipped, true)
    assert.deepEqual(unpaid.opsKeys, [])
    assert.deepEqual(unpaid.purchaserKeys, [])

    const paid = createDeps(
      sessionFixture({
        ...unpaid.store.session,
        payment_status: "paid",
      })
    )
    const paidResult = await deliverPaidRegistrationEmails("cs_test_123", paid.deps)

    assert.equal(paidResult.skipped, false)
    assert.equal(paidResult.incomplete, false)
    assert.equal(paid.opsKeys.length, 1)
    assert.equal(paid.purchaserKeys.length, 1)
    assert.equal(paid.store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.equal(
      paid.store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY],
      EMAIL_SENT_VALUE
    )
  })

  it("does not send while a delayed payment is still unpaid", async () => {
    const { deps, opsKeys, purchaserKeys } = createDeps(
      sessionFixture({ payment_status: "unpaid" })
    )

    const result = await deliverPaidRegistrationEmails("cs_test_123", deps)

    assert.equal(result.skipped, true)
    assert.deepEqual(opsKeys, [])
    assert.deepEqual(purchaserKeys, [])
  })

  it("treats a missing PATI_OPS_EMAIL as incomplete, still sends the purchaser email, and retries only ops", async () => {
    const first = createDeps(sessionFixture(), {
      sendOps: async () => {
        throw new Error("PATI_OPS_EMAIL is missing or invalid")
      },
    })

    const firstResult = await deliverPaidRegistrationEmails("cs_test_123", first.deps)

    assert.equal(firstResult.incomplete, true)
    assert.equal(firstResult.opsAttempted, true)
    assert.equal(firstResult.purchaserAttempted, true)
    assert.notEqual(first.store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.equal(first.store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.deepEqual(first.purchaserKeys, [purchaserIdempotencyKey("cs_test_123")])

    const retry = createDeps(first.store.session)
    const retryResult = await deliverPaidRegistrationEmails("cs_test_123", retry.deps)

    assert.equal(retryResult.incomplete, false)
    assert.equal(retryResult.opsAttempted, true)
    assert.equal(retryResult.purchaserAttempted, false)
    assert.deepEqual(retry.opsKeys, [opsIdempotencyKey("cs_test_123")])
    assert.deepEqual(retry.purchaserKeys, [])
    assert.equal(retry.store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.equal(retry.store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
  })

  it("treats a skipped ops notification as incomplete for a recognised paid journey", async () => {
    const { deps, store, purchaserKeys } = createDeps(sessionFixture(), {
      sendOps: async () => ({ skipped: true }),
    })

    const result = await deliverPaidRegistrationEmails("cs_test_123", deps)

    assert.equal(result.incomplete, true)
    assert.equal(result.opsAttempted, true)
    assert.equal(result.purchaserAttempted, true)
    assert.notEqual(store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.equal(store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.deepEqual(purchaserKeys, [purchaserIdempotencyKey("cs_test_123")])
  })

  it("returns incomplete when metadata cannot be updated after a successful send", async () => {
    const { deps, store, opsKeys, purchaserKeys } = createDeps(sessionFixture(), {
      failMetadataUpdateOn: "always",
    })

    const result = await deliverPaidRegistrationEmails("cs_test_123", deps)

    assert.equal(result.incomplete, true)
    assert.equal(opsKeys.length, 1)
    assert.equal(purchaserKeys.length, 1)
    assert.notEqual(store.session.metadata?.[OPS_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
    assert.notEqual(store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)
  })
})

function paidSession(
  metadata: Record<string, string>,
  overrides: Partial<Stripe.Checkout.Session> = {}
) {
  return sessionFixture({
    metadata,
    ...overrides,
  })
}

describe("programme access emails", () => {
  it("keeps Autumn participant recordings for an explicit techSavvy payment", () => {
    for (const journey of ["parent", "schoolParent", "organisationUser"] as const) {
      const email = formatPurchaserEmail(
        paidSession({
          journey,
          programme: OFFERING_TECH_SAVVY,
          email: "parent@example.com",
          name: "Niamh",
          schoolName: "Scoil Mhuire",
          organisationName: "PATI Org",
        })
      )
      assert.ok(email)
      assert.match(email.text, /WEBINAR RECORDINGS/)
      assert.match(email.text, /29 SEPTEMBER/)
      assert.equal(email.text.includes(JANUARY_ACCESS_NOTICE), false)
    }
  })

  it("sends January participant confirmation without Autumn recordings", () => {
    for (const journey of ["parent", "schoolParent", "organisationUser"] as const) {
      const first = formatPurchaserEmail(
        paidSession({
          journey,
          programme: OFFERING_AGE_OF_AI,
          email: "parent@example.com",
          name: "Niamh",
          schoolName: "Scoil Mhuire",
          organisationName: "PATI Org",
        })
      )
      const second = formatPurchaserEmail(
        paidSession({
          journey,
          programme: OFFERING_AGE_OF_AI,
          email: "parent@example.com",
          name: "Niamh",
          schoolName: "Scoil Mhuire",
          organisationName: "PATI Org",
        })
      )
      assert.ok(first)
      assert.equal(first.text, second?.text)
      assert.match(first.text, /Thank you for registering for Parenting in the Age of AI/)
      assert.equal(first.text.includes("us06web.zoom.us"), false)
      assert.equal(first.text.includes("Passcode:"), false)
      assert.equal(first.text.includes("29 SEPTEMBER"), false)
      assert.equal(first.text.includes("Age of Technology"), false)
      assert.equal(first.text.includes("Parenting the Tech-Savvy Child"), false)
    }
  })

  it("does not send participant access when programme is missing or unknown", () => {
    const missing = formatPurchaserEmail(
      paidSession({ journey: "parent", email: "parent@example.com" })
    )
    const unknown = formatPurchaserEmail(
      paidSession({
        journey: "schoolParent",
        programme: "spring2027",
        email: "parent@example.com",
      })
    )
    const unexpected = formatPurchaserEmail(
      paidSession({
        journey: "organisation",
        programme: OFFERING_AGE_OF_AI,
        email: "org@example.com",
        organisationName: "PATI Org",
      })
    )

    assert.equal(missing, null)
    assert.equal(unknown, null)
    assert.equal(unexpected, null)
    assert.equal(decideProgrammeAccess(paidSession({ journey: "parent" })).action, "withhold")
    assert.equal(
      decideProgrammeAccess(
        paidSession({ journey: "parent", programme: "not-a-programme" })
      ).action,
      "withhold"
    )
  })

  it("maps legacy Stripe identifiers to the existing school and school-parent emails", async () => {
    const renewal = await normaliseCheckoutSession(
      paidSession(
        { email: "school@example.com", schoolName: "Scoil Mhuire" },
        { payment_link: null }
      ),
      async () =>
        [
          { price: { id: LEGACY_SCHOOL_RENEWAL_PRICE } },
        ] as Stripe.LineItem[]
    )
    assert.equal(renewal.metadata?.offering, OFFERING_ANNUAL_ACCESS)
    assert.equal(renewal.metadata?.programme, undefined)
    assert.equal(renewal.metadata?.journey, "school")
    const renewalEmail = formatPurchaserEmail(renewal)
    assert.ok(renewalEmail)
    assert.match(renewalEmail.text, /annual/)
    assert.match(renewalEmail.text, /€499\.95/)
    assert.equal(renewalEmail.text.includes("us06web.zoom.us"), false)

    const linkedParent = await normaliseCheckoutSession(
      paidSession(
        { email: "parent@example.com", name: "Niamh" },
        { payment_link: LEGACY_SCHOOL_PARENT_PAYMENT_LINK }
      ),
      async () => []
    )
    assert.equal(linkedParent.metadata?.offering, OFFERING_TECH_SAVVY)
    assert.equal(linkedParent.metadata?.journey, "schoolParent")
    const linkedEmail = formatPurchaserEmail(linkedParent)
    assert.ok(linkedEmail)
    assert.match(linkedEmail.text, /WEBINAR RECORDINGS/)
    assert.equal(linkedEmail.text.includes(JANUARY_ACCESS_NOTICE), false)
  })

  it("keeps the January teacher email free of Autumn access material", () => {
    const email = formatJanuaryTeacherAccessEmail({
      firstName: "Aoife",
      schoolName: "Scoil Mhuire",
    })
    assert.equal(email.text.includes(JANUARY_ACCESS_NOTICE), true)
    assert.equal(email.text.includes("us06web.zoom.us"), false)
    assert.equal(email.text.includes("Passcode:"), false)
    assert.equal(email.text.includes("29 SEPTEMBER"), false)
  })

  it("fails closed when a January Stripe price is missing", () => {
    const previous = process.env.STRIPE_PRICE_AI_PARENT
    delete process.env.STRIPE_PRICE_AI_PARENT
    assert.throws(
      () => getPriceIdForJourney("parent", OFFERING_AGE_OF_AI),
      MissingOfferingPriceError
    )
    if (previous === undefined) {
      delete process.env.STRIPE_PRICE_AI_PARENT
    } else {
      process.env.STRIPE_PRICE_AI_PARENT = previous
    }
  })

  it("records annual school and organisation registrations as annualAccess", async () => {
    await withPriceEnv(
      {
        STRIPE_PRICE_SCHOOL: "price_school",
        STRIPE_PRICE_ORGANISATION: "price_organisation",
      },
      async () => {
        const school = await normaliseCheckoutSession(
          paidSession(
            {
              email: "school@example.com",
              schoolName: "Scoil Mhuire",
              contactName: "Maeve",
            },
            { amount_total: 49995 }
          ),
          async () => lineItem("price_school")
        )
        assert.equal(school.metadata?.offering, OFFERING_ANNUAL_ACCESS)
        assert.equal(school.metadata?.journey, "school")
        const schoolEmail = formatPurchaserEmail(school)
        assert.ok(schoolEmail)
        assert.match(schoolEmail.text, /€499\.95/)
        assert.match(schoolEmail.text, /Parenting the Tech-Savvy Child/)
        assert.match(schoolEmail.text, /Parenting in the Age of AI/)
        assert.equal(schoolEmail.text.includes("us06web.zoom.us"), false)
        assert.match(formatOpsEmail(school).text, /Offering: annualAccess/)
        assert.match(formatOpsEmail(school).text, /Journey: school/)
        assert.equal(schoolEmail.text.includes("€199.95"), false)
        assert.equal(schoolEmail.text.includes("/register/ai/school"), false)
        assert.equal(formatOpsEmail(school).text.includes("€199.95"), false)
        assert.equal(
          /\/register\/ai\/school(?!-)/.test(formatOpsEmail(school).text),
          false
        )

        const organisation = await normaliseCheckoutSession(
          paidSession(
            {
              email: "org@example.com",
              organisationName: "PATI Org",
              contactName: "Cian",
            },
            { amount_total: 99995 }
          ),
          async () => lineItem("price_organisation")
        )
        assert.equal(organisation.metadata?.offering, OFFERING_ANNUAL_ACCESS)
        assert.equal(organisation.metadata?.journey, "organisation")
        const organisationEmail = formatPurchaserEmail(organisation)
        assert.ok(organisationEmail)
        assert.match(organisationEmail.text, /€999\.95/)
        assert.match(organisationEmail.text, /Parenting the Tech-Savvy Child/)
        assert.match(organisationEmail.text, /Parenting in the Age of AI/)
        assert.match(formatOpsEmail(organisation).text, /Offering: annualAccess/)

        const schoolCheckout = checkoutRequestSchema.parse({
          journey: "school",
          offering: OFFERING_ANNUAL_ACCESS,
          schoolName: "Scoil Mhuire",
          contactName: "Maeve",
          role: "Principal",
          email: "school@example.com",
          phone: "010000000",
          termsAccepted: true,
        })
        assert.equal(toStripeMetadata(schoolCheckout).offering, OFFERING_ANNUAL_ACCESS)
        assert.equal(getPriceIdForJourney("school", OFFERING_ANNUAL_ACCESS), "price_school")
        assert.equal(
          getPriceIdForJourney("organisation", OFFERING_ANNUAL_ACCESS),
          "price_organisation"
        )
      }
    )
  })

  it("infers an offering from each known Autumn price when metadata is missing", async () => {
    const cases = [
      {
        env: { STRIPE_PRICE_PARENT: "price_parent" },
        priceId: "price_parent",
        offering: OFFERING_TECH_SAVVY,
        journey: "parent",
        recordings: true,
      },
      {
        env: { STRIPE_PRICE_SCHOOL_PARENT: "price_school_parent" },
        priceId: "price_school_parent",
        offering: OFFERING_TECH_SAVVY,
        journey: "schoolParent",
        recordings: true,
      },
      {
        env: { STRIPE_PRICE_ORGANISATION_USER: "price_organisation_user" },
        priceId: "price_organisation_user",
        offering: OFFERING_TECH_SAVVY,
        journey: "organisationUser",
        recordings: true,
      },
      {
        env: { STRIPE_PRICE_SCHOOL: "price_school" },
        priceId: "price_school",
        offering: OFFERING_ANNUAL_ACCESS,
        journey: "school",
        recordings: false,
      },
      {
        env: { STRIPE_PRICE_ORGANISATION: "price_organisation" },
        priceId: "price_organisation",
        offering: OFFERING_ANNUAL_ACCESS,
        journey: "organisation",
        recordings: false,
      },
      {
        env: {},
        priceId: LEGACY_SCHOOL_RENEWAL_PRICE,
        offering: OFFERING_ANNUAL_ACCESS,
        journey: "school",
        recordings: false,
      },
    ] as const

    for (const item of cases) {
      await withPriceEnv(item.env, async () => {
        const session = await normaliseCheckoutSession(
          paidSession(
            { email: "buyer@example.com", name: "Niamh", schoolName: "Scoil Mhuire" },
            { amount_total: 1495, metadata: { email: "buyer@example.com" } }
          ),
          async () => lineItem(item.priceId)
        )
        assert.equal(session.metadata?.offering, item.offering)
        assert.equal(session.metadata?.journey, item.journey)
        const email = formatPurchaserEmail(session)
        assert.ok(email)
        assert.equal(email.text.includes("WEBINAR RECORDINGS"), item.recordings)
        assert.equal(email.text.includes(JANUARY_ACCESS_NOTICE), false)
      })
    }

    await withPriceEnv({}, async () => {
      const linkedParent = await normaliseCheckoutSession(
        paidSession(
          { email: "parent@example.com", name: "Niamh" },
          { amount_total: 1495, payment_link: LEGACY_SCHOOL_PARENT_PAYMENT_LINK }
        ),
        async () => []
      )
      assert.equal(linkedParent.metadata?.offering, OFFERING_TECH_SAVVY)
      assert.equal(linkedParent.metadata?.journey, "schoolParent")
      const email = formatPurchaserEmail(linkedParent)
      assert.ok(email)
      assert.match(email.text, /WEBINAR RECORDINGS/)
    })
  })

  it("does not infer an offering from an unknown price or from the amount paid", async () => {
    await withPriceEnv({ STRIPE_PRICE_SCHOOL: "price_school" }, async () => {
      const session = await normaliseCheckoutSession(
        paidSession(
          {
            journey: "school",
            programme: OFFERING_TECH_SAVVY,
            email: "school@example.com",
            schoolName: "Scoil Mhuire",
          },
          { amount_total: 49995 }
        ),
        async () => lineItem("price_unknown")
      )
      assert.equal(session.metadata?.offering, undefined)
      assert.equal(session.metadata?.submittedOffering, OFFERING_TECH_SAVVY)
      assert.equal(formatPurchaserEmail(session), null)
      assert.equal(decideProgrammeAccess(session).action, "withhold")
      const opsEmail = formatOpsEmail(session).text
      assert.match(opsEmail, /No programme-access email was sent/)
      assert.match(opsEmail, /^Offering: missing$/m)
      assert.equal(/^Offering: annualAccess$/m.test(opsEmail), false)
      assert.equal(/^Offering: techSavvy$/m.test(opsEmail), false)
    })
  })

  it("resolves a January price to ageOfAi2027 and never sends Autumn recordings", async () => {
    await withPriceEnv(
      {
        STRIPE_PRICE_AI_PARENT: "price_ai_parent",
        STRIPE_PRICE_PARENT: "price_parent",
      },
      async () => {
        const session = await normaliseCheckoutSession(
          paidSession(
            {
              journey: "parent",
              programme: OFFERING_TECH_SAVVY,
              email: "parent@example.com",
              name: "Niamh",
            },
            { amount_total: 7995 }
          ),
          async () => lineItem("price_ai_parent")
        )
        assert.equal(session.metadata?.offering, OFFERING_AGE_OF_AI)
        assert.equal(session.metadata?.submittedOffering, OFFERING_TECH_SAVVY)
        const email = formatPurchaserEmail(session)
        assert.ok(email)
        assert.match(email.text, /Thank you for registering for Parenting in the Age of AI/)
        assert.equal(email.text.includes("WEBINAR RECORDINGS"), false)
        assert.equal(email.text.includes("29 SEPTEMBER"), false)
        assert.equal(email.text.includes("us06web.zoom.us"), false)

        const autumnPrice = await normaliseCheckoutSession(
          paidSession({
            journey: "parent",
            offering: OFFERING_AGE_OF_AI,
            email: "parent@example.com",
            name: "Niamh",
          }),
          async () => lineItem("price_parent")
        )
        assert.equal(autumnPrice.metadata?.offering, OFFERING_TECH_SAVVY)
        const autumnEmail = formatPurchaserEmail(autumnPrice)
        assert.ok(autumnEmail)
        assert.match(autumnEmail.text, /WEBINAR RECORDINGS/)
        assert.equal(autumnEmail.text.includes(JANUARY_ACCESS_NOTICE), false)
      }
    )

    await withPriceEnv(
      {
        STRIPE_PRICE_AI_PARENT: "price_shared",
        STRIPE_PRICE_PARENT: "price_shared",
      },
      async () => {
        const shared = await normaliseCheckoutSession(
          paidSession({
            journey: "parent",
            email: "parent@example.com",
            name: "Niamh",
          }),
          async () => lineItem("price_shared")
        )
        assert.equal(shared.metadata?.offering, undefined)
        assert.equal(formatPurchaserEmail(shared), null)
        assert.equal(decideProgrammeAccess(shared).action, "withhold")
      }
    )
  })

  it("rejects offering and journey combinations that are not permitted", () => {
    assert.equal(
      checkoutRequestSchema.safeParse({
        journey: "school",
        offering: OFFERING_TECH_SAVVY,
        schoolName: "Scoil Mhuire",
        contactName: "Maeve",
        role: "Principal",
        email: "school@example.com",
        phone: "010000000",
        termsAccepted: true,
      }).success,
      false
    )
    assert.equal(
      checkoutRequestSchema.safeParse({
        journey: "parent",
        offering: OFFERING_ANNUAL_ACCESS,
        name: "Niamh",
        email: "parent@example.com",
        termsAccepted: true,
      }).success,
      false
    )
    assert.equal(
      checkoutRequestSchema.safeParse({
        journey: "organisation",
        offering: OFFERING_AGE_OF_AI,
        organisationName: "PATI Org",
        contactName: "Cian",
        role: "Lead",
        email: "org@example.com",
        phone: "010000000",
        termsAccepted: true,
      }).success,
      false
    )
    assert.throws(
      () => getPriceIdForJourney("school", OFFERING_TECH_SAVVY),
      UnsupportedOfferingJourneyError
    )
    assert.throws(
      () => getPriceIdForJourney("parent", OFFERING_ANNUAL_ACCESS),
      UnsupportedOfferingJourneyError
    )
    assert.throws(
      () => getPriceIdForJourney("organisation", OFFERING_AGE_OF_AI),
      UnsupportedOfferingJourneyError
    )
    assert.equal(
      decideProgrammeAccess(
        paidSession({
          journey: "parent",
          offering: OFFERING_ANNUAL_ACCESS,
          email: "parent@example.com",
        })
      ).action,
      "withhold"
    )
    assert.equal(
      formatPurchaserEmail(
        paidSession({
          journey: "school",
          offering: OFFERING_TECH_SAVVY,
          email: "school@example.com",
          schoolName: "Scoil Mhuire",
        })
      ),
      null
    )
  })

  it("does not send a second programme email when the webhook is delivered twice", async () => {
    await withPriceEnv({ STRIPE_PRICE_AI_PARENT: "price_ai_parent" }, async () => {
      const texts: string[] = []
      const lineItems = lineItem("price_ai_parent")
      const first = createDeps(
        paidSession({
          journey: "parent",
          programme: OFFERING_TECH_SAVVY,
          email: "parent@example.com",
          name: "Niamh",
        }),
        {
          lineItems,
          sendPurchaser: async (session) => {
            const email = formatPurchaserEmail(session)
            assert.ok(email)
            texts.push(email.text)
          },
        }
      )

      await deliverPaidRegistrationEmails("cs_test_123", first.deps)
      assert.equal(texts.length, 1)
      assert.match(texts[0], /Thank you for registering for Parenting in the Age of AI/)
      assert.equal(texts[0].includes("WEBINAR RECORDINGS"), false)
      assert.equal(first.store.session.metadata?.offering, OFFERING_AGE_OF_AI)
      assert.equal(first.store.session.metadata?.[PURCHASER_EMAIL_SENT_KEY], EMAIL_SENT_VALUE)

      const second = createDeps(first.store.session, {
        lineItems,
        sendPurchaser: async (session) => {
          const email = formatPurchaserEmail(session)
          assert.ok(email)
          texts.push(email.text)
        },
      })
      const result = await deliverPaidRegistrationEmails("cs_test_123", second.deps)

      assert.equal(result.purchaserAttempted, false)
      assert.equal(result.opsAttempted, false)
      assert.equal(texts.length, 1)
      assert.equal(second.store.session.metadata?.offering, OFFERING_AGE_OF_AI)
    })
  })

  it("sells January-only school access separately from annual school registration", async () => {
    const januarySchool = {
      journey: "school" as const,
      offering: OFFERING_AGE_OF_AI,
      schoolName: "Scoil Mhuire",
      contactName: "Maeve Brennan",
      role: "Principal",
      email: "school@example.com",
      phone: "010000000",
      county: "Cork",
      schoolRollNumber: "12345A",
      termsAccepted: true as const,
    }

    assert.equal(checkoutRequestSchema.safeParse(januarySchool).success, true)
    assert.equal(
      checkoutRequestSchema.safeParse({ ...januarySchool, schoolRollNumber: "" }).success,
      false
    )
    assert.equal(toStripeMetadata(checkoutRequestSchema.parse(januarySchool)).offering, OFFERING_AGE_OF_AI)
    assert.equal(toStripeMetadata(checkoutRequestSchema.parse(januarySchool)).journey, "school")
    assert.equal(januaryRegistrationPaths.school, "/register/ai/school")

    await withPriceEnv(
      {
        STRIPE_PRICE_AI_SCHOOL: "price_ai_school",
        STRIPE_PRICE_SCHOOL: "price_annual_school",
      },
      async () => {
        assert.equal(getPriceIdForJourney("school", OFFERING_AGE_OF_AI), "price_ai_school")
        assert.equal(getPriceIdForJourney("school", OFFERING_ANNUAL_ACCESS), "price_annual_school")
        assert.notEqual(
          getPriceIdForJourney("school", OFFERING_AGE_OF_AI),
          getPriceIdForJourney("school", OFFERING_ANNUAL_ACCESS)
        )

        const paid = await normaliseCheckoutSession(
          paidSession(
            {
              journey: "school",
              offering: OFFERING_ANNUAL_ACCESS,
              email: "school@example.com",
              schoolName: "Scoil Mhuire",
              contactName: "Maeve Brennan",
              county: "Cork",
              schoolRollNumber: "12345A",
            },
            {
              amount_total: 19995,
              customer_email: "school@example.com",
              payment_intent: "pi_january_school",
            }
          ),
          async () => lineItem("price_ai_school")
        )
        assert.equal(paid.metadata?.offering, OFFERING_AGE_OF_AI)
        assert.equal(paid.metadata?.journey, "school")
        assert.equal(paid.metadata?.submittedOffering, OFFERING_ANNUAL_ACCESS)

        const email = formatPurchaserEmail(paid)
        assert.ok(email)
        assert.match(email.text, /Thank you for registering Scoil Mhuire for Parenting in the Age of AI/)
        assert.match(
          email.text,
          /Your €199\.95 registration enables your school to offer the January programme to its parent community/
        )
        assert.match(email.text, /Ready for an AI World/)
        assert.equal(email.text.includes("Raising AI-Ready Children"), false)
        assert.match(email.text, /Parents from your school can register individually for €14\.95/)
        assert.match(email.text, /eligible teachers can participate free of charge/)
        assert.match(email.text, /\/register\/ai\/school-parent/)
        assert.match(email.text, /\/register\/ai\/teacher/)
        assert.match(email.text, /PATI will provide school communications materials/)
        assert.match(email.text, /Tuesday, 19 January 2027/)
        assert.match(email.text, /Tuesday, 26 January 2027/)
        assert.match(email.text, /Tuesday, 2 February 2027/)
        assert.match(email.text, /Tuesday, 9 February 2027/)
        assert.match(email.text, /Zoom access will be sent directly to registered participants/)
        assert.equal(email.text.includes("us06web.zoom.us"), false)
        assert.equal(email.text.includes("Passcode:"), false)
        assert.equal(email.text.includes("29 SEPTEMBER"), false)
        assert.equal(email.text.includes("Age of Technology"), false)
        assert.equal(email.text.includes("Parenting the Tech-Savvy Child"), false)
        assert.equal(email.text.toLowerCase().includes("annual"), false)

        const ops = formatOpsEmail(paid).text
        assert.match(ops, /Offering: ageOfAi2027/)
        assert.match(ops, /Journey: school/)
        assert.match(ops, /Amount: €199\.95/)
        assert.match(ops, /School or organisation: Scoil Mhuire/)
        assert.match(ops, /School roll number: 12345A/)
        assert.match(ops, /County: Cork/)
        assert.match(ops, /Name: Maeve Brennan/)
        assert.match(ops, /Email: school@example.com/)
        assert.match(ops, /Stripe session: cs_test_123/)
        assert.match(ops, /Payment reference: pi_january_school/)
        assert.equal(ops.includes("WEBINAR RECORDINGS"), false)

        const annualPrice = await normaliseCheckoutSession(
          paidSession(
            {
              journey: "school",
              offering: OFFERING_AGE_OF_AI,
              email: "school@example.com",
              schoolName: "Scoil Mhuire",
              contactName: "Maeve Brennan",
            },
            { amount_total: 49995 }
          ),
          async () => lineItem("price_annual_school")
        )
        assert.equal(annualPrice.metadata?.offering, OFFERING_ANNUAL_ACCESS)
        const annualEmail = formatPurchaserEmail(annualPrice)
        assert.ok(annualEmail)
        assert.match(annualEmail.text, /€499\.95/)
        assert.equal(annualEmail.text.includes("€199.95"), false)

        const unknown = await normaliseCheckoutSession(
          paidSession(
            {
              journey: "school",
              offering: OFFERING_AGE_OF_AI,
              email: "school@example.com",
              schoolName: "Scoil Mhuire",
            },
            { amount_total: 19995 }
          ),
          async () => lineItem("price_unknown_school")
        )
        assert.equal(unknown.metadata?.offering, undefined)
        assert.equal(formatPurchaserEmail(unknown), null)
        assert.equal(decideProgrammeAccess(unknown).action, "withhold")
      }
    )

    const previous = process.env.STRIPE_PRICE_AI_SCHOOL
    delete process.env.STRIPE_PRICE_AI_SCHOOL
    try {
      assert.throws(
        () => getPriceIdForJourney("school", OFFERING_AGE_OF_AI),
        MissingOfferingPriceError
      )
      try {
        getPriceIdForJourney("school", OFFERING_AGE_OF_AI)
      } catch (error) {
        assert.ok(error instanceof MissingOfferingPriceError)
        assert.equal(
          unavailableOfferingMessage(error.journey),
          "School registration for Parenting in the Age of AI is not available yet."
        )
      }
    } finally {
      if (previous === undefined) {
        delete process.env.STRIPE_PRICE_AI_SCHOOL
      } else {
        process.env.STRIPE_PRICE_AI_SCHOOL = previous
      }
    }

    assert.match(januarySchoolSuccessBody("school@example.com"), /€199\.95/)
    assert.match(januarySchoolSuccessBody("school@example.com"), /school is registered for Parenting in the Age of AI/)
    assert.equal(januarySchoolSuccessBody("school@example.com").includes("annual"), false)
    assert.match(
      januarySchoolSuccessBody("school@example.com"),
      /enables your school to offer the January programme/
    )
  })

  it("names module 8 Ready for an AI World and keeps its description", () => {
    const module8 = aiProgramme.modules[7]
    assert.equal(module8.title, "Ready for an AI World")
    assert.equal(
      module8.description,
      "Preparing children to thrive in a world shaped by artificial intelligence. Building confidence, resilience, creativity, emotional intelligence and the human skills that technology cannot replace."
    )
    assert.equal(
      aiProgramme.sessions[3].modules,
      "Future of Work and Ready for an AI World"
    )
    assert.equal(JSON.stringify(aiProgramme).includes("Raising AI-Ready Children"), false)
  })

  it("records a January school invoice request without granting paid access", () => {
    const request = {
      schoolName: "Scoil Mhuire",
      contactName: "Maeve Brennan",
      role: "Principal",
      email: "school@example.com",
      phone: "010000000",
      county: "Cork",
      estimatedParents: "40",
      schoolRollNumber: "12345A",
      invoicingOrganisation: "Cork ETB",
      invoiceEmail: "accounts@example.com",
      purchaseOrderReference: "PO-19",
      termsAccepted: true as const,
      offering: OFFERING_AGE_OF_AI,
      journey: "school" as const,
      amount: JANUARY_SCHOOL_INVOICE_AMOUNT,
      requestType: INVOICE_REQUEST_TYPE,
    }
    assert.equal(aiSchoolInvoiceRequestSchema.safeParse(request).success, true)
    assert.equal(
      aiSchoolInvoiceRequestSchema.safeParse({
        ...request,
        offering: OFFERING_ANNUAL_ACCESS,
      }).success,
      false
    )
    assert.equal(
      aiSchoolInvoiceRequestSchema.safeParse({ ...request, schoolRollNumber: "" }).success,
      false
    )

    const messages = formatJanuarySchoolInvoiceRequestEmail(request)
    assert.equal(messages.confirmation.text.includes(JANUARY_SCHOOL_INVOICE_ACKNOWLEDGEMENT), true)
    assert.equal(messages.confirmation.text.includes("WEBINAR RECORDINGS"), false)
    assert.equal(messages.confirmation.text.includes("Passcode:"), false)
    assert.equal(messages.confirmation.text.includes("Your payment of"), false)
    assert.equal(messages.confirmation.text.includes("/register/ai/school-parent"), false)
    assert.match(messages.operations.text, /Offering: ageOfAi2027/)
    assert.match(messages.operations.text, /Journey: school/)
    assert.match(messages.operations.text, /Amount: €199\.95/)
    assert.match(messages.operations.text, /Request type: invoice/)
    assert.match(messages.operations.text, /School: Scoil Mhuire/)
    assert.match(messages.operations.text, /School roll number: 12345A/)
    assert.match(messages.operations.text, /Cork ETB/)
    assert.match(messages.operations.text, /accounts@example.com/)
    assert.match(messages.operations.text, /\/register\/ai\/school-parent/)
    assert.match(messages.operations.text, /\/register\/ai\/teacher/)
    assert.match(messages.operations.text, /After payment is confirmed manually/)
    assert.equal(messages.operations.text.includes("€499.95"), false)

    const annual = formatSchoolInvoiceRequestEmail({
      schoolName: "Scoil Mhuire",
      contactName: "Maeve Brennan",
      role: "Principal",
      email: "school@example.com",
      phone: "010000000",
      county: "Cork",
      estimatedParents: "40",
      invoicingOrganisation: "Cork ETB",
      invoiceEmail: "accounts@example.com",
      purchaseOrderReference: "PO-19",
    })
    assert.match(annual.confirmation.text, /€499\.95/)
    assert.match(annual.operations.text, /Offering: annualAccess/)
    assert.equal(annual.confirmation.text.includes(JANUARY_SCHOOL_INVOICE_ACKNOWLEDGEMENT), false)
  })

  it("keeps a repeated January school webhook on the same confirmation", async () => {
    await withPriceEnv({ STRIPE_PRICE_AI_SCHOOL: "price_ai_school" }, async () => {
      const texts: string[] = []
      const lineItems = lineItem("price_ai_school")
      const first = createDeps(
        paidSession(
          {
            journey: "school",
            offering: OFFERING_AGE_OF_AI,
            email: "school@example.com",
            schoolName: "Scoil Mhuire",
            contactName: "Maeve Brennan",
            schoolRollNumber: "12345A",
            county: "Cork",
          },
          { amount_total: 19995 }
        ),
        {
          lineItems,
          sendPurchaser: async (session) => {
            const email = formatPurchaserEmail(session)
            assert.ok(email)
            texts.push(email.text)
          },
        }
      )

      await deliverPaidRegistrationEmails("cs_test_123", first.deps)
      const second = createDeps(first.store.session, {
        lineItems,
        sendPurchaser: async (session) => {
          const email = formatPurchaserEmail(session)
          assert.ok(email)
          texts.push(email.text)
        },
      })
      const result = await deliverPaidRegistrationEmails("cs_test_123", second.deps)

      assert.equal(result.purchaserAttempted, false)
      assert.equal(texts.length, 1)
      assert.match(texts[0], /€199\.95/)
      assert.equal(texts[0].includes("WEBINAR RECORDINGS"), false)
      assert.equal(second.store.session.metadata?.offering, OFFERING_AGE_OF_AI)
      assert.equal(second.store.session.metadata?.journey, "school")
    })
  })
})

const PRICE_ENV_KEYS = [
  "STRIPE_PRICE_PARENT",
  "STRIPE_PRICE_SCHOOL_PARENT",
  "STRIPE_PRICE_ORGANISATION_USER",
  "STRIPE_PRICE_SCHOOL",
  "STRIPE_PRICE_ORGANISATION",
  "STRIPE_PRICE_AI_PARENT",
  "STRIPE_PRICE_AI_SCHOOL",
  "STRIPE_PRICE_AI_SCHOOL_PARENT",
  "STRIPE_PRICE_AI_ORGANISATION_USER",
] as const

describe("registration email override", () => {
  const overrideAddress = "preview-tests@example.com"
  const previousOverride = process.env.REGISTRATION_EMAIL_OVERRIDE_TO

  function customerSession() {
    return sessionFixture({
      metadata: {
        journey: "parent",
        offering: OFFERING_TECH_SAVVY,
        email: "parent@example.com",
      },
    })
  }

  function restoreOverride() {
    if (previousOverride === undefined) {
      delete process.env.REGISTRATION_EMAIL_OVERRIDE_TO
    } else {
      process.env.REGISTRATION_EMAIL_OVERRIDE_TO = previousOverride
    }
  }

  it("redirects the customer registration email and names the original recipient", () => {
    process.env.REGISTRATION_EMAIL_OVERRIDE_TO = overrideAddress
    try {
      const original = formatPurchaserEmail(customerSession())
      assert.ok(original)
      const delivered = applyRegistrationEmailOverride(original)

      assert.equal(delivered.to, overrideAddress)
      assert.notEqual(delivered.to, original.to)
      assert.equal(delivered.subject, `[PREVIEW TEST] ${original.subject}`)
      assert.match(delivered.text, /^This is a preview test email\./)
      assert.match(delivered.text, new RegExp(`Intended recipient: ${original.to}`))
      assert.equal(delivered.text.endsWith(original.text), true)
    } finally {
      restoreOverride()
    }
  })

  it("redirects the operations registration email and names the original recipient", () => {
    process.env.REGISTRATION_EMAIL_OVERRIDE_TO = overrideAddress
    try {
      const originalOps = formatOpsEmail(customerSession())
      const original = {
        to: "ops@example.com",
        subject: originalOps.subject,
        text: originalOps.text,
      }
      const delivered = applyRegistrationEmailOverride(original)

      assert.equal(delivered.to, overrideAddress)
      assert.notEqual(delivered.to, original.to)
      assert.equal(delivered.subject, `[PREVIEW TEST] ${original.subject}`)
      assert.match(delivered.text, /Intended recipient: ops@example.com/)
      assert.equal(delivered.text.includes("parent@example.com"), true)
      assert.equal(delivered.to.includes("parent@example.com"), false)
    } finally {
      restoreOverride()
    }
  })

  it("leaves registration emails unchanged when the override is absent", () => {
    delete process.env.REGISTRATION_EMAIL_OVERRIDE_TO
    try {
      const original = formatPurchaserEmail(customerSession())
      assert.ok(original)
      const delivered = applyRegistrationEmailOverride(original)

      assert.equal(delivered, original)
      assert.equal(delivered.to, "parent@example.com")
      assert.equal(delivered.subject.startsWith("[PREVIEW TEST]"), false)
      assert.equal(delivered.text.includes("preview test email"), false)
    } finally {
      restoreOverride()
    }
  })
})

describe("stripe webhook configuration", () => {
  const secretKey = "sk_test_safety"
  const webhookSecret = "whsec_safety"

  function request(body: string, signature?: string) {
    return new Request("https://pati.example/api/webhooks/stripe", {
      method: "POST",
      headers: signature ? { "stripe-signature": signature } : undefined,
      body,
    })
  }

  it("returns 503 and does not create a Stripe client when the secret key is missing", async () => {
    let created = 0
    let delivered = 0
    const result = await handleStripeWebhook(request("{}"), {
      secretKey: undefined,
      webhookSecret,
      createStripe: () => {
        created += 1
        return new Stripe(secretKey)
      },
      deliver: async () => {
        delivered += 1
        return { incomplete: false }
      },
    })

    assert.equal(result.status, 503)
    assert.deepEqual(result.body, { error: "Webhook is not configured." })
    assert.equal(created, 0)
    assert.equal(delivered, 0)
    assert.equal(JSON.stringify(result.body).includes(secretKey), false)
    assert.equal(JSON.stringify(result.body).includes(webhookSecret), false)
  })

  it("returns 503 and does not create a Stripe client when the webhook secret is missing", async () => {
    let created = 0
    let delivered = 0
    const result = await handleStripeWebhook(request("{}", "t=1,v1=invalid"), {
      secretKey,
      webhookSecret: "  ",
      createStripe: () => {
        created += 1
        return new Stripe(secretKey)
      },
      deliver: async () => {
        delivered += 1
        return { incomplete: false }
      },
    })

    assert.equal(result.status, 503)
    assert.deepEqual(result.body, { error: "Webhook is not configured." })
    assert.equal(created, 0)
    assert.equal(delivered, 0)
  })

  it("rejects an invalid webhook signature before processing the event", async () => {
    let delivered = 0
    const result = await handleStripeWebhook(request("{}", "t=1,v1=invalid"), {
      secretKey,
      webhookSecret,
      createStripe: (key) => new Stripe(key),
      deliver: async () => {
        delivered += 1
        return { incomplete: false }
      },
    })

    assert.equal(result.status, 400)
    assert.deepEqual(result.body, { error: "Invalid signature." })
    assert.equal(delivered, 0)
    assert.equal(JSON.stringify(result.body).includes(webhookSecret), false)
  })

  it("does not send duplicate emails for a repeated valid event", async () => {
    const payload = JSON.stringify({
      id: "evt_safety_duplicate",
      object: "event",
      type: "checkout.session.completed",
      data: {
        object: {
          id: "cs_test_123",
          object: "checkout.session",
        },
      },
    })
    const signature = await new Stripe(secretKey).webhooks.generateTestHeaderStringAsync({
      payload,
      secret: webhookSecret,
    })
    const { deps, opsKeys, purchaserKeys } = createDeps(sessionFixture())
    const dependencies = {
      secretKey,
      webhookSecret,
      createStripe: (key: string) => new Stripe(key),
      deliver: (stripe: Stripe, sessionId: string) =>
        deliverPaidRegistrationEmails(sessionId, deps),
    }

    const first = await handleStripeWebhook(request(payload, signature), dependencies)
    const second = await handleStripeWebhook(request(payload, signature), dependencies)

    assert.equal(first.status, 200)
    assert.deepEqual(first.body, { received: true })
    assert.equal(second.status, 200)
    assert.deepEqual(second.body, { received: true })
    assert.deepEqual(opsKeys, [opsIdempotencyKey("cs_test_123")])
    assert.deepEqual(purchaserKeys, [purchaserIdempotencyKey("cs_test_123")])
  })
})

function lineItem(priceId: string) {
  return [{ price: { id: priceId } } as Stripe.LineItem]
}

async function withPriceEnv(
  values: Partial<Record<(typeof PRICE_ENV_KEYS)[number], string>>,
  run: () => Promise<void>
) {
  const previous = Object.fromEntries(
    PRICE_ENV_KEYS.map((key) => [key, process.env[key]])
  ) as Record<string, string | undefined>

  for (const key of PRICE_ENV_KEYS) {
    const value = values[key]
    if (value === undefined) {
      delete process.env[key]
    } else {
      process.env[key] = value
    }
  }

  try {
    await run()
  } finally {
    for (const key of PRICE_ENV_KEYS) {
      const value = previous[key]
      if (value === undefined) {
        delete process.env[key]
      } else {
        process.env[key] = value
      }
    }
  }
}
