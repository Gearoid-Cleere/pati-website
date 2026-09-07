import Image from "next/image"

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Join through the access route that fits you: independently, through a registered school, or via an organisation.",
  },
  {
    number: "02",
    title: "Receive joining information",
    description: "PATI sends programme and joining information to the email address you provide.",
  },
  {
    number: "03",
    title: "Attend live online sessions",
    description: "Join four live online sessions over four weeks, covering two modules each week.",
  },
  {
    number: "04",
    title: "Access recordings and resources",
    description: "Recordings and programme resources are available if you miss a session or want to revisit the material.",
  },
  {
    number: "05",
    title: "Stay informed",
    description: "PATI sends session and programme communications throughout.",
  },
]

export function ProgrammeDelivery() {
  return (
    <section className="bg-secondary/20 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl">
              How the Programme Is Delivered
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              A straightforward journey from registration to the live sessions.
            </p>

            <ol className="mt-12">
              {steps.map((step) => (
                <li key={step.number} className="flex gap-5 pb-10 last:pb-0 lg:gap-8">
                  <p className="w-10 shrink-0 text-center font-serif text-2xl font-normal leading-none tracking-tight text-primary lg:w-12 lg:text-[1.75rem]">
                    {step.number}
                  </p>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="font-serif text-xl font-medium text-foreground">{step.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:sticky lg:top-28">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-secondary lg:mx-0">
              <Image
                src="/richard-hogan.jpg"
                alt="Dr Richard Hogan, Family Psychotherapist and Co-Founder of the Parenting and Technology Institute (PATI)"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 90vw"
              />
            </div>
            <p className="mt-6 font-serif text-xl font-medium text-foreground">Dr Richard Hogan</p>
            <p className="mt-1 text-[15px] leading-relaxed text-muted-foreground">
              Family Psychotherapist
              <br />
              Co-Founder of the Parenting and Technology Institute (PATI)
            </p>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
              Dr Richard Hogan leads the PATI programme. The delivery is expert-led, practical and
              designed for parents of children and teenagers navigating technology in everyday
              family life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
