import { Layers, Target, Building2 } from "lucide-react"

const options = [
  {
    icon: Layers,
    title: "Foundation Programme",
    description:
      "A focused starting point for organisations that want to introduce support for employees navigating family and technology challenges.",
    features: [
      "Introductory live session",
      "Access to core resources",
      "Internal communications support",
    ],
  },
  {
    icon: Target,
    title: "Core Programme",
    description:
      "A structured quarterly programme delivered across the year, designed to create meaningful and sustained impact for employees.",
    features: [
      "Quarterly live sessions",
      "Full on-demand access",
      "Practical parent resources",
      "Ongoing engagement support",
    ],
    highlighted: true,
  },
  {
    icon: Building2,
    title: "Strategic Partnership",
    description:
      "A broader organisation-wide initiative with expanded delivery, deeper engagement, and integration into your overall wellbeing strategy.",
    features: [
      "Expanded programme delivery",
      "Leadership briefings",
      "Extended resource access",
      "Strategic support",
    ],
  },
]

export function OptionsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Programme options to suit your organisation
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            We offer structured programme options depending on the size of your organisation and the level of support you want to provide.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {options.map((option) => (
            <div
              key={option.title}
              className={`relative rounded-2xl p-8 transition-all ${
                option.highlighted
                  ? "border-2 border-primary bg-card shadow-lg"
                  : "border border-border bg-card hover:shadow-md"
              }`}
            >
              {option.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                    Most organisations choose this
                  </span>
                </div>
              )}
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <option.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-medium text-foreground">
                {option.title}
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
              <ul className="space-y-3">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <svg className="h-4 w-4 shrink-0 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Programmes are tailored based on organisation size and requirements.
        </p>
      </div>
    </section>
  )
}
