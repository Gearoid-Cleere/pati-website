const steps = [
  {
    number: "1",
    title: "Register for the programme",
    description: "Sign up and gain immediate access to resources",
  },
  {
    number: "2",
    title: "Attend live sessions or watch recordings",
    description: "Join scheduled sessions or learn at your own pace",
  },
  {
    number: "3",
    title: "Apply practical tools at home",
    description: "Use what you learn to support your family",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Getting started is simple
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-6 top-6 hidden h-[calc(100%-48px)] w-px bg-border sm:left-1/2 sm:block sm:-translate-x-px lg:left-6 lg:translate-x-0" />
            
            <div className="space-y-8 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
              {steps.map((step, index) => (
                <div key={step.number} className="relative flex gap-4 lg:flex-col lg:text-center">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground lg:mx-auto">
                    {step.number}
                  </div>
                  <div className="lg:mt-4">
                    <h3 className="font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute left-6 top-14 h-8 w-px bg-border lg:hidden" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
