const steps = [
  {
    number: "01",
    title: "Register Your School",
    description: "Complete a brief registration form and we'll be in touch to discuss your school's needs and schedule.",
  },
  {
    number: "02",
    title: "Receive Your Materials",
    description: "Get access to the full programme curriculum, promotional materials, and staff briefing resources.",
  },
  {
    number: "03",
    title: "Launch to Parents",
    description: "Invite parents to join the programme. We support you with communications and registration.",
  },
  {
    number: "04",
    title: "Deliver the Programme",
    description: "Run the sessions with our support. Parents engage with live workshops and practical resources.",
  },
]

export function SchoolsHowItWorks() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            How It Works for Schools
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            A straightforward process to bring PATI to your school community
          </p>
        </div>
        
        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
