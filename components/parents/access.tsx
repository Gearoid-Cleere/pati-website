import Link from "next/link"
import { Button } from "@/components/ui/button"

const included = [
  "4 live online sessions",
  "Structured 8-module programme",
  "Recordings available",
  "Programme resources and materials",
  "Expert-led delivery",
  "Programme and joining information sent after registration",
]

export function ParentsAccess() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Choose How You Join
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Independent access is open to all parents. The school price is available only where
            your school is already registered with PATI.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-border/60 bg-card p-8 shadow-sm lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
              Independent Access
            </p>
            <p className="mt-5 font-serif text-5xl font-normal tracking-tight text-foreground">
              €79.95
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              For parents joining PATI directly.
            </p>
            <Button
              size="lg"
              asChild
              className="mt-8 h-auto min-h-14 w-full min-w-0 whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug"
            >
              <Link href="/register/parent">
                Join Independently <span className="whitespace-nowrap">· €79.95</span>
              </Link>
            </Button>
          </div>

          <div className="rounded-2xl border border-border/40 bg-secondary/20 p-8 lg:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
              School Access
            </p>
            <p className="mt-5 font-serif text-5xl font-normal tracking-tight text-foreground">
              €14.95
            </p>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              For parents whose school is already registered with PATI.
            </p>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="mt-8 h-auto min-h-14 w-full min-w-0 whitespace-normal border-primary/40 bg-primary/10 px-5 py-3 text-center text-[15px] font-medium leading-snug text-foreground shadow-none hover:bg-primary/15 hover:text-foreground"
            >
              <Link href="/register/school-parent">
                Access Through Your School <span className="whitespace-nowrap">· €14.95</span>
              </Link>
            </Button>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-4xl text-center text-[15px] text-muted-foreground">
          Would you like your school to join PATI?{" "}
          <Link href="/schools" className="font-medium text-foreground underline-offset-4 hover:underline">
            Find out how PATI works with schools
          </Link>
        </p>

        <div className="mx-auto mt-12 max-w-3xl">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-accent">
            What&apos;s Included
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {included.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
