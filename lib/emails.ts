import Stripe from "stripe"
import {
  OFFERING_AGE_OF_AI,
  OFFERING_ANNUAL_ACCESS,
  OFFERING_TECH_SAVVY,
  isRegistrationOfferingId,
  isValidOfferingJourney,
  readRegistrationOffering,
} from "./programme-id.ts"
import { aiProgramme } from "./programmes.ts"
import { getSiteUrl } from "./stripe.ts"

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

function aiSchoolParentRegistrationUrl() {
  return `${getSiteUrl().replace(/\/$/, "")}/register/ai/school-parent`
}

function aiTeacherRegistrationUrl() {
  return `${getSiteUrl().replace(/\/$/, "")}/register/ai/teacher`
}

function aiOrganisationUserRegistrationUrl() {
  return `${getSiteUrl().replace(/\/$/, "")}/register/ai/organisation-user`
}

export const JANUARY_ACCESS_NOTICE =
  "Thank you for registering for Parenting in the Age of AI, beginning Tuesday, 19 January 2027. The programme will be delivered live online over four Tuesday evenings. Your Zoom registration and access information will be sent separately before the programme begins."

export type AccessDecision =
  | {
      action: "techSavvyParticipant"
      journey: "parent" | "schoolParent" | "organisationUser"
    }
  | {
      action: "ageOfAiParticipant"
      journey: "parent" | "schoolParent" | "organisationUser"
    }
  | { action: "ageOfAiSchool"; journey: "school" }
  | { action: "annualInstitution"; journey: "school" | "organisation" }
  | { action: "withhold"; reason: string }

export function decideProgrammeAccess(
  session: Stripe.Checkout.Session
): AccessDecision {
  const details = metadata(session)
  const offering = readRegistrationOffering(details)
  const journey = details.journey

  if (!isValidOfferingJourney(offering, journey)) {
    const reason = !offering
      ? "Missing or unconfirmed offering. No programme-access email was sent."
      : !isRegistrationOfferingId(offering)
        ? `Unknown offering "${offering}". No programme-access email was sent.`
        : `Offering "${offering}" is not valid for journey "${journey || "missing"}". No programme-access email was sent.`

    return { action: "withhold", reason }
  }

  if (offering === OFFERING_TECH_SAVVY) {
    return {
      action: "techSavvyParticipant",
      journey: journey as "parent" | "schoolParent" | "organisationUser",
    }
  }

  if (offering === OFFERING_AGE_OF_AI) {
    if (journey === "school") {
      return { action: "ageOfAiSchool", journey: "school" }
    }

    return {
      action: "ageOfAiParticipant",
      journey: journey as "parent" | "schoolParent" | "organisationUser",
    }
  }

  if (offering === OFFERING_ANNUAL_ACCESS) {
    return {
      action: "annualInstitution",
      journey: journey as "school" | "organisation",
    }
  }

  return {
    action: "withhold",
    reason: `Unknown offering "${offering || "missing"}". No programme-access email was sent.`,
  }
}

const PATI_WEEK_1_RECORDING_URL =
  "https://us06web.zoom.us/rec/share/m9IspHoMVIGk1tPd3XL6Y__8u6_a2Dz2iL8K_1cVSaB0K4ZtZdGN_LalAt-Mlu1C.hpRrWi-X_LKzkNFA"

const PATI_WEEK_1_RECORDING_PASSCODE = "@a7*U0MK"

const PATI_WEEK_2_RECORDING_URL =
  "https://us06web.zoom.us/rec/share/5HjsqFp--vYCgViXixZGQQXxENIO4ehySFsQjq2qD34D1O0xmXGB-Lx88NFTuYIe.3SNOOiCGlcWxXTD3"

const PATI_WEEK_2_RECORDING_PASSCODE = "j$Z1iWdq"

const PATI_WEEK_3_RECORDING_URL =
  "https://us06web.zoom.us/rec/share/GmxUJgTkiIR8jT8zdOs6RKMibkE5r5En5oIlZKrOx9SUcjiRXD9GRQF1PfpOYtK7.cLlMXVEhBPj3h1qd"

const PATI_WEEK_3_RECORDING_PASSCODE = "e4?.%9kr"

