import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AI_PROGRAMME_PATH, aiProgramme } from "@/lib/programmes"

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Upcoming Programme
          </p>

          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">{aiProgramme.title}</span>
          </h1>

          <p className="mx-auto mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {aiProgramme.startDate}
          </p>

          <div className="mx-auto mt-6 max-w-2xl lg:mt-8">
            <p className="text-lg leading-relaxed text-muted-foreground lg:text-xl">
              {aiProgramme.description}
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-[15px] font-medium"
            >
              <Link href={AI_PROGRAMME_PATH}>
                Explore the programme
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-14 px-8 text-[15px] font-medium"
            >
              <a href="#access">Choose How to Join</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
