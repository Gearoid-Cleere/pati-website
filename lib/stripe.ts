import Stripe from "stripe"
import {
  OFFERING_AGE_OF_AI,
  OFFERING_ANNUAL_ACCESS,
  OFFERING_TECH_SAVVY,
  isValidOfferingJourney,
  type RegistrationOfferingId,
} from "./programme-id.ts"
import type { Journey } from "./registration.ts"

export class MissingOfferingPriceError extends Error {
  readonly journey: Journey

  constructor(offering: RegistrationOfferingId, journey: Journey) {
    super(`Stripe price is not configured for ${offering} ${journey}`)
    this.name = "MissingOfferingPriceError"
    this.journey = journey
  }
}

export function unavailableOfferingMessage(journey: Journey) {
  if (journey === "school") {
    return "School registration for Parenting in the Age of AI is not available yet."
  }

  return "Payment for Parenting in the Age of AI is not available yet. Please contact PATI."
}

export class UnsupportedOfferingJourneyError extends Error {
  constructor(offering: RegistrationOfferingId, journey: Journey) {
    super(`No checkout is configured for ${offering} ${journey}`)
    this.name = "UnsupportedOfferingJourneyError"
  }
}

export function getStripe() {
  const secretKey = process.env.STRIPE_SECRET_KEY

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is not configured")
  }

  return new Stripe(secretKey)
}

export function getPriceIdForJourney(
  journey: Journey,
  offering: RegistrationOfferingId
) {
  if (!isValidOfferingJourney(offering, journey)) {
    throw new UnsupportedOfferingJourneyError(offering, journey)
  }

  if (offering === OFFERING_AGE_OF_AI) {
    const januaryPrices: Partial<Record<Journey, string | undefined>> = {
      parent: process.env.STRIPE_PRICE_AI_PARENT,
      school: process.env.STRIPE_PRICE_AI_SCHOOL,
      schoolParent: process.env.STRIPE_PRICE_AI_SCHOOL_PARENT,
      organisationUser: process.env.STRIPE_PRICE_AI_ORGANISATION_USER,
    }
    const priceId = januaryPrices[journey]

    if (!priceId) {
      throw new MissingOfferingPriceError(offering, journey)
    }

    return priceId
  }

  if (offering === OFFERING_ANNUAL_ACCESS) {
    const annualPrices: Partial<Record<Journey, string | undefined>> = {
      school: process.env.STRIPE_PRICE_SCHOOL,
      organisation: process.env.STRIPE_PRICE_ORGANISATION,
    }
    const priceId = annualPrices[journey]

    if (!priceId) {
      throw new Error(`Stripe price is not configured for ${journey}`)
    }

    return priceId
  }

  if (offering !== OFFERING_TECH_SAVVY) {
    throw new UnsupportedOfferingJourneyError(offering, journey)
  }

  const priceIds: Partial<Record<Journey, string | undefined>> = {
    parent: process.env.STRIPE_PRICE_PARENT,
    schoolParent: process.env.STRIPE_PRICE_SCHOOL_PARENT,
    organisationUser: process.env.STRIPE_PRICE_ORGANISATION_USER,
  }
  const priceId = priceIds[journey]

  if (!priceId) {
    throw new Error(`Stripe price is not configured for ${journey}`)
  }

  return priceId
}

export function getSiteUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
}
