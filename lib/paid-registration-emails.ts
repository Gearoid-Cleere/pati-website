import type Stripe from "stripe"

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

export async function normaliseCheckoutSession(
  session: Stripe.Checkout.Session,
  listLineItems: DeliveryDependencies["listLineItems"]
): Promise<Stripe.Checkout.Session> {
  const lineItems = await listLineItems(session.id)

  if (lineItems.some((lineItem) => lineItem.price?.id === LEGACY_SCHOOL_RENEWAL_PRICE)) {
    return {
      ...session,
      metadata: {
        ...(session.metadata || {}),
        journey: "school",
      },
    }
  }

  const paymentLink =
    typeof session.payment_link === "string"
      ? session.payment_link
      : session.payment_link?.id

  if (paymentLink !== LEGACY_SCHOOL_PARENT_PAYMENT_LINK) {
    return session
  }

  return {
    ...session,
    metadata: {
      ...(session.metadata || {}),
      journey: "schoolParent",
    },
  }
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
