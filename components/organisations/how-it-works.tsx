import Link from "next/link"
import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    stage: "Register",
    title: "Register your organisation",
    description: (
      <>
        Join PATI for <span className="font-medium text-foreground">€999.95</span>.
      </>
    ),
  },
  {
    number: "02",
    stage: "Share",
    title: "Receive your unique link",
    description: "We'll send you a private organisation link to share.",
  },
  {
    number: "03",
    stage: "Join",
    title: "Parents register",
    description: (
      <>
        Each participant registers and pays{" "}
        <span className="font-medium text-foreground">€24.95</span> directly to PATI.
      </>
    ),
  },
  {
    number: "04",
    stage: "PATI Delivers",
    title: "We take it from there",
    description:
      "PATI manages programme information, joining details and participant communications.",
  },
]

export function OrganisationsHowItWorks() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-20 max-w-3xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Simple for Your Organisation.
            <span className="block">Valuable for Parents.</span>
          </h2>
        </div>

        <div className="relative">
          <span
            className="pointer-events-none absolute top-7 right-[6%] left-[6%] hidden h-px bg-primary/20 lg:block"
            aria-hidden="true"
          />
          <span
            className="pointer-events-none absolute top-3 bottom-3 left-5 w-px bg-primary/20 lg:hidden"
            aria-hidden="true"
          />

          <ol className="grid gap-y-16 lg:grid-cols-4 lg:gap-x-12 lg:gap-y-0 xl:gap-x-16">
            {steps.map((step) => (
              <li key={step.number} className="relative flex gap-6 lg:block">
                <p className="relative z-10 w-10 shrink-0 bg-background text-center font-serif text-2xl font-normal leading-10 tracking-tight text-primary lg:mx-auto lg:mb-10 lg:w-auto lg:px-1.5 lg:text-[2.5rem] lg:leading-none">
                  {step.number}
                </p>
                <div className="min-w-0 pt-1 lg:pt-0 lg:text-center">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    {step.stage}
                  </p>
                  <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="mx-auto mt-20 max-w-2xl text-center text-[15px] leading-relaxed text-muted-foreground">
          No need to collect individual payments or administer parent registrations internally.
        </p>

        <div className="mt-10 text-center">
          <Button size="lg" asChild className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8">
            <Link href="/register/organisation">
              Register Your Organisation <span className="whitespace-nowrap">· €999.95</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
