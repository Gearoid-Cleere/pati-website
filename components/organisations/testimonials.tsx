const reflections = [
  {
    quote:
      "It was supportive, not directive. It helped me understand that we are not the only family trying to navigate this and that no parent is getting it perfect.",
    author: "Parent",
    role: "School community participant",
  },
  {
    quote:
      "It helped us approach these conversations more calmly and confidently. We’ve already introduced clearer family boundaries around phones and screen time.",
    author: "Parent",
    role: "PATI participant",
  },
  {
    quote:
      "The programme reassured me that a balanced, practical approach is possible. I left feeling more informed, more empowered and less overwhelmed.",
    author: "Parent",
    role: "School community participant",
  },
]

export function OrganisationsTestimonials() {
  return (
    <section className="bg-secondary/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What Parents Say About PATI
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {reflections.map((reflection) => (
            <div
              key={reflection.quote}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-8 lg:p-10"
            >
              <blockquote className="flex-grow text-[15px] leading-relaxed text-foreground">
                &ldquo;{reflection.quote}&rdquo;
              </blockquote>
              <div className="mt-8 border-t border-border/60 pt-5">
                <p className="font-medium text-foreground">{reflection.author}</p>
                <p className="mt-1 text-sm text-muted-foreground">{reflection.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
