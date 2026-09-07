import { Users, Clock, Handshake } from "lucide-react"

const points = [
  {
    title: "Parents are looking for guidance",
    description:
      "Many families want practical help with smartphones, gaming, social media and screen time at home. Schools encounter these concerns regularly.",
    icon: Users,
  },
  {
    title: "Staff capacity is limited",
    description:
      "School leaders and teachers are already stretched. Most schools cannot take on specialist parent education to create and deliver themselves.",
    icon: Clock,
  },
  {
    title: "A straightforward partnership",
    description:
      "PATI provides the programme, expertise and supporting communications. Your school retains the trusted connection with its parent community.",
    icon: Handshake,
  },
]

const schoolProvides = [
  "Shares PATI information and registration opportunities with parents through existing school channels.",
  "Helps keep parents informed about opportunities to join the programme.",
  "Provides the trusted connection between PATI and the parent community.",
  "Continues to share programme and registration reminders with parents throughout the programme.",
]

const patiProvides = [
  "Provides ready-to-share parent communications and registration information.",
  "Delivers the live parent programme and provides recordings and programme resources.",
  "Communicates directly with parents once they have registered.",
  "Works with the school throughout the programme to support participation.",
]

export function SchoolsWhy() {
  return (
    <section className="bg-secondary/20 py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Why Schools Choose PATI
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            Parents are looking for practical guidance around technology, teenagers and family
            life. PATI gives schools a straightforward way to provide it.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-8 md:mt-16 md:grid-cols-3 md:gap-12 lg:mt-20 lg:gap-16">
          {points.map((point) => (
            <div key={point.title}>
              <point.icon className="h-5 w-5 text-primary" strokeWidth={1.5} />
              <h3 className="mt-4 font-serif text-xl font-medium text-foreground">{point.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-5xl rounded-2xl border border-border/60 bg-card px-8 py-10 lg:mt-20 lg:px-12 lg:py-12">
          <p className="mx-auto max-w-2xl text-center font-serif text-xl font-medium leading-snug text-foreground sm:text-2xl">
            PATI provides the programme and the communications.
            <span className="mt-2 block">Your school provides the connection to parents.</span>
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                Your School
              </p>
              <ul className="mt-6 space-y-4">
                {schoolProvides.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">PATI</p>
              <ul className="mt-6 space-y-4">
                {patiProvides.map((item) => (
                  <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
