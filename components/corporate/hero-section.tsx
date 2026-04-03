import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-20 md:py-28 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.04),transparent_50%)]" />
      
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          
          {/* Left Content */}
          <div className="max-w-xl">
            
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Corporate Wellbeing Programme
            </p>

            <h1 className="font-serif text-4xl font-medium leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">
                Supporting working parents
                <br className="hidden sm:block" />
                in the digital age
              </span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              A structured, year-round programme designed to reduce family-related stress, strengthen employee wellbeing, and improve engagement across your organisation.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              
              <Button size="lg" className="h-14 gap-2 px-8 text-base font-semibold shadow-lg">
                Book a Call
                <ArrowRight className="h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="h-14 gap-2 px-8 text-base">
                <Download className="h-5 w-5" />
                Get Corporate Overview
              </Button>

            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-secondary">
              <div className="flex h-full items-center justify-center">
                
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    <svg
                      className="h-10 w-10 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>

                  <p className="text-sm font-medium text-muted-foreground">
                    Supporting working families
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
