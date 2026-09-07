import {
  Clock,
  BadgeCheck,
  Gamepad2,
  EyeOff,
  UserX,
  Smartphone,
  Monitor,
  Heart,
} from "lucide-react"

const modules = [
  {
    number: "01",
    title: "The Age of Technology",
    description:
      "Understanding the world our children are growing up in, and how technology is shaping childhood. This module sets the context parents need before making everyday decisions.",
    icon: Clock,
  },
  {
    number: "02",
    title: "Boundaries",
    description:
      "Creating practical and sustainable boundaries at home. How to set limits around technology that families can understand and keep to.",
    icon: BadgeCheck,
  },
  {
    number: "03",
    title: "Gaming",
    description:
      "Understanding gaming and developing a balanced approach — including how to think about time, content and family limits.",
    icon: Gamepad2,
  },
  {
    number: "04",
    title: "Pornography",
    description:
      "Helping parents navigate difficult conversations and online exposure, with practical ways to approach one of the most challenging topics in modern parenting.",
    icon: EyeOff,
  },
  {
    number: "05",
    title: "Bullying",
    description:
      "Understanding and responding to bullying in a connected world. How it can show up online, how it differs from traditional bullying, and how parents can support their child.",
    icon: UserX,
  },
  {
    number: "06",
    title: "Social Media & Anxiety",
    description:
      "Exploring the relationship between social media, pressure and wellbeing, and how online life can shape confidence, comparison and everyday mood.",
    icon: Smartphone,
  },
  {
    number: "07",
    title: "Technology & Devices",
    description:
      "Making informed decisions about devices and their use — including when to introduce them, how they are used at home, and the choices that matter most.",
    icon: Monitor,
  },
  {
    number: "08",
    title: "Thriving as a Family",
    description:
      "Bringing the learning together to support healthier family life, with practical approaches that support connection, wellbeing and a more balanced relationship with technology.",
    icon: Heart,
  },
]

export function ProgrammeModules() {
  return (
    <section className="bg-secondary/20 py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Eight Modules
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            The full programme, covering the issues parents are navigating every day.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {modules.map((module) => (
            <div key={module.number} className="rounded-xl border border-border/60 bg-card p-7 lg:p-8">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-muted/60">
                <module.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              </div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">
                {module.number}
              </p>
              <h3 className="mb-3 font-serif text-xl font-medium tracking-tight text-foreground">
                {module.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{module.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
