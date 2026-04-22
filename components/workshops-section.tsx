"use client"

import {
  CheckCircle2,
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
  { title: "M1: Age of Technology", description: "Understanding the digital world children are growing up in", icon: Clock },
  { title: "M2: Boundaries", description: "Setting healthy limits around devices and screen time", icon: BadgeCheck },
  { title: "M3: Gaming", description: "Managing gaming habits and understanding what parents need to know", icon: Gamepad2 },
  { title: "M4: Pornography", description: "How to protect children and approach difficult conversations", icon: EyeOff },
  { title: "M5: Bullying", description: "Recognising issues early and responding well", icon: UserX },
  { title: "M6: Social Media & Anxiety", description: "Understanding the link between online life and wellbeing", icon: Smartphone },
  { title: "M7: Technology & Devices", description: "Practical guidance on phones, apps, and device use at home", icon: Monitor },
  { title: "M8: Thriving as a Family", description: "Building a healthier family relationship with technology", icon: Heart },
]

const included = [
  "Live online sessions led by Dr Richard Hogan",
  "Ready-to-send parent communications",
  "Promotional materials for the school",
  "Parent handouts and practical take-home resources",
  "Access to session recordings",
  "A simple, low-effort process for school staff",
]

export function WorkshopsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            What Parents Experience
          </p>

          <h2 className="mb-6 text-3xl font-bold text-foreground text-balance md:text-4xl">
            A structured programme covering the topics families care about most
          </h2>

          <p className="text-lg text-muted-foreground">
            Parents take part in practical, expert-led sessions focused on the real challenges of raising children in a digital world, with guidance they can apply at home straight away.
          </p>
        </div>

        <div className="mb-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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

        <div className="mb-12 text-center">
          <p className="text-sm text-muted-foreground">
            Delivered as a structured 8-module programme (M1–M8) over 4 weeks, each session builds practical understanding and confidence for parents week by week.
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-8 lg:p-10">
          <div className="mx-auto max-w-3xl">
            <h3 className="mb-8 text-center text-2xl font-bold text-foreground">
              What Is Included
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-accent" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-center text-sm text-muted-foreground">
              Everything is designed to create a high-quality parent experience while keeping the process straightforward for your school.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
