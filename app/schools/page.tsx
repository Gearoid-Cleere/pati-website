import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchoolsHero } from "@/components/schools/hero"
import { SchoolsWhy } from "@/components/schools/why"
import { SchoolsHowItWorks } from "@/components/schools/how-it-works"
import { SchoolsProgramme } from "@/components/schools/programme"
import { SchoolsTestimonials } from "@/components/schools/testimonials"
import { SchoolsPricing } from "@/components/schools/pricing"
import { SchoolsFaq } from "@/components/schools/faq"
import { SchoolsFinalCta } from "@/components/schools/final-cta"

export default function SchoolsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <SchoolsHero />
        <SchoolsWhy />
        <SchoolsHowItWorks />
        <SchoolsProgramme />
        <SchoolsTestimonials />
        <SchoolsPricing />
        <SchoolsFaq />
        <SchoolsFinalCta />
      </main>
      <Footer />
    </div>
  )
}
