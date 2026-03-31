// PATI For Schools Landing Page
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { PricingSection } from "@/components/pricing-section"
import { Footer } from "@/components/footer"

export default function PATISchoolsLandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <HowItWorksSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  )
}