const PATI_WEEK_4_RECORDING_URL =
  "https://us06web.zoom.us/rec/share/yWY0j3uUj2QuzwJeWcSwYfNqge3j3hoXYruJf90kGVDxwW8untt0xsi3TfTHdwQ.xQR-WIKp0rxAHCIi"

const PATI_WEEK_4_RECORDING_PASSCODE = "RE1=%*LS"

function patiRecordingLines(): string[] {
  return [
    "WEBINAR RECORDINGS – WEEKS 1, 2, 3 & 4",
    "",
    "You can catch up on all eight modules of the PATI Parent Programme using the recordings below.",
    "",
    "WEEK 1 – TUESDAY 29 SEPTEMBER",
    "Module 1 – Age of Technology",
    "Module 2 – Boundaries",
    "",
    PATI_WEEK_1_RECORDING_URL,
    `Passcode: ${PATI_WEEK_1_RECORDING_PASSCODE}`,
    "",
    "WEEK 2 – TUESDAY 13 OCTOBER",
    "Module 3 – Gaming",
    "Module 4 – Pornography",
    "",
    PATI_WEEK_2_RECORDING_URL,
    `Passcode: ${PATI_WEEK_2_RECORDING_PASSCODE}`,
    "",
    "WEEK 3 – TUESDAY 20 OCTOBER",
    "Module 5 – Bullying",
    "Module 6 – Social Media & Anxiety",
    "",
    PATI_WEEK_3_RECORDING_URL,
    `Passcode: ${PATI_WEEK_3_RECORDING_PASSCODE}`,
    "",
    "WEEK 4 – TUESDAY 3 NOVEMBER",
    "Module 7 – Technology & Devices",
    "Module 8 – Thriving as a Family",
    "",
    PATI_WEEK_4_RECORDING_URL,
    `Passcode: ${PATI_WEEK_4_RECORDING_PASSCODE}`,
    "",
  ]
}

function patiNextProgrammeLines(): string[] {
  return [
    "COMING IN JANUARY 2027 – PARENTING IN THE AGE OF AI",
    "",
    "Our next four-week programme begins Tuesday 19 January 2027. Further programme and registration details will follow.",
  ]
}

