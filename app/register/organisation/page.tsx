import { RegisterShell } from "@/components/register/register-shell"
import { OrganisationForm } from "@/components/register/organisation-form"

export default function RegisterOrganisationPage() {
  return (
    <RegisterShell
      eyebrow="For Organisations"
      title="Register Your Organisation"
      description="Complete your organisation details below to register. Payment of €999.95 is completed securely with Stripe. After registration, PATI will follow up about employee and parent access."
    >
      <OrganisationForm />
    </RegisterShell>
  )
}
