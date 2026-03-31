import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ParentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="max-w-4xl mx-auto px-6 py-16 text-center">
        <p className="mb-4 text-sm uppercase tracking-wide text-muted-foreground">
          For Parents
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold mb-6">
          Practical support for navigating technology at home
        </h1>

        <p className="text-lg text-muted-foreground mb-10">
          Expert-led sessions, tools, and real-world guidance to help you manage
          devices, set boundaries, and support your child with confidence.
        </p>
      </main>

      <Footer />
    </div>
  )
}
