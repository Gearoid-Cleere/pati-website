const advisors = [
  {
    name: "Barry O'Sullivan",
    role: "Education & Schools",
    initials: "BO",
    description: "Former school principal with 25+ years in education leadership and curriculum development."
  },
  {
    name: "Dr Sarah Mitchell",
    role: "Research & Evidence",
    initials: "SM",
    description: "Academic researcher specialising in child development, digital behaviour, and family dynamics."
  },
  {
    name: "Dr Mark Kieran",
    role: "Child & Adolescent Psychology",
    initials: "MK",
    description: "Clinical psychologist focused on adolescent mental health and developmental wellbeing."
  },
  {
    name: "Aoife Brennan",
    role: "Corporate Wellbeing",
    initials: "AB",
    description: "Workplace wellbeing strategist advising organisations on employee support and family-friendly policies."
  },
  {
    name: "James Fitzpatrick",
    role: "Digital Technology",
    initials: "JF",
    description: "Technology policy expert with background in platform safety and digital literacy initiatives."
  },
  {
    name: "Dr Niamh Walsh",
    role: "Online Safety",
    initials: "NW",
    description: "Specialist in online child protection, cyberbullying prevention, and digital risk assessment."
  },
  {
    name: "Conor Murphy",
    role: "Programme Development",
    initials: "CM",
    description: "Learning design expert with experience building accredited education programmes globally."
  },
  {
    name: "Dr Helen Casey",
    role: "Parenting & Family Support",
    initials: "HC",
    description: "Family therapist and parenting educator with expertise in positive parenting approaches."
  }
]

export function AdvisoryCouncilSection() {
  return (
    <section className="bg-muted/30 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Advisory Council
          </span>
          <h2 className="mt-6 text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Guided by leading experts
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The PATI Advisory Council brings together expertise across parenting, education, psychology, and digital technology. The council provides ongoing guidance on programme development, ensuring the PATI programme remains practical, relevant, and aligned with the evolving challenges facing families, schools, and organisations.
          </p>
        </div>

        <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {advisors.map((advisor) => (
            <div 
              key={advisor.name} 
              className="group rounded-2xl border border-border/50 bg-background p-8 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <span className="text-base font-semibold text-primary">{advisor.initials}</span>
              </div>
              <h3 className="mt-5 text-base font-semibold text-foreground">{advisor.name}</h3>
              <p className="mt-1.5 text-sm font-medium text-secondary">{advisor.role}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{advisor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
