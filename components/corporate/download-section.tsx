"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Download, FileText } from "lucide-react"

export function DownloadSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)

    const lead = {
      name: formData.get("name"),
      email: formData.get("email"),
      organisation: formData.get("organisation"),
    }

    console.log("Corporate wellbeing overview download lead:", lead)

    const link = document.createElement("a")
    link.href = "/corporate-wellbeing-overview.pdf"
    link.download = "corporate-wellbeing-overview.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    setSubmitted(true)
    setIsSubmitting(false)
  }

  return (
    <section className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-foreground/10">
              <FileText className="h-8 w-8 text-primary-foreground" />
            </div>

            <h2 className="font-serif text-3xl font-medium tracking-tight text-primary-foreground md:text-4xl">
              Download the Corporate Wellbeing Overview
            </h2>

            <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
              Get a concise overview of how the Parenting and Technology Institute supports organisations with the real pressures employees are facing at home — and how these can show up at work.
            </p>

            <ul className="mt-6 space-y-2 text-primary-foreground/80">
              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Programme overview and delivery formats
              </li>

              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Practical topics and employee support themes
              </li>

              <li className="flex items-center gap-2">
                <svg className="h-4 w-4 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Programme options, pricing, and next steps
              </li>
            </ul>

            <div className="mt-6 flex items-center gap-3 text-sm text-primary-foreground/60">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Your information is secure and never shared with third parties.</span>
            </div>
          </div>

          <div className="rounded-2xl bg-card p-8 shadow-xl md:p-10">
            {submitted ? (
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Download className="h-7 w-7 text-primary" />
                </div>

                <h3 className="font-serif text-2xl font-medium text-foreground">
                  Your overview is downloading
                </h3>

                <p className="mt-3 text-muted-foreground">
                  Thank you. The Corporate Wellbeing Overview should download automatically.
                </p>

                <a
                  href="/corporate-wellbeing-overview.pdf"
                  download
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Click here if the download does not start
                  <Download className="h-4 w-4" />
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Jane Smith"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Work Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    required
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organisation" className="text-sm font-medium text-foreground">
                    Organisation
                  </Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    placeholder="Company Name"
                    required
                    className="h-12"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Preparing download..."
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      Download Overview
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
