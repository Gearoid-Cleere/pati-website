import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CorporateFeature() {
  return (
    <section className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="rounded-3xl border border-border bg-secondary/20 p-8 md:p-12 lg:p-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:gap-14">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
                Work, Family Life & Technology
              </p>

              <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
                Supporting working families in a digital world
              </h2>

              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The pressures created by children’s technology use do not stay at home. For many working parents, concerns around smartphones, gaming, social media, sleep and online safety can affect stress, focus and wellbeing at work.
              </p>

              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                The Institute works with organisations seeking to support employees in a practical, thoughtful and non-judgemental way.
              </p>
            </div>

            <div className="flex justify-start lg:justify-end">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="h-13 px-8 text-[15px] font-medium"
              >
                <Link href="/organisations">
                  For Organisations
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
