"use client"

import { 
  CheckCircle2, 
  Clock, 
  BadgeCheck, 
  Gamepad2, 
  EyeOff, 
  Users, 
  Smartphone, 
  Monitor, 
  Heart 
} from "lucide-react"

const modules = [
  { title: "Age of Technology", description: "Understanding the digital landscape", icon: Clock },
  { title: "Boundaries", description: "Setting healthy limits", icon: BadgeCheck },
  { title: "Gaming", description: "Managing gaming habits", icon: Gamepad2 },
  { title: "Pornography", description: "Protection and conversations", icon: EyeOff },
  { title: "Bullying", description: "Prevention and response", icon: Users },
  { title: "Social Media & Anxiety", description: "Mental health impacts", icon: Smartphone },
  { title: "Technology & Devices", description: "Practical device management", icon: Monitor },
  { title: "Thriving as a Family", description: "Building healthy relationships", icon: Heart },
]

const included = [
  "Expert facilitator for every session",
  "Promotional emails and newsletter copy",
  "Social media graphics and printable flyers",
  "Parent handouts and take-home guides",
  "Access to session recordings",
  "Attendance reports and impact summary"
]

export function WorkshopsSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            The Programme
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Programme Overview
          </h2>
          <p className="text-lg text-muted-foreground">
            Eight comprehensive modules covering essential topics for navigating technology in family life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {modules.map((module, index) => {
            const IconComponent = module.icon
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-5">
                  <IconComponent className="w-6 h-6 text-foreground/70" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">
                  {module.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {module.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className="text-center mb-12">
          <p className="text-muted-foreground text-sm">
            Schools can select individual modules or run the complete programme across multiple sessions.
          </p>
        </div>

        {/* What is Included */}
        <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground text-center mb-8">
              What Is Included With Every Session
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {included.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-8">
              Everything your school needs to deliver a high-quality parent experience — without adding to staff workload.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
