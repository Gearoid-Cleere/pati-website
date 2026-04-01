const modules = [
  { number: "M1", title: "Age of Technology" },
  { number: "M2", title: "Boundaries" },
  { number: "M3", title: "Gaming" },
  { number: "M4", title: "Pornography" },
  { number: "M5", title: "Bullying" },
  { number: "M6", title: "Social Media & Anxiety" },
  { number: "M7", title: "Technology & Devices Workshop" },
  { number: "M8", title: "Thriving as a Family" },
]

export function ModulesSection() {
  return (
    <section id="modules" className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programme structure
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            The PATI programme is structured across eight focused modules
            covering the key areas of childhood and technology.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((module) => (
            <div
              key={module.number}
              className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/30"
            >
              <span className="inline-block rounded bg-primary/10 px-2 py-1 text-xs font-semibold text-primary">
                {module.number}
              </span>
              <h3 className="mt-3 font-semibold text-foreground">
                {module.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
