import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Parenting Technology and Childhood in Ireland Research Report | PATI",
  description:
    "PATI’s 2026 Gap Analysis and Research Study explores the technology-related challenges facing parents, families and school communities in Ireland.",
}

const reportPdfPath =
  "/research/PATI-Parenting-Technology-and-Childhood-in-Ireland-Interim-Report-2026.pdf"

const keyFigures = [
  "1,182 parent and guardian responses",
  "56 school leadership and policy responses",
  "807 respondents identified screen time as a significant challenge",
  "612 requested age-based guidance",
  "608 supported school-wide approaches",
]

const findings = [
  "Parents are seeking practical guidance and confidence alongside information.",
  "Screen time and YouTube or video platforms were the most frequently identified family challenges.",
  "Parents strongly valued age-based guidance and school-wide approaches.",
  "Schools and parents expressed shared concerns around smartphones, social media, wellbeing and consistency between home and school.",
  "Families favoured balanced and sustainable approaches that can be applied in everyday life.",
]

export default function ParentingTechnologyChildhoodIrelandReportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />

      <main className="flex-1">
        <section className="bg-secondary/30 py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent">
              Research & Insights
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-primary md:text-5xl">
              Parenting, Technology and Childhood in Ireland
            </h1>
            <p className="mt-6 font-serif text-2xl font-medium text-foreground">
              Gap Analysis and Research Study
            </p>
            <p className="mt-4 text-sm font-medium tracking-wide text-muted-foreground">
              Interim Findings and Emerging Recommendations · November 2026
            </p>
            <div className="mt-8 space-y-6 text-left text-lg leading-relaxed text-muted-foreground">
              <p>
                Drawing on responses from 1,182 parents and guardians and 56 school leadership and policy respondents, this study examines the practical challenges families and schools face in navigating technology, smartphones, online platforms and digital family life.
              </p>
              <p>
                The findings identify strong demand for practical, age-based guidance, clearer alignment between families and schools, and achievable support that helps parents translate awareness into action.
              </p>
            </div>
            <div className="mt-10">
              <Button size="lg" asChild className="h-12 px-8 text-[15px]">
                <a
                  href={reportPdfPath}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Read the report
                  <span className="sr-only">
                    Parenting, Technology and Childhood in Ireland interim findings, PDF, 235 KB. Opens in a new tab.
                  </span>
                </a>
              </Button>
              <p className="mt-3 text-sm text-muted-foreground">PDF · 235 KB</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl font-medium text-primary">
              Key figures
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {keyFigures.map((figure) => (
                <li key={figure} className="py-4 text-lg leading-relaxed text-foreground">
                  {figure}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl font-medium text-primary">
              What the research found
            </h2>
            <ul className="mt-8 list-disc space-y-4 pl-5 text-lg leading-relaxed text-muted-foreground">
              {findings.map((finding) => (
                <li key={finding}>{finding}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-3xl font-medium text-primary">
              About the study
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The research used two anonymous survey instruments across multiple school communities in Ireland. Participation was self-selecting, and the findings should be read as indicative of the experiences of participating respondents rather than as statistically representative of all parents or schools in Ireland. Where respondents could select more than one option, totals may exceed the number of participants.
            </p>
          </div>
        </section>

        <section className="border-t border-border py-16">
          <div className="mx-auto max-w-3xl px-6">
            <h2 className="font-serif text-2xl font-medium text-primary">
              From research to practical support
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              PATI’s programmes help parents and school communities translate understanding into practical approaches for family life.
            </p>
            <p className="mt-6">
              <Link
                href="/programme/parenting-in-the-age-of-ai"
                className="font-medium text-foreground underline-offset-4 hover:underline"
              >
                Explore Parenting in the Age of AI
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
