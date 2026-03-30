import { CheckCircle2, Users, BookOpen, HeadphonesIcon, Calendar, Award } from "lucide-react"

const benefits = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Eight expertly designed modules covering all aspects of children's technology use, from screen time to online safety.",
  },
  {
    icon: Users,
    title: "Parent Engagement",
    description: "Strengthen your school-parent partnership by offering meaningful support on a topic every family faces.",
  },
  {
    icon: HeadphonesIcon,
    title: "Full Support Included",
    description: "Training for staff, promotional materials, and dedicated support throughout your programme delivery.",
  },
  {
    icon: Calendar,
    title: "Flexible Delivery",
    description: "Choose in-person sessions, online delivery, or a hybrid approach to suit your school community.",
  },
  {
    icon: Award,
    title: "Registered PATI School",
    description: "Join our network of Registered PATI Schools and demonstrate your commitment to family digital wellbeing.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Programme",
    description: "Developed by experts and refined through delivery to thousands of parents across Ireland.",
  },
]

export function SchoolsBenefits() {
  return (
    <section className="border-y border-border/40 bg-muted/20 py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        {/* Section header */}
        <div className="mx-auto mb-20 max-w-2xl text-center lg:mb-24">
          <h2 className="font-serif text-[2rem] font-normal tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Why Schools Choose PATI
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to support your parent community
          </p>
        </div>
        
        {/* Benefits grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-xl bg-background p-8 lg:p-10"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-muted/60">
                <benefit.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="mb-3 text-lg font-semibold tracking-tight text-foreground">
                {benefit.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
