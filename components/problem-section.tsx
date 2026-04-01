"use client"

import { HelpCircle, Clock, Users, Heart } from "lucide-react"

const challenges = [
  {
    icon: HelpCircle,
    title: "Parents are asking for help",
    description: "School offices receive constant enquiries from parents unsure how to manage their children's technology use."
  },
  {
    icon: Clock,
    title: "Staff do not have time",
    description: "Teachers and wellbeing leads are already stretched — they cannot add another programme to their workload."
  },
  {
    icon: Users,
    title: "Generic advice does not work",
    description: "Parents need practical, age-specific strategies — not vague warnings about screen time."
  },
  {
    icon: Heart,
    title: "Wellbeing is a school priority",
    description: "Technology's impact on student wellbeing is clear, but schools need expert support to address it effectively."
  }
]

export function ProblemSection() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            The Challenge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Schools Need Expert Support to Help Parents
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Parents are overwhelmed by technology challenges at home. They are looking to schools for guidance — but most schools lack the resources to deliver meaningful support.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => (
            <div 
              key={index}
              className="bg-card p-6 rounded-lg border border-border hover:border-accent/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <challenge.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
              <p className="text-sm text-muted-foreground">{challenge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
