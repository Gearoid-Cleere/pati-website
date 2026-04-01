import { CheckCircle2 } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Register Your Interest",
    description: "Complete a short form or request an information pack. We will respond within one working day to discuss dates and options.",
    highlight: "2 minutes"
  },
  {
    number: "02", 
    title: "We Prepare Everything",
    description: "Our team schedules your sessions, creates branded promotional materials, and provides ready-to-send parent communications. You just forward them on.",
    highlight: "Materials provided"
  },
  {
    number: "03",
    title: "Expert Delivery",
    description: "Our trained facilitators deliver engaging, practical sessions to your parent community. Staff are welcome but not required to attend.",
    highlight: "No facilitation needed"
  },
  {
    number: "04",
    title: "Follow-Up Handled",
    description: "Parents receive session recordings and take-home resources. We provide attendance reports and impact feedback for your records.",
    highlight: "Fully supported"
  }
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
            Four Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground">
            PATI is designed to be the lowest-effort, highest-value parent programme your school will run. Here is how it works.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-5">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 lg:p-8 border border-border flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{step.number}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                      <CheckCircle2 className="w-3 h-3" />
                      {step.highlight}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
