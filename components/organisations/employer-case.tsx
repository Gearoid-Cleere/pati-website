const cards = [
  {
    title: "Relevant",
    description: "Focused on the issues parents are dealing with now.",
  },
  {
    title: "Expert-led",
    description:
      "Delivered by experienced professionals, including family psychotherapist Dr Richard Hogan.",
  },
  {
    title: "Easy to provide",
    description:
      "PATI manages the programme and delivery. Your organisation simply makes the opportunity available to its people.",
  },
]

export function OrganisationsEmployerCase() {
  return (
    <section className="bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Supporting Parents Means Supporting Employees
          </h2>

          <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>The challenges parents face at home don&apos;t stop when the working day begins.</p>
            <p>
              Questions around smartphones, social media, gaming, online content, boundaries and
              children&apos;s wellbeing are increasingly part of family life.
            </p>
            <p>
              PATI gives organisations a practical way to support the parents in their workforce —
              without requiring the organisation to develop or deliver a parenting programme itself.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-border/60 bg-card p-8"
            >
              <h3 className="mb-3 font-serif text-xl font-medium text-foreground">{card.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
