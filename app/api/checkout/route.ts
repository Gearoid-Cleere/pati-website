import { NextResponse } from "next/server"
import { checkoutRequestSchema, toStripeMetadata } from "@/lib/registration"
import { verifyOrganisationUserToken } from "@/lib/organisation-user-link"
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
    const metadata = toStripeMetadata(data)
    const siteUrl = getSiteUrl()
    let cancelUrl = `${siteUrl}/register/cancelled?journey=${data.journey}`

    if (data.journey === "organisationUser") {
      const verified = verifyOrganisationUserToken(data.organisationUserCode)

      if (!verified) {
        return NextResponse.json(
          { error: "This registration link is not valid." },
          { status: 400 }
        )
      }

      metadata.organisationName = verified.organisationName
      cancelUrl = `${siteUrl}/register/cancelled?journey=organisationUser&code=${encodeURIComponent(data.organisationUserCode)}`
    }

    const stripe = getStripe()
    const priceId = getPriceIdForJourney(data.journey)

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
    console.error("Checkout session creation failed:", error)

    return NextResponse.json(
      { error: "Unable to start checkout. Please try again or contact us." },
      { status: 500 }
    )
  }
}
