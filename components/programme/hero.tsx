import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar } from "lucide-react"

export function ProgrammeHero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            The PATI Programme
          </p>

          <h1 className="font-serif text-[2.5rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
            <span className="text-balance">A Structured Programme for Parents</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mt-8 lg:text-xl">
            Practical, expert-led guidance for navigating technology, teenagers and family life.
          </p>

          <div className="mx-auto mt-10 max-w-xl rounded-2xl border border-border/60 bg-card px-6 py-6 text-left sm:px-8 sm:py-7">
            <div className="flex gap-4">
              <div className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-muted/60">
                <Calendar className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                  Next Programme Starts
                </p>
                <p className="mt-1.5 font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl">
                  29 September 2026
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  4 live online sessions over 4 weeks
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  8 modules • Recordings available
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  Led by Dr Richard Hogan, Family Psychotherapist
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="h-auto min-h-14 min-w-0 w-full max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:w-auto sm:px-8"
            >
              <Link href="/register/parent">
                Join Independently <span className="whitespace-nowrap">· €79.95</span>
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-auto min-h-14 min-w-0 w-full max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:w-auto sm:px-8"
            >
              <Link href="#access">Choose How to Access</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
