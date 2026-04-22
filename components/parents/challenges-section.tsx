"use client"

import { Clock, Gamepad2, HeartCrack, Smartphone, ShieldAlert, Users } from "lucide-react"

const challenges = [
  {
    icon: Clock,
    title: "Managing screen time",
    description: "It can feel like a constant battle. We help you set boundaries that actually work at home.",
  },
  {
    icon: Gamepad2,
    title: "Gaming concerns",
    description: "Not sure what’s healthy or when to step in? We help you understand what’s normal and how to respond.",
  },
  {
    icon: HeartCrack,
    title: "Social media and anxiety",
    description: "Seeing your child struggle is hard. Learn how to support their wellbeing in a connected world.",
  },
  {
    icon: Smartphone,
    title: "Smartphones and devices",
    description: "When is the right time? What rules should you set? We help you make confident decisions.",
  },
  {
    icon: ShieldAlert,
    title: "Online risks",
    description: "The digital world can feel overwhelming. We show you how to protect your child in a practical way.",
  },
  {
    icon: Users,
    title: "Cyberbullying",
    description: "If something happens, you need to know what to do. We help you recognise the signs and respond calmly.",
  },
]

export function ChallengesSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            If This Feels Familiar, You&apos;re Not Alone
          </h2>

          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Parenting in a digital world brings new challenges every day. Many parents feel unsure, overwhelmed, or worried about getting it right — and that’s completely normal.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <div
              key={challenge.title}
              className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20 hover:bg-card/80"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <challenge.icon className="h-6 w-6" />
              </div>

              <h3 className="text-lg font-semibold text-foreground">
                {challenge.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {challenge.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
