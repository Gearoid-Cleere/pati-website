import Stripe from "stripe"
import { getSiteUrl } from "@/lib/stripe"

function metadata(session: Stripe.Checkout.Session) {
  return session.metadata || {}
}

function customerEmail(session: Stripe.Checkout.Session) {
  return (
    session.customer_email ||
    session.customer_details?.email ||
    metadata(session).email ||
    ""
  )
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

function organisationUserRegistrationUrl() {
  return `${getSiteUrl().replace(/\/$/, "")}/register/organisation-user`
}

const PATI_ZOOM_REGISTRATION_URL =
  "https://us06web.zoom.us/webinar/register/WN_AwOM9lhVRpeJZxFS0b1GIA"

export function formatTeacherAccessEmail(data: {
  firstName: string
  schoolName: string
}) {
  return {
    subject: "Your PATI Parent Programme Access",
    text: [
      `Hello ${data.firstName},`,
      "",
      "Your access to the PATI Parent Programme is free because you are a member of staff at a participating PATI school.",
      "",
      "Please register for the live PATI Parent Programme using the Zoom link below:",
      "",
      PATI_ZOOM_REGISTRATION_URL,
      "",
      "Once registered, Zoom will send your joining details directly.",
      "",
      "AUTUMN 2026 PROGRAMME DATES",
      "",
      "Tuesday 29 September 2026 - 7.00pm",
      "Tuesday 6 October 2026 - 6.00pm (please note the earlier start)",
      "Tuesday 13 October 2026 - 7.00pm",
      "Tuesday 20 October 2026 - 7.00pm",
      "",
      "Each session runs for approximately one hour and recordings will be available.",
      "",
      `You are registered through ${data.schoolName}.`,
      "",
      "Kind regards,",
      "The PATI Team",
      "Parenting and Technology Institute (PATI)",
    ].join("\n"),
  }
}

export function formatTeacherOpsEmail(data: {
  firstName: string
  lastName: string
  email: string
  schoolName: string
  schoolRollNumber: string
  county: string
  role: string
}) {
  const name = `${data.firstName} ${data.lastName}`

  return {
    subject: `Free teacher registration: ${name}`,
    text: [
      "A free PATI teacher/staff registration was submitted.",
      "",
      `Name: ${name}`,
      `Email: ${data.email}`,
      `School: ${data.schoolName}`,
      `School roll number: ${data.schoolRollNumber}`,
      `County: ${data.county}`,
      `Role: ${data.role}`,
    ].join("\n"),
  }
}

export function formatSchoolInvoiceRequestEmail(data: {
  schoolName: string
  contactName: string
  role: string
  email: string
  phone: string
  county: string
  estimatedParents: string
  invoicingOrganisation: string
  invoiceEmail: string
  purchaseOrderReference: string
}) {
  const invoiceRecipient = data.invoiceEmail || data.email

  return {
    confirmation: {
      to: data.email,
      subject: "Your PATI school invoice request",
      text: [
        `Thank you for registering ${data.schoolName} with PATI and requesting an invoice.`,
        "",
        "Your invoice request has been received. No payment is required at this stage.",
        "",
        `PATI will send the invoice to ${invoiceRecipient}. Once the invoice process is complete, we will provide your school's parent and teacher registration information.`,
        "",
        "PATI will be in touch shortly if any further information is needed.",
        "",
        "Kind regards,",
        "The PATI Team",
        "Parenting and Technology Institute (PATI)",
      ].join("\n"),
    },
    operations: {
      subject: `School invoice requested: ${data.schoolName}`,
      text: [
        "A PATI school registration requested payment by invoice.",
        "",
        `School: ${data.schoolName}`,
        `Contact: ${data.contactName}`,
        `Role: ${data.role}`,
        `Registration email: ${data.email}`,
        `Phone: ${data.phone}`,
        `County / address: ${data.county || "not provided"}`,
        `Estimated parents: ${data.estimatedParents || "not provided"}`,
        `ETB / invoicing organisation: ${data.invoicingOrganisation || "not provided"}`,
        `Invoice email: ${data.invoiceEmail || "same as registration email"}`,
        `Purchase order / reference: ${data.purchaseOrderReference || "not provided"}`,
        "",
        "No payment has been taken. PATI should send the invoice and then provide the school's parent and teacher registration information.",
      ].join("\n"),
    },
  }
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

  if (journey === "organisation") {
    lines.push(
      "",
      "Organisation user registration/payment link:",
      organisationUserRegistrationUrl()
    )
  }

  lines.push(
    "",
    "This email is operational only. Stripe remains the system of record."
  )

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
      subject: "Your PATI Parent Programme access",
      text: [
        "Thank you for registering for the Parenting and Technology Institute (PATI) Parent Programme.",
        "",
        `Your payment of ${amount} has been received. Stripe will also send a separate payment receipt to this email address.`,
        "",
        "NEXT STEP – REGISTER FOR YOUR LIVE WEBINAR ACCESS",
        "",
        "Please use the link below to register for the live PATI Parent Programme:",
        "",
        PATI_ZOOM_REGISTRATION_URL,
        "",
        "You only need to register once. Zoom will then send your personal joining details and reminders for the live sessions.",
        "",
        "AUTUMN 2026 PROGRAMME DATES",
        "",
        "Tuesday 29 September – 7.00pm",
        "Tuesday 6 October – 6.00pm (please note the earlier start time)",
        "Tuesday 13 October – 7.00pm",
        "Tuesday 20 October – 7.00pm",
        "",
        "Each session runs for approximately one hour and is presented live by Dr Richard Hogan.",
        "",
        "Please keep this email for your records.",
        "",
        "We look forward to welcoming you to the programme.",
        "",
        "Kind regards,",
        "The PATI Team",
        "Parenting and Technology Institute (PATI)",
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
    const organisationUserLink = organisationUserRegistrationUrl()

    return {
      to,
      subject: "Your PATI organisation registration",
      text: [
        `Thank you for registering ${organisationName} with PATI.`,
        "",
        `Your organisation registration payment of ${amount} has been received. Stripe will also send a payment receipt to this email address.`,
        "",
        "EMPLOYEE AND PARENT REGISTRATION",
        "",
        "Please forward the registration/payment link below to employees and parents associated with your organisation who wish to participate in the PATI Parent Programme:",
        "",
        organisationUserLink,
        "",
        "Employees and parents use this common PATI link to register and pay €24.95 individually through Stripe.",
        "",
        "As part of registration, they enter the name of the organisation they are associated with so PATI can match their registration to your organisation.",
        "",
        "PATI will be in touch with programme details in due course.",
        "",
        "If you have any questions, please contact PATI.",
      ].join("\n"),
    }
  }

  if (journey === "schoolParent") {
    const county = details.schoolCounty

    const schoolLine = county
      ? `You registered through ${schoolName} (${county}).`
      : `You registered through ${schoolName}.`

    return {
      to,
      subject: "Your PATI Parent Programme access",
      text: [
        "Thank you for registering for the Parenting and Technology Institute (PATI) Parent Programme.",
        "",
        `Your payment of ${amount} has been received. Stripe will also send a separate payment receipt to this email address.`,
        "",
        schoolLine,
        "",
        "NEXT STEP – REGISTER FOR YOUR LIVE WEBINAR ACCESS",
        "",
        "Please use the link below to register for the live PATI Parent Programme:",
        "",
        PATI_ZOOM_REGISTRATION_URL,
        "",
        "You only need to register once. Zoom will then send your personal joining details and reminders for the live sessions.",
        "",
        "AUTUMN 2026 PROGRAMME DATES",
        "",
        "Tuesday 29 September – 7.00pm",
        "Tuesday 6 October – 6.00pm (please note the earlier start time)",
        "Tuesday 13 October – 7.00pm",
        "Tuesday 20 October – 7.00pm",
        "",
        "Each session runs for approximately one hour and is presented live by Dr Richard Hogan.",
        "",
        "Please keep this email for your records.",
        "",
        "We look forward to welcoming you to the programme.",
        "",
        "Kind regards,",
        "The PATI Team",
        "Parenting and Technology Institute (PATI)",
      ].join("\n"),
    }
  }

  if (journey === "organisationUser") {
    return {
      to,
      subject: "Your PATI Parent Programme access",
      text: [
        "Thank you for registering for the Parenting and Technology Institute (PATI) Parent Programme.",
        "",
        `Your payment of ${amount} has been received. Stripe will also send a separate payment receipt to this email address.`,
        "",
        `You registered through ${organisationName}.`,
        "",
        "NEXT STEP – REGISTER FOR YOUR LIVE WEBINAR ACCESS",
        "",
        "Please use the link below to register for the live PATI Parent Programme:",
        "",
        PATI_ZOOM_REGISTRATION_URL,
        "",
        "You only need to register once. Zoom will then send your personal joining details and reminders for the live sessions.",
        "",
        "AUTUMN 2026 PROGRAMME DATES",
        "",
        "Tuesday 29 September – 7.00pm",
        "Tuesday 6 October – 6.00pm (please note the earlier start time)",
        "Tuesday 13 October – 7.00pm",
        "Tuesday 20 October – 7.00pm",
        "",
        "Each session runs for approximately one hour and is presented live by Dr Richard Hogan.",
        "",
        "Please keep this email for your records.",
        "",
        "We look forward to welcoming you to the programme.",
        "",
        "Kind regards,",
        "The PATI Team",
        "Parenting and Technology Institute (PATI)",
      ].join("\n"),
    }
  }

  return null
}
