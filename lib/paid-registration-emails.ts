import type Stripe from "stripe"
import {
  OFFERING_AGE_OF_AI,
  OFFERING_ANNUAL_ACCESS,
  OFFERING_TECH_SAVVY,
  type RegistrationOfferingId,
} from "./programme-id.ts"
import type { Journey } from "./registration.ts"

/**
 * Paid-registration email delivery.
 *
 * Persistence is Stripe Checkout Session metadata (`patiPurchaserEmailSent` and
 * `patiOpsEmailSent`). That is durable across serverless instances, unlike
 * in-memory maps.
 *
 * CONCURRENCY LIMITATION: this is at-least-once, not exactly-once. Two webhook
 * deliveries that overlap can both read empty flags, both call Resend, and both
 * write metadata. Resend idempotency keys reduce duplicate *sends* when Resend
 * still holds the key, but they are not a distributed lock and are not
 * permanent. Do not claim exactly-once delivery.
 */

export const PURCHASER_EMAIL_SENT_KEY = "patiPurchaserEmailSent"
export const OPS_EMAIL_SENT_KEY = "patiOpsEmailSent"
export const EMAIL_SENT_VALUE = "true"

export const PAID_EMAIL_EVENT_TYPES = [
  "checkout.session.completed",
  "checkout.session.async_payment_succeeded",
] as const

export type PaidEmailEventType = (typeof PAID_EMAIL_EVENT_TYPES)[number]

export function isPaidEmailEvent(type: string): type is PaidEmailEventType {
  return (PAID_EMAIL_EVENT_TYPES as readonly string[]).includes(type)
}

export function isPaidSession(session: Stripe.Checkout.Session) {
  return session.payment_status === "paid"
}

export function hasDeliveryFlag(
  metadata: Stripe.Metadata | null | undefined,
  key: string
) {
  return metadata?.[key] === EMAIL_SENT_VALUE
}

export const LEGACY_SCHOOL_PARENT_PAYMENT_LINK =
  "plink_1SrYCvRpByHBjnWnzgUrdPYE"
export const LEGACY_SCHOOL_RENEWAL_PRICE = "price_1STL6xRpByHBjnWnrzFx3rQ4"

export const RECOGNISED_PAID_JOURNEYS = [
  "parent",
  "school",
  "organisation",
  "schoolParent",
  "organisationUser",
] as const

export type RecognisedPaidJourney = (typeof RECOGNISED_PAID_JOURNEYS)[number]

export function isRecognisedPaidJourney(session: Stripe.Checkout.Session) {
  const journey = session.metadata?.journey
  return (RECOGNISED_PAID_JOURNEYS as readonly string[]).includes(journey || "")
}

export function resolveOpsEmail(value: string | undefined | null) {
  const trimmed = value?.trim() ?? ""

  if (!isValidOpsEmail(trimmed)) {
    throw new Error("PATI_OPS_EMAIL is missing or invalid")
  }

  return trimmed
}

export function isValidOpsEmail(value: string) {
  if (!value || /\s/.test(value)) {
    return false
  }

  const at = value.indexOf("@")
  if (at <= 0 || at !== value.lastIndexOf("@")) {
    return false
  }

  const domain = value.slice(at + 1)
  return domain.includes(".") && !domain.startsWith(".") && !domain.endsWith(".")
}

export type DeliveryDependencies = {
  retrieveSession: (sessionId: string) => Promise<Stripe.Checkout.Session>
  listLineItems: (sessionId: string) => Promise<Stripe.LineItem[]>
  updateSessionMetadata: (
    sessionId: string,
    metadata: Record<string, string>
  ) => Promise<void>
  sendOpsEmail: (
    session: Stripe.Checkout.Session,
    idempotencyKey: string
  ) => Promise<{ skipped?: boolean } | void>
  sendPurchaserEmail: (
    session: Stripe.Checkout.Session,
    idempotencyKey: string
  ) => Promise<{ skipped?: boolean } | void>
}

export function purchaserIdempotencyKey(sessionId: string) {
  return `pati-purchaser-${sessionId}`
}

export function opsIdempotencyKey(sessionId: string) {
  return `pati-ops-${sessionId}`
}

