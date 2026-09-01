import Link from "next/link"
import { GraduationCap, Users, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const pathways = [
  {
    icon: GraduationCap,
    label: "School",
    title: "Bring PATI to Your School.",
    prices: [
      { label: "School registration", value: "€499.95" },
      { label: "Parent access", value: "€14.95 per parent" },
    ],
    primaryHref: "/register/school",
    primaryCta: "Register Your School",
    secondaryHref: "/schools",
    secondaryCta: "Learn More",
  },
  {
    icon: Building2,
    label: "Organisation",
    title: "Support Parents in Your Organisation.",
    prices: [
      { label: "Organisation registration", value: "€999.95" },
      { label: "User access", value: "€24.95 per user" },
    ],
    primaryHref: "/register/organisation",
    primaryCta: "Register Your Organisation",
    secondaryHref: "/organisations",
    secondaryCta: "Learn More",
  },
  {
    icon: Users,
    label: "Parent",
    title: "Join PATI Independently.",
    prices: [{ label: "Complete programme", value: "€79.95" }],
    primaryHref: "/register/parent",
    primaryCta: "Join as a Parent",
    secondaryHref: "/programme",
    secondaryCta: "View the Programme",
  },
]

export function PathwayCards() {
  return (
    <section id="access" className="scroll-mt-24 bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            How to Join
          </p>

          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Choose the pathway that fits you
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {pathways.map((pathway) => (
            <div
              key={pathway.label}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-foreground/[0.03] lg:p-10"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-muted/60">
                <pathway.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>

              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">
                {pathway.label}
              </p>

              <h3 className="mb-6 text-xl font-semibold tracking-tight text-foreground">
                {pathway.title}
              </h3>

              <ul className="mb-8 flex-grow space-y-3">
                {pathway.prices.map((price) => (
                  <li key={price.label}>
                    <p className="text-sm text-muted-foreground">{price.label}</p>
                    <p className="text-lg font-semibold text-foreground">{price.value}</p>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-3">
                <Button asChild className="h-11 w-full text-[15px]">
                  <Link href={pathway.primaryHref}>{pathway.primaryCta}</Link>
                </Button>
                <Button asChild variant="outline" className="h-11 w-full text-[15px]">
                  <Link href={pathway.secondaryHref}>{pathway.secondaryCta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
