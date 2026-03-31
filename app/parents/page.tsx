import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center py-16">
          <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            For Parents
          </p>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Practical support for navigating technology at home
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Expert-led sessions, tools, and real-world guidance to help you manage
            devices, set boundaries, and support your child with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/schools"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
            >
              Find a registered school
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium"
            >
              Contact us
            </a>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold mb-6">What you get</h2>
            <ul className="space-y-3 text-sm">
              <li>Access to all live sessions</li>
              <li>Full recordings of each session</li>
              <li>Practical guidance and resources</li>
              <li>Flexible participation</li>
              <li>Weekly insights and prompts</li>
              <li>Tools, scripts, and strategies for home use</li>
              <li>Parental controls and device setup support</li>
            </ul>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-2xl border p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Pricing</h2>
            <p className="text-4xl font-semibold mb-2">€15.95</p>
            <p className="text-muted-foreground mb-4">Per parent (VAT included)</p>
            <p className="text-sm text-muted-foreground">
              Available through your school or directly as an independent parent.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="rounded-2xl border p-8 text-center">
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Join parents across Ireland building healthier, more confident
              relationships with technology at home.
            </p>
            <p className="text-sm text-muted-foreground">
              schools@parentingandtechnologyinstitute.com
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
