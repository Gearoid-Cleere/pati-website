import { RegisterShell } from "@/components/register/register-shell"
import { OrganisationUserForm } from "@/components/register/organisation-user-form"
import { OrganisationUserInvalidLink } from "@/components/register/organisation-user-invalid"
import { verifyOrganisationUserToken } from "@/lib/organisation-user-link"

export default async function RegisterOrganisationUserByCodePage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const token = decodeURIComponent(code)
  const verified = verifyOrganisationUserToken(token)

  if (!verified) {
    return <OrganisationUserInvalidLink />
  }

  return (
    <RegisterShell
      eyebrow="Organisation User"
      title="Register as an Organisation User"
      description="This registration is for people associated with a PATI-registered organisation. Complete your details below, then pay €24.95 securely with Stripe."
    >
      <OrganisationUserForm
        organisationUserCode={token}
        organisationName={verified.organisationName}
      />
    </RegisterShell>
  )
}
