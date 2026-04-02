const steps = [
  {
    number: "01",
    title: "Register",
    description:
      "Sign up for the programme as an individual, through your school, or via your employer.",
  },
  {
    number: "02",
    title: "Attend Sessions",
    description:
      "Join our live weekly sessions or watch recordings at a time that suits you.",
  },
  {
    number: "03",
    title: "Apply Learning",
    description:
      "Put your new knowledge and strategies into practice in everyday family life.",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Getting started with the PATI Programme is simple.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-12 hidden h-[2px] w-[calc(100%-200px)] -translate-x-1/2 bg-border lg:block" />

            <div className="grid gap-8 lg:grid-cols-3">
              {steps.map((step, index) => (
                <div key={step.number} className="relative text-center">
                  <div className="relative mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary bg-background">
                    <span className="text-2xl font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs leading-relaxed text-muted-foreground">
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
