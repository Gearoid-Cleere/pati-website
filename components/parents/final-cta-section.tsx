import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  return (
    <section id="join" className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            Start your PATI journey today
          </h2>
          <p className="mt-4 text-pretty text-lg text-primary-foreground/80">
            Join thousands of parents who have transformed their approach to
            technology in the home.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="bg-primary-foreground text-primary shadow-md hover:bg-primary-foreground/90"
            >
              <Link href="/register">Join the Programme</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <Link href="/programme">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
