import Link from "next/link"
import { Button } from "@/components/ui/button"

const themes = [
  {
    title: "Expert-led education",
    description:
      "Led by experienced professionals, the programme is grounded in real-world understanding of family dynamics and child development.",
  },
  {
    title: "Structured curriculum",
    description:
      "An eight-module programme delivered across live online sessions, with recordings available, covering the technology challenges families face today.",
  },
  {
    title: "Research-informed development",
    description:
      "Programmes are shaped by current thinking, emerging issues, and practical insights into family life and childhood today.",
  },
  {
    title: "Continuous improvement",
    description:
      "The Institute continues to develop its programmes as research and the realities of childhood in a digital world continue to evolve.",
  },
]

export function WhyPatiSection() {
  return (
    <section className="bg-secondary/20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-14 max-w-3xl text-center lg:mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Why PATI
          </p>

          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            More Than a Webinar Series
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {themes.map((theme) => (
            <div
              key={theme.title}
              className="rounded-2xl border border-border/60 bg-card p-8"
            >
              <h3 className="mb-3 font-serif text-xl font-medium text-primary">
                {theme.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-[15px]">
            <Link href="/about">About PATI</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-[15px]">
            <Link href="/research">Research</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="h-12 px-8 text-[15px]">
            <Link href="/leadership">Leadership</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
