"use client"

import {
  Clock,
  BadgeCheck,
  Gamepad2,
  EyeOff,
  UserX,
  Smartphone,
  Monitor,
  Heart,
} from "lucide-react"

const modules = [
  {
    number: "M1",
    title: "Age of Technology",
    description: "Understanding the digital world children are growing up in",
    icon: Clock,
  },
  {
    number: "M2",
    title: "Boundaries",
    description: "Setting healthy limits around devices and screen time",
    icon: BadgeCheck,
  },
  {
    number: "M3",
    title: "Gaming",
    description: "Managing gaming habits and understanding what parents need to know",
    icon: Gamepad2,
  },
  {
    number: "M4",
    title: "Pornography",
    description: "How to protect children and approach difficult conversations",
    icon: EyeOff,
  },
  {
    number: "M5",
    title: "Bullying",
    description: "Recognising issues early and responding well",
    icon: UserX,
  },
  {
    number: "M6",
    title: "Social Media & Anxiety",
    description: "Understanding the link between online life and wellbeing",
    icon: Smartphone,
  },
  {
    number: "M7",
    title: "Technology & Devices",
    description: "Practical guidance on phones, apps, and device use at home",
    icon: Monitor,
  },
  {
    number: "M8",
    title: "Thriving as a Family",
    description: "Building a healthier family relationship with technology",
    icon: Heart,
  },
]

export function ModulesSection() {
  return (
    <section id="modules" className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            What You’ll Learn
          </p>

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            A structured programme built around the real issues parents face
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The PATI programme is delivered across eight focused modules, giving you practical guidance on the key technology issues affecting family life today.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module, index) => {
            const IconComponent = module.icon

            return (
              <div
                key={index}
                className="rounded-xl border border-border bg-card p-6 transition-all hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                  <IconComponent className="h-6 w-6 text-foreground/70" />
                </div>

                <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  {module.number}
                </p>

                <h3 className="mb-1 font-semibold text-foreground">
                  {module.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-sm text-muted-foreground">
            Delivered as a structured 8-module programme (M1–M8) across 4 live online sessions, with recordings available for flexibility.
          </p>
        </div>
      </div>
    </section>
  )
}
