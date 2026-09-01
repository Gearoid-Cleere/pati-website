import { RegisterShell } from "@/components/register/register-shell"
import { SchoolForm } from "@/components/register/school-form"

export default function RegisterSchoolPage() {
  return (
    <RegisterShell
      eyebrow="For Schools"
      title="Register Your School"
      description="Complete your school details below to register. Payment of €499.95 is completed securely with Stripe. After registration, PATI will send the parent registration information to the contact email provided."
    >
      <SchoolForm />
    </RegisterShell>
  )
}
