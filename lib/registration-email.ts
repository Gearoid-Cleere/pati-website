import { isValidOpsEmail } from "./paid-registration-emails.ts"

export type RegistrationEmailMessage = {
  to: string
  subject: string
  text: string
}

export function applyRegistrationEmailOverride(
  message: RegistrationEmailMessage
): RegistrationEmailMessage {
  const override = process.env.REGISTRATION_EMAIL_OVERRIDE_TO?.trim() ?? ""

  if (!override) {
    return message
  }

  if (!isValidOpsEmail(override)) {
    throw new Error("REGISTRATION_EMAIL_OVERRIDE_TO is invalid")
  }

  return {
    to: override,
    subject: `[PREVIEW TEST] ${message.subject}`,
    text: [
      "This is a preview test email. It was not sent to the intended recipient.",
      `Intended recipient: ${message.to}`,
      "",
      message.text,
    ].join("\n"),
  }
}
