import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "PATI gave our team practical strategies they could use immediately. The feedback was overwhelmingly positive — employees said it was one of the most relevant wellbeing sessions we&apos;ve offered.",
    author: "Sarah Mitchell",
    role: "Head of People & Culture",
    organisation: "Financial Services Firm",
  },
  {
    quote: "I&apos;ve been worrying about my children&apos;s screen time for years. After the PATI session, I finally feel equipped to have productive conversations at home — and I&apos;m less distracted at work.",
    author: "James Chen",
    role: "Senior Manager",
    organisation: "Technology Company",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Trusted by HR Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            What organisations and employees are saying about PATI.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative rounded-2xl border border-border bg-card p-8 md:p-10"
            >
              <Quote className="absolute right-8 top-8 h-12 w-12 text-primary/10" />
              <blockquote className="relative">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
                <footer className="mt-6 border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <span className="font-serif text-lg font-semibold text-primary">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.organisation}
                      </p>
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
