import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProgrammeHero } from "@/components/programme/hero"
import { ProgrammeOverview } from "@/components/programme/overview"
import { ProgrammeStructure } from "@/components/programme/structure"
import { ProgrammeModules } from "@/components/programme/modules"
import { ProgrammeOutcomes } from "@/components/programme/outcomes"
import { ProgrammeDelivery } from "@/components/programme/delivery"
import { ProgrammeAccess } from "@/components/programme/access"
import { ProgrammeTestimonials } from "@/components/programme/testimonials"
import { ProgrammeFaq } from "@/components/programme/faq"
import { ProgrammeFinalCta } from "@/components/programme/final-cta"

export default function ProgrammePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ProgrammeHero />
        <ProgrammeOverview />
        <ProgrammeStructure />
        <ProgrammeModules />
        <ProgrammeOutcomes />
        <ProgrammeDelivery />
        <ProgrammeAccess />
        <ProgrammeTestimonials />
        <ProgrammeFaq />
        <ProgrammeFinalCta />
      </main>
      <Footer />
    </div>
  )
}
