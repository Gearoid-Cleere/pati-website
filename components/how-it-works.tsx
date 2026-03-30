const steps = [
  {
    number: "01",
    title: "Join the Programme",
    description: "Register through your school, organisation, or as an individual parent.",
  },
  {
    number: "02",
    title: "Engage Each Week",
    description: "Access live sessions, recordings, and practical weekly guidance designed for busy families.",
    microLine: "Live sessions, recordings, and weekly guidance delivered throughout the programme",
  },
  {
    number: "03",
    title: "Apply at Home",
    description: "Use tools, strategies, and resources to build healthier family approaches to technology.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            How the PATI Programme Works
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A structured, practical programme designed to support families week by week.
          </p>
        </div>
        
        <div className="grid gap-16 md:grid-cols-3 lg:gap-20">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number */}
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background">
                <span className="font-serif text-xl font-medium text-primary">
                  {step.number}
                </span>
              </div>
              
              {/* Content */}
              <h3 className="mb-4 text-lg font-semibold tracking-tight text-foreground">
                {step.title}
              </h3>
              <p className="mx-auto max-w-xs text-[15px] leading-relaxed text-muted-foreground">
                {step.description}
              </p>
              {step.microLine && (
                <p className="mx-auto mt-3 max-w-xs text-[13px] leading-relaxed text-muted-foreground/70">
                  {step.microLine}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
