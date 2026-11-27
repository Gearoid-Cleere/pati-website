import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TECH_SAVVY_PROGRAMME_PATH } from "@/lib/programmes"

const registrationOptions = [
  {
    title: "Independent Parent",
    price: "€79.95",
    description:
      "Register directly for the full four-week programme. Zoom registration and access information will be sent before the programme begins.",
    href: "/register/ai/parent",
    cta: "Register as a parent",
  },
  {
    title: "School",
    price: "€199.95",
    description:
      "Enable your school to offer Parenting in the Age of AI to its parent community. Parents register individually for €14.95, and eligible teachers at participating schools receive free access.",
    href: "/register/ai/school",
    cta: "Register your school",
  },
] as const

export function AiProgrammeCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Registration is now open
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Parenting in the Age of AI begins Tuesday, 19 January 2027 and will be delivered live online over four Tuesday evenings at 7:00pm Ireland time.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:mt-14">
          {registrationOptions.map((option) => (
            <article
              key={option.title}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-8"
            >
              <h3 className="text-xl font-semibold tracking-tight text-foreground">
                {option.title}
              </h3>
              <p className="mt-3 text-lg font-semibold text-foreground">{option.price}</p>
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted-foreground">
                {option.description}
              </p>
              <div className="mt-8">
                <Button asChild className="h-11 w-full text-[15px]">
                  <Link href={option.href}>{option.cta}</Link>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl text-center">
          <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground">
            Already participating through a school or organisation?
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Use the dedicated registration link supplied by your school or organisation. Parents at participating schools register for €14.95, organisation participants register for €24.95, and eligible teachers at participating schools register free of charge.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-border/60 bg-background px-6 py-8 text-center sm:px-10">
          <h3 className="font-serif text-2xl font-normal tracking-tight text-foreground">
            Existing annual and funded access
          </h3>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Schools and organisations with current annual access, and schools participating through a funded programme, do not pay another institutional fee for the January programme. PATI will provide the appropriate participant and teacher registration links directly.
          </p>
          <div className="mt-8">
            <Button asChild variant="outline" className="h-11 px-8 text-[15px]">
              <Link href="/contact">Contact PATI</Link>
            </Button>
          </div>
        </div>

        <p className="mt-10 text-center">
          <Link
            href={TECH_SAVVY_PROGRAMME_PATH}
            className="text-[15px] font-medium text-foreground underline-offset-4 hover:underline"
          >
            View Parenting the Tech-Savvy Child
          </Link>
        </p>
      </div>
    </section>
  )
}
