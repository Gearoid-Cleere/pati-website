import { BookOpen, Users, Lightbulb } from "lucide-react"

export function AboutPatiSection() {
  const pillars = [
    {
      icon: BookOpen,
      title: "Research-Informed",
      description: "Every programme is grounded in current research across child development, psychology, and digital wellbeing. We translate academic evidence into actionable guidance."
    },
    {
      icon: Users,
      title: "Clinically Grounded",
      description: "Our content draws on decades of direct clinical work with families and young people. We understand the realities of modern parenting because we see them every day."
    },
    {
      icon: Lightbulb,
      title: "Practically Designed",
      description: "Knowledge only matters if it can be applied. Our programmes are structured for real-world implementation in homes, classrooms, and workplaces."
    }
  ]

  return (
    <section className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            The Institute
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            An institute built for lasting impact
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The Parenting &amp; Technology Institute is not a single programme or a media brand. We are an educational institution dedicated to bridging the gap between research, clinical practice, and everyday parenting—creating structured, scalable solutions that families and organisations can rely on.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl bg-background p-8 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10">
                <pillar.icon className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
