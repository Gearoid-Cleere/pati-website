import { RegisterShell } from "@/components/register/register-shell"
import { OrganisationUserForm } from "@/components/register/organisation-user-form"

export default function RegisterOrganisationUserPage() {
  return (
    <RegisterShell
      eyebrow="Organisation User"
      title="Register as an Organisation User"
      description="This registration is for parents and employees associated with a PATI-registered organisation. Complete your details below, then pay €24.95 securely with Stripe."
    >
      <OrganisationUserForm />
    </RegisterShell>
  )
}
