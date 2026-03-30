export function TrustBar() {
  const schools = [
    "St. Patrick's College",
    "Blackrock College",
    "Loreto Abbey",
    "Belvedere College",
    "Alexandra College",
    "St. Michael's College",
    "Mount Anville",
    "Gonzaga College",
    "Marian College",
    "Wesley College",
    "St. Andrew's College",
    "King's Hospital",
  ]

  return (
    <section className="border-y border-border/30 bg-muted/20 py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        {/* Headline */}
        <div className="text-center">
          <h2 className="font-serif text-2xl font-normal tracking-tight text-foreground sm:text-3xl">
            Trusted by 80+ schools across Ireland
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
            Including a growing network of Registered PATI Schools
          </p>
        </div>

        {/* Stats Row */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 border-y border-border/30 py-8 lg:gap-x-24">
          <div className="text-center">
            <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">80+</p>
            <p className="mt-1 text-[13px] font-medium uppercase tracking-wide text-muted-foreground/70">Schools</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">15,000+</p>
            <p className="mt-1 text-[13px] font-medium uppercase tracking-wide text-muted-foreground/70">Parents Engaged</p>
          </div>
          <div className="text-center">
            <p className="font-serif text-3xl font-normal text-foreground lg:text-4xl">50+</p>
            <p className="mt-1 text-[13px] font-medium uppercase tracking-wide text-muted-foreground/70">Workshops Delivered</p>
          </div>
        </div>

        {/* School Names Grid */}
        <div className="mt-14">
          <div className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {schools.map((school, index) => (
              <div
                key={index}
                className="flex items-center justify-center py-3"
              >
                <span className="text-center text-[13px] font-medium tracking-wide text-muted-foreground/50">
                  {school}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Foundation Support */}
        <div className="mt-14 text-center">
          <p className="text-[13px] font-medium tracking-wide text-muted-foreground/60">
            Supported by the Sunflower Charitable Foundation
          </p>
        </div>
      </div>
    </section>
  )
}
