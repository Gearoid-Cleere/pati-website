import { NextResponse } from "next/server"
import { Resend } from "resend"
import {
  formatTeacherAccessEmail,
  formatTeacherOpsEmail,
} from "@/lib/emails"
import { teacherRegistrationSchema } from "@/lib/registration"

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
    const body = (await request.json()) as Record<string, unknown>

    if (body.website) {
      return NextResponse.json({ received: true })
    }

    if (isRateLimited(getClientIp(request))) {
      return NextResponse.json(
        { error: "Too many attempts. Please try again later." },
        { status: 429 }
      )
    }

    const parsed = teacherRegistrationSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      )
    }

    const apiKey = process.env.RESEND_API_KEY
    if (!apiKey) {
      console.error("Teacher registration email failed: RESEND_API_KEY is not configured.")
      return NextResponse.json(
        { error: "Unable to complete registration. Please try again later." },
        { status: 503 }
      )
    }

    const resend = new Resend(apiKey)
    const from = process.env.RESEND_FROM_EMAIL || "PATI <beth.t@example.com>"
    const accessEmail = formatTeacherAccessEmail(parsed.data)
    const opsEmail = formatTeacherOpsEmail(parsed.data)
    const operationsEmail = process.env.PATI_OPS_EMAIL

    const accessResult = await resend.emails.send({
      from,
      to: parsed.data.email,
      subject: accessEmail.subject,
      text: accessEmail.text,
    })

    if (accessResult.error) {
      throw accessResult.error
    }

    if (operationsEmail) {
      const opsResult = await resend.emails.send({
        from,
        to: operationsEmail,
        subject: opsEmail.subject,
        text: opsEmail.text,
      })

      if (opsResult.error) {
        throw opsResult.error
      }
    } else {
      console.warn(
        "Skipping PATI teacher registration ops email: PATI_OPS_EMAIL is not configured."
      )
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Teacher registration failed:", error)
    return NextResponse.json(
      { error: "Unable to complete registration. Please try again later." },
      { status: 500 }
    )
  }
}