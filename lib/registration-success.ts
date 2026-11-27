import type Stripe from "stripe"
import { januarySchoolSuccessBody } from "./emails.ts"
import {
  OFFERING_AGE_OF_AI,
  OFFERING_ANNUAL_ACCESS,
  readRegistrationOffering,
} from "./programme-id.ts"

export const stripePaymentReceiptNote =
  "Stripe will also send a payment receipt to the email used at checkout."

export function confirmationCopy(session: Stripe.Checkout.Session) {
  const journey = session.metadata?.journey
  const offering = readRegistrationOffering(session.metadata)
  const email =
    session.customer_email ||
    session.metadata?.email ||
    "the email address provided"

  if (offering === OFFERING_AGE_OF_AI && journey === "school") {
    return {
      title: "School registration received",
      body: januarySchoolSuccessBody(email),
    }
  }

  if (
    offering === OFFERING_AGE_OF_AI &&
    (journey === "parent" ||
      journey === "schoolParent" ||
      journey === "organisationUser")
  ) {
    return {
      title: "Registration received",
      body: `Thank you. You are registered for Parenting in the Age of AI, beginning Tuesday, 19 January 2027. The programme will be delivered live online over four Tuesday evenings. Your Zoom registration and access information will be sent separately before the programme begins. We will email confirmation to ${email}.`,
    }
  }

  if (offering === OFFERING_ANNUAL_ACCESS && journey === "school") {
    return {
      title: "Annual school registration received",
      body: [
        "Thank you. Your €499.95 annual school registration with PATI has been received. It includes Parenting the Tech-Savvy Child and Parenting in the Age of AI.",
        "PATI will send the relevant school-parent and teacher registration links separately. Parents register individually for €14.95, and eligible teachers at your school can participate free of charge.",
        `We will email confirmation to ${email}.`,
      ].join("\n\n"),
    }
  }

  if (offering === OFFERING_ANNUAL_ACCESS && journey === "organisation") {
    return {
      title: "Annual organisation registration received",
      body: [
        "Thank you. Your €999.95 annual organisation registration with PATI has been received. It includes Parenting the Tech-Savvy Child and Parenting in the Age of AI.",
        "PATI will send the relevant participant registration link separately. Participants register individually for €24.95.",
        `We will email confirmation to ${email}.`,
      ].join("\n\n"),
    }
  }

  if (journey === "schoolParent") {
    const schoolName = session.metadata?.schoolName
    const schoolLine = schoolName
      ? ` You identified your school as ${schoolName}.`
      : ""

    return {
      title: "Registration received",
      body: `Thank you. Your payment has been received.${schoolLine} We will email programme details to ${email}.`,
    }
  }

  if (journey === "organisationUser") {
    const organisationName = session.metadata?.organisationName
    const organisationLine = organisationName
      ? ` You identified your organisation as ${organisationName}.`
      : ""

    return {
      title: "Registration received",
      body: `Thank you. Your payment has been received.${organisationLine} We will email programme details to ${email}.`,
    }
  }

  return {
    title: "Registration received",
    body: `Thank you. Your payment has been received. We will email programme details to ${email}.`,
  }
}
