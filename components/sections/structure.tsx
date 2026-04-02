import { Calendar, Video, PlayCircle, Clock, CheckCircle2 } from "lucide-react"

const deliveryFeatures = [
  {
    icon: Calendar,
    label: "4-Week Programme",
    detail: "Delivered over four focused weeks",
  },
  {
    icon: Video,
    label: "Live Sessions",
    detail: "Interactive sessions with expert facilitators",
  },
  {
    icon: PlayCircle,
    label: "On-Demand Access",
    detail: "All recordings available for 12 months",
  },
  {
    icon: Clock,
    label: "Flexible Learning",
    detail: "Designed around busy family schedules",
  },
]

const weeklyStructure = [
  {
    week: "Week 1",
    title: "Foundations",
    modules: ["M1: Age of Technology", "M2: Boundaries"],
  },
  {
    week: "Week 2",
    title: "Digital Risks",
    modules: ["M3: Gaming", "M4: Pornography"],
  },
  {
    week: "Week 3",
    title: "Online Wellbeing",
    modules: ["M5: Bullying", "M6: Social Media & Anxiety"],
  },
  {
    week: "Week 4",
    title: "Practical Application",
    modules: ["M7: Technology & Devices Workshop", "M8: Thriving as a Family"],
  },
]

export function StructureSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programme Structure
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A carefully designed learning journey that builds knowledge progressively while fitting around your commitments.
          </p>
        </div>

        {/* Delivery format */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {deliveryFeatures.map((feature) => (
            <div
              key={feature.label}
              className="flex items-start gap-4 rounded-lg bg-background p-5 shadow-sm"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{feature.label}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">{feature.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Weekly breakdown */}
        <div className="mt-16">
          <h3 className="text-center text-lg font-semibold text-foreground mb-8">
            Weekly Breakdown
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {weeklyStructure.map((week, index) => (
              <div
                key={week.week}
                className="relative rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {week.week}
                    </p>
                    <p className="font-semibold text-foreground">{week.title}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {week.modules.map((module) => (
                    <li key={module} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                      <span>{module}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
