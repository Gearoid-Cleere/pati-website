import Link from "next/link"
import { GraduationCap, Building2, Users } from "lucide-react"

const routes = [
  {
    icon: GraduationCap,
    label: "I’m a School",
    href: "/register/school",
  },
  {
    icon: Building2,
    label: "I’m an Organisation",
    href: "/register/organisation",
  },
  {
    icon: Users,
    label: "I’m a Parent",
    href: "/register/parent",
  },
]

export function FinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Ready to Get Started?
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-14">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className="group flex flex-col items-center rounded-2xl border border-border/60 bg-card p-8 transition-all hover:border-border hover:shadow-lg hover:shadow-foreground/[0.03]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-muted/60">
                <route.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-[15px] font-medium text-foreground">
                {route.label}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
