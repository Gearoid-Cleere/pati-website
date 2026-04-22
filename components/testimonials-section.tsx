"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "You’ll get very practical advice from an expert who has lived it with his own family. I feel much more equipped to manage what’s coming as my children get older.",
    author: "Niamh",
    school: "Scoil Mhuire Griffith Avenue"
  },
  {
    quote: "It’s practical and down to earth. It reassured me that our approach is on the right track and helped me feel more confident about the future.",
    author: "Aoife",
    school: "Letterfrack National School"
  },
  {
    quote: "It gave me practical tools I could use straight away at home. I’ve even changed the language and approach we use around screen time.",
    author: "Fionnuala Ní Chonaire",
    school: "Scoil na bhForbacha"
  }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              What Parents Are Saying
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Practical, reassuring support for families
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Parents consistently describe the programme as practical, confidence-building, and directly applicable at home.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border flex flex-col"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4" />

                <blockquote className="text-foreground mb-6 leading-relaxed">
                  “{testimonial.quote}”
                </blockquote>

                <div className="border-t border-border pt-4 mt-auto">
                  <p className="font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-accent">
                    {testimonial.school}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
