import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ShieldCheck,
  Gamepad2,
  EyeOff,
  UserX,
  Smartphone,
  Laptop,
  ArrowRight,
} from "lucide-react"

const themes = [
  {
    icon: ShieldCheck,
    title: "Boundaries & confidence",
    description:
      "Helping families create clearer expectations and reduce conflict around technology at home.",
  },
  {
    icon: Gamepad2,
    title: "Gaming & screen time",
    description:
      "Understanding gaming habits, motivation, limits and family pressure points.",
  },
  {
    icon: Smartphone,
    title: "Social media & wellbeing",
    description:
      "Supporting healthier conversations around anxiety, identity and online life.",
  },
  {
    icon: EyeOff,
    title: "Online risks & exposure",
    description:
      "Helping parents approach difficult topics calmly, clearly and practically.",
  },
  {
    icon: UserX,
    title: "Bullying & online behaviour",
    description:
      "Supporting families and schools to respond to harmful online interactions.",
  },
  {
    icon: Laptop,
    title: "Devices & skills",
    description:
      "Building practical digital skills, routines and habits that support healthier family life.",
  },
]

export function ProgrammeOverview() {
  return (
    <section className="bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Areas of Guidance
          </p>

          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Practical support for the issues families are facing now
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Our programmes translate research, clinical insight and real-world experience into practical guidance across the areas where technology is creating the greatest pressure for families, schools and organisations.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-border hover:shadow-md lg:p-8"
            >
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60">
                <theme.icon
                  className="h-5 w-5 text-primary"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {theme.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-13 px-8 text-[15px]"
          >
            <Link href="/programme">
              Explore programme themes
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
