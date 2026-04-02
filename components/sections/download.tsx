"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, CheckCircle } from "lucide-react"

export function DownloadSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setSubmitted(true)
  }

  return (
    <section id="download" className="bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-lg sm:p-12">
            {!submitted ? (
              <>
                <div className="text-center">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Download className="h-8 w-8 text-primary" />
                  </div>
                  <h2 className="font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                    Download the Programme Overview
                  </h2>
                  <p className="mt-4 text-muted-foreground">
                    Receive a clear and concise overview of the PATI programme delivered to your inbox.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-background"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download Overview
                  </Button>
                </form>

                <p className="mt-4 text-center text-xs text-muted-foreground">
                  By submitting, you agree to receive communications from PATI. You can unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="py-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Thank you!
                </h3>
                <p className="mt-2 text-muted-foreground">
                  The programme overview has been sent to your email. Please check your inbox.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
