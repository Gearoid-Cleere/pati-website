"use client"

import { ShieldCheck, MessageCircle, Users, Lightbulb, Heart, CheckCircle2 } from "lucide-react"

const benefits = [
  {
    icon: ShieldCheck,
    title: "Feel more confident as a parent",
    description: "Know what’s normal, what matters, and when to step in — without second guessing yourself.",
  },
  {
    icon: MessageCircle,
    title: "Have better conversations at home",
    description: "Learn how to talk about phones, gaming, and social media in a calm and effective way.",
  },
  {
    icon: Users,
    title: "Set boundaries that actually work",
    description: "Put simple, realistic rules in place that your family can stick to.",
  },
  {
    icon: Lightbulb,
    title: "Get practical strategies you can use immediately",
    description: "Each session gives you clear ideas you can apply straight away at home.",
  },
  {
    icon: Heart,
    title: "Reduce stress and conflict",
    description: "Move away from constant battles over devices and towards a more balanced family approach.",
  },
  {
    icon: CheckCircle2,
    title: "A structured programme you can trust",
    description: "4 live sessions covering 8 key modules, with recordings available for flexibility.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Practical support for real family life
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            This is not theory. It’s clear, practical guidance designed to help you feel more confident and in control at home.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-4">
                  <benefit.icon className="h-5 w-5" />
                </div>

                <h3 className="font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
