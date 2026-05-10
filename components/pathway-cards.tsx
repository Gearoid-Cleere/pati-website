import Link from "next/link"
import { GraduationCap, Users, Building2, ArrowRight } from "lucide-react"

const pathways = [
  {
    icon: Users,
    title: "Parents",
    description:
      "Guidance that helps parents feel more confident, capable and supported as they navigate technology, boundaries and modern family life.",
    href: "/parents",
    cta: "Explore support for parents",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description:
      "Programmes and resources that help schools support parents with practical, trusted guidance around children’s technology use and wellbeing.",
    href: "/schools",
    cta: "Explore support for schools",
  },
  {
    icon: Building2,
    title: "Organisations",
    description:
      "Support for employers seeking to help working parents manage the pressures of family life, technology and digital wellbeing at home.",
    href: "/organisations",
    cta: "Explore support for organisations",
  },
]

export function PathwayCards() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Who We Support
          </p>

          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Supporting families, schools and organisations
          </h2>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The Institute works across the places where technology is now shaping family life — at home, in school communities, and within organisations supporting working parents.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-foreground/[0.03] lg:p-10"
            >
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-muted/60">
                <pathway.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>

              <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                {pathway.title}
              </h3>

              <p className="mb-8 flex-grow text-[15px] leading-relaxed text-muted-foreground">
                {pathway.description}
              </p>

              <Link
                href={pathway.href}
                className="group/link inline-flex items-center gap-2 text-[15px] font-medium text-primary transition-colors hover:text-primary/80"
              >
                {pathway.cta}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
