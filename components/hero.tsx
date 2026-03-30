import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-32 pt-24 sm:px-8 lg:px-12 lg:pb-40 lg:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          {/* Institute badge */}
          <div className="mb-10 lg:mb-12">
            <span className="inline-flex items-center border-b border-border pb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              Parenting & Technology Institute
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">
              Helping Families Navigate
              <br className="hidden sm:block" />
              Technology with Confidence
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mt-10 lg:text-xl">
            Expert-led programmes supporting families, schools and organisations to manage children&apos;s technology use with clarity and confidence.
          </p>
          
          {/* Primary CTAs */}
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-16">
            <Button 
              size="lg" 
              asChild 
              className="h-14 min-w-[200px] px-8 text-[15px] font-medium"
            >
              <Link href="/register-school">
                Register Your School
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              asChild 
              className="h-14 min-w-[200px] border px-8 text-[15px] font-medium"
            >
              <Link href="/join-parent">Join as a Parent</Link>
            </Button>
          </div>
          
          {/* Tertiary link */}
          <div className="mt-10">
            <Link
              href="/corporate"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Looking for corporate wellbeing solutions?
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
