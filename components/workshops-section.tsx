"use client"

import {
  CheckCircle2,
  Clock,
  BadgeCheck,
  Gamepad2,
  EyeOff,
  Users,
  Smartphone,
  Monitor,
  Heart,
} from "lucide-react"

const modules = [
  { title: "Age of Technology", description: "Understanding the digital landscape", icon: Clock },
  { title: "Boundaries", description: "Setting healthy limits", icon: BadgeCheck },
  { title: "Gaming", description: "Managing gaming habits", icon: Gamepad2 },
  { title: "Pornography", description: "Protection and conversations", icon: EyeOff },
  { title: "Bullying", description: "Prevention and response", icon: Users },
  { title: "Social Media & Anxiety", description: "Mental health impacts", icon: Smartphone },
  { title: "Technology & Devices", description: "Practical device management", icon: Monitor },
  { title: "Thriving as a Family", description: "Building healthy relationships", icon: Heart },
]

const included = [
  "Expert facilitator for every session",
  "Promotional emails and newsletter copy",
  "Social media graphics and printable flyers",
  "Parent handouts and take-home guides",
  "Access to session recordings",
  "Attendance reports and impact summary",
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
            Parents take part in expert-led sessions focused on the real challenges of raising children in a digital world, with practical guidance they can apply at home.
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
            Schools can select individual modules or run the full programme across a series of sessions.
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
              Everything needed to deliver a high-quality parent experience, with practical support for families and minimal additional workload for your school.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
