import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="text-center py-20">
          <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Resources
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            Practical guidance for families, schools and organisations
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            A growing library of clear, practical resources to help navigate
            technology, wellbeing, devices, gaming, and family life.
          </p>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Featured topics
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>✔ Screen time and boundaries</p>
              <p>✔ Gaming and behaviour</p>
              <p>✔ Social media and anxiety</p>
              <p>✔ Online safety</p>
              <p>✔ Devices and parental controls</p>
              <p>✔ Family routines and healthy habits</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-3">For Parents</h3>
              <p className="text-sm text-muted-foreground">
                Practical tools, scripts, and guidance for everyday family situations.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-3">For Schools</h3>
              <p className="text-sm text-muted-foreground">
                Resources and materials that support parent engagement and school wellbeing.
              </p>
            </div>

            <div className="rounded-2xl border p-8">
              <h3 className="text-lg font-semibold mb-3">For Organisations</h3>
              <p className="text-sm text-muted-foreground">
                Support for employers seeking practical digital wellbeing content for staff.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            More resources coming soon
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground">
            This section will continue to grow with practical articles, guides,
            and downloadable materials.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}
