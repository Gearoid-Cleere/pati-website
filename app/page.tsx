import { HomeHeader } from "@/components/home-header"
import { Hero } from "@/components/hero"
import { WhyThisMatters } from "@/components/why-this-matters"
import { PathwayCards } from "@/components/pathway-cards"
import { ProgrammeOverview } from "@/components/programme-overview"
import { WhyPatiSection } from "@/components/why-pati-section"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <HomeHeader />

      <main className="flex-1">
        <Hero />

        <WhyThisMatters />

        <PathwayCards />

        <ProgrammeOverview />

        <WhyPatiSection />

        <Testimonials />

        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}
