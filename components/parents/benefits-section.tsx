import { Video, BookOpen, PlayCircle, Wrench, CheckCircle } from "lucide-react" 

const benefits = [
  {
    icon: Video,
    title: "4 live online sessions",
    description: "Interactive sessions with expert guidance and Q&A",
  },
  {
    icon: BookOpen,
    title: "Full programme covering 8 modules",
    description: "Comprehensive coverage of key technology topics",
  },
  {
    icon: PlayCircle,
    title: "Recordings available for flexibility",
    description: "Watch at your own pace, whenever suits you",
  },
  {
    icon: Wrench,
    title: "Practical tools and strategies",
    description: "Actionable approaches you can use immediately",
  },
  {
    icon: CheckCircle,
    title: "Clear, real-world guidance",
    description: "Evidence-based advice that works for families",
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What parents get
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Everything you need to confidently navigate your child&apos;s digital world
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className={`flex gap-4 ${index === benefits.length - 1 && benefits.length % 2 !== 0 ? "sm:col-span-2 sm:mx-auto sm:max-w-md" : ""}`}
              >
                <div className="flex-shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                    <benefit.icon className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
