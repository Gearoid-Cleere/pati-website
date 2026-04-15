"use client"

import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "PATI transformed our parent engagement. We had over 60 parents attend the first session, and they are still talking about the practical tips they learned.",
    author: "Sarah Mitchell",
    role: "Deputy Principal",
    school: "Scoil Mhuire",
    location: "Dublin"
  },
  {
    quote: "As a parent association, we had been looking for something exactly like this. PATI took all the work off our hands and delivered something truly valuable for our families.",
    author: "James Richardson",
    role: "Parents Association Chair",
    school: "Oakwood National School",
    location: "Cork"
  },
  {
    quote: "The feedback from parents has been overwhelmingly positive. Many said it was the most useful school event they had ever attended. We have already booked the next series.",
    author: "Dr. Emma Thompson",
    role: "Principal",
    school: "Riverside Community School",
    location: "Galway"
  }
]

const stats = [
  { value: "94%", label: "Parent satisfaction rate" },
  { value: "80+", label: "Schools partnered" },
  { value: "15,000+", label: "Parents reached" },
  { value: "18", label: "Counties supported" }
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Trusted by Schools
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              What Educators Are Saying
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border"
              >
                <Quote className="w-8 h-8 text-accent/30 mb-4" />
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  {testimonial.quote}
                </blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-accent">{testimonial.school}, {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
