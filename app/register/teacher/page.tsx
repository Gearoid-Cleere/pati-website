import { RegisterShell } from "@/components/register/register-shell"
import { TeacherForm } from "@/components/register/teacher-form"

export default function RegisterTeacherPage() {
  return (
    <RegisterShell
      eyebrow="For Teachers and School Staff"
      title="Free Teacher Access"
      description="Teachers and school staff in participating PATI schools can attend the PATI Parent Programme free of charge. Complete the short form below and we’ll email your programme access details directly."
    >
      <TeacherForm />
    </RegisterShell>
  )
}