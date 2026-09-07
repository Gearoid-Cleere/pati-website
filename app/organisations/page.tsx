import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrganisationsHero } from "@/components/organisations/hero"
import { OrganisationsEmployerCase } from "@/components/organisations/employer-case"
import { OrganisationsHowItWorks } from "@/components/organisations/how-it-works"
import { OrganisationsProgramme } from "@/components/organisations/programme"
import { OrganisationsExpertise } from "@/components/organisations/expertise"
import { OrganisationsTestimonials } from "@/components/organisations/testimonials"
import { OrganisationsPricing } from "@/components/organisations/pricing"
import { OrganisationsFaq } from "@/components/organisations/faq"
import { OrganisationsFinalCta } from "@/components/organisations/final-cta"

export default function OrganisationsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <OrganisationsHero />
        <OrganisationsEmployerCase />
        <OrganisationsHowItWorks />
        <OrganisationsProgramme />
        <OrganisationsExpertise />
        <OrganisationsTestimonials />
        <OrganisationsPricing />
        <OrganisationsFaq />
        <OrganisationsFinalCta />
      </main>
      <Footer />
    </div>
  )
}
