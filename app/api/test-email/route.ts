import { NextResponse } from "next/server"
import { Resend } from "resend"
import Stripe from "stripe"
import { formatPurchaserEmail } from "@/lib/emails"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

// Temporary controlled diagnostic. Remove this route after testing.
// Configure PATI_TEST_EMAIL_SECRET as a strong random value in Vercel.
// Configure PATI_OPS_EMAIL to the verified internal recipient address.
export async function POST(request: Request) {
  const configuredSecret = process.env.PATI_TEST_EMAIL_SECRET_V2
  const suppliedSecret = request.headers.get("x-pati-test-secret")

  if (!configuredSecret || !suppliedSecret || suppliedSecret !== configuredSecret) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }

  const apiKey = process.env.RESEND_API_KEY
  const opsEmail = process.env.PATI_OPS_EMAIL
  const from = process.env.RESEND_FROM_EMAIL
  if (!apiKey || !opsEmail || !from) {
    return NextResponse.json({ error: "Test email configuration incomplete" }, { status: 503 })
  }

  // Synthetic, paid-looking session used ONLY to render the existing email.
  // No Stripe API call, checkout, payment or webhook is involved.
  const session = {
    id: "cs_pati_diagnostic_no_payment",
    object: "checkout.session",
    mode: "payment",
    payment_status: "paid",
    amount_total: 895,
    currency: "eur",
    customer_details: { email: opsEmail, name: "PATI Operations Test" },
    customer_email: opsEmail,
    metadata: { journey: "schoolParent" },
  } as unknown as Stripe.Checkout.Session

  const formatted = formatPurchaserEmail(session)
  if (!formatted) {
    return NextResponse.json({ error: "Could not render school-parent email" }, { status: 500 })
  }

  const resend = new Resend(apiKey)
  const { data, error } = await resend.emails.send({
    from,
    to: opsEmail, // Deliberately ignore formatted.to to prevent sending to parents.
    subject: `[CONTROL TEST — NO PAYMENT] ${formatted.subject}`,
    text: `CONTROL TEST ONLY — No payment has been taken.\n\n${formatted.text}`,
  })

  if (error) {
    console.error("PATI controlled test email failed", error)
    return NextResponse.json({ error: "Email delivery request failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true, resendId: data?.id })
}
