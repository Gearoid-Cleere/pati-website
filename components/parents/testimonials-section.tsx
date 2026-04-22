"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "It reassured me that our approach is on the right track and made me feel much more confident as a parent.",
    author: "Aoife",
    role: "Letterfrack National School",
  },
  {
    quote:
      "I feel more empowered and better able to manage my child’s use of devices, set boundaries, and deal with online challenges.",
    author: "Jennifer",
    role: "Parent",
  },
  {
    quote:
      "It gave me practical ways to handle real situations at home and helped me feel more calm, confident, and in control.",
    author: "Anonymous parent",
    role: "",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-12">
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

        {/* Testimonials */}
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-border bg-card p-6 transition-all hover:shadow-md hover:-translate-y-0.5"
            >
              <Quote className="absolute right-6 top-6 h-8 w-8 text-accent/20" />

              <blockquote>
                <p className="text-[15px] leading-relaxed text-foreground">
                  “{testimonial.quote}”
                </p>
              </blockquote>

              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">
                  {testimonial.author}
                </p>
                {testimonial.role && (
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
