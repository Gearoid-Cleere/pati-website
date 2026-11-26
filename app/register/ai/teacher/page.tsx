import type { Metadata } from "next"
import { RegisterShell } from "@/components/register/register-shell"
import { TeacherForm } from "@/components/register/teacher-form"
import { OFFERING_AGE_OF_AI } from "@/lib/programme-id"

export const metadata: Metadata = {
  title: "Teacher registration | Parenting in the Age of AI | PATI",
  robots: { index: false, follow: false },
}

export default function RegisterAiTeacherPage() {
  return (
    <RegisterShell
      eyebrow="For Teachers and School Staff"
      title="Free teacher access to Parenting in the Age of AI"
      description="Teachers and school staff in participating PATI schools can register for Parenting in the Age of AI free of charge. Complete the short form below. Zoom registration and access information will be sent separately before the programme begins, after PATI confirms your school is participating."
    >
      <TeacherForm offering={OFFERING_AGE_OF_AI} />
    </RegisterShell>
  )
}
