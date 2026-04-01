import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/parents/hero-section"
import { ChallengesSection } from "@/components/parents/challenges-section"
import { BenefitsSection } from "@/components/parents/benefits-section"
import { ModulesSection } from "@/components/parents/modules-section"
import { HowItWorksSection } from "@/components/parents/how-it-works-section"
import { TestimonialsSection } from "@/components/parents/testimonials-section"
import { LeadCaptureSection } from "@/components/parents/lead-capture-section"
import { FinalCtaSection } from "@/components/parents/final-cta-section"

export default function ForParentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ChallengesSection />
        <BenefitsSection />
        <ModulesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <LeadCaptureSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
