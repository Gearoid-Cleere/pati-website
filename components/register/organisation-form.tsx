"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCheckoutSubmit } from "@/components/register/start-checkout"
import { useState } from "react"

export function OrganisationForm() {
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
      const estimatedParticipants = String(data.get("estimatedUsers") || "").trim()
      if (!estimatedParticipants) {
        setInvoiceError("Please enter the estimated number of participating employees or parents.")
        return
      }

      setIsInvoiceSubmitting(true)
      setInvoiceError("")

      try {
        const response = await fetch("/api/register/organisation-invoice", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            organisationName: String(data.get("organisationName") || ""),
            firstName: String(data.get("firstName") || ""),
            lastName: String(data.get("lastName") || ""),
            role: String(data.get("role") || ""),
            email: String(data.get("email") || ""),
            phone: String(data.get("phone") || ""),
            billingAddress: String(data.get("billingAddress") || ""),
            invoiceEmail: String(data.get("invoiceEmail") || ""),
            purchaseOrderReference: String(data.get("purchaseOrderReference") || ""),
            estimatedParticipants,
            termsAccepted: data.get("termsAccepted") === "on",
            website: String(data.get("website") || ""),
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
      journey: "organisation",
      organisationName: String(data.get("organisationName") || ""),
      contactName: String(data.get("contactName") || ""),
      role: String(data.get("role") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      estimatedUsers: String(data.get("estimatedUsers") || ""),
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
          Thank you. We have emailed confirmation to {submittedInvoiceEmail}. PATI will send the
          invoice and then provide your organisation&apos;s programme participation information. No
          payment is required at this stage.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
      <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />

      <div>
        <Label htmlFor="organisationName">Organisation name</Label>
        <Input id="organisationName" name="organisationName" required maxLength={200} className="mt-1.5" />
      </div>

      <div>
        <Label htmlFor="contactName">Contact name</Label>
        <Input id="contactName" name="contactName" required maxLength={200} className="mt-1.5" autoComplete="name" />
      </div>

      <div>
        <Label htmlFor="role">Role</Label>
        <Input id="role" name="role" required maxLength={200} className="mt-1.5" placeholder="HR, People, Wellbeing, ..." />
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
        <Label htmlFor="estimatedUsers">
          Estimated number of participating employees / parents
        </Label>
        <Input id="estimatedUsers" name="estimatedUsers" maxLength={50} className="mt-1.5" />
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
          Organisations that require an invoice can submit their billing details here.
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
              <Label htmlFor="firstName">Contact first name</Label>
              <Input id="firstName" name="firstName" required maxLength={200} className="mt-1.5" autoComplete="given-name" />
            </div>

            <div>
              <Label htmlFor="lastName">Contact last name</Label>
              <Input id="lastName" name="lastName" required maxLength={200} className="mt-1.5" autoComplete="family-name" />
            </div>

            <div>
              <Label htmlFor="billingAddress">Billing address</Label>
              <Textarea id="billingAddress" name="billingAddress" required maxLength={1000} className="mt-1.5" autoComplete="street-address" />
            </div>

            <div>
              <Label htmlFor="invoiceEmail">Invoice email address</Label>
              <Input id="invoiceEmail" name="invoiceEmail" type="email" required maxLength={200} className="mt-1.5" autoComplete="email" />
            </div>

            <div>
              <Label htmlFor="purchaseOrderReference">
                PO / reference <span className="text-muted-foreground">(optional)</span>
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
