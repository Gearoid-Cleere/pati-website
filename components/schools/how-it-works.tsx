const steps = [
  {
    number: "01",
    stage: "Register",
    title: "Your school joins PATI",
    description: (
      <>
        Annual School Registration:{" "}
        <span className="font-medium text-foreground">€499.95</span>.
      </>
    ),
  },
  {
    number: "02",
    stage: "Share",
    title: "We give you everything you need",
    description:
      "PATI provides ready-to-share information and registration communications for your parent community.",
  },
  {
    number: "03",
    stage: "Parents Join",
    title: "Your school shares. Parents register.",
    description: (
      <>
        Parents register individually for{" "}
        <span className="font-medium text-foreground">€14.95</span>. Your school can continue to
        share the opportunity with parents throughout the programme.
      </>
    ),
  },
  {
    number: "04",
    stage: "Programme Delivery",
    title: "PATI delivers the programme",
    description:
      "PATI provides the live sessions, recordings and programme resources, and communicates directly with registered parents about their participation.",
  },
]

export function SchoolsHowItWorks() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Easy for the School. Useful for Parents.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Delivered by PATI, in partnership with your school.
          </p>
        </div>

        <div className="mx-auto mt-12 hidden max-w-3xl items-center justify-center gap-x-3 text-xs font-semibold uppercase tracking-[0.18em] text-accent md:flex lg:mt-14">
          <span>School</span>
          <span className="font-normal text-primary/30" aria-hidden="true">
            →
          </span>
          <span>PATI Support</span>
          <span className="font-normal text-primary/30" aria-hidden="true">
            →
          </span>
          <span>Parents</span>
          <span className="font-normal text-primary/30" aria-hidden="true">
            →
          </span>
          <span>PATI Programme Delivery</span>
        </div>

        <ol className="relative mx-auto mt-8 max-w-2xl md:mt-14 lg:mt-16">
          <span
            className="pointer-events-none absolute top-3 bottom-3 left-5 w-px bg-primary/20 lg:left-6"
            aria-hidden="true"
          />

          {steps.map((step) => (
            <li key={step.number} className="relative flex gap-5 pb-12 last:pb-0 lg:gap-8">
              <p className="relative z-10 w-10 shrink-0 bg-background text-center font-serif text-2xl font-normal leading-none tracking-tight text-primary lg:w-12 lg:text-[1.75rem]">
                {step.number}
              </p>
              <div className="min-w-0 pt-0.5">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                  {step.stage}
                </p>
                <h3 className="mt-2 font-serif text-xl font-medium text-foreground">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
