import { Heart, Target, Shield, Users } from "lucide-react"

const impacts = [
  {
    icon: Heart,
    title: "Measurably Lower Stress",
    description: "Employees gain clear, practical strategies — reducing anxiety and the mental load that affects their workday.",
  },
  {
    icon: Target,
    title: "Sharper Focus at Work",
    description: "When home concerns are addressed, employees concentrate better and deliver higher-quality work.",
  },
  {
    icon: Shield,
    title: "Stronger Engagement",
    description: "Employees feel genuinely supported, leading to higher morale and lower turnover.",
  },
  {
    icon: Users,
    title: "Differentiated Wellbeing Programme",
    description: "Stand out with a unique offering that addresses a challenge other programmes overlook.",
  },
]

export function ImpactSection() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Real Impact for Your Organisation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Tangible outcomes that improve employee performance and strengthen your wellbeing strategy.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impacts.map((impact) => (
            <div
              key={impact.title}
              className="group rounded-xl bg-card p-6 transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
                <impact.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">
                {impact.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {impact.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
