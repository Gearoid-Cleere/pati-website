import Stripe from "stripe"
import { getSiteUrl } from "@/lib/stripe"

function metadata(session: Stripe.Checkout.Session) {
  return session.metadata || {}
}

function customerEmail(session: Stripe.Checkout.Session) {
  return session.customer_email || metadata(session).email || ""
}

function formatAmount(session: Stripe.Checkout.Session) {
  if (session.amount_total == null) {
    return "the amount paid"
  }

  const amount = (session.amount_total / 100).toFixed(2)
  const currency = (session.currency || "eur").toLowerCase()

  if (currency === "eur") {
    return `€${amount}`
  }

  return `${amount} ${currency.toUpperCase()}`
}

function schoolParentRegistrationUrl() {
  return `${getSiteUrl().replace(/\/$/, "")}/register/school-parent`
}

export function formatOpsEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const journey = details.journey || "unknown"
  const name = details.name || details.contactName || ""
  const schoolName = details.schoolName || ""
  const organisationName = details.organisationName || ""

  let subject = `PATI registration paid (${journey})`

  if (journey === "parent") {
    subject = name ? `Independent parent paid: ${name}` : "Independent parent paid"
  } else if (journey === "school") {
    subject = schoolName ? `School paid: ${schoolName}` : "School paid"
  } else if (journey === "organisation") {
    subject = organisationName
      ? `Organisation paid: ${organisationName}`
      : "Organisation paid"
  } else if (journey === "schoolParent") {
    subject = schoolName
      ? `School parent paid: ${name || "parent"} — ${schoolName}`
      : `School parent paid: ${name || "parent"}`
  } else if (journey === "organisationUser") {
    const userName = [details.firstName, details.lastName].filter(Boolean).join(" ")
    subject = organisationName
      ? `Organisation user paid: ${userName || "user"} — ${organisationName}`
      : `Organisation user paid: ${userName || "user"}`
  }

  const lines = [
    "A PATI website registration payment was completed.",
    "",
    `Journey: ${journey}`,
    `Stripe session: ${session.id}`,
    `Customer email: ${customerEmail(session) || "not provided"}`,
    `Amount: ${formatAmount(session)}`,
    `Payment status: ${session.payment_status}`,
    "",
    "Registration details:",
  ]

  for (const [key, value] of Object.entries(details)) {
    if (value) {
      lines.push(`- ${key}: ${value}`)
    }
  }

  if (journey === "school") {
    lines.push(
      "",
      "School parent registration/payment link to send if needed:",
      schoolParentRegistrationUrl()
    )
  }

  lines.push("", "This email is operational only. Stripe remains the system of record.")

  return {
    subject,
    text: lines.join("\n"),
  }
}

export function formatPurchaserEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const journey = details.journey
  const to = customerEmail(session)

  if (!to || !journey) {
    return null
  }

  const amount = formatAmount(session)
  const schoolName = details.schoolName || "your school"
  const organisationName = details.organisationName || "your organisation"

  if (journey === "parent") {
    return {
      to,
      subject: "Your PATI registration",
      text: [
        "Thank you for registering with PATI.",
        "",
        `Your payment of ${amount} has been received. Stripe will also send a payment receipt to this email address.`,
        "",
        "We will email programme details and next steps to this address shortly.",
        "",
        "If you have any questions, please contact PATI.",
      ].join("\n"),
    }
  }

  if (journey === "school") {
    const parentLink = schoolParentRegistrationUrl()

    return {
      to,
      subject: "Your PATI school registration",
      text: [
        `Thank you for registering ${schoolName} with PATI.`,
        "",
        `Your school registration payment of ${amount} has been received. Stripe will also send a payment receipt to this email address.`,
        "",
        "This is the registration/payment link for parents associated with your registered school. Please forward this same link to your parents:",
        "",
        parentLink,
        "",
        "Parents use this common PATI link to register and pay €14.95 individually through Stripe. As part of registration they identify which school they are associated with, so PATI can match their payment to your school.",
        "",
        "PATI will be in touch with programme details in due course.",
      ].join("\n"),
    }
  }

  if (journey === "organisation") {
    return {
      to,
      subject: "Your PATI organisation registration",
      text: [
        `Thank you for registering ${organisationName} with PATI.`,
        "",
        `Your organisation registration payment of ${amount} has been received. Stripe will also send a payment receipt to this email address.`,
        "",
        "PATI will contact you at this email address regarding user and token access. Organisation access is arranged directly with PATI; there is no employee self-checkout on the website.",
        "",
        "If you have any questions, please contact PATI.",
      ].join("\n"),
    }
  }

  if (journey === "schoolParent") {
    const county = details.schoolCounty
    const schoolLine = county
      ? `You identified your school as ${schoolName} (${county}).`
      : `You identified your school as ${schoolName}.`

    return {
      to,
      subject: "Your PATI registration",
      text: [
        "Thank you for registering with PATI.",
        "",
        `Your payment of ${amount} has been received. Stripe will also send a payment receipt to this email address.`,
        "",
        schoolLine,
        "",
        "We will email programme details and next steps to this address shortly.",
        "",
        "If you have any questions, please contact PATI.",
      ].join("\n"),
    }
  }

  if (journey === "organisationUser") {
    return {
      to,
      subject: "Your PATI registration",
      text: [
        "Thank you for registering with PATI.",
        "",
        `Your payment of ${amount} has been received.`,
        "",
        `You registered through ${organisationName}.`,
        "",
        "We will send programme access details and joining information to this email address.",
        "",
        "Stripe will also send a separate payment receipt.",
        "",
        "If you have any questions, please contact PATI.",
      ].join("\n"),
    }
  }

  return null
}
