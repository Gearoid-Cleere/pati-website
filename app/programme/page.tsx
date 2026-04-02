import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/sections/hero"
import { OverviewSection } from "@/components/sections/overview"
import { StructureSection } from "@/components/sections/structure"
import { ModulesSection } from "@/components/sections/modules"
import { BenefitsSection } from "@/components/sections/benefits"
import { AudienceSection } from "@/components/sections/audience"
import { HowItWorksSection } from "@/components/sections/how-it-works"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { DownloadSection } from "@/components/sections/download"
import { FinalCtaSection } from "@/components/sections/final-cta"

export default function ProgrammePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <OverviewSection />
        <StructureSection />
        <ModulesSection />
        <BenefitsSection />
        <AudienceSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <DownloadSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