export function mergeSessionMetadata(
  session: Stripe.Checkout.Session,
  patch: Record<string, string>
) {
  const next: Record<string, string> = {}

  for (const [key, value] of Object.entries(session.metadata || {})) {
    if (value != null && value !== "") {
      next[key] = value
    }
  }

  return { ...next, ...patch }
}

type ResolvedRegistration = {
  offering: RegistrationOfferingId
  journey: Journey
  source: string
}

type PriceCatalogEntry = ResolvedRegistration & { priceId: string }

function catalogEntry(
  priceId: string | undefined,
  offering: RegistrationOfferingId,
  journey: Journey,
  source: string
): PriceCatalogEntry | null {
  if (!priceId) {
    return null
  }

  return { priceId, offering, journey, source }
}

function knownPriceCatalog(): PriceCatalogEntry[] {
  return [
    catalogEntry(
      process.env.STRIPE_PRICE_AI_PARENT,
      OFFERING_AGE_OF_AI,
      "parent",
      "januaryParentPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_AI_SCHOOL_PARENT,
      OFFERING_AGE_OF_AI,
      "schoolParent",
      "januarySchoolParentPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_AI_ORGANISATION_USER,
      OFFERING_AGE_OF_AI,
      "organisationUser",
      "januaryOrganisationUserPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_AI_SCHOOL,
      OFFERING_AGE_OF_AI,
      "school",
      "januarySchoolPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_PARENT,
      OFFERING_TECH_SAVVY,
      "parent",
      "autumnParentPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_SCHOOL_PARENT,
      OFFERING_TECH_SAVVY,
      "schoolParent",
      "autumnSchoolParentPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_ORGANISATION_USER,
      OFFERING_TECH_SAVVY,
      "organisationUser",
      "autumnOrganisationUserPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_SCHOOL,
      OFFERING_ANNUAL_ACCESS,
      "school",
      "annualSchoolPrice"
    ),
    catalogEntry(
      process.env.STRIPE_PRICE_ORGANISATION,
      OFFERING_ANNUAL_ACCESS,
      "organisation",
      "annualOrganisationPrice"
    ),
    catalogEntry(
      LEGACY_SCHOOL_RENEWAL_PRICE,
      OFFERING_ANNUAL_ACCESS,
      "school",
      "legacySchoolRenewalPrice"
    ),
  ].filter((entry): entry is PriceCatalogEntry => entry !== null)
}

function sameRegistration(left: ResolvedRegistration, right: ResolvedRegistration) {
  return left.offering === right.offering && left.journey === right.journey
}

export function resolveRegistrationFromStripeIds(
  priceIds: string[],
  paymentLink: string | null | undefined
): ResolvedRegistration | null {
  const catalog = knownPriceCatalog()
  const matches: ResolvedRegistration[] = []

  for (const priceId of priceIds) {
    const hits = catalog.filter((entry) => entry.priceId === priceId)

    if (hits.length === 0) {
      continue
    }

    const januaryHits = hits.filter((entry) => entry.offering === OFFERING_AGE_OF_AI)
    const otherHits = hits.filter((entry) => entry.offering !== OFFERING_AGE_OF_AI)

    if (januaryHits.length > 0 && otherHits.length > 0) {
      return null
    }

    const chosen = januaryHits[0] || hits[0]
    if (!matches.some((match) => sameRegistration(match, chosen))) {
      matches.push(chosen)
    }
  }

  const januaryMatches = matches.filter((match) => match.offering === OFFERING_AGE_OF_AI)

  if (januaryMatches.length === 1) {
    return januaryMatches[0]
  }

  if (januaryMatches.length > 1) {
    return null
  }

  if (matches.length === 1) {
    return matches[0]
  }

  if (matches.length > 1) {
    return null
  }

  if (paymentLink === LEGACY_SCHOOL_PARENT_PAYMENT_LINK) {
    return {
      offering: OFFERING_TECH_SAVVY,
      journey: "schoolParent",
      source: "legacySchoolParentPaymentLink",
    }
  }

  return null
}

