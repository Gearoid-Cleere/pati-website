import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The PATI Programme gave me the confidence I needed to have difficult conversations with my children about their online lives. I feel so much better prepared now.",
    author: "Sarah M.",
    role: "Parent of two teenagers",
    type: "Parent",
  },
  {
    quote:
      "We introduced the PATI Programme to our parent community and the feedback has been overwhelmingly positive. It has become an essential part of our family support offering.",
    author: "James H.",
    role: "Head Teacher",
    type: "School",
  },
  {
    quote:
      "As an employer, we recognise the challenges our staff face as parents in a digital world. The PATI Programme has been a valuable addition to our employee wellbeing benefits.",
    author: "Rachel T.",
    role: "HR Director",
    type: "Organisation",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What People Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Hear from parents, schools, and organisations who have experienced the PATI Programme.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <Quote className="mb-4 h-8 w-8 text-accent/50" />
              <blockquote className="flex-1 text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
                <span className="mt-2 inline-block rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                  {testimonial.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
