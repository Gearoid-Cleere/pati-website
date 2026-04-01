const steps = [
  {
    number: "01",
    title: "Organisation Engages",
    description: "Connect with our team to discuss your organisation&apos;s needs, employee demographics, and preferred format.",
  },
  {
    number: "02",
    title: "Sessions Delivered",
    description: "We deliver expert-led content through live webinars, structured programmes, or on-demand access.",
  },
  {
    number: "03",
    title: "Employees Gain Tools",
    description: "Your team walks away with practical strategies they can apply immediately in everyday family life.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A simple, seamless process designed for busy organisations.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-border md:block" />
          
          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Step number */}
                <div className="relative z-10 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-primary bg-card">
                  <span className="font-serif text-xl font-semibold text-primary">
                    {step.number}
                  </span>
                </div>
                
                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="mx-auto mb-6 h-8 w-px bg-border md:hidden" />
                )}
                
                <h3 className="mb-3 font-serif text-xl font-medium text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
