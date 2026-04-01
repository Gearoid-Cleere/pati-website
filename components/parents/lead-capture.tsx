"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Download, Lock } from "lucide-react"

export function LeadCaptureSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, this would submit to an API
    setSubmitted(true)
  }

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
          <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
            <Download className="h-7 w-7 text-primary" />
          </div>

          <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Download the Parent Guide
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Receive a practical overview of how to support your child&apos;s use of
            technology.
          </p>

          {submitted ? (
            <div className="mt-8 rounded-lg bg-accent/10 p-6 text-center">
              <p className="font-semibold text-foreground">
                Thank you! Check your email for the guide.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background"
              />
              <Input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background"
              />
              <Button type="submit" className="w-full" size="lg">
                Download Guide
              </Button>
            </form>
          )}

          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
}
