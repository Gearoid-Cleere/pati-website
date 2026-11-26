import { NextResponse } from "next/server"
import { Resend } from "resend"
import Stripe from "stripe"
import {
  decideProgrammeAccess,
  formatOpsEmail,
  formatPurchaserEmail,
} from "@/lib/emails"
import {
  deliverPaidRegistrationEmails,
  isRecognisedPaidJourney,
  resolveOpsEmail,
  type DeliveryDependencies,
} from "@/lib/paid-registration-emails"
import { applyRegistrationEmailOverride } from "@/lib/registration-email"
import { handleStripeWebhook } from "@/lib/stripe-webhook"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return null
  }

  return new Resend(apiKey)
}

export async function sendOpsNotification(
  session: Stripe.Checkout.Session,
  idempotencyKey: string
) {
  const resend = getResendClient()
  const to = process.env.PATI_OPS_EMAIL

  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured")
  }

  let recipient: string
  try {
    recipient = resolveOpsEmail(to)
  } catch (error) {
    if (isRecognisedPaidJourney(session)) {
      throw error
    }

    console.warn("Skipping PATI ops email: PATI_OPS_EMAIL is not configured.")
    return { skipped: true }
  }

  const { subject, text } = formatOpsEmail(session)
  const message = applyRegistrationEmailOverride({
    to: recipient,
    subject,
    text,
  })

  const { error } = await resend.emails.send(
    {
      from: process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>",
      to: message.to,
      subject: message.subject,
      text: message.text,
    },
    { idempotencyKey }
  )

  if (error) {
    throw error
  }
}

export async function sendPurchaserEmail(
  session: Stripe.Checkout.Session,
  idempotencyKey: string
) {
  const resend = getResendClient()
  const message = formatPurchaserEmail(session)

  if (!resend) {
    throw new Error("RESEND_API_KEY is not configured")
  }

  if (!message) {
    const decision = decideProgrammeAccess(session)
    console.error(
      "PATI programme-access email withheld.",
      decision.action === "withhold" ? decision.reason : "No purchaser email was produced."
    )
    return { skipped: true }
  }

  const delivered = applyRegistrationEmailOverride(message)

  const { error } = await resend.emails.send(
    {
      from: process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>",
      to: delivered.to,
      subject: delivered.subject,
      text: delivered.text,
    },
    { idempotencyKey }
  )

  if (error) {
    throw error
  }
}

export function createDeliveryDependencies(stripe: Stripe): DeliveryDependencies {
  return {
    retrieveSession: (sessionId) => stripe.checkout.sessions.retrieve(sessionId),
    listLineItems: async (sessionId) => {
      const lineItems = await stripe.checkout.sessions.listLineItems(sessionId, {
        limit: 100,
      })
      return lineItems.data
    },
    updateSessionMetadata: async (sessionId, metadata) => {
      await stripe.checkout.sessions.update(sessionId, { metadata })
    },
    sendOpsEmail: sendOpsNotification,
    sendPurchaserEmail,
  }
}

export async function POST(request: Request) {
  const result = await handleStripeWebhook(request, {
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    createStripe: (secretKey) => new Stripe(secretKey),
    deliver: (stripe, sessionId) =>
      deliverPaidRegistrationEmails(
        sessionId,
        createDeliveryDependencies(stripe)
      ),
  })

  return NextResponse.json(result.body, { status: result.status })
}
