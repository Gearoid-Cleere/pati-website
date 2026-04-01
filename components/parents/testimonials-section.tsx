import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "PATI gave us the confidence to have meaningful conversations with our children about technology. The practical strategies really work.",
    author: "Sarah M.",
    role: "Parent of two",
  },
  {
    quote:
      "I finally feel equipped to set healthy boundaries around screen time. The modules on gaming and social media were especially helpful.",
    author: "James T.",
    role: "Father of a teenager",
  },
  {
    quote:
      "The flexible format meant I could learn at my own pace. The live sessions were brilliant for asking questions and hearing from other parents.",
    author: "Emma L.",
    role: "Mother of three",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What parents say
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Hear from families who have completed the PATI programme
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative rounded-xl border border-border bg-card p-6"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-primary/10" />
              <blockquote className="relative">
                <p className="text-pretty text-muted-foreground">
                  &quot;{testimonial.quote}&quot;
                </p>
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
