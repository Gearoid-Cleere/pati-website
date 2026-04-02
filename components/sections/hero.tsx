import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-24 sm:py-32 lg:py-40">
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-accent/5" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-primary/5" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          {/* Institute badge */}
          <div className="mb-8 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
            <span className="text-sm font-medium text-primary">
              Parenting &amp; Technology Institute
            </span>
          </div>

          <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              The PATI Programme
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-foreground/80 sm:text-2xl">
            A comprehensive 4-week programme equipping parents with expert knowledge and practical tools to guide their children through the digital age.
          </p>
          
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground">
            8 structured modules. Live expert sessions. Practical strategies for real family life.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
              <Link href="/join">
                Enrol Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base w-full sm:w-auto">
              <Link href="#download">
                <Download className="mr-2 h-4 w-4" />
                Download Programme Guide
              </Link>
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Expert-led delivery
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Evidence-based approach
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Practical application
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
