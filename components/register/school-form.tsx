"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCheckoutSubmit } from "@/components/register/start-checkout"

export function SchoolForm() {
  const { isSubmitting, error, submit } = useCheckoutSubmit()

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    await submit({
      journey: "school",
      schoolName: String(data.get("schoolName") || ""),
      contactName: String(data.get("contactName") || ""),
      role: String(data.get("role") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      county: String(data.get("county") || ""),
      estimatedParents: String(data.get("estimatedParents") || ""),
      termsAccepted: data.get("termsAccepted") === "on",
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <Label htmlFor="schoolName">School name</Label>
        <Input id="schoolName" name="schoolName" required maxLength={200} className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="contactName">Contact name</Label>
        <Input id="contactName" name="contactName" required maxLength={200} className="mt-1.5" autoComplete="name" />
      </div>

      <div>
        <Label htmlFor="role">Role</Label>
        <Input id="role" name="role" required maxLength={200} className="mt-1.5" placeholder="Principal, Deputy Principal, ..." />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required maxLength={200} className="mt-1.5" autoComplete="email" />
      </div>

      <div>
        <Label htmlFor="phone">Phone</Label>
        <Input id="phone" name="phone" type="tel" required maxLength={50} className="mt-1.5" autoComplete="tel" />
      </div>

      <div>
        <Label htmlFor="county">
          County / address <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input id="county" name="county" maxLength={200} className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="estimatedParents">
          Estimated number of parents <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Input id="estimatedParents" name="estimatedParents" maxLength={50} className="mt-1.5" />
      </div>

      <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground">
        <input
          type="checkbox"
          name="termsAccepted"
          required
          className="mt-1 h-4 w-4 shrink-0 rounded border-border"
        />
        <span>
          I agree to the{" "}
          <Link href="/terms" className="text-foreground underline-offset-4 hover:underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="text-foreground underline-offset-4 hover:underline">
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error ? <p className="text-sm text-destructive">{error}</p> : null}

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? "Continuing to payment..." : "Continue to payment"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        You will be redirected to Stripe to complete payment. Card details are not collected on this website.
      </p>
    </form>
  )
}
