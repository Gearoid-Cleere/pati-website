import { NextResponse } from "next/server"
import { checkoutRequestSchema, toStripeMetadata } from "@/lib/registration"
import { getPriceIdForJourney, getSiteUrl, getStripe } from "@/lib/stripe"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const parsed = checkoutRequestSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the form and try again." },
        { status: 400 }
      )
    }

    const data = parsed.data
    const stripe = getStripe()
    const priceId = getPriceIdForJourney(data.journey)
    const siteUrl = getSiteUrl()

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      customer_email: data.email,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${siteUrl}/register/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/register/cancelled?journey=${data.journey}`,
      metadata: toStripeMetadata(data),
    })

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to start checkout. Please try again or contact us." },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error("Checkout session creation failed:", error)

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again or contact us." },
      { status: 500 }
    )
  }
}
