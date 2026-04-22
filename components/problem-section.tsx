"use client"

import { HelpCircle, Clock, Users, Heart } from "lucide-react"

const challenges = [
  {
    icon: HelpCircle,
    title: "Parents are looking for guidance",
    description: "Many parents are unsure how to manage smartphones, gaming, social media, and screen time at home."
  },
  {
    icon: Clock,
    title: "Staff have limited capacity",
    description: "Teachers and school leaders are already stretched. Most schools do not have the time to build and run an additional parent programme."
  },
  {
    icon: Users,
    title: "Parents need practical support",
    description: "Generic advice is rarely enough. Parents respond best to clear, realistic strategies they can apply in everyday family life."
  },
  {
    icon: Heart,
    title: "Student wellbeing matters",
    description: "The impact of technology on children and teenagers is now a real concern for many school communities, but schools need expert support to respond well."
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
            Schools Want to Support Parents — But Cannot Do It Alone
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Parents are navigating increasingly complex technology issues at home, and many look to schools for help. But most schools do not have the time, internal resource, or specialist expertise to provide that support in a consistent and meaningful way.
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
