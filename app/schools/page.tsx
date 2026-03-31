// PATI For Schools Landing Page
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function SchoolsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <HowItWorks />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}

