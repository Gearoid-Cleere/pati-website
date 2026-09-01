import { RegisterShell } from "@/components/register/register-shell"
import { SchoolForm } from "@/components/register/school-form"

export default function RegisterSchoolPage() {
  return (
    <RegisterShell
      eyebrow="For Schools"
      title="Register Your School"
      description="Complete your school details below to register. Payment of €499.95 is completed securely with Stripe. After payment, you will receive the registration/payment link for parents associated with your registered school, which you can forward to your parents."
    >
      <SchoolForm />
    </RegisterShell>
  )
}
