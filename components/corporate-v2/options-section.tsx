import { Layers, Target, Building2 } from "lucide-react"

const options = [
  {
    icon: Layers,
    title: "Foundation Programme",
    description:
      "A focused starting point for organisations introducing support for employees navigating family and technology challenges.",
  },
  {
    icon: Target,
    title: "Core Programme",
    description:
      "A structured quarterly programme delivered across the year, designed to create meaningful and sustained impact for employees.",
    highlighted: true,
    badge: "Most chosen",
  },
  {
    icon: Building2,
    title: "Strategic Partnership",
    description:
      "A broader organisation-wide initiative with expanded delivery, deeper engagement, and integration into your overall wellbeing strategy.",
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
                  : "border border-border/90 bg-muted/30 hover:shadow-lg"
              }`}
            >
              {option.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground whitespace-nowrap">
                    {option.badge}
                  </span>
                </div>
              )}

              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <option.icon className="h-7 w-7 text-primary" />
              </div>

              <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                {option.title}
              </h3>

              <p className="text-sm leading-relaxed text-muted-foreground">
                {option.description}
              </p>
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
