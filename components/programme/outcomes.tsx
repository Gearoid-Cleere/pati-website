import { Compass, MessageCircle, ShieldCheck, Home } from "lucide-react"

const outcomes = [
  {
    icon: Compass,
    title: "Greater confidence",
    description:
      "A clearer sense of what matters in everyday parenting decisions around technology, and better-informed choices at home.",
  },
  {
    icon: ShieldCheck,
    title: "Clearer boundaries",
    description: "Practical, sustainable limits that families can understand and keep to.",
  },
  {
    icon: MessageCircle,
    title: "Better conversations",
    description:
      "More constructive ways to talk about phones, gaming, social media and the digital pressures children and teenagers face.",
  },
  {
    icon: Home,
    title: "Practical approaches",
    description: "Guidance designed to be applied in real family life, not left as theory.",
  },
]

export function ProgrammeOutcomes() {
  return (
    <section className="bg-background py-16 pb-14 lg:py-24 lg:pb-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What Parents Will Take Away
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            PATI is designed to help parents understand digital pressures more clearly, and to
            leave with approaches they can use at home.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 md:mt-16 lg:mt-20 lg:grid-cols-4 lg:gap-12">
          {outcomes.map((outcome) => (
            <div key={outcome.title}>
              <outcome.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{outcome.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
