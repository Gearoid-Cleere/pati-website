import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, User, GraduationCap, Building2 } from "lucide-react"

const actions = [
  {
    icon: User,
    label: "Parents",
    description: "Enrol in the programme",
    href: "/join",
    cta: "Enrol Now",
  },
  {
    icon: GraduationCap,
    label: "Schools",
    description: "Partner with PATI",
    href: "/schools",
    cta: "Register Your School",
  },
  {
    icon: Building2,
    label: "Organisations",
    description: "Explore corporate options",
    href: "/corporate",
    cta: "Corporate Enquiry",
  },
]

export function FinalCtaSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-20 sm:px-12 sm:py-24 lg:px-16">
          {/* Decorative elements */}
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20" />
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-accent/10" />

          <div className="relative mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              <span className="text-balance">
                Ready to Transform Your Approach to Digital Parenting?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/80">
              Join the growing community of parents, schools, and organisations building confident, connected families in the digital age.
            </p>
          </div>

          {/* Action cards */}
          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            {actions.map((action) => (
              <Link
                key={action.label}
                href={action.href}
                className="group flex flex-col items-center rounded-xl bg-primary-foreground/10 p-6 text-center backdrop-blur-sm transition-all hover:bg-primary-foreground/20"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
                  <action.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <p className="font-semibold text-primary-foreground">
                  {action.label}
                </p>
                <p className="mt-1 text-sm text-primary-foreground/70">
                  {action.description}
                </p>
                <span className="mt-4 inline-flex items-center text-sm font-medium text-primary-foreground group-hover:underline">
                  {action.cta}
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
