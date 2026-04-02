"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <svg
            className="h-6 w-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Thank you for your enquiry</h3>
        <p className="mt-2 text-muted-foreground">
          We&apos;ll be in touch shortly.
        </p>
      </div>
    )
  }

  return (
    <div>
      <p className="mb-6 text-muted-foreground">
        Use this form to ask a question, request information about the programme, or enquire about working with PATI.
      </p>
      <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8">
        <div className="space-y-5">
        <div>
          <Label htmlFor="name" className="text-foreground">
            Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground">
            Email
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="organisation" className="text-foreground">
            Organisation / School{" "}
            <span className="text-muted-foreground">(optional)</span>
          </Label>
          <Input
            id="organisation"
            name="organisation"
            type="text"
            placeholder="Your organisation or school"
            className="mt-1.5"
          />
        </div>

        <div>
          <Label htmlFor="enquiry-type" className="text-foreground">
            Enquiry Type
          </Label>
          <Select name="enquiry-type" required>
            <SelectTrigger className="mt-1.5">
              <SelectValue placeholder="Select an enquiry type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="school">School</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="organisation">Organisation</SelectItem>
              <SelectItem value="general">General</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="message" className="text-foreground">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            required
            placeholder="How can we help you?"
            rows={5}
            className="mt-1.5 resize-none"
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Enquiry"}
        </Button>
      </div>
    </form>
    <p className="mt-4 text-center text-sm text-muted-foreground">
      We typically respond within 1-2 working days.
    </p>
    </div>
  )
}
