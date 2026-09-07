import Link from "next/link"
import { Button } from "@/components/ui/button"

const included = [
  "Annual school registration and ongoing PATI partnership",
  "Ready-to-share parent communications and registration information",
  "Access to the PATI parent programme for your school community",
  "Live online programme delivery",
  "Programme recordings and resources",
  "Direct PATI communication with registered parents",
  "Ongoing collaboration with your school around parent participation",
]

export function SchoolsPricing() {
  return (
    <section className="bg-secondary/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Bring PATI to Your School
          </h2>
        </div>

        <div className="mx-auto max-w-xl rounded-2xl border border-border/60 bg-card p-8 shadow-sm lg:p-10">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Annual School Registration
          </p>

          <p className="mt-5 font-serif text-5xl font-normal tracking-tight text-foreground">
            €499.95
          </p>

          <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
            Your school&apos;s annual registration with PATI. PATI provides the programme,
            ready-to-share communications and delivery; your school provides the connection to
            parents.
          </p>

          <div className="mt-8 border-t border-border/60 pt-6">
            <p className="font-medium text-foreground">Parents from registered schools: €14.95 each</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Parents register individually for €14.95. Once registered, PATI communicates directly
              with those parents about their participation.
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
            <Link href="/register/school">
              Register Your School <span className="whitespace-nowrap">· €499.95</span>
            </Link>
          </Button>

          <p className="mt-4 text-center text-sm text-muted-foreground">Secure payment through Stripe.</p>
        </div>
      </div>
    </section>
  )
}
