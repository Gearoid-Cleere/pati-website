import { Heart, Target, Shield, Users } from "lucide-react"

const impacts = [
  {
    icon: Target,
    title: "A clear understanding of what is happening",
    description:
      "Understand the challenges families are facing with technology — and how these are showing up in employee stress, distraction, and performance at work.",
  },
  {
    icon: Shield,
    title: "A practical framework you can apply",
    description:
      "A simple, structured approach to supporting employees dealing with technology-related challenges at home.",
  },
  {
    icon: Users,
    title: "What actually works in practice",
    description:
      "Insights from working directly with families and organisations — what helps, what does not, and where to focus.",
  },
  {
    icon: Heart,
    title: "A more relevant approach to wellbeing",
    description:
      "Support employees in a way that is visible, practical, and directly connected to real pressures they are facing.",
  },
]

export function ImpactSection() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What you will take away from this session
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A clear, practical understanding of the issue — and a framework you can apply within your organisation.
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
