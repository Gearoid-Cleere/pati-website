import { Video, Calendar, PlayCircle, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const services = [
  {
    icon: Video,
    title: "Live Expert-Led Webinars",
    description: "Interactive sessions with real-time Q&A. Employees leave with practical strategies they can use immediately.",
    features: ["60-90 minutes", "Live Q&A", "Actionable takeaways"],
  },
  {
    icon: Calendar,
    title: "Multi-Session Programme",
    description: "A structured curriculum that builds knowledge over several weeks, reinforcing learning and behaviour change.",
    features: ["4-8 weeks", "Progressive content", "Group discussion"],
  },
  {
    icon: PlayCircle,
    title: "On-Demand Access",
    description: "Employees watch at their own pace. Perfect for global teams and flexible scheduling.",
    features: ["24/7 access", "Self-paced", "Full library"],
  },
  {
    icon: Settings,
    title: "Custom Programmes",
    description: "Tailored content designed specifically for your workforce demographics and company culture.",
    features: ["Bespoke content", "Branded delivery", "Flexible format"],
  },
]

export function WhatWeDeliverSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Simple to Deliver. Easy to Roll Out.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Flexible formats designed to fit seamlessly into your existing wellbeing programme — with minimal setup required.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group border-border/60 transition-all hover:border-primary/30 hover:shadow-md">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl font-medium">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
