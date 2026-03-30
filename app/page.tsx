import dynamic from "next/dynamic"
import { Hero } from "@/components/hero"

const Header = dynamic(() => import("@/components/header").then(mod => mod.Header), {
  ssr: false,
  loading: () => (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded bg-primary">
            <span className="text-lg font-semibold text-primary-foreground">P</span>
          </div>
          <span className="text-lg font-semibold tracking-tight text-foreground">
            PATI
          </span>
        </div>
      </div>
    </header>
  ),
})
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
