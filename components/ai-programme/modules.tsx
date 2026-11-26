import {
  Brain,
  Users,
  GraduationCap,
  MessageCircle,
  ScanSearch,
  Shield,
  Briefcase,
  Heart,
} from "lucide-react"
import { aiProgramme } from "@/lib/programmes"

const icons = [
  Brain,
  Users,
  GraduationCap,
  MessageCircle,
  ScanSearch,
  Shield,
  Briefcase,
  Heart,
]

export function AiProgrammeModules() {
  return (
    <section className="bg-secondary/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <p className="mb-12 text-center font-serif text-xl font-medium tracking-tight text-foreground sm:text-2xl lg:mb-16">
          {aiProgramme.startDate}
        </p>

        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Eight Modules
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {aiProgramme.modules.map((module, index) => {
            const Icon = icons[index]

            return (
              <div
                key={module.number}
                className="rounded-xl border border-border/60 bg-card p-7 lg:p-8"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60">
                  <Icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                  {module.number}
                </p>
                <h3 className="mb-3 font-serif text-xl font-medium tracking-tight text-foreground">
                  {module.title}
                </h3>
                <p className="text-[15px] leading-relaxed text-muted-foreground">
                  {module.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
