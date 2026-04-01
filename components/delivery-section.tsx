"use client"

import { Monitor, PlayCircle, Mail, CheckCircle2 } from "lucide-react"

const features = [
  {
    icon: Monitor,
    title: "Live Online Sessions",
    description: "All sessions are delivered live online, making it easy for parents to join from home. No venue booking or setup required from your school."
  },
  {
    icon: PlayCircle,
    title: "Recordings Available",
    description: "Every session is recorded and shared with registered parents, ensuring those who cannot attend live can still benefit from the content."
  },
  {
    icon: Mail,
    title: "School Communications Provided",
    description: "We provide all promotional materials, including emails, newsletter copy, and social media graphics. Simply share with your parent community."
  }
]

const benefits = [
  "No venue or equipment needed",
  "Higher parent attendance rates",
  "Flexible timing for busy families",
  "Recordings extend reach to all parents",
  "Minimal administrative burden",
  "Consistent, professional delivery"
]

export function DeliverySection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            Simple Delivery
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Live Online. Recordings Included. Zero Hassle.
          </h2>
          <p className="text-lg text-muted-foreground">
            PATI sessions are delivered entirely online, with recordings available for parents who cannot attend live. Your school simply shares the invitation — we handle the rest.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-6 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-secondary/50 rounded-2xl p-8 lg:p-10 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            Why Online Delivery Works
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
