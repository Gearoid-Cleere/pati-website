import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Clock,
  ShieldCheck,
  Gamepad2,
  EyeOff,
  UserX,
  Smartphone,
  Laptop,
  Heart,
  ArrowRight,
} from "lucide-react"

const modules = [
  { icon: Clock, title: "Age of Technology", description: "Understanding the digital landscape" },
  { icon: ShieldCheck, title: "Boundaries", description: "Setting healthy limits" },
  { icon: Gamepad2, title: "Gaming", description: "Managing gaming habits" },
  { icon: EyeOff, title: "Pornography", description: "Protection and conversations" },
  { icon: UserX, title: "Bullying", description: "Prevention and response" },
  { icon: Smartphone, title: "Social Media & Anxiety", description: "Mental health impacts" },
  { icon: Laptop, title: "Technology & Devices", description: "Practical device management" },
  { icon: Heart, title: "Thriving as a Family", description: "Building healthy relationships" },
]

export function ProgrammeOverview() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Programme Overview
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Eight comprehensive modules covering essential topics for navigating technology in family life
          </p>
        </div>
        
        {/* Module grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {modules.map((module) => (
            <div
              key={module.title}
              className="rounded-xl border border-border/60 bg-card p-8 transition-all duration-300 hover:border-border hover:shadow-md lg:p-9"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60">
                <module.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 font-semibold tracking-tight text-foreground">
                {module.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {module.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="mt-20 text-center">
          <Button 
            size="lg" 
            variant="outline" 
            asChild 
            className="h-13 px-8 text-[15px]"
          >
            <Link href="/programme">
              View Full Programme Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
