// PATI For Schools Landing Page
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="mx-auto max-w-6xl px-6 py-16">
        <section className="mx-auto max-w-4xl text-center py-16">
          <p className="mb-4 text-sm tracking-[0.2em] uppercase text-muted-foreground">
            For Schools
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
            Bring PATI to your school community
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A whole-school approach supporting parents at home, teachers in the
            classroom, and students in their development.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-2 py-12">
          <div className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold mb-4">For Schools</h2>
            <p className="text-4xl font-semibold mb-2">€499.95</p>
            <p className="mb-4 text-muted-foreground">
              Annual school registration plus VAT
            </p>
            <p className="mb-6 text-sm text-muted-foreground">
              Includes full programme for parents, teachers and students, with
              classroom-ready resources for teachers.
            </p>
            <ul className="space-y-3 text-sm">
              <li>Full programme delivery for parents</li>
              <li>Classroom-ready materials for teachers</li>
              <li>Structured guidance for use with students</li>
              <li>Communication templates and resources</li>
              <li>Teacher and staff access to the programme</li>
              <li>Attendance insights and impact feedback</li>
            </ul>
          </div>

          <div className="rounded-2xl border p-8">
            <h2 className="text-2xl font-semibold mb-4">For Parents</h2>
            <p className="text-4xl font-semibold mb-2">€15.95</p>
            <p className="mb-4 text-muted-foreground">Per parent (VAT included)</p>
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
            <h2 className="text-2xl font-semibold mb-4">Ready to get started?</h2>
            <p className="mx-auto mb-6 max-w-2xl text-muted-foreground">
              Join schools across Ireland delivering expert parent education with
              minimal effort.
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

