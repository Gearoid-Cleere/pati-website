"use client"

import { CheckCircle2 } from "lucide-react"

const points = [
  "4 live online sessions (one per week)",
  "Join live or watch recordings if you miss a session",
  "Practical strategies you can use straight away at home",
  "Designed to fit around busy family life",
  "Join through your school or access independently",
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, flexible, and designed for real family life
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            PATI is built to support you without adding pressure — with flexible access and practical guidance you can use straight away.
          </p>
        </div>

        {/* Reassurance Strip */}
        <div className="bg-secondary/50 rounded-2xl p-6 lg:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {points.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
