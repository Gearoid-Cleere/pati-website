import Stripe from "stripe"

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured")
  }

  return new Stripe(secretKey)
}

export function getPriceIdForJourney(journey: "parent" | "school" | "organisation") {
  const priceIds = {
    parent: process.env.STRIPE_PRICE_PARENT,
    school: process.env.STRIPE_PRICE_SCHOOL,
    organisation: process.env.STRIPE_PRICE_ORGANISATION,
  } as const

  const priceId = priceIds[journey]

  if (!priceId) {
    throw new Error(`Stripe price is not configured for ${journey}`)
  }

  return priceId
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
}
