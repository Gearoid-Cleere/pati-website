import assert from "node:assert/strict"
import { describe, it } from "node:test"
import type Stripe from "stripe"
import {
  EMAIL_SENT_VALUE,
  OPS_EMAIL_SENT_KEY,
  PURCHASER_EMAIL_SENT_KEY,
  deliverPaidRegistrationEmails,
  isPaidEmailEvent,
  opsIdempotencyKey,
  purchaserIdempotencyKey,
  type DeliveryDependencies,
} from "./paid-registration-emails.ts"

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
    listLineItems: async () => [],
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
