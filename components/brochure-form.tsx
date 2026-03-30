"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Spinner } from "@/components/ui/spinner"
import { FileText, Check } from "lucide-react"

export function BrochureForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setSubmitted(true)
  }

  return (
    <section className="border-y border-border/40 bg-muted/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-lg">
          {/* Card */}
          <div className="rounded-2xl border border-border/60 bg-card p-10 shadow-lg shadow-foreground/[0.02] lg:p-14">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <FileText className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
            </div>

            <div className="mb-10 text-center">
              <h2 className="font-serif text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
                Get the Programme Overview
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                Download a concise guide to PATI programmes for schools, parents and organisations.
              </p>
            </div>

            {submitted ? (
              <div className="text-center">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-8 w-8 text-primary" />
                </div>
                <p className="text-lg font-medium text-foreground">
                  Thank you for your interest
                </p>
                <p className="mt-2 text-[15px] text-muted-foreground">
                  Check your email for the download link.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-[15px]">Full Name</Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[15px]">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    required
                    className="h-12"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-13 w-full text-[15px]"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Spinner className="mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Download Overview"
                  )}
                </Button>
                <p className="pt-2 text-center text-xs text-muted-foreground/70">
                  No spam. We respect your privacy.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
