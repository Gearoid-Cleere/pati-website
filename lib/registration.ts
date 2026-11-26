import { z } from "zod"
import {
  OFFERING_AGE_OF_AI,
  isValidOfferingJourney,
  registrationOfferings,
} from "./programme-id.ts"

export const JANUARY_SCHOOL_INVOICE_AMOUNT = "€199.95"
export const INVOICE_REQUEST_TYPE = "invoice"

export const journeys = [
  "parent",
  "school",
  "organisation",
  "schoolParent",
  "organisationUser",
] as const

export type Journey = (typeof journeys)[number]

const optionalText = z.string().trim().max(200).optional().or(z.literal(""))
const offeringField = z.enum(registrationOfferings)

export const parentCheckoutSchema = z.object({
  journey: z.literal("parent"),
  offering: offeringField,
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: optionalText,
  termsAccepted: z.literal(true),
})

export const schoolCheckoutSchema = z.object({
  journey: z.literal("school"),
  offering: offeringField,
  schoolName: z.string().trim().min(1).max(200),
  contactName: z.string().trim().min(1).max(200),
  role: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(50),
  county: optionalText,
  estimatedParents: optionalText,
  schoolRollNumber: optionalText,
  termsAccepted: z.literal(true),
})

export const schoolInvoiceRequestSchema = z.object({
  schoolName: z.string().trim().min(1).max(200),
  contactName: z.string().trim().min(1).max(200),
  role: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(50),
  county: optionalText,
  estimatedParents: optionalText,
  invoicingOrganisation: optionalText,
  invoiceEmail: z.string().trim().email().max(200).optional().or(z.literal("")),
  purchaseOrderReference: optionalText,
  termsAccepted: z.literal(true),
})

export const aiSchoolInvoiceRequestSchema = schoolInvoiceRequestSchema.extend({
  schoolRollNumber: z.string().trim().min(1).max(50),
  offering: z.literal(OFFERING_AGE_OF_AI),
  journey: z.literal("school"),
  amount: z.literal(JANUARY_SCHOOL_INVOICE_AMOUNT),
  requestType: z.literal(INVOICE_REQUEST_TYPE),
})

export const organisationInvoiceRequestSchema = z.object({
  organisationName: z.string().trim().min(1).max(200),
  firstName: z.string().trim().min(1).max(200),
  lastName: z.string().trim().min(1).max(200),
  role: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(1).max(50),
  billingAddress: z.string().trim().min(1).max(1000),
  invoiceEmail: z.string().trim().email().max(200),
  purchaseOrderReference: optionalText,
  estimatedParticipants: z.string().trim().min(1).max(50),
  termsAccepted: z.literal(true),
})

export const organisationCheckoutSchema = z.object({
  journey: z.literal("organisation"),
  offering: offeringField,
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
  offering: offeringField,
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  phone: optionalText,
  schoolName: z.string().trim().min(1).max(200),
  schoolCounty: optionalText,
  termsAccepted: z.literal(true),
})

export const organisationUserCheckoutSchema = z.object({
  journey: z.literal("organisationUser"),
  offering: offeringField,
  firstName: z.string().trim().min(1).max(200),
  lastName: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(200),
  organisationName: z.string().trim().min(1).max(200),
  termsAccepted: z.literal(true),
})

export const teacherRegistrationSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  schoolName: z.string().trim().min(1).max(200),
  schoolRollNumber: z.string().trim().min(1).max(50),
  county: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(200),
  role: z.enum([
    "Principal",
    "Deputy Principal",
    "Teacher",
    "SNA",
    "Other School Staff",
  ]),
  staffConfirmation: z.literal(true),
  termsAccepted: z.literal(true),
})

export type TeacherRegistration = z.infer<typeof teacherRegistrationSchema>

export const checkoutRequestSchema = z
  .discriminatedUnion("journey", [
    parentCheckoutSchema,
    schoolCheckoutSchema,
    organisationCheckoutSchema,
    schoolParentCheckoutSchema,
    organisationUserCheckoutSchema,
  ])
  .superRefine((data, context) => {
    if (!isValidOfferingJourney(data.offering, data.journey)) {
      context.addIssue({
        code: "custom",
        path: ["offering"],
        message: "This registration cannot be completed online.",
      })
    }

    if (
      data.journey === "school" &&
      data.offering === OFFERING_AGE_OF_AI &&
      !data.schoolRollNumber?.trim()
    ) {
      context.addIssue({
        code: "custom",
        path: ["schoolRollNumber"],
        message: "Enter the school roll number.",
      })
    }
  })

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

    const nextValue = metadataValue(value as string | boolean | undefined)

    if (nextValue) {
      metadata[key] = nextValue
    }
  }

  return metadata
}
