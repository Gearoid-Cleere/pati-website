import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SchoolsHero } from "@/components/schools/schools-hero"
import { SchoolsWholeSchool } from "@/components/schools/schools-whole-school"
import { SchoolsProgrammeOverview } from "@/components/schools/schools-programme-overview"
import { SchoolsHowItWorks } from "@/components/schools/schools-how-it-works"
import { SchoolsResponsibilities } from "@/components/schools/schools-responsibilities"
import { SchoolsPricing } from "@/components/schools/schools-pricing"
import { SchoolsTestimonials } from "@/components/schools/schools-testimonials"
import { SchoolsFaq } from "@/components/schools/schools-faq"
import { SchoolsCta } from "@/components/schools/schools-cta"

export const metadata: Metadata = {
  title: "For Schools - PATI | Parenting & Technology Institute",
  description: "Support your parent community with a ready-to-run technology wellbeing programme. PATI provides comprehensive materials, training, and ongoing support for schools.",
}

export default function SchoolsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <SchoolsHero />
        <SchoolsWholeSchool />
        <SchoolsProgrammeOverview />
        <SchoolsHowItWorks />
        <SchoolsResponsibilities />
        <SchoolsPricing />
        <SchoolsTestimonials />
        <SchoolsFaq />
        <SchoolsCta />
      </main>
      <Footer />
    </div>
  )
}
