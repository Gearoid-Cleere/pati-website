import { Users, GraduationCap, BookOpen } from "lucide-react"

const audiences = [
  {
    icon: Users,
    title: "For Parents",
    description: "Equip parents with practical tools and strategies to guide their children's technology use at home. Live workshops, recordings, and weekly resources.",
  },
  {
    icon: GraduationCap,
    title: "For Teachers",
    description: "Free access for all teaching staff. Build understanding of the digital challenges students face and align home-school approaches to technology.",
  },
  {
    icon: BookOpen,
    title: "For Students",
    description: "When parents and teachers are informed, students benefit. The programme creates consistent messaging across home and school environments.",
  },
]

export function SchoolsWholeSchool() {
  return (
    <section className="bg-background py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            A Whole-School Approach
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            PATI supports your entire school community with consistent, expert-led guidance
          </p>
        </div>
        
        {/* Audience cards */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-10">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="rounded-xl border border-border/60 bg-card p-10 text-center lg:p-12"
            >
              <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-muted/60">
                <audience.icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-4 text-xl font-semibold tracking-tight text-foreground">
                {audience.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
