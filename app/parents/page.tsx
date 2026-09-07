import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ParentsHero } from "@/components/parents/hero"
import { ParentsWhy } from "@/components/parents/why"
import { ParentsOutcomes } from "@/components/parents/outcomes"
import { ParentsProgramme } from "@/components/parents/programme"
import { ParentsAccess } from "@/components/parents/access"
import { ParentsTestimonials } from "@/components/parents/testimonials"
import { ParentsFaq } from "@/components/parents/faq"
import { ParentsFinalCta } from "@/components/parents/final-cta"

export default function ForParentsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <ParentsHero />
        <ParentsWhy />
        <ParentsOutcomes />
        <ParentsProgramme />
        <ParentsAccess />
        <ParentsTestimonials />
        <ParentsFaq />
        <ParentsFinalCta />
      </main>
      <Footer />
    </div>
  )
}
