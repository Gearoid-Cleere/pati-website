import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyThisMatters } from "@/components/why-this-matters"
import { PathwayCards } from "@/components/pathway-cards"
import { ProgrammeOverview } from "@/components/programme-overview"
import { CorporateFeature } from "@/components/corporate-feature"
import { Testimonials } from "@/components/testimonials"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <Hero />

        <WhyThisMatters />

        <PathwayCards />

        <ProgrammeOverview />

        <CorporateFeature />

        <Testimonials />

        <FinalCta />
      </main>

      <Footer />
    </div>
  )
}
