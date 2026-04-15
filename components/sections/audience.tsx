import Link from "next/link"
import { Button } from "@/components/ui/button"
import { User, GraduationCap, Building2, ArrowRight } from "lucide-react"

const audiences = [
  {
    icon: User,
    title: "Parents",
    subtitle: "Individual Enrolment",
    description:
      "Join the PATI Programme as an individual parent. Access all eight modules, live sessions with our expert facilitators, and on-demand recordings. Gain the knowledge and confidence to guide your children through the digital age.",
    features: [
      "Full programme access",
      "Live and recorded sessions",
      "Practical resources and guides",
    ],
    cta: "Enrol as a Parent",
    href: "/parents",
    highlight: false,
  },
  {
    icon: GraduationCap,
    title: "Schools",
    subtitle: "Community Programmes",
    description:
      "Offer the PATI Programme to your school community. Support parents with structured guidance on digital parenting, strengthen your safeguarding approach, and demonstrate commitment to family wellbeing.",
    features: [
      "Group licensing options",
      "Co-branded delivery",
      "Parent engagement support",
    ],
    cta: "Partner as a School",
    href: "/schools",
    highlight: true,
  },
  {
    icon: Building2,
    title: "Organisations",
    subtitle: "Employee Benefit",
    description:
      "Provide the PATI Programme as a valuable benefit for working parents. Support employee wellbeing, demonstrate family-friendly values, and help your people navigate one of the most challenging aspects of modern parenting.",
    features: [
      "Corporate licensing",
      "Flexible delivery options",
      "Reporting and insights",
    ],
    cta: "Corporate Enquiry",
    href: "/organisations",
    highlight: false,
  },
]

export function AudienceSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Who the Programme Is For
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            The PATI Programme supports parents wherever they engage—whether directly, through schools, or via their workplace.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className={`relative flex flex-col overflow-hidden rounded-xl border p-8 ${
                audience.highlight
                  ? "border-primary bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              {audience.highlight && (
                <div className="absolute -right-8 top-6 rotate-45 bg-primary px-10 py-1 text-xs font-medium text-primary-foreground">
                  Popular
                </div>
              )}

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-muted">
                <audience.icon className="h-7 w-7 text-primary" />
              </div>

              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                {audience.subtitle}
              </p>

              <h3 className="mt-1 text-2xl font-semibold text-foreground">
                {audience.title}
              </h3>

              <p className="mt-4 flex-1 leading-relaxed text-muted-foreground">
                {audience.description}
              </p>

              <ul className="mt-6 space-y-2 border-t border-border pt-6">
                {audience.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-6 w-full"
                variant={audience.highlight ? "default" : "outline"}
              >
                <Link href={audience.href}>
                  {audience.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
