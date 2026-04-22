"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"

const schoolFeatures = [
  "Access to the PATI parent programme for your school community",
  "Live online sessions led by Dr Richard Hogan",
  "Ready-to-send parent communications and promotional materials",
  "Parent resources and practical take-home guidance",
  "Session recordings for flexible access",
  "A simple, low-effort model for school staff",
]

const parentFeatures = [
  "Access to all live sessions",
  "Recordings available after each session",
  "Practical guidance and take-home resources",
  "Support on boundaries, devices, gaming, and social media",
  "A structured 8-module programme for parents",
  "Expert-led content designed for real family life",
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
            A straightforward model for schools, with low-cost access for parents once a school is registered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* For Schools */}
          <div className="bg-card rounded-2xl border border-border p-8 lg:p-10">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2">For Schools</h3>
              <span className="text-4xl font-bold text-primary">€499.95</span>
              <p className="text-muted-foreground mt-1">Annual school registration</p>
              <p className="text-sm text-muted-foreground mt-2">
                Designed to make the PATI parent programme available to your school community in a simple, low-effort way.
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
              <span className="text-4xl font-bold text-primary">€8.95</span>
              <p className="text-muted-foreground mt-1">Per parent through a registered school</p>
              <p className="text-sm text-muted-foreground mt-2">
                Parents join individually once their school is registered with PATI.
              </p>
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
          Schools register once, and parents can then access the programme at a reduced rate through the school.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8">
            <Link href="/contact">
              Express Interest
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="font-semibold px-8">
            <Link href="/contact">
              Request Information Pack
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
