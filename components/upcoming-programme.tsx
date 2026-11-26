import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AI_PROGRAMME_PATH, TECH_SAVVY_PROGRAMME_PATH, aiProgramme } from "@/lib/programmes"

export function UpcomingProgramme() {
  return (
    <section className="bg-secondary/20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-12">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Upcoming Programme
          </p>

          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            {aiProgramme.title}
          </h2>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {aiProgramme.duration}
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {aiProgramme.description}
          </p>
        </div>

        <p className="mb-12 text-center font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl lg:mb-16">
          {aiProgramme.startDate}
        </p>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {aiProgramme.modules.map((module) => (
            <div
              key={module.number}
              className="rounded-xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-border hover:shadow-md"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                {module.number}
              </p>
              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {module.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {module.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" asChild className="h-13 px-8 text-[15px]">
            <Link href={AI_PROGRAMME_PATH}>
              Explore the programme
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="mt-6 text-sm text-muted-foreground">
            Also available:{" "}
            <Link
              href={TECH_SAVVY_PROGRAMME_PATH}
              className="font-medium text-foreground underline-offset-4 hover:underline"
            >
              Parenting the Tech-Savvy Child
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
