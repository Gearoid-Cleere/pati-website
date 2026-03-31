import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">

        <section className="text-center py-20">
          <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Contact
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Get in touch
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            If you’re a school, organisation, or parent and would like to learn more,
            we’d be delighted to hear from you.
          </p>
        </section>

        <section className="py-16">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div className="rounded-2xl border p-8">
              <h2 className="text-xl font-semibold mb-4">Email</h2>
              <p className="text-sm text-muted-foreground mb-2">
                General enquiries
              </p>
              <p className="text-sm">
                schools@parentingandtechnologyinstitute.com
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h2 className="text-xl font-semibold mb-4">Who we work with</h2>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>✔ Primary and secondary schools</li>
                <li>✔ Parents and families</li>
                <li>✔ Employers and organisations</li>
              </ul>
            </div>

          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Interested in working with us?
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground mb-6">
            Whether you're a school leader, HR team, or parent group,
            we can help you bring the PATI programme to your community.
          </p>

          <a
            href="mailto:schools@parentingandtechnologyinstitute.com"
            className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
          >
            Email us
          </a>
        </section>

      </main>

      <Footer />
    </div>
  )
}
