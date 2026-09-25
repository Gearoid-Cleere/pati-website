"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useCheckoutSubmit } from "@/components/register/start-checkout"

export function SchoolForm() {
  const { isSubmitting, error, submit } = useCheckoutSubmit()
  const [showInvoiceFields, setShowInvoiceFields] = useState(false)
  const [isInvoiceSubmitting, setIsInvoiceSubmitting] = useState(false)
  const [invoiceError, setInvoiceError] = useState("")
  const [submittedInvoiceEmail, setSubmittedInvoiceEmail] = useState("")

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null

    if (submitter?.value === "invoice") {
      setIsInvoiceSubmitting(true)
      setInvoiceError("")

      try {
        const response = await fetch("/api/register/school-invoice", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            schoolName: String(data.get("schoolName") || ""),
            contactName: String(data.get("contactName") || ""),
            role: String(data.get("role") || ""),
            email: String(data.get("email") || ""),
            phone: String(data.get("phone") || ""),
            county: String(data.get("county") || ""),
            estimatedParents: String(data.get("estimatedParents") || ""),
            invoicingOrganisation: String(data.get("invoicingOrganisation") || ""),
            invoiceEmail: String(data.get("invoiceEmail") || ""),
            purchaseOrderReference: String(data.get("purchaseOrderReference") || ""),
            termsAccepted: data.get("termsAccepted") === "on",
          }),
        })
        const result = (await response.json()) as { error?: string }

        if (!response.ok) {
          throw new Error(result.error || "Unable to request an invoice.")
        }

        setSubmittedInvoiceEmail(String(data.get("email") || ""))
        form.reset()
      } catch (submissionError) {
        setInvoiceError(
          submissionError instanceof Error
            ? submissionError.message
            : "Unable to request an invoice. Please try again later."
        )
      } finally {
        setIsInvoiceSubmitting(false)
      }

      return
    }

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

  if (submittedInvoiceEmail) {
    return (
      <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <h2 className="font-serif text-2xl font-medium text-foreground">
          Invoice request received
        </h2>
        <p className="leading-relaxed text-muted-foreground">
          Thank you. We have emailed confirmation to {submittedInvoiceEmail}. PATI will send the invoice and then provide your school&apos;s parent and teacher registration information. No payment is required at this stage.
        </p>
      </div>
    )
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

      <div className="border-t border-border pt-5">
        <p className="font-medium text-foreground">Need to pay by invoice?</p>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
          ETB schools and other schools that require an invoice or purchase order can register and request an invoice instead.
        </p>
        {!showInvoiceFields ? (
          <Button
            type="button"
            variant="outline"
            className="mt-4 w-full"
            size="lg"
            onClick={() => setShowInvoiceFields(true)}
          >
            Request an invoice
          </Button>
        ) : (
          <div className="mt-5 space-y-5">
            <div>
              <Label htmlFor="invoicingOrganisation">
                ETB / invoicing organisation <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="invoicingOrganisation" name="invoicingOrganisation" maxLength={200} className="mt-1.5" />
            </div>

            <div>
              <Label htmlFor="invoiceEmail">
                Invoice email address <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="invoiceEmail" name="invoiceEmail" type="email" maxLength={200} className="mt-1.5" placeholder="Leave blank to use the registration email" />
            </div>

            <div>
              <Label htmlFor="purchaseOrderReference">
                Purchase order / reference <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input id="purchaseOrderReference" name="purchaseOrderReference" maxLength={200} className="mt-1.5" />
            </div>

            {invoiceError ? <p className="text-sm text-destructive">{invoiceError}</p> : null}

            <Button type="submit" name="registrationMethod" value="invoice" className="w-full" size="lg" disabled={isSubmitting || isInvoiceSubmitting}>
              {isInvoiceSubmitting ? "Requesting invoice..." : "Request an invoice"}
            </Button>
          </div>
        )}
      </div>
    </form>
  )
}