export function formatTeacherAccessEmail(data: {
  firstName: string
  schoolName: string
}) {
  return {
    subject: "Your Free PATI Programme Access – Recordings",
    text: [
      `Hello ${data.firstName},`,
      "",
      "Your access to the PATI Parent Programme is free because you are a member of staff at a participating PATI school.",
      "",
      ...patiRecordingLines(),
      ...patiNextProgrammeLines(),
      "",
      `You are registered through ${data.schoolName}.`,
      "",
      "We look forward to welcoming you to the programme.",
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

export const JANUARY_SCHOOL_INVOICE_ACKNOWLEDGEMENT =
  "Thank you for requesting an invoice for your school’s €199.95 registration for Parenting in the Age of AI. PATI will issue the invoice separately. Your school’s registration will be confirmed once the payment process has been completed."

export function formatJanuarySchoolInvoiceRequestEmail(data: {
  schoolName: string
  contactName: string
  role: string
  email: string
  phone: string
  county: string
  estimatedParents: string
  schoolRollNumber: string
  invoicingOrganisation: string
  invoiceEmail: string
  purchaseOrderReference: string
}) {
  return {
    confirmation: {
      to: data.email,
      subject: "Your Parenting in the Age of AI invoice request",
      text: [
        JANUARY_SCHOOL_INVOICE_ACKNOWLEDGEMENT,
        "",
        "Kind regards,",
        "The PATI Team",
        "Parenting and Technology Institute (PATI)",
      ].join("\n"),
    },
    operations: {
      subject: `January school invoice requested: ${data.schoolName}`,
      text: [
        "A school requested an invoice for Parenting in the Age of AI. No payment has been taken and no programme access has been granted.",
        "",
        `Offering: ${OFFERING_AGE_OF_AI}`,
        "Journey: school",
        "Amount: €199.95",
        "Request type: invoice",
        `School: ${data.schoolName}`,
        `School roll number: ${data.schoolRollNumber}`,
        `Contact: ${data.contactName}`,
        `Role: ${data.role}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `County: ${data.county || "not provided"}`,
        `Estimated parents: ${data.estimatedParents || "not provided"}`,
        `ETB / invoicing organisation: ${data.invoicingOrganisation || "not provided"}`,
        `Invoice email: ${data.invoiceEmail || "same as registration email"}`,
        `Purchase order / reference: ${data.purchaseOrderReference || "not provided"}`,
        "",
        "PATI will issue the €199.95 invoice. After payment is confirmed manually, provide these January links:",
        aiSchoolParentRegistrationUrl(),
        aiTeacherRegistrationUrl(),
      ].join("\n"),
    },
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
        `PATI will send the invoice to ${invoiceRecipient}. Annual school registration is €499.95 and includes both Parenting the Tech-Savvy Child and Parenting in the Age of AI. Once the invoice process is complete, PATI will send your January school-parent and teacher access links. School-linked parents register individually, and eligible teachers receive free access.`,
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
        `Offering: ${OFFERING_ANNUAL_ACCESS}`,
        "",
        "No payment has been taken. PATI should send the invoice and then provide the January school-parent and teacher access links. Annual registration includes both programmes.",
      ].join("\n"),
    },
  }
}

export function formatOrganisationInvoiceRequestEmail(data: {
  organisationName: string
  firstName: string
  lastName: string
  role: string
  email: string
  phone: string
  billingAddress: string
  invoiceEmail: string
  purchaseOrderReference: string
  estimatedParticipants: string
}) {
  return {
    confirmation: {
      to: data.email,
      subject: "Your PATI organisation invoice request",
      text: [
        `Thank you for registering ${data.organisationName} with PATI and requesting an invoice.`,
        "",
        "Your invoice request has been received. No payment is required at this stage.",
        "",
        `PATI will send the invoice to ${data.invoiceEmail}. Annual organisation registration is €999.95 and includes both Parenting the Tech-Savvy Child and Parenting in the Age of AI. Once the invoice process is complete, PATI will send your January participant link. Participating employees register individually.`,
        "",
        "PATI will be in touch shortly if any further information is needed.",
        "",
        "Kind regards,",
        "The PATI Team",
        "Parenting and Technology Institute (PATI)",
      ].join("\n"),
    },
    operations: {
      subject: `Organisation invoice requested: ${data.organisationName}`,
      text: [
        "A PATI organisation registration requested payment by invoice.",
        "",
        `Organisation: ${data.organisationName}`,
        `Contact first name: ${data.firstName}`,
        `Contact last name: ${data.lastName}`,
        `Role / job title: ${data.role}`,
        `Contact email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Billing address: ${data.billingAddress}`,
        `Invoice email: ${data.invoiceEmail}`,
        `PO / reference: ${data.purchaseOrderReference || "not provided"}`,
        `Estimated participating employees / parents: ${data.estimatedParticipants}`,
        `Offering: ${OFFERING_ANNUAL_ACCESS}`,
        "",
        "No payment has been taken. PATI should send the invoice and then provide the January participant link. Annual registration includes both programmes.",
      ].join("\n"),
    },
  }
}

function registrationName(details: Stripe.Metadata) {
  return (
    details.name ||
    details.contactName ||
    [details.firstName, details.lastName].filter(Boolean).join(" ") ||
    "not provided"
  )
}

function institutionName(details: Stripe.Metadata) {
  return details.schoolName || details.organisationName || "not provided"
}

export function formatOpsEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const decision = decideProgrammeAccess(session)
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

  const offering = readRegistrationOffering(details)
  const lines = [
    "A PATI website registration payment was completed.",
    "",
    `Offering: ${offering || "missing"}`,
    `Journey: ${journey}`,
    `Name: ${registrationName(details)}`,
    `Email: ${customerEmail(session) || details.email || "not provided"}`,
    `School or organisation: ${institutionName(details)}`,
    `Amount: ${formatAmount(session)}`,
    `Stripe session: ${session.id}`,
    `Payment reference: ${
      typeof session.payment_intent === "string" ? session.payment_intent : session.id
    }`,
    `Payment status: ${session.payment_status}`,
  ]

  if (decision.action === "ageOfAiSchool") {
    lines.push(
      `School roll number: ${details.schoolRollNumber || "not provided"}`,
      `County: ${details.county || "not provided"}`
    )
  }

  if (details.offeringSource) {
    lines.push(`Offering source: ${details.offeringSource}`)
  }

  if (details.submittedOffering) {
    lines.push(`Submitted offering: ${details.submittedOffering}`)
  }

  if (!isRegistrationOfferingId(offering)) {
    lines.push("Offering check: missing or unknown. No programme-access email was sent.")
  }

  if (decision.action === "withhold") {
    lines.push(`Programme-access email: not sent. ${decision.reason}`)
  } else if (decision.action === "ageOfAiParticipant") {
    lines.push(
      "Programme-access email: Parenting in the Age of AI confirmation. Autumn recordings were not included."
    )
  } else if (decision.action === "techSavvyParticipant") {
    lines.push(
      "Programme-access email: Parenting the Tech-Savvy Child recordings."
    )
  } else if (decision.action === "ageOfAiSchool") {
    lines.push(
      "Programme-access email: January school registration for Parenting in the Age of AI. Autumn recordings were not included.",
      `January school-parent link: ${aiSchoolParentRegistrationUrl()}`,
      `January teacher link: ${aiTeacherRegistrationUrl()}`
    )
  } else {
    lines.push(
      "Programme-access email: annual registration confirmation for Parenting the Tech-Savvy Child and Parenting in the Age of AI."
    )
    if (decision.journey === "school") {
      lines.push(
        `January school-parent link: ${aiSchoolParentRegistrationUrl()}`,
        `January teacher link: ${aiTeacherRegistrationUrl()}`
      )
    }
    if (decision.journey === "organisation") {
      lines.push(
        `January participant link: ${aiOrganisationUserRegistrationUrl()}`
      )
    }
  }

  lines.push("", "Registration details:")

  for (const [key, value] of Object.entries(details)) {
    if (value) {
      lines.push(`- ${key}: ${value}`)
    }
  }

  if (journey === "school" && decision.action === "annualInstitution") {
    lines.push(
      "",
      "Parenting the Tech-Savvy Child school-parent link:",
      schoolParentRegistrationUrl()
    )
  }

  if (journey === "organisation") {
    lines.push(
      "",
      "Parenting the Tech-Savvy Child organisation participant link:",
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

function januaryParticipantEmail(
  session: Stripe.Checkout.Session,
  journey: "parent" | "schoolParent" | "organisationUser"
) {
  const details = metadata(session)
  const to = customerEmail(session)
  const schoolName = details.schoolName || "your school"
  const organisationName = details.organisationName || "your organisation"
  const lines = [
    JANUARY_ACCESS_NOTICE,
    "",
    `Your payment of ${formatAmount(session)} has been received. Stripe will also send a separate payment receipt to this email address.`,
  ]

  if (journey === "schoolParent") {
    const county = details.schoolCounty
    lines.push(
      "",
      county
        ? `You registered through ${schoolName} (${county}).`
        : `You registered through ${schoolName}.`
    )
  }

  if (journey === "organisationUser") {
    lines.push("", `You registered through ${organisationName}.`)
  }

  lines.push(
    "",
    "Please keep this email for your records.",
    "",
    "Kind regards,",
    "The PATI Team",
    "Parenting and Technology Institute (PATI)"
  )

  return {
    to,
    subject: "Your Parenting in the Age of AI registration",
    text: lines.join("\n"),
  }
}

function januarySchoolEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const schoolName = details.schoolName || "your school"
  const sessions = aiProgramme.sessions.map(
    (item) => `${item.when} — ${item.modules}`
  )

  return {
    to: customerEmail(session),
    subject: "Your Parenting in the Age of AI school registration",
    text: [
      `Thank you for registering ${schoolName} for Parenting in the Age of AI, beginning Tuesday, 19 January 2027.`,
      "",
      "Your €199.95 registration enables your school to offer the January programme to its parent community. Parents from your school can register individually for €14.95, and eligible teachers can participate free of charge.",
      "",
      "Parents register individually at:",
      aiSchoolParentRegistrationUrl(),
      "",
      "Eligible teachers register free of charge at:",
      aiTeacherRegistrationUrl(),
      "",
      "PATI will provide school communications materials for you to share with your parent community.",
      "",
      "The programme is delivered live online over four Tuesday evenings, at 7:00pm Ireland time (Europe/Dublin):",
      "",
      ...sessions,
      "",
      "Zoom access will be sent directly to registered participants.",
      "",
      `Your payment of ${formatAmount(session)} has been received. Stripe will also send a payment receipt to this email address.`,
      "",
      "Kind regards,",
      "The PATI Team",
      "Parenting and Technology Institute (PATI)",
    ].join("\n"),
  }
}

export function januarySchoolSuccessBody(email: string) {
  return `Thank you. Your school is registered for Parenting in the Age of AI, beginning Tuesday, 19 January 2027. Your €199.95 registration enables your school to offer the January programme to its parent community. Parents from your school can register individually for €14.95, and eligible teachers can participate free of charge. We will email confirmation to ${email}.`
}

function annualSchoolEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const schoolName = details.schoolName || "your school"

  return {
    to: customerEmail(session),
    subject: "Your PATI annual school registration",
    text: [
      `Thank you for registering ${schoolName} with PATI.`,
      "",
      `Your annual school registration payment of ${formatAmount(session)} has been received. Stripe will also send a payment receipt to this email address.`,
      "",
      "This €499.95 registration is your school's annual registration with PATI. It includes both Parenting the Tech-Savvy Child and Parenting in the Age of AI.",
      "",
      "PATI will send your January school-parent registration link and your January teacher access link separately.",
      "",
      "School-linked parents register individually. Eligible teachers in your school receive free access.",
      "",
      "Kind regards,",
      "The PATI Team",
      "Parenting and Technology Institute (PATI)",
    ].join("\n"),
  }
}

function annualOrganisationEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const organisationName = details.organisationName || "your organisation"

  return {
    to: customerEmail(session),
    subject: "Your PATI annual organisation registration",
    text: [
      `Thank you for registering ${organisationName} with PATI.`,
      "",
      `Your annual organisation registration payment of ${formatAmount(session)} has been received. Stripe will also send a payment receipt to this email address.`,
      "",
      "This €999.95 registration is your organisation's annual registration with PATI. It includes both Parenting the Tech-Savvy Child and Parenting in the Age of AI.",
      "",
      "PATI will send your January participant link separately.",
      "",
      "Participating employees register individually.",
      "",
      "Kind regards,",
      "The PATI Team",
      "Parenting and Technology Institute (PATI)",
    ].join("\n"),
  }
}

export function formatJanuaryTeacherAccessEmail(data: {
  firstName: string
  schoolName: string
}) {
  return {
    subject: "Your Parenting in the Age of AI registration",
    text: [
      JANUARY_ACCESS_NOTICE,
      "",
      `You are registered through ${data.schoolName}.`,
      "",
      "This registration is free for teachers and school staff. PATI will confirm that your school is participating before sending Zoom access.",
      "",
      "Kind regards,",
      "The PATI Team",
      "Parenting and Technology Institute (PATI)",
    ].join("\n"),
  }
}

export function formatJanuaryTeacherOpsEmail(data: {
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
    subject: `Free teacher registration (${OFFERING_AGE_OF_AI}): ${name}`,
    text: [
      "A free Parenting in the Age of AI teacher registration was submitted. Check that the school is participating before sending Zoom access.",
      "",
      `Offering: ${OFFERING_AGE_OF_AI}`,
      "Journey: teacher",
      `Name: ${name}`,
      `Email: ${data.email}`,
      `School or organisation: ${data.schoolName}`,
      "Amount: none",
      "Stripe session: none",
      `School roll number: ${data.schoolRollNumber}`,
      `County: ${data.county}`,
      `Role: ${data.role}`,
    ].join("\n"),
  }
}

export function formatPurchaserEmail(session: Stripe.Checkout.Session) {
  const details = metadata(session)
  const decision = decideProgrammeAccess(session)
  const to = customerEmail(session)

  if (!to || decision.action === "withhold") {
    return null
  }

  if (decision.action === "ageOfAiParticipant") {
    return januaryParticipantEmail(session, decision.journey)
  }

  if (decision.action === "ageOfAiSchool") {
    return januarySchoolEmail(session)
  }

  if (decision.action === "annualInstitution" && decision.journey === "school") {
    return annualSchoolEmail(session)
  }

  if (
    decision.action === "annualInstitution" &&
    decision.journey === "organisation"
  ) {
    return annualOrganisationEmail(session)
  }

  const journey = details.journey
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
        ...patiRecordingLines(),
        ...patiNextProgrammeLines(),
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
        ...patiRecordingLines(),
        ...patiNextProgrammeLines(),
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
        ...patiRecordingLines(),
        ...patiNextProgrammeLines(),
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
