"use client"

const steps = [
  {
    number: "01",
    title: "Choose how you want to access PATI",
    highlight: "Through your school or independently",
    description:
      "Join through your school at the lower parent rate, or access the programme independently if your school is not yet participating.",
  },
  {
    number: "02",
    title: "Attend live sessions or watch recordings",
    highlight: "Flexible participation",
    description:
      "Join the live online sessions each week, or catch up afterwards with recordings if life gets in the way.",
  },
  {
    number: "03",
    title: "Apply what you learn at home",
    highlight: "Practical guidance",
    description:
      "Use the strategies, scripts, and ideas from the programme to create clearer boundaries, calmer conversations, and more confidence at home.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Simple, flexible, and designed for busy parents
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            PATI is designed to fit around real family life, with live sessions, recordings, and practical support you can use straight away.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl">
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-border" />

            <div className="grid gap-10 md:grid-cols-3 lg:gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-card shadow-sm">
                    <span className="text-lg font-bold text-primary">{step.number}</span>
                  </div>

                  <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {step.highlight}
                  </p>

                  <h3 className="mb-3 text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
