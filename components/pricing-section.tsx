"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const schoolFeatures = [
  "Full programme delivery for parents",
  "Classroom-ready materials for teachers",
  "Structured guidance for use with students",
  "Communication templates and resources",
  "Teacher and staff access to the programme",
  "Attendance insights and impact feedback"
]

const parentFeatures = [
  "Access to all live sessions",
  "Full recordings of each session",
  "Practical guidance and resources",
  "Flexible participation",
  "Weekly insights and prompts",
  "Tools, scripts, and strategies for home use",
  "Parental controls and device setup support"
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-semibold tracking-widest text-accent uppercase mb-4">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight mb-6 text-balance">
            Simple and Transparent Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Clear, straightforward pricing for schools and parents. No hidden costs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* For Schools */}
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">For Schools</h3>
              <span className="text-4xl font-bold text-primary">€499.95</span>
              <p className="text-muted-foreground mt-1">Annual school registration (plus VAT)</p>
              <p className="text-sm text-muted-foreground mt-2">
                Includes full programme for parents, teachers and students,<br />
                with classroom-ready resources for teachers
              </p>
            </div>
            <ul className="space-y-4">
              {schoolFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* For Parents */}
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">For Parents</h3>
              <span className="text-4xl font-bold text-primary">€15.95</span>
              <p className="text-muted-foreground mt-1">Per parent (VAT included)</p>
            </div>
            <ul className="space-y-4">
              {parentFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="text-center text-muted-foreground mb-10">
          Schools register once. Parents then join individually.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            Register Your School
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="font-semibold px-8">
            Download School Information Pack
          </Button>
        </div>
      </div>
    </section>
  )
}
