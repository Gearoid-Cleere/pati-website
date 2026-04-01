import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function FinalCtaSection() {
  return (
    <section className="bg-secondary/50 py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          <span className="text-balance">Ready to Support Your Working Parents?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Book a call to discuss how PATI can fit into your wellbeing programme — or request information to share with your team.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button size="lg" className="h-14 gap-2 px-8 text-base font-semibold shadow-lg">
            Book a Call
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="h-14 gap-2 px-8 text-base">
            <Mail className="h-5 w-5" />
            Request Information
          </Button>
        </div>
      </div>
    </section>
  )
}
