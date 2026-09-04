import { RegisterShell } from "@/components/register/register-shell"
import { OrganisationUserForm } from "@/components/register/organisation-user-form"

export default function RegisterOrganisationUserPage() {
  return (
    <RegisterShell
      eyebrow="Organisation User"
      title="Register as an Organisation User"
      description="This registration is for people associated with an organisation that has already registered with PATI. Complete your details below, including your organisation name, then pay €24.95 securely with Stripe."
    >
      <OrganisationUserForm />
    </RegisterShell>
  )
}
