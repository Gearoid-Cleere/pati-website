"use client"

import { CheckCircle2, Clock, Presentation, Users, Video, Target } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Minimal Staff Time",
    description: "Your team shares our materials with parents. No preparation, facilitation, or follow-up required."
  },
  {
    icon: Users,
    title: "Strong Parent Engagement",
    description: "Clear messaging and convenient online delivery help drive strong parent attendance across each session."
  },
  {
    icon: Presentation,
    title: "Expert-Led Sessions",
    description: "All sessions are delivered by Dr Richard Hogan, an experienced family psychotherapist specialising in technology and family life."
  },
  {
    icon: Video,
    title: "Flexible Access",
    description: "Parents who cannot attend live receive access to recordings, ensuring wider reach across your school community."
  },
  {
    icon: Target,
    title: "Aligned to School Priorities",
    description: "Content supports wellbeing priorities and aligns with SPHE, making it easy to integrate into your overall school approach."
  }
]

export function SolutionSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
              Why Schools Choose PATI
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              High Impact for Parents, Low Effort for Schools
            </h2>
            <p className="text-lg text-muted-foreground">
              PATI is designed specifically for busy schools. We handle the delivery, communication, and content so you can offer meaningful support to parents without adding to staff workload.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-secondary/50 rounded-2xl p-8 lg:p-10">
            <div className="grid lg:grid-cols-2 gap-8 items-start">

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What Your School Provides
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Share ready-made materials with parents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Promote sessions through existing school channels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Encourage participation across your parent community</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  That is the full extent of your involvement.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What PATI Handles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">All live session delivery with Dr Richard Hogan</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">All communications (emails, reminders, materials)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Parent resources and take-home guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Session recordings for flexible access</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
