import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ProgrammePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-6xl px-6 py-16">

        <section className="text-center py-20">
          <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
            Programme
          </p>

          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight">
            A structured programme for modern family life
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-muted-foreground mb-8">
            PATI provides a clear, practical framework for parents navigating
            technology, devices, gaming, social media, and online safety.
          </p>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              What we cover
            </h2>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <p>✔ The age of technology</p>
              <p>✔ Setting boundaries</p>
              <p>✔ Gaming and behaviour</p>
              <p>✔ Social media and anxiety</p>
              <p>✔ Online safety and pornography</p>
              <p>✔ Bullying and peer dynamics</p>
              <p>✔ Devices and family routines</p>
              <p>✔ Thriving as a family</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="rounded-2xl border p-10 text-center max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">
              Delivered by Dr Richard Hogan
            </h2>

            <p className="text-muted-foreground">
              A family psychotherapist with deep experience supporting families,
              schools, and organisations across Ireland.
            </p>
          </div>
        </section>

        <section className="py-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Available through schools and organisations
          </h2>

          <p className="mx-auto max-w-xl text-muted-foreground mb-6">
            Parents typically access the programme through their school or employer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/schools"
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-6 py-3 text-sm font-medium text-white"
            >
              Register your school
            </a>

            <a
              href="/parents"
              className="inline-flex items-center justify-center rounded-lg border px-6 py-3 text-sm font-medium"
            >
              Join as a parent
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
