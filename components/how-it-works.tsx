const steps = [
  {
    number: "01",
    title: "Join",
    description: "Register through your school, organisation, or directly as a parent.",
  },
  {
    number: "02",
    title: "Attend",
    description: "Attend live expert-led sessions or access recordings at your convenience.",
  },
  {
    number: "03",
    title: "Apply",
    description: "Apply practical tools and strategies at home to see real results.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            How It Works
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            A straightforward process designed for busy families
          </p>
        </div>
        
        <div className="grid gap-16 md:grid-cols-3 lg:gap-20">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              {/* Number */}
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-border bg-background">
                <span className="text-xl font-semibold text-primary">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
