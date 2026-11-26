import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AiProgrammeHero } from "@/components/ai-programme/hero"
import { AiProgrammeModules } from "@/components/ai-programme/modules"
import { AiProgrammeSchedule } from "@/components/ai-programme/schedule"
import { AiProgrammeCta } from "@/components/ai-programme/cta"
import { aiProgramme } from "@/lib/programmes"

export const metadata: Metadata = {
  title: "Parenting in the Age of AI | PATI",
  description: aiProgramme.description,
}

export default function ParentingInTheAgeOfAiPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <AiProgrammeHero />
        <AiProgrammeModules />
        <AiProgrammeSchedule />
        <AiProgrammeCta />
      </main>
      <Footer />
    </div>
  )
}
