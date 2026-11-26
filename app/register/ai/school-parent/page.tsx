import type { Metadata } from "next"
import { RegisterShell } from "@/components/register/register-shell"
import { SchoolParentForm } from "@/components/register/school-parent-form"
import { OFFERING_AGE_OF_AI } from "@/lib/programme-id"

export const metadata: Metadata = {
  title: "School parent registration | Parenting in the Age of AI | PATI",
  robots: { index: false, follow: false },
}

export default function RegisterAiSchoolParentPage() {
  return (
    <RegisterShell
      eyebrow="School Parent"
      title="Register for Parenting in the Age of AI"
      description="This registration is for parents at a school that already has annual PATI access. Complete your details below, including your school name, then pay €14.95 securely with Stripe. Zoom registration and access information will be sent separately before the programme begins."
    >
      <SchoolParentForm offering={OFFERING_AGE_OF_AI} />
    </RegisterShell>
  )
}
