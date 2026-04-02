import { Target, Scale, Award } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Practical & Real-World",
    description: "We focus on what actually works in everyday life. Our guidance is designed to be implemented immediately, with clear actions families can take today."
  },
  {
    icon: Scale,
    title: "Calm & Balanced",
    description: "Technology is part of modern life. Rather than promoting fear, we help families find a balanced approach that acknowledges both the benefits and risks."
  },
  {
    icon: Award,
    title: "Expert-Led",
    description: "Every programme is developed and delivered by qualified professionals with direct experience supporting families and young people."
  }
]

export function ApproachSection() {
  return (
    <section className="bg-primary py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground">
            Our Approach
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            How we work
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Our approach is grounded in three core principles that guide everything we create.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="rounded-2xl bg-primary-foreground/5 p-8 backdrop-blur">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                <principle.icon className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="mt-6 text-lg font-semibold text-primary-foreground">{principle.title}</h3>
              <p className="mt-3 text-primary-foreground/70">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