function paymentLinkId(session: Stripe.Checkout.Session) {
  if (typeof session.payment_link === "string") {
    return session.payment_link
  }

  return session.payment_link?.id
}

export async function normaliseCheckoutSession(
  session: Stripe.Checkout.Session,
  listLineItems: DeliveryDependencies["listLineItems"]
): Promise<Stripe.Checkout.Session> {
  const lineItems = await listLineItems(session.id)
  const priceIds = lineItems.flatMap((lineItem) =>
    lineItem.price?.id ? [lineItem.price.id] : []
  )
  const resolved = resolveRegistrationFromStripeIds(priceIds, paymentLinkId(session))
  const metadata: Record<string, string> = { ...(session.metadata || {}) }
  const submittedOffering = metadata.offering || metadata.programme

  if (!resolved) {
    if (submittedOffering) {
      metadata.submittedOffering = submittedOffering
    }

    delete metadata.offering
    delete metadata.programme
    metadata.offeringSource = "unconfirmedPrice"

    return { ...session, metadata }
  }

  if (submittedOffering && submittedOffering !== resolved.offering) {
    metadata.submittedOffering = submittedOffering
  }

  if (metadata.journey && metadata.journey !== resolved.journey) {
    metadata.submittedJourney = metadata.journey
  }

  delete metadata.programme
  metadata.journey = resolved.journey
  metadata.offering = resolved.offering
  metadata.offeringSource = resolved.source

  return { ...session, metadata }
}

export type DeliveryResult = {
  skipped: boolean
  incomplete: boolean
  purchaserAttempted: boolean
  opsAttempted: boolean
}

export async function deliverPaidRegistrationEmails(
  sessionId: string,
  deps: DeliveryDependencies
): Promise<DeliveryResult> {
  const retrieved = await deps.retrieveSession(sessionId)
  const session = await normaliseCheckoutSession(retrieved, deps.listLineItems)

  if (!isPaidSession(session)) {
    return {
      skipped: true,
      incomplete: false,
      purchaserAttempted: false,
      opsAttempted: false,
    }
  }

  let metadata = mergeSessionMetadata(session, {})
  const workingSession: Stripe.Checkout.Session = {
    ...session,
    metadata,
  }

  let incomplete = false
  let purchaserAttempted = false
  let opsAttempted = false

  if (!hasDeliveryFlag(metadata, OPS_EMAIL_SENT_KEY)) {
    opsAttempted = true
    try {
      const opsResult = await deps.sendOpsEmail(
        workingSession,
        opsIdempotencyKey(session.id)
      )
      if (!opsResult?.skipped) {
        metadata = { ...metadata, [OPS_EMAIL_SENT_KEY]: EMAIL_SENT_VALUE }
        workingSession.metadata = metadata
        try {
          await deps.updateSessionMetadata(session.id, metadata)
        } catch (error) {
          console.error(
            "PATI ops email sent but Checkout Session metadata could not be updated:",
            error
          )
          incomplete = true
        }
      } else if (isRecognisedPaidJourney(workingSession)) {
        console.error(
          "PATI ops notification skipped for a paid recognised registration journey."
        )
        incomplete = true
      }
    } catch (error) {
      console.error("PATI ops notification failed after successful payment:", error)
      incomplete = true
    }
  }

  if (!hasDeliveryFlag(metadata, PURCHASER_EMAIL_SENT_KEY)) {
    purchaserAttempted = true
    try {
      const purchaserResult = await deps.sendPurchaserEmail(
        workingSession,
        purchaserIdempotencyKey(session.id)
      )
      if (!purchaserResult?.skipped) {
        metadata = { ...metadata, [PURCHASER_EMAIL_SENT_KEY]: EMAIL_SENT_VALUE }
        workingSession.metadata = metadata
        try {
          await deps.updateSessionMetadata(session.id, metadata)
        } catch (error) {
          console.error(
            "Purchaser email sent but Checkout Session metadata could not be updated:",
            error
          )
          incomplete = true
        }
      }
    } catch (error) {
      console.error("Purchaser email failed after successful payment:", error)
      incomplete = true
    }
  }

  return {
    skipped: false,
    incomplete,
    purchaserAttempted,
    opsAttempted,
  }
}
