import { NextResponse } from "next/server"
import { checkoutRequestSchema, toStripeMetadata } from "@/lib/registration"
import {
  MissingOfferingPriceError,
  UnsupportedOfferingJourneyError,
  getPriceIdForJourney,
  getSiteUrl,
  getStripe,
  unavailableOfferingMessage,
} from "@/lib/stripe"

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
    const metadata = toStripeMetadata(data)
    const siteUrl = getSiteUrl()
    const cancelUrl = `${siteUrl}/register/cancelled?journey=${data.journey}&offering=${data.offering}`
    const priceId = getPriceIdForJourney(data.journey, data.offering)
    const stripe = getStripe()

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
      cancel_url: cancelUrl,
      metadata,
    })

    if (!session.url) {
      return NextResponse.json(
        { error: "Unable to start checkout. Please try again or contact us." },
        { status: 500 }
      )
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    if (error instanceof MissingOfferingPriceError) {
      console.error(error.message)
      return NextResponse.json(
        { error: unavailableOfferingMessage(error.journey) },
        { status: 503 }
      )
    }

    if (error instanceof UnsupportedOfferingJourneyError) {
      console.error(error.message)
      return NextResponse.json(
        { error: "This registration cannot be completed online." },
        { status: 400 }
      )
    }

    console.error("Checkout session creation failed:", error)

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again or contact us." },
      { status: 500 }
    )
  }
}
