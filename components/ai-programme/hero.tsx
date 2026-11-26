import { aiProgramme } from "@/lib/programmes"

export function AiProgrammeHero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Upcoming Programme
          </p>

          <h1 className="font-serif text-[2.5rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
            <span className="text-balance">{aiProgramme.title}</span>
          </h1>

          <p className="mx-auto mt-6 text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {aiProgramme.duration}
          </p>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mt-8 lg:text-xl">
            {aiProgramme.description}
          </p>
        </div>
      </div>
    </section>
  )
}
