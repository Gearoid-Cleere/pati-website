import { BookOpen, Target, Users, Award } from "lucide-react"

const features = [
  {
    icon: BookOpen,
    title: "Structured Curriculum",
    description: "Eight carefully sequenced modules delivered over four weeks, building knowledge progressively from foundational understanding to practical application.",
  },
  {
    icon: Target,
    title: "Practical Application",
    description: "Every session includes actionable strategies you can implement immediately. No theory without practice.",
  },
  {
    icon: Users,
    title: "Real-World Focus",
    description: "Developed from direct experience with families. Addresses the actual challenges parents face daily with screens, devices, and online life.",
  },
  {
    icon: Award,
    title: "Expert Facilitation",
    description: "Led by specialists in child development, digital wellbeing, and family dynamics. Backed by current research and best practice.",
  },
]

export function OverviewSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Programme introduction */}
        <div className="mx-auto max-w-3xl">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl text-center">
            Programme Overview
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              The PATI Programme is a comprehensive educational programme designed to equip parents with the knowledge, skills, and confidence to navigate childhood in a digital world.
            </p>
            <p>
              Developed by the Parenting &amp; Technology Institute, this programme addresses the most pressing challenges facing modern families: screen time, social media, gaming, online safety, and the impact of technology on child development and family life.
            </p>
            <p>
              Whether you are a parent seeking guidance, a school supporting your community, or an organisation investing in employee wellbeing, the PATI Programme provides a structured, evidence-based approach to one of the defining challenges of contemporary parenting.
            </p>
          </div>
        </div>

        {/* Programme pillars */}
        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="relative rounded-xl border border-border bg-card p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
