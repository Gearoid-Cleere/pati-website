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
  ArrowRight,
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

export function ProgrammeOverview() {
  return (
    <section className="bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            The PATI Programme
          </p>

          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            One Programme. The Parenting Challenges That Matter Now.
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The &apos;Parenting the Tech-Savvy Child&apos; programme is delivered across eight focused modules, giving parents practical guidance on the key technology challenges facing families today.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {modules.map((module) => (
            <div
              key={module.number}
              className="rounded-xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-border hover:shadow-md"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60">
                <module.icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.5}
                />
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                {module.number}
              </p>

              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {module.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-sm text-muted-foreground">
          Delivered as a structured 8-module programme (M1–M8) across 4 live online sessions, with recordings available for flexibility.
        </p>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-13 px-8 text-[15px]"
          >
            <Link href="/programme">
              Explore the Full Programme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
