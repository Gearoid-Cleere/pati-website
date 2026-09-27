import { NextResponse } from "next/server"
import { Resend } from "resend"
import { formatOrganisationInvoiceRequestEmail } from "@/lib/emails"
import { organisationInvoiceRequestSchema } from "@/lib/registration"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const submissions = new Map<string, number[]>()
const RATE_LIMIT = 5
const RATE_WINDOW_MS = 60 * 60 * 1000

function isRateLimited(ip: string) {
  const now = Date.now()
  const recent = (submissions.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_WINDOW_MS
  )

  if (recent.length >= RATE_LIMIT) {
    submissions.set(ip, recent)
    return true
  }

  recent.push(now)
  submissions.set(ip, recent)
  return false
}

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  )
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    if (body.website) {
      return NextResponse.json({ received: true })
    }

    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      )
    }

    const parsed = organisationInvoiceRequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Organisation invoice request failed: RESEND_API_KEY is not configured.")
      return NextResponse.json(
        { error: "Unable to complete the request. Please try again later." },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)
    const from = process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>"
    const messages = formatOrganisationInvoiceRequestEmail({
      ...parsed.data,
      purchaseOrderReference: parsed.data.purchaseOrderReference || "",
    })

    const confirmationResult = await resend.emails.send({
      from,
      to: messages.confirmation.to,
      subject: messages.confirmation.subject,
      text: messages.confirmation.text,
    })

    if (confirmationResult.error) {
      throw confirmationResult.error
    }

    const operationsEmail = process.env.PATI_OPS_EMAIL
    if (operationsEmail) {
      const operationsResult = await resend.emails.send({
        from,
        to: operationsEmail,
        subject: messages.operations.subject,
        text: messages.operations.text,
      })

      if (operationsResult.error) {
        throw operationsResult.error
      }
    } else {
      console.warn(
        "Skipping PATI organisation invoice ops email: PATI_OPS_EMAIL is not configured."
      )
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Organisation invoice request failed:", error)
    return NextResponse.json(
      { error: "Unable to complete the request. Please try again later." },
      { status: 500 }
    )
  }
}