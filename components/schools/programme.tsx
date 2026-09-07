import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Clock,
  BadgeCheck,
  Gamepad2,
  EyeOff,
  UserX,
  Smartphone,
  Monitor,
  Heart,
  Calendar,
} from "lucide-react"

const modules = [
  {
    number: "01",
    title: "The Age of Technology",
    description: "Understanding the world our children are growing up in.",
    icon: Clock,
  },
  {
    number: "02",
    title: "Boundaries",
    description: "Creating practical and sustainable boundaries at home.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Gaming",
    description: "Understanding gaming and developing a balanced approach.",
    icon: Gamepad2,
  },
  {
    number: "04",
    title: "Pornography",
    description: "Helping parents navigate difficult conversations and online exposure.",
    icon: EyeOff,
  },
  {
    number: "05",
    title: "Bullying",
    description: "Understanding and responding to bullying in a connected world.",
    icon: UserX,
  },
  {
    number: "06",
    title: "Social Media & Anxiety",
    description: "Exploring the relationship between social media, pressure and wellbeing.",
    icon: Smartphone,
  },
  {
    number: "07",
    title: "Technology & Devices",
    description: "Making informed decisions about devices and their use.",
    icon: Monitor,
  },
  {
    number: "08",
    title: "Thriving as a Family",
    description: "Bringing the learning together to support healthier family life.",
    icon: Heart,
  },
]

export function SchoolsProgramme() {
  return (
    <section className="bg-secondary/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What Parents in Your School Experience
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A structured, expert-led programme covering the issues families are navigating every
            day.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {modules.map((module) => (
            <div key={module.number} className="rounded-xl border border-border/60 bg-card p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60">
                <module.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                {module.number}
              </p>
              <h3 className="mb-2 font-semibold tracking-tight text-foreground">{module.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-border/60 bg-card px-6 py-6 sm:px-8 sm:py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted/60">
                <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Upcoming Programme
                </p>
                <p className="mt-1.5 font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  Next Programme Starts 29 September 2026
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  4 live online sessions over 4 weeks
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  8 modules • Recordings available
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Led by Dr Richard Hogan, Family Psychotherapist
                </p>
              </div>
            </div>
            <Button variant="outline" asChild className="h-11 shrink-0 px-6 text-[15px] sm:self-center">
              <Link href="/programme">View the Full Programme</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
