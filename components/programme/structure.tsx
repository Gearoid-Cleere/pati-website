const weeks = [
  {
    week: "Week 1",
    modules: [
      { number: "01", title: "The Age of Technology" },
      { number: "02", title: "Boundaries" },
    ],
  },
  {
    week: "Week 2",
    modules: [
      { number: "03", title: "Gaming" },
      { number: "04", title: "Pornography" },
    ],
  },
  {
    week: "Week 3",
    modules: [
      { number: "05", title: "Bullying" },
      { number: "06", title: "Social Media & Anxiety" },
    ],
  },
  {
    week: "Week 4",
    modules: [
      { number: "07", title: "Technology & Devices" },
      { number: "08", title: "Thriving as a Family" },
    ],
  },
]

export function ProgrammeStructure() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Four Weeks. Four Live Sessions.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Each live online session covers two modules. The programme builds across four weeks,
            from the wider digital context through to practical family life.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {weeks.map((week) => (
            <div key={week.week} className="border-t border-primary/20 pt-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {week.week}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                One live online session
              </p>
              <ul className="mt-5 space-y-4">
                {week.modules.map((module) => (
                  <li key={module.number}>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      {module.number}
                    </p>
                    <p className="mt-1 font-medium tracking-tight text-foreground">{module.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
