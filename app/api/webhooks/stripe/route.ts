import { NextResponse } from "next/server"
import { Resend } from "resend"
import Stripe from "stripe"
import { formatOpsEmail, formatPurchaserEmail } from "@/lib/emails"
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

async function sendOpsNotification(session: Stripe.Checkout.Session) {
  const resend = getResendClient()
  const to = process.env.PATI_OPS_EMAIL

  if (!resend || !to) {
    console.warn("Skipping PATI ops email: RESEND_API_KEY or PATI_OPS_EMAIL is not configured.")
    return
  }

  const { subject, text } = formatOpsEmail(session)

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>",
    to,
    subject,
    text,
  })

  if (error) {
    throw error
  }
}

async function sendPurchaserEmail(session: Stripe.Checkout.Session) {
  const resend = getResendClient()
  const message = formatPurchaserEmail(session)

  if (!resend) {
    console.warn("Skipping purchaser email: RESEND_API_KEY is not configured.")
    return
  }

  if (!message) {
    console.warn("Skipping purchaser email: no recipient or unrecognised journey.")
    return
  }

  const { error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>",
    to: message.to,
    subject: message.subject,
    text: message.text,
  })

  if (error) {
    throw error
  }
}

export async function POST(request: Request) {
  const stripe = getStripe()
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET
  const signature = request.headers.get("stripe-signature")

  if (!webhookSecret || !signature) {
    return NextResponse.json({ error: "Webhook is not configured." }, { status: 400 })
  }

  const body = await request.text()

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
  } catch (error) {
    console.error("Stripe webhook signature verification failed:", error)
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    try {
      await sendOpsNotification(session)
    } catch (error) {
      console.error("PATI ops notification failed after successful payment:", error)
    }

    try {
      await sendPurchaserEmail(session)
    } catch (error) {
      console.error("Purchaser email failed after successful payment:", error)
    }
  }

  return NextResponse.json({ received: true })
}
