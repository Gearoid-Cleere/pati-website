import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

import { HeroSection } from "@/components/corporate/hero-section"
import { WhyThisMattersSection } from "@/components/corporate/why-this-matters-section"
import { ImpactSection } from "@/components/corporate/impact-section"
import { WhatWeDeliverSection } from "@/components/corporate/what-we-deliver-section"
import { TopicsSection } from "@/components/corporate/topics-section"
import { HowItWorksSection } from "@/components/corporate/how-it-works-section"
import { DownloadSection } from "@/components/corporate/download-section"
import { TestimonialsSection } from "@/components/corporate/testimonials-section"
import { FinalCtaSection } from "@/components/corporate/final-cta-section"

export default function OrganisationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <WhyThisMattersSection />
        <ImpactSection />
        <WhatWeDeliverSection />
        <TopicsSection />
        <HowItWorksSection />
        <DownloadSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
