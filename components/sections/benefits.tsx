import { Check } from "lucide-react"

const outcomes = [
  {
    title: "Informed Decision-Making",
    description: "Understand the true impact of technology on child development so you can make confident choices for your family.",
  },
  {
    title: "Practical Tools",
    description: "Leave with actionable strategies, device settings, and conversation frameworks you can use immediately.",
  },
  {
    title: "Confident Boundaries",
    description: "Know how to set, communicate, and maintain healthy technology boundaries without constant conflict.",
  },
  {
    title: "Difficult Conversations",
    description: "Gain language and approaches for discussing sensitive topics like pornography, bullying, and online safety.",
  },
  {
    title: "Family Connection",
    description: "Build a sustainable family technology plan that supports real connection and balanced digital life.",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-primary py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-primary-foreground sm:text-4xl">
            What Participants Gain
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            By the end of the programme, you will have transformed your understanding of digital parenting and gained practical skills for everyday family life.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {outcomes.map((outcome, index) => (
            <div
              key={outcome.title}
              className={`rounded-xl bg-primary-foreground/10 p-6 backdrop-blur-sm ${
                index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <Check className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-primary-foreground">
                {outcome.title}
              </h3>
              <p className="mt-2 leading-relaxed text-primary-foreground/80">
                {outcome.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
