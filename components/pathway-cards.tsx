import Link from "next/link"
import { GraduationCap, Users, Building2, ArrowRight } from "lucide-react"

const pathways = [
  {
    icon: GraduationCap,
    title: "For Schools",
    description:
      "Support your parent community with a ready-to-run technology wellbeing programme. Comprehensive materials and ongoing support included.",
    href: "/schools",
    cta: "Explore Schools Programme",
  },
  {
    icon: Users,
    title: "For Parents",
    description:
      "Practical guidance for managing children's technology use with confidence. Access live workshops and on-demand resources.",
    href: "/parents",
    cta: "Explore Parents Programme",
  },
  {
    icon: Building2,
    title: "For Organisations",
    description:
      "Support working parents through expert-led corporate wellbeing sessions. Tailored programmes for your workforce.",
    href: "/corporate",
    cta: "Explore Corporate Wellbeing",
  },
]

export function PathwayCards() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Choose Your Pathway
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Tailored programmes designed for your specific needs
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-3 lg:gap-10">
          {pathways.map((pathway) => (
            <div
              key={pathway.title}
              className="group flex flex-col rounded-2xl border border-border/60 bg-card p-10 transition-all duration-300 hover:border-border hover:shadow-lg hover:shadow-foreground/[0.03] lg:p-12"
            >
              {/* Icon */}
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-xl bg-muted/60">
                <pathway.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              
              {/* Content */}
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                {pathway.title}
              </h3>
              <p className="mb-10 flex-grow text-[15px] leading-relaxed text-muted-foreground">
                {pathway.description}
              </p>
              
              {/* CTA */}
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
