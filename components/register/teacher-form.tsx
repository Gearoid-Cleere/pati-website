"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const roles = [
  "Principal",
  "Deputy Principal",
  "Teacher",
  "SNA",
  "Other School Staff",
] as const

export function TeacherForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [submittedEmail, setSubmittedEmail] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)
    setError("")

    const form = event.currentTarget
    const data = new FormData(form)
    const email = String(data.get("email") || "")

    try {
      const response = await fetch("/api/register/teacher", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: String(data.get("firstName") || ""),
          lastName: String(data.get("lastName") || ""),
          schoolName: String(data.get("schoolName") || ""),
          schoolRollNumber: String(data.get("schoolRollNumber") || ""),
          county: String(data.get("county") || ""),
          email,
          role: String(data.get("role") || ""),
          staffConfirmation: data.get("staffConfirmation") === "on",
          termsAccepted: data.get("termsAccepted") === "on",
          website: String(data.get("website") || ""),
        }),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) {
        throw new Error(result.error || "Unable to complete registration.")
      }

      setSubmittedEmail(email)
      form.reset()
    } catch (submissionError) {
      setError(
        submissionError instanceof Error
          ? submissionError.message
          : "Unable to complete registration. Please try again later."
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submittedEmail) {
    return (
      <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-2xl font-medium text-foreground">
          Registration received
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Your free teacher registration has been received. We’ve emailed your PATI Parent Programme access details to {submittedEmail}. Please check your inbox and spam/junk folder if you don’t see the message shortly.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="firstName">First name</Label>
          <Input id="firstName" name="firstName" required maxLength={100} className="mt-1.5" autoComplete="given-name" />
        </div>
        <div>
          <Label htmlFor="lastName">Last name</Label>
          <Input id="lastName" name="lastName" required maxLength={100} className="mt-1.5" autoComplete="family-name" />
        </div>
      </div>

      <div>
        <Label htmlFor="schoolName">School name</Label>
        <Input id="schoolName" name="schoolName" required maxLength={200} className="mt-1.5" autoComplete="organization" />
      </div>

      <div>
        <Label htmlFor="schoolRollNumber">School roll number</Label>
        <Input id="schoolRollNumber" name="schoolRollNumber" required maxLength={50} className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="county">County</Label>
        <Input id="county" name="county" required maxLength={100} className="mt-1.5" autoComplete="address-level1" />
      </div>

      <div>
        <Label htmlFor="email">Email address</Label>
        <Input id="email" name="email" type="email" required maxLength={200} className="mt-1.5" autoComplete="email" />
      </div>

      <div>
        <Label htmlFor="role">Role</Label>
        <select id="role" name="role" required defaultValue="" className="mt-1.5 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <option value="" disabled>Select your role</option>
          {roles.map((role) => <option key={role} value={role}>{role}</option>)}
        </select>
      </div>

      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input type="checkbox" name="staffConfirmation" required className="mt-1 h-4 w-4 shrink-0 rounded border-border" />
        <span>I confirm that I am a member of staff at the school named above.</span>
      </label>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input type="checkbox" name="termsAccepted" required className="mt-1 h-4 w-4 shrink-0 rounded border-border" />
        <span>
          I agree to the <Link href="/terms" className="text-foreground underline-offset-4 hover:underline">Terms</Link> and <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">Privacy Policy</Link>.
        </span>
      </label>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register for Free Teacher Access"}
      </Button>
    </form>
  )
}