import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { PathwayCards } from "@/components/pathway-cards"
import { HowItWorks } from "@/components/how-it-works"
import { ProgrammeOverview } from "@/components/programme-overview"
import { CorporateFeature } from "@/components/corporate-feature"
import { Testimonials } from "@/components/testimonials"
import { BrochureForm } from "@/components/brochure-form"
import { FaqSection } from "@/components/faq-section"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <PathwayCards />
        <HowItWorks />
        <ProgrammeOverview />
        <CorporateFeature />
        <Testimonials />
        <BrochureForm />
        <FaqSection />
        <FinalCta />
      </main>
      <Footer />
    </div>
  )
}
