import { AlertTriangle, Lightbulb } from "lucide-react"

export function WhyThisMattersSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            What organisations are increasingly seeing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Employees are arriving at work already under pressure — not because of work itself, but because of what is happening at home.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          
          {/* The Impact */}
          <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
                <AlertTriangle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                The Impact on Employees
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Distraction during the working day</strong> — employees preoccupied with devices, gaming, social media, and online activity
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Ongoing stress at home</strong> — uncertainty around boundaries, sleep, conflict, and what is reasonable to allow
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-destructive/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Reduced focus and energy</strong> — family pressures affecting concentration, performance, and overall wellbeing
                </span>
              </li>
            </ul>
          </div>

          {/* Why It Matters */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-2xl font-medium text-foreground">
                Why It Matters for Organisations
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">These challenges do not stay at home</strong> — they directly affect focus, wellbeing, and performance at work
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Working parents need practical support</strong> — clear, realistic tools they can apply in everyday family life
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary/60" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Organisations can respond meaningfully</strong> — by supporting employees in a way that is visible, relevant, and practical
                </span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
