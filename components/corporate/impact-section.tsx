import { Heart, Target, Shield, Users } from "lucide-react"

const impacts = [
  {
    icon: Heart,
    title: "Improved employee wellbeing",
    description:
      "Employees gain practical strategies to reduce family-related stress and feel more supported in managing challenges at home.",
  },
  {
    icon: Target,
    title: "Better focus and performance",
    description:
      "When home pressures are reduced, employees are better able to concentrate, contribute, and perform consistently at work.",
  },
  {
    icon: Shield,
    title: "Stronger support for working parents",
    description:
      "The programme gives organisations a visible and credible way to support employees with children in the digital age.",
  },
  {
    icon: Users,
    title: "Greater engagement and retention",
    description:
      "A more relevant wellbeing offering can strengthen employee engagement and contribute positively to culture and retention.",
  },
]

export function ImpactSection() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What organisations can expect
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A more visible, practical, and credible approach to supporting working parents across your organisation.
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
