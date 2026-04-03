import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Explore how this could work in your organisation</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          We work with a limited number of organisations at any one time to ensure quality and impact.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          If you are exploring new ways to support employees and working parents, we would be happy to speak.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-14 gap-2 px-8 text-base font-semibold shadow-lg">
            Book a Call
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 gap-2 px-8 text-base">
            <Calendar className="h-5 w-5" />
            Join the Next Executive Briefing
          </Button>
        </div>
      </div>
    </section>
  )
}
