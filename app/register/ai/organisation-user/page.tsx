import type { Metadata } from "next"
import { RegisterShell } from "@/components/register/register-shell"
import { OrganisationUserForm } from "@/components/register/organisation-user-form"
import { OFFERING_AGE_OF_AI } from "@/lib/programme-id"

export const metadata: Metadata = {
  title: "Organisation participant registration | Parenting in the Age of AI | PATI",
  robots: { index: false, follow: false },
}

export default function RegisterAiOrganisationUserPage() {
  return (
    <RegisterShell
      eyebrow="Organisation Participant"
      title="Register for Parenting in the Age of AI"
      description="This registration is for employees and parents associated with an organisation that already has annual PATI access. Complete your details below, then pay €24.95 securely with Stripe. Zoom registration and access information will be sent separately before the programme begins."
    >
      <OrganisationUserForm offering={OFFERING_AGE_OF_AI} />
    </RegisterShell>
  )
}
