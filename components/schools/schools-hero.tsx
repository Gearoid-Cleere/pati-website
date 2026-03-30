import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SchoolsHero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-28 pt-20 sm:px-8 lg:px-12 lg:pb-36 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="mb-10 lg:mb-12">
            <span className="inline-flex items-center border-b border-border pb-2 text-[11px] font-medium uppercase tracking-[0.25em] text-muted-foreground">
              For Schools
            </span>
          </div>
          
          {/* Main headline */}
          <h1 className="font-serif text-[2.5rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4rem]">
            <span className="text-balance">
              Support Your Parent Community with PATI
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground lg:mt-10 lg:text-xl">
            A ready-to-run technology wellbeing programme designed for schools. Equip parents with practical tools to navigate their children&apos;s digital lives with confidence.
          </p>
          
          {/* CTAs */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-14">
            <Button 
              size="lg" 
              asChild 
              className="h-14 min-w-[220px] px-8 text-[15px] font-medium"
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
              className="h-14 min-w-[220px] border px-8 text-[15px] font-medium"
            >
              <Link href="/contact">Request Information Pack</Link>
            </Button>
          </div>
          
          {/* Trust line */}
          <p className="mt-12 text-sm text-muted-foreground">
            Trusted by 80+ schools across Ireland
          </p>
        </div>
      </div>
    </section>
  )
}
