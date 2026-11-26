import type { Metadata } from "next"
import { RegisterShell } from "@/components/register/register-shell"
import { SchoolForm } from "@/components/register/school-form"
import { OFFERING_AGE_OF_AI } from "@/lib/programme-id"

export const metadata: Metadata = {
  title: "January Programme School Access | PATI",
  robots: { index: false, follow: false },
}

export default function RegisterAiSchoolPage() {
  return (
    <RegisterShell
      eyebrow="Parenting in the Age of AI"
      title="January Programme School Access"
      price="€199.95"
      description="This registration enables your school to offer Parenting in the Age of AI, beginning Tuesday, 19 January 2027, to its parent community. Parents register individually for €14.95, and eligible teachers receive free access. Payment of €199.95 is completed securely with Stripe."
    >
      <SchoolForm offering={OFFERING_AGE_OF_AI} />
    </RegisterShell>
  )
}
