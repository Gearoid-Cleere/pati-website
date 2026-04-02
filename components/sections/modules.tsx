import { 
  Smartphone, 
  Shield, 
  Gamepad2, 
  AlertTriangle, 
  Users, 
  Heart, 
  Settings, 
  Home 
} from "lucide-react"

const modules = [
  {
    code: "M1",
    title: "Age of Technology",
    description: "Understand how technology shapes childhood development. Explore the digital landscape your children navigate and build foundational knowledge for informed decision-making.",
    icon: Smartphone,
  },
  {
    code: "M2",
    title: "Boundaries",
    description: "Learn to establish and maintain effective boundaries around technology use. Develop clear family agreements that reduce conflict and promote healthy habits.",
    icon: Shield,
  },
  {
    code: "M3",
    title: "Gaming",
    description: "Navigate the complex world of video games and online play. Understand ratings, risks, and rewards, and learn to set appropriate limits for your family.",
    icon: Gamepad2,
  },
  {
    code: "M4",
    title: "Pornography",
    description: "Address one of the most challenging topics for modern parents. Gain strategies for prevention, having difficult conversations, and responding to exposure.",
    icon: AlertTriangle,
  },
  {
    code: "M5",
    title: "Bullying",
    description: "Recognise the signs of cyberbullying and understand how it differs from traditional bullying. Learn how to support your child and when to intervene.",
    icon: Users,
  },
  {
    code: "M6",
    title: "Social Media & Anxiety",
    description: "Explore the relationship between social media and mental health. Understand the impacts on developing minds and learn protective strategies.",
    icon: Heart,
  },
  {
    code: "M7",
    title: "Technology & Devices Workshop",
    description: "A practical, hands-on session covering device setup, parental controls, privacy settings, and family safety features across major platforms.",
    icon: Settings,
  },
  {
    code: "M8",
    title: "Thriving as a Family",
    description: "Bring everything together. Develop a sustainable family technology plan and build habits that support connection, wellbeing, and balanced digital life.",
    icon: Home,
  },
]

export function ModulesSection() {
  return (
    <section id="modules" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Programme Modules
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Eight comprehensive modules covering the essential topics every parent needs to understand. Each module combines expert teaching with practical application.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {modules.map((module) => (
            <div
              key={module.code}
              className="group relative flex gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-md sm:p-8"
            >
              {/* Module number */}
              <div className="flex flex-col items-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-sm font-bold text-primary-foreground">
                  {module.code}
                </span>
                <div className="mt-3 flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors group-hover:bg-accent/10">
                  <module.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
                </div>
              </div>
              
              {/* Module content */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {module.title}
                </h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
