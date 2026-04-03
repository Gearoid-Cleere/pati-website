import { Video, PlayCircle, Calendar } from "lucide-react"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

const delivery = [
  {
    icon: Video,
    title: "Live expert-led sessions",
    description:
      "Delivered quarterly across the year, each session focuses on key challenges facing families in the digital age.",
  },
  {
    icon: PlayCircle,
    title: "On-demand access",
    description:
      "All sessions are recorded and available to employees, allowing flexible access at any time.",
  },
  {
    icon: Calendar,
    title: "Structured across the year",
    description:
      "The programme runs on a simple, consistent cadence — ensuring ongoing support rather than a one-off initiative.",
  },
]

export function WhatWeDeliverSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            How the programme is delivered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            A simple, structured approach that fits easily into your organisation and requires minimal internal effort.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {delivery.map((item) => (
            <Card
              key={item.title}
              className="border-border/60 transition-all hover:shadow-md"
            >
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <item.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
