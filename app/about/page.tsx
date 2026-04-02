import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/about/hero-section"
import { MissionSection } from "@/components/about/mission-section"
import { AboutPatiSection } from "@/components/about/about-pati-section"
import { LeadershipSection } from "@/components/about/leadership-section"
import { AdvisoryCouncilSection } from "@/components/about/advisory-council-section"
import { WhatWeDoSection } from "@/components/about/what-we-do-section"
import { ApproachSection } from "@/components/about/approach-section"
import { TestimonialsSection } from "@/components/about/testimonials-section"
import { CtaSection } from "@/components/about/cta-section"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <AboutPatiSection />
        <LeadershipSection />
        <AdvisoryCouncilSection />
        <WhatWeDoSection />
        <ApproachSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
