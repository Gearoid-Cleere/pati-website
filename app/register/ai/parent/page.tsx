import type { Metadata } from "next"
import { RegisterShell } from "@/components/register/register-shell"
import { ParentForm } from "@/components/register/parent-form"
import { OFFERING_AGE_OF_AI } from "@/lib/programme-id"

export const metadata: Metadata = {
  title: "Register for Parenting in the Age of AI | PATI",
  robots: { index: false, follow: false },
}

export default function RegisterAiParentPage() {
  return (
    <RegisterShell
      eyebrow="Independent Parent"
      title="Register for Parenting in the Age of AI"
      description="Complete your details below to register for Parenting in the Age of AI, beginning Tuesday, 19 January 2027. Payment of €79.95 is completed securely with Stripe. Zoom registration and access information will be sent separately before the programme begins."
    >
      <ParentForm offering={OFFERING_AGE_OF_AI} />
    </RegisterShell>
  )
}
