"use client"

const testimonials = [
  {
    quote:
      "It gave me added confidence and practical tools I could use straight away at home. I’ve even changed the language and approach we use around screen time.",
    author: "Fionnuala",
    school: "Scoil na bhForbacha",
  },
  {
    quote:
      "You’ll get very practical advice from an expert who has lived it with his own family. I feel much more equipped to manage what’s coming as my children get older.",
    author: "Niamh",
    school: "Scoil Mhuire Griffith Avenue",
  },
  {
    quote:
      "It reassured me that our approach is on the right track and made me feel much more confident as a parent.",
    author: "Aoife",
    school: "Letterfrack National School",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Parent Feedback
          </p>

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What parents are saying
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Real feedback from parents who have completed the PATI programme
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <p className="text-base leading-8 text-foreground">
                “{testimonial.quote}”
              </p>

              <div className="mt-8 border-t border-border pt-5">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}"use client"

const testimonials = [
  {
    quote:
      "It gave me added confidence and practical tools I could use straight away at home. I’ve even changed the language and approach we use around screen time.",
    author: "Fionnuala",
    school: "Scoil na bhForbacha",
  },
  {
    quote:
      "You’ll get very practical advice from an expert who has lived it with his own family. I feel much more equipped to manage what’s coming as my children get older.",
    author: "Niamh",
    school: "Scoil Mhuire Griffith Avenue",
  },
  {
    quote:
      "It reassured me that our approach is on the right track and made me feel much more confident as a parent.",
    author: "Aoife",
    school: "Letterfrack National School",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Parent Feedback
          </p>

          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What parents are saying
          </h2>

          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Real feedback from parents who have completed the PATI programme
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <p className="text-base leading-8 text-foreground">
                “{testimonial.quote}”
              </p>

              <div className="mt-8 border-t border-border pt-5">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {testimonial.school}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
