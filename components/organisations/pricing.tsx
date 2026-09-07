import Link from "next/link"
import { Button } from "@/components/ui/button"

const included = [
  "Organisation registration with PATI",
  "Unique organisation registration link",
  "Access to the complete PATI parent programme for registered participants",
  "Live online programme delivery",
  "Programme recordings",
  "Participant communications managed by PATI",
]

export function OrganisationsPricing() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            A Simple Model for Organisations
          </h2>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border border-border/60 bg-card p-8 shadow-sm lg:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Bring PATI to Your Organisation
          </p>

          <p className="mt-5 font-serif text-5xl font-normal tracking-tight text-foreground">€999.95</p>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Provides your organisation with access to the PATI organisational programme pathway and a
            unique registration link to share with your people.
          </p>

          <div className="mt-8 border-t border-border/60 pt-6">
            <p className="font-medium text-foreground">Participating employee/parent: €24.95 each</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Each participant registers and pays PATI directly using your organisation&apos;s private
              registration link.
            </p>
          </div>

          <p className="mt-8 text-sm font-medium text-foreground">Included</p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-muted-foreground">
            {included.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" asChild className="mt-10 h-auto min-h-14 w-full min-w-0 whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8">
            <Link href="/register/organisation">
              Register Your Organisation <span className="whitespace-nowrap">· €999.95</span>
            </Link>
          </Button>

          <p className="mt-4 text-center text-sm text-muted-foreground">Secure payment through Stripe.</p>
        </div>
      </div>
    </section>
  )
}
