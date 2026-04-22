"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, School, User } from "lucide-react"

export function LeadCaptureSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12">
          
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Take the Next Step
            </p>

            <h2 className="text-balance text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Want PATI in your school, or ready to join independently?
            </h2>

            <p className="mt-4 text-pretty text-muted-foreground">
              The best-value way to access PATI is through your school, but parents can also join independently if their school is not yet participating.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 lg:grid-cols-2">

            {/* School Route */}
            <div className="flex flex-col justify-between rounded-2xl border border-border bg-secondary/40 p-6 sm:p-8 transition-all hover:shadow-md hover:-translate-y-0.5">
              
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <School className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  Bring PATI to Your School
                </h3>

                <p className="mt-3 text-muted-foreground">
                  If you’d like your school to offer the programme, we can help you express interest and start the conversation.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li>• Lower parent pricing through your school</li>
                  <li>• Shared experience with your parent community</li>
                  <li>• Helps drive adoption from parents upwards</li>
                </ul>
              </div>

              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
              >
                <Link href="/contact">
                  Bring PATI to Your School
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Independent Route */}
            <div className="flex flex-col justify-between rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8 transition-all hover:shadow-md hover:-translate-y-0.5">
              
              <div>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>

                <h3 className="text-xl font-semibold text-foreground">
                  Join Independently
                </h3>

                <p className="mt-3 text-muted-foreground">
                  If your school is not yet participating, you can still access the PATI programme independently.
                </p>

                <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                  <li>• Full access to the parent programme</li>
                  <li>• Live sessions plus recordings</li>
                  <li>• Independent parent price: €79.95</li>
                </ul>
              </div>

              <Button
                asChild
                size="lg"
                className="mt-6 w-full bg-primary/10 text-primary hover:bg-primary/20 font-semibold"
              >
                <Link href="/contact">
                  Join Independently
                </Link>
              </Button>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
