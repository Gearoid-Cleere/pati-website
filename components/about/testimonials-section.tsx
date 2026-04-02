import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "PATI has transformed how our school approaches digital wellbeing. The programme gave our teachers confidence and provided practical strategies that actually work.",
    author: "Principal",
    organisation: "St. Mary&apos;s Secondary School"
  },
  {
    quote: "As a parent, I felt overwhelmed by technology decisions. The PATI programme helped me understand what&apos;s developmentally appropriate and gave me a framework for family conversations.",
    author: "Parent",
    organisation: "PATI Programme Participant"
  },
  {
    quote: "We introduced PATI to support our working parents. The feedback has been overwhelmingly positive—employees feel more confident navigating technology at home.",
    author: "HR Director",
    organisation: "Corporate Partner"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            Trusted By
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What our community says
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-2xl bg-muted/50 p-8">
              <Quote className="h-8 w-8 text-secondary/30" />
              <blockquote className="mt-4">
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </blockquote>
              <div className="mt-6 border-t border-border pt-6">
                <p className="font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.organisation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
