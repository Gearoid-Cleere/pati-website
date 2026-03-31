import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="text-center py-20">
          <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            About
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Supporting families in a digital world
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            The Parenting and Technology Institute helps parents, schools and
            organisations navigate the challenges of childhood and technology
            with practical, expert-led guidance.
          </p>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10 max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4 text-center">
              Our mission
            </h2>
            <p className="text-muted-foreground text-center">
              To provide calm, practical and credible support for families,
              schools and organisations as they respond to the realities of
              digital childhood.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-2xl border p-8">
              <h2 className="text-2xl font-semibold mb-4">Dr Richard Hogan</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Founder and Family Psychotherapist
              </p>
              <p className="text-sm text-muted-foreground">
                Richard brings deep experience in supporting families and helping
                parents navigate the emotional, behavioural and practical
                realities of technology in modern life.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h2 className="text-2xl font-semibold mb-4">Garry Cleere</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Programme Director
              </p>
              <p className="text-sm text-muted-foreground">
                Garry has extensive experience developing high-quality education
                and training programmes and helps shape PATI as a structured,
                scalable institute-led offering.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              A practical institute approach
            </h2>

            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <p>✔ Support for parents at home</p>
              <p>✔ Resources for teachers and schools</p>
              <p>✔ Wellbeing support for organisations</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
