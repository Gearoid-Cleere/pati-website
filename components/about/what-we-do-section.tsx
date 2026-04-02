import { GraduationCap, Heart, Building2 } from "lucide-react"

const offerings = [
  {
    icon: GraduationCap,
    title: "Programmes for Schools",
    description: "Comprehensive digital wellbeing curricula designed to integrate seamlessly into school environments. We provide training for educators and resources that help schools support students and engage parents."
  },
  {
    icon: Heart,
    title: "Support for Parents",
    description: "Practical guidance and structured learning experiences for parents. From understanding developmental stages to managing screen time, we help families build healthy relationships with technology."
  },
  {
    icon: Building2,
    title: "Corporate Wellbeing",
    description: "Programmes designed for organisations that want to support working parents. We help companies create family-friendly policies and provide resources that employees can use at home."
  }
]

export function WhatWeDoSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-medium text-secondary">
            What We Do
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Supporting families at every level
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {offerings.map((offering) => (
            <div key={offering.title} className="group relative overflow-hidden rounded-2xl border border-border bg-background p-8 transition-all hover:border-secondary/50 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <offering.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{offering.title}</h3>
              <p className="mt-4 text-muted-foreground">{offering.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
