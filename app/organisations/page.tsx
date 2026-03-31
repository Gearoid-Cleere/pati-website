import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function OrganisationsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="text-center py-20">
          <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            For Organisations
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Support parents in your organisation with practical digital wellbeing guidance
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            Expert-led sessions and resources to help working parents navigate
            technology, devices, social media, gaming, and family life with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white hover:opacity-90"
            >
              Book a Call
            </a>

            <a
              href="/programme"
              className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium hover:bg-gray-50"
            >
              Explore the Programme
            </a>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              What organisations get
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>✔ Expert-led sessions for employees</p>
              <p>✔ Practical guidance for parents</p>
              <p>✔ Flexible live and recorded delivery</p>
              <p>✔ Support across key digital parenting issues</p>
              <p>✔ Resources that can be shared internally</p>
              <p>✔ A trusted wellbeing offering for working families</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              A valuable addition to employee wellbeing
            </h2>

            <p className="text-muted-foreground">
              PATI helps organisations support employees with one of the biggest
              modern family challenges: helping children and teenagers use
              technology in a healthy, balanced way.
            </p>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in bringing PATI to your organisation?
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground mb-6">
            We can tailor delivery for employers, wellbeing programmes, and
            working parent communities.
          </p>

          <p className="text-sm text-muted-foreground">
            schools@parentingandtechnologyinstitute.com
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
