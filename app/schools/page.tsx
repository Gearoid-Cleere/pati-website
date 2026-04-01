import { HeroSection } from "@/components/hero-section"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">

        {/* HERO */}
<HeroSection />

        {/* CHALLENGE */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Schools need support to help parents
          </h2>

          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Parents are struggling with technology challenges at home. Schools are increasingly expected to help — 
            but most lack the time, expertise, or resources to do so effectively.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border p-6">Parents are actively asking schools for guidance</div>
            <div className="rounded-xl border p-6">Staff do not have time to run additional programmes</div>
            <div className="rounded-xl border p-6">Generic advice does not work for families</div>
            <div className="rounded-xl border p-6">Student wellbeing is increasingly impacted by technology</div>
          </div>
        </section>

        {/* WHY PATI */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">
            High impact, low effort
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div className="rounded-xl border p-6">Minimal staff time required</div>
            <div className="rounded-xl border p-6">Strong parent engagement</div>
            <div className="rounded-xl border p-6">Expert-led sessions</div>
            <div className="rounded-xl border p-6">Aligned with school wellbeing priorities</div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-10">
            How it works
          </h2>

          <div className="grid md:grid-cols-4 gap-6 text-sm">
            <div className="rounded-xl border p-6">1. Register your school</div>
            <div className="rounded-xl border p-6">2. We prepare everything</div>
            <div className="rounded-xl border p-6">3. Expert sessions delivered</div>
            <div className="rounded-xl border p-6">4. Follow-up handled</div>
          </div>
        </section>

        {/* PROGRAMME */}
        <section className="py-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Programme overview
          </h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <p>✔ The age of technology</p>
            <p>✔ Boundaries</p>
            <p>✔ Gaming</p>
            <p>✔ Pornography</p>
            <p>✔ Bullying</p>
            <p>✔ Social media and anxiety</p>
            <p>✔ Devices and routines</p>
            <p>✔ Thriving as a family</p>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-6">
            Simple, transparent pricing
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-2">Schools</h3>
              <p className="text-3xl font-semibold mb-2">€499.95</p>
              <p className="text-sm text-muted-foreground mb-4">Annual registration + VAT</p>
              <a href="/contact" className="inline-flex bg-slate-900 text-white px-6 py-3 rounded-lg">
                Register Your School
              </a>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-2">Parents</h3>
              <p className="text-3xl font-semibold mb-2">€15.95</p>
              <p className="text-sm text-muted-foreground mb-4">Per parent</p>
              <a href="/parents" className="inline-flex border px-6 py-3 rounded-lg">
                Join as a Parent
              </a>
            </div>

          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Ready to bring PATI to your school?
          </h2>

          <p className="text-muted-foreground mb-6">
            Join schools across Ireland delivering practical, expert support to parents.
          </p>

          <div className="flex justify-center gap-4">
            <a href="/contact" className="bg-slate-900 text-white px-6 py-3 rounded-lg">
              Register Your School
            </a>
            <a href="/contact" className="border px-6 py-3 rounded-lg">
              Request Information
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
