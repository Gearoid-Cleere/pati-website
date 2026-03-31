// PATI For Schools Landing Page
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { WorkshopsSection } from "@/components/workshops-section"
import { DeliverySection } from "@/components/delivery-section"
import { CredibilitySection } from "@/components/credibility-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function PATISchoolsLandingPage() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <WorkshopsSection />
        <DeliverySection />
        <CredibilitySection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

