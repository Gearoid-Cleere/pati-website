import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SchoolsHero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            For Schools
          </p>

          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">Expert Parent Education,</span>
            <span className="mt-1 block text-balance">Delivered for You.</span>
          </h1>

          <div className="mx-auto mt-6 max-w-2xl lg:mt-8">
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
              Give parents in your school access to practical, expert-led education around
              technology, teenagers and family life — without having to create or deliver another
              parent education programme themselves.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
            <Button size="lg" asChild className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8">
              <Link href="/register/school">
                <span className="min-w-0">
                  Register Your School <span className="whitespace-nowrap">· €499.95</span>
                </span>
                <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-14 px-8 text-[15px] font-medium">
              <Link href="/programme">Explore the Programme</Link>
            </Button>
          </div>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Annual School Registration €499.95. Parents from registered schools join individually
            for €14.95.
          </p>
        </div>
      </div>
    </section>
  )
}
