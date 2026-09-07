import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function OrganisationsHero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            For Organisations
          </p>

          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">Support the Parents in Your Organisation</span>
          </h1>

          <div className="mx-auto mt-6 max-w-2xl lg:mt-8">
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Parenting in a rapidly changing digital world can be challenging. PATI gives parents
              practical, expert-led guidance to help them navigate technology, teenagers and family
              life with greater confidence.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              One organisation registration. A simple way to give parents across your organisation
              access to the PATI programme.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
            <Button size="lg" asChild className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8">
              <Link href="/register/organisation">
                <span className="min-w-0">
                  Register Your Organisation <span className="whitespace-nowrap">· €999.95</span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-[15px] font-medium">
              <Link href="/programme">Explore the Programme</Link>
            </Button>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Organisation registration €999.95. Participating employees/parents register individually
            for €24.95.
          </p>
        </div>
      </div>
    </section>
  )
}
