"use client"

import { CheckCircle2, Clock, Presentation, Users, Video, Target } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Minimal Staff Time",
    description: "Your team shares our materials with parents. That is it. No preparation, facilitation, or follow-up required."
  },
  {
    icon: Users,
    title: "Strong Parent Engagement",
    description: "Proven promotional materials and convenient online timing consistently deliver strong parent attendance per session."
  },
  {
    icon: Presentation,
    title: "Expert-Led Content",
    description: "Sessions delivered by trained PATI facilitators who specialise in digital wellbeing — not your already-stretched staff."
  },
  {
    icon: Video,
    title: "Flexible Access",
    description: "Parents who cannot attend live receive access to session recordings, maximising reach across your community."
  },
  {
    icon: Target,
    title: "Wellbeing Aligned",
    description: "Content maps directly to SPHE requirements and school wellbeing priorities. Easy to evidence in your school improvement plan."
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
              High Impact, Low Effort
            </h2>
            <p className="text-lg text-muted-foreground">
              PATI is designed specifically for busy schools. We handle the complexity so you can offer something genuinely valuable to parents without adding to your workload.
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
                    <span className="text-foreground">Share our ready-made materials with parents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Promote sessions via newsletter and email</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Encourage participation across your school community</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Support a positive approach to technology</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Demonstrate commitment to student and parent wellbeing</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground mt-4">
                  That is the full extent of your involvement. Everything else is handled by PATI.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  What PATI Handles
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Expert facilitator for every session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">All promotional materials (emails, flyers, graphics)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Parent handouts and take-home resources</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Teacher-ready classroom resources and guidance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">Materials to support student wellbeing and digital awareness</span>
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
