import { Smartphone, Gamepad2, MessageCircle, ShieldAlert, AlertOctagon, Sparkles } from "lucide-react"

const topics = [
  {
    icon: Smartphone,
    title: "Smartphones & Boundaries",
    description: "Practical strategies for setting healthy phone habits and screen time limits.",
  },
  {
    icon: Gamepad2,
    title: "Gaming",
    description: "Understanding gaming culture, managing time, and identifying problematic use.",
  },
  {
    icon: MessageCircle,
    title: "Social Media & Anxiety",
    description: "Navigating platforms, managing comparison, and protecting mental health.",
  },
  {
    icon: ShieldAlert,
    title: "Bullying",
    description: "Recognising cyberbullying, responding effectively, and supporting children.",
  },
  {
    icon: AlertOctagon,
    title: "Online Risks",
    description: "Privacy, inappropriate content, and keeping children safe online.",
  },
  {
    icon: Sparkles,
    title: "Healthy Technology Habits",
    description: "Building positive relationships with technology for the whole family.",
  },
]

export function TopicsSection() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Topics Covered
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Comprehensive guidance across the issues that matter most to working parents today.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="flex gap-4 rounded-xl bg-card p-6 transition-all hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                <topic.icon className="h-6 w-6 text-accent" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {topic.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {topic.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
