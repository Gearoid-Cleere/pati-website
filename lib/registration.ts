import { z } from "zod"

export const journeys = [
  "parent",
  "school",
  "organisation",
  "schoolParent",
  "organisationUser",
] as const
export type Journey = (typeof journeys)[number]

const optionalText = z.string().trim().max(200).optional().or(z.literal(""))

export const parentCheckoutSchema = z.object({
  journey: z.literal("parent"),
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: optionalText,
  termsAccepted: z.literal(true),
})

export const schoolCheckoutSchema = z.object({
  journey: z.literal("school"),
  schoolName: z.string().trim().min(1).max(200),
  contactName: z.string().trim().min(1).max(200),
  role: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(50),
  county: optionalText,
  estimatedParents: optionalText,
  termsAccepted: z.literal(true),
})

export const organisationCheckoutSchema = z.object({
  journey: z.literal("organisation"),
  organisationName: z.string().trim().min(1).max(200),
  contactName: z.string().trim().min(1).max(200),
  role: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(50),
  estimatedUsers: optionalText,
  termsAccepted: z.literal(true),
})

export const schoolParentCheckoutSchema = z.object({
  journey: z.literal("schoolParent"),
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: optionalText,
  schoolName: z.string().trim().min(1).max(200),
  schoolCounty: optionalText,
  termsAccepted: z.literal(true),
})

export const organisationUserCheckoutSchema = z.object({
  journey: z.literal("organisationUser"),
  firstName: z.string().trim().min(1).max(200),
  lastName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  organisationUserCode: z.string().trim().min(1).max(800),
  termsAccepted: z.literal(true),
})

export const checkoutRequestSchema = z.discriminatedUnion("journey", [
  parentCheckoutSchema,
  schoolCheckoutSchema,
  organisationCheckoutSchema,
  schoolParentCheckoutSchema,
  organisationUserCheckoutSchema,
])

export type CheckoutRequest = z.infer<typeof checkoutRequestSchema>

function metadataValue(value: string | boolean | undefined) {
  if (value === undefined || value === "") {
    return undefined
  }

  return String(value).slice(0, 500)
}

export function toStripeMetadata(data: CheckoutRequest) {
  const metadata: Record<string, string> = {
    journey: data.journey,
  }

  for (const [key, value] of Object.entries(data)) {
    if (key === "termsAccepted") {
      metadata.termsAccepted = "true"
      continue
    }

    if (key === "organisationUserCode") {
      continue
    }

    const nextValue = metadataValue(value as string | boolean | undefined)
    if (nextValue) {
      metadata[key] = nextValue
    }
  }

  return metadata
}
