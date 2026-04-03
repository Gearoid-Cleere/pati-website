import { CheckCircle, Calendar, Users } from "lucide-react"

const steps = [
  {
    icon: CheckCircle,
    title: "Simple to get started",
    description:
      "We work with you to align the programme to your organisation and provide everything needed to introduce it internally.",
  },
  {
    icon: Calendar,
    title: "Delivered across the year",
    description:
      "Employees access expert-led sessions and on-demand content on a simple, consistent schedule.",
  },
  {
    icon: Users,
    title: "Minimal internal effort",
    description:
      "We provide ready-to-use communications and structure, so the programme runs smoothly without adding to workloads.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What this looks like in practice
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A simple, low-effort programme that integrates easily into your organisation.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-3 text-center">
          {steps.map((step, index) => (
            <div key={step.title}>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mb-2 font-serif text-lg font-medium text-foreground">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
