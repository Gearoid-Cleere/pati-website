import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function ResearchPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Research & Insights
            </p>

            <h1 className="font-serif text-4xl md:text-5xl font-medium text-primary mb-6">
              Understanding Childhood in a Digital World
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We develop research and insights that help parents, schools, and organisations respond to the realities of childhood in an increasingly digital environment.
            </p>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-2xl border border-border bg-background p-8 md:p-12">
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
                Research & Insights
              </p>
              <h2 className="font-serif text-3xl font-medium text-primary md:text-4xl">
                Parenting, Technology and Childhood in Ireland
              </h2>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                Explore findings from PATI’s 2026 Gap Analysis and Research Study, drawing on the experiences of parents, guardians and school communities across Ireland.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild className="h-12 px-8 text-[15px]">
                  <Link href="/research/parenting-technology-childhood-ireland-2026">
                    View the research
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
                  Featured Research
                </p>

                <h2 className="font-serif text-3xl font-medium text-primary mb-6">
                  Parenting, Technology and Family Life Study
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  This independently funded research project explores how families are navigating technology in everyday life—capturing the real challenges, behaviours, and concerns facing parents today.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  The findings will inform future programmes, support schools and organisations, and contribute to a broader understanding of childhood in the digital age.
                </p>

                <div className="text-sm text-muted-foreground space-y-1">
                  <p><strong>Focus:</strong> Parents and families</p>
                  <p><strong>Timeline:</strong> Spring–Summer 2026</p>
                  <p><strong>Output:</strong> Published insights and recommendations</p>
                </div>
              </div>

              <div className="h-80 rounded-2xl bg-muted" />
            </div>
          </div>
        </section>

        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-serif text-3xl font-medium text-primary text-center mb-12">
              Institute Insights
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="border border-border rounded-xl p-6">
                <h3 className="font-medium text-primary mb-3">
                  Social Media and Adolescent Anxiety
                </h3>
                <p className="text-sm text-muted-foreground">
                  Exploring the relationship between social platforms and emotional wellbeing among teenagers.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-medium text-primary mb-3">
                  Gaming and Behaviour
                </h3>
                <p className="text-sm text-muted-foreground">
                  Understanding how gaming impacts attention, behaviour, and family dynamics.
                </p>
              </div>

              <div className="border border-border rounded-xl p-6">
                <h3 className="font-medium text-primary mb-3">
                  Technology and Sleep
                </h3>
                <p className="text-sm text-muted-foreground">
                  Insights into device usage and its impact on sleep patterns in children.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <h2 className="font-serif text-3xl font-medium text-primary mb-6">
              Reports & Publications
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-10">
              We are developing a series of research reports and practical guides to support families, schools, and organisations.
            </p>

            <div className="border border-dashed border-border rounded-xl p-10">
              <p className="text-muted-foreground">
                The first interim findings report is now available. Further analysis and programme evaluation will inform subsequent PATI research publications.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
