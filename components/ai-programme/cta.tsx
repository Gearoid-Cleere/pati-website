import Link from "next/link"
import { TECH_SAVVY_PROGRAMME_PATH, aiProgramme } from "@/lib/programmes"

export function AiProgrammeCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {aiProgramme.startDate}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Registration for Parenting in the Age of AI will open shortly. Access details for
          parents, schools, organisations and teachers will be published here.
        </p>
        <p className="mt-10">
          <Link
            href={TECH_SAVVY_PROGRAMME_PATH}
            className="text-[15px] font-medium text-foreground underline-offset-4 hover:underline"
          >
            View Parenting the Tech-Savvy Child
          </Link>
        </p>
      </div>
    </section>
  )
}
