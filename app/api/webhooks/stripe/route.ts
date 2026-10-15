import { NextResponse } from "next/server"
import { Resend } from "resend"
import Stripe from "stripe"
import { formatOpsEmail, formatPurchaserEmail } from "@/lib/emails"
import {
  deliverPaidRegistrationEmails,
  isPaidEmailEvent,
  type DeliveryDependencies,
} from "@/lib/paid-registration-emails"
import { getStripe } from "@/lib/stripe"

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

  if (!to) {
    console.warn("Skipping PATI ops email: PATI_OPS_EMAIL is not configured.")
    return { skipped: true }
  }

  const { subject, text } = formatOpsEmail(session)

  const { error } = await resend.emails.send(
    {
      from: process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>",
      to,
      subject,
      text,
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
    console.warn(
      "Skipping purchaser email: no recipient or unrecognised journey."
    )
    return { skipped: true }
  }

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
  const stripe = getStripe()
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = request.headers.get("stripe-signature")

  if (!webhookSecret || !signature) {
    return NextResponse.json(
      { error: "Webhook is not configured." },
      { status: 400 }
    )
  }

  const body = await request.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error)
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 })
  }

  if (!isPaidEmailEvent(event.type)) {
    return NextResponse.json({ received: true })
  }

  const rawSession = event.data.object as Stripe.Checkout.Session

  try {
    const result = await deliverPaidRegistrationEmails(
      rawSession.id,
      createDeliveryDependencies(stripe)
    )

    if (result.incomplete) {
      return NextResponse.json(
        { error: "Email delivery incomplete." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("PATI paid registration email delivery failed:", error)
    return NextResponse.json(
      { error: "Email delivery incomplete." },
      { status: 500 }
    )
  }

  return NextResponse.json({ received: true })
}
