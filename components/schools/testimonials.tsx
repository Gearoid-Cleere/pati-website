const reflections = [
  {
    quote:
      "You’ll get very practical advice from an expert who has lived it with his own family. I feel much more equipped to manage what’s coming as my children get older.",
    author: "Niamh",
    school: "Scoil Mhuire, Griffith Avenue",
  },
  {
    quote:
      "It’s practical and down to earth. It reassured me that our approach is on the right track and helped me feel more confident about the future.",
    author: "Aoife",
    school: "Letterfrack National School",
  },
  {
    quote:
      "It gave me practical tools I could use straight away at home. I’ve even changed the language and approach we use around screen time.",
    author: "Fionnuala Ní Chonaire",
    school: "Scoil na bhForbacha",
  },
]

export function SchoolsTestimonials() {
  return (
    <section className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What Parents in School Communities Say
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {reflections.map((reflection) => (
            <div
              key={reflection.author}
              className="flex flex-col rounded-2xl border border-border/60 bg-card p-8 lg:p-10"
            >
              <blockquote className="flex-grow text-[15px] leading-relaxed text-foreground">
                &ldquo;{reflection.quote}&rdquo;
              </blockquote>
              <div className="mt-8 border-t border-border/60 pt-5">
                <p className="font-medium text-foreground">{reflection.author}</p>
                <p className="mt-1 text-sm text-muted-foreground">{reflection.school}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
