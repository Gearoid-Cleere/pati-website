import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ParentsHero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
              For Parents
            </p>

            <h1 className="font-serif text-[2.5rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem]">
              <span className="text-balance">Practical Guidance</span>
              <span className="mt-1 block text-balance">in a Digital World</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Questions around smartphones, gaming, social media, boundaries and family life are
              now part of everyday parenting. PATI provides practical, expert-led guidance to help
              you make more confident decisions at home.
            </p>

            <div className="mt-10 flex flex-col gap-4">
              <Button
                size="lg"
                asChild
                className="h-auto min-h-14 min-w-0 w-full max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:w-auto sm:px-8"
              >
                <Link href="/register/parent">
                  Join Independently <span className="whitespace-nowrap">· €79.95</span>
                </Link>
              </Button>

              <div>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="h-auto min-h-14 min-w-0 w-full max-w-full whitespace-normal border-primary/40 bg-primary/10 px-5 py-3 text-center text-[15px] font-medium leading-snug text-foreground shadow-none hover:bg-primary/15 hover:text-foreground sm:w-auto sm:px-8"
                >
                  <Link href="/register/school-parent">
                    Access Through Your School <span className="whitespace-nowrap">· €14.95</span>
                  </Link>
                </Button>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  For parents whose school is already registered with PATI.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="overflow-hidden rounded-2xl border border-border/60">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.youtube.com/embed/psmd2WOLVSA"
                  title="A message for parents from Dr Richard Hogan"
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="mt-5 font-serif text-xl font-medium text-foreground">Dr Richard Hogan</p>
            <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
              Family Psychotherapist
              <br />
              Co-Founder of the Parenting and Technology Institute (PATI)
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
