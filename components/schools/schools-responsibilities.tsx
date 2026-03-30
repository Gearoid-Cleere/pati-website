import { Check } from "lucide-react"

const patiHandles = [
  "Programme curriculum and all session content",
  "Live delivery of all parent workshops",
  "Session recordings for parents who can't attend live",
  "Weekly resources and practical materials",
  "Parent communications and reminders",
  "Registration system and attendance tracking",
  "Ongoing programme support and updates",
]

const schoolProvides = [
  "Promotion of the programme to parents",
  "A venue for in-person sessions (if applicable)",
  "A school liaison contact for coordination",
  "Distribution of programme invitations",
]

export function SchoolsResponsibilities() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            What PATI Handles vs What Schools Provide
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            We take care of the heavy lifting so you can focus on your community
          </p>
        </div>
        
        {/* Two columns */}
        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-2 lg:gap-16">
          {/* PATI handles */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-10 lg:p-12">
            <h3 className="mb-8 text-xl font-semibold tracking-tight text-foreground">
              What PATI Handles
            </h3>
            <ul className="space-y-4">
              {patiHandles.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary">
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] leading-relaxed text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* School provides */}
          <div className="rounded-2xl border border-border/60 bg-muted/30 p-10 lg:p-12">
            <h3 className="mb-8 text-xl font-semibold tracking-tight text-foreground">
              What Schools Provide
            </h3>
            <ul className="space-y-4">
              {schoolProvides.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-muted-foreground/20">
                    <Check className="h-3 w-3 text-muted-foreground" strokeWidth={3} />
                  </div>
                  <span className="text-[15px] leading-relaxed text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              Minimal coordination required from school staff
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
