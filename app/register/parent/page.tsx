import { RegisterShell } from "@/components/register/register-shell"
import { ParentForm } from "@/components/register/parent-form"

export default function RegisterParentPage() {
  return (
    <RegisterShell
      eyebrow="Independent Parent"
      title="Join PATI Independently"
      description="Complete your details below to register for Parenting the Tech-Savvy Child. Payment of €79.95 is completed securely with Stripe."
    >
      <ParentForm />
    </RegisterShell>
  )
}
