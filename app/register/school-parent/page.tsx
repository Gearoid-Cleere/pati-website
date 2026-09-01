import { RegisterShell } from "@/components/register/register-shell"
import { SchoolParentForm } from "@/components/register/school-parent-form"

export default function RegisterSchoolParentPage() {
  return (
    <RegisterShell
      eyebrow="School Parent"
      title="Register as a School Parent"
      description="This registration is for parents associated with a school that has already registered with PATI. Complete your details below, including your school name, then pay €14.95 securely with Stripe."
    >
      <SchoolParentForm />
    </RegisterShell>
  )
}
