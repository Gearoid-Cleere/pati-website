import { Smartphone, Heart, Gamepad2, Home } from "lucide-react"

const themes = [
  {
    title: "Screen time and devices",
    description: "When to introduce phones, how to set limits, and how to keep those limits workable at home.",
    icon: Smartphone,
  },
  {
    title: "Social media and wellbeing",
    description: "How online life can shape confidence, comparison and everyday mood for children and teenagers.",
    icon: Heart,
  },
  {
    title: "Gaming and online content",
    description: "Understanding gaming, exposure to difficult content, and how to approach those conversations.",
    icon: Gamepad2,
  },
  {
    title: "Boundaries and family life",
    description: "Clear, sustainable approaches that support family life rather than adding another source of pressure.",
    icon: Home,
  },
]

export function ParentsWhy() {
  return (
    <section className="bg-secondary/20 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Parenting Around Technology Is Complex
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Practical guidance helps parents make more confident decisions about screen time, social
            media, gaming, online content, boundaries, devices and family life.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-8 sm:grid-cols-2 md:mt-12 md:gap-10 lg:mt-14 lg:gap-12">
          {themes.map((theme) => (
            <div key={theme.title}>
              <theme.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{theme.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {theme.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
