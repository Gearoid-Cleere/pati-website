import { AlertTriangle, Lightbulb } from "lucide-react"

export function WhyThisMattersSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Why this matters for your workforce
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Challenges at home are increasingly showing up at work — creating both risk and opportunity for organisations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* The Challenge */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                The Challenge
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Reduced focus and distraction</strong> — employees preoccupied with concerns about their children’s device use and online activity
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Increased stress and anxiety</strong> — uncertainty around social media, gaming, sleep, and online safety
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Lower engagement and productivity</strong> — family pressures affecting energy, concentration, and performance
                </span>
              </li>
            </ul>
          </div>

          {/* The Opportunity */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                The Opportunity
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Practical, expert-led support</strong> — give employees clear tools to manage technology at home
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Reduced stress and improved focus</strong> — more confident employees perform better at work
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Stronger wellbeing and engagement</strong> — support working parents in a way that is visible, relevant, and impactful
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
