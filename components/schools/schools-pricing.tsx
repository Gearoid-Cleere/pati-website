import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

const includedFeatures = [
  "Full 8-module programme for unlimited parents",
  "Live delivery of all sessions by PATI",
  "Recordings available for all parents",
  "Weekly resources and practical guides",
  "Promotional materials for your school",
  "Dedicated support throughout delivery",
  "Free access for all teaching staff",
  "Registered PATI School status",
]

export function SchoolsPricing() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            One programme fee covers your entire school community
          </p>
        </div>
        
        {/* Pricing card */}
        <div className="mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-background p-10 shadow-sm lg:p-14">
            {/* Price */}
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                School Programme Fee
              </p>
              <div className="mt-4 flex items-baseline justify-center gap-2">
                <span className="font-serif text-5xl font-normal tracking-tight text-foreground lg:text-6xl">
                  €499.95
                </span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">
                One-time fee per programme delivery
              </p>
            </div>
            
            {/* Divider */}
            <div className="my-10 border-t border-border/60" />
            
            {/* Parent pricing note */}
            <div className="mb-10 rounded-xl bg-muted/50 p-6 text-center">
              <p className="text-[15px] text-muted-foreground">
                <span className="font-medium text-foreground">Optional parent contribution:</span>{" "}
                €15.95 per family
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Schools can choose to offer the programme free or request a small contribution from families
              </p>
            </div>
            
            {/* Features */}
            <ul className="space-y-4">
              {includedFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
            
            {/* Teacher value callout */}
            <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
              <p className="text-[15px] font-medium text-foreground">
                Free access for all teaching staff included
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Teachers gain valuable insights into the digital challenges their students face
              </p>
            </div>
            
            {/* CTA */}
            <div className="mt-10 text-center">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
