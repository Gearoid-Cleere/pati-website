const facts = [
  "4 weeks",
  "4 live online sessions",
  "8 modules",
  "Recordings available",
  "Programme resources and materials",
  "Expert-led delivery",
]

export function ProgrammeOverview() {
  return (
    <section className="bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What the Programme Is
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              PATI is a structured parent education programme from the Parenting and Technology
              Institute. It is designed to help families navigate the practical challenges
              created by technology and modern digital life.
            </p>
            <p>
              Over four weeks, parents join four live online sessions covering eight focused
              modules. Recordings are available afterwards, together with programme resources and
              materials. Led by Dr Richard Hogan, Family Psychotherapist and Co-Founder of the
              Parenting and Technology Institute (PATI), the emphasis is practical: clearer
              decisions around devices, boundaries, conversations and family life.
            </p>
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <li key={fact} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
