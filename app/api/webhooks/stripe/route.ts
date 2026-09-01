import { NextResponse } from "next/server"
import { Resend } from "resend"
import Stripe from "stripe"
import { getStripe } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

function formatOpsEmail(session: Stripe.Checkout.Session) {
  const metadata = session.metadata || {}
  const journey = metadata.journey || "unknown"
  const lines = [
    "A PATI website registration payment was completed.",
    "",
    `Journey: ${journey}`,
    `Stripe session: ${session.id}`,
    `Customer email: ${session.customer_email || metadata.email || "not provided"}`,
    `Amount total: ${session.amount_total ?? "unknown"} ${session.currency || ""}`.trim(),
    `Payment status: ${session.payment_status}`,
    "",
    "Registration details:",
  ]

  for (const [key, value] of Object.entries(metadata)) {
    if (value) {
      lines.push(`- ${key}: ${value}`)
    }
  }

  lines.push(
    "",
    "This email is operational only. Stripe remains the system of record."
  )

  return {
    subject: `PATI registration paid (${journey})`,
    text: lines.join("\n"),
  }
}

async function sendOpsNotification(session: Stripe.Checkout.Session) {
  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.PATI_OPS_EMAIL

  if (!apiKey || !to) {
    console.warn("Skipping PATI ops email: RESEND_API_KEY or PATI_OPS_EMAIL is not configured.")
    return
  }

  const resend = new Resend(apiKey)
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
  }

  return NextResponse.json({ received: true })
}
