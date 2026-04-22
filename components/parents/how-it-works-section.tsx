"use client"

import { CheckCircle2 } from "lucide-react"

const points = [
  "4 live online sessions",
  "Join live or watch recordings",
  "Practical strategies for home",
  "Designed for busy family life",
  "Through your school or independently",
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, flexible, and designed for real family life
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            PATI is built to support you without adding pressure, with flexible access and practical guidance you can use straight away.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {points.map((point, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:border-accent/30 hover:shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                <CheckCircle2 className="h-6 w-6 text-accent" />
              </div>

              <p className="text-sm font-semibold leading-relaxed text-foreground">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
