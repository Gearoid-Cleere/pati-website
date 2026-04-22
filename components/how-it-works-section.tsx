"use client"

const steps = [
  {
    number: "01",
    title: "Express Interest",
    highlight: "Quick enquiry",
    description:
      "Complete a short enquiry form or request an information pack. We then discuss the best format and timing for your school.",
  },
  {
    number: "02",
    title: "We Prepare Everything",
    highlight: "Materials provided",
    description:
      "We prepare the delivery plan, provide ready-to-send parent communications, and make the process simple for your staff.",
  },
  {
    number: "03",
    title: "Live Expert Delivery",
    highlight: "No facilitation needed",
    description:
      "Dr Richard Hogan delivers practical live online sessions for your parent community. Staff are welcome to attend, but are not required to do so.",
  },
  {
    number: "04",
    title: "Resources Shared",
    highlight: "Flexible access",
    description:
      "Parents receive recordings and follow-up resources after each session, helping more families benefit even if they cannot attend live.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Four Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            PATI is designed to be simple for schools to run. We handle the delivery and parent communications, so your team can offer meaningful support with minimal extra work.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <div className="hidden lg:block absolute left-0 right-0 top-10 h-px bg-border" />

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step) => (
                <div key={step.number} className="relative">
                  <div className="relative z-10 mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background shadow-sm">
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
