import Link from "next/link"
import { Button } from "@/components/ui/button"
import { TECH_SAVVY_PROGRAMME_PATH, aiProgramme } from "@/lib/programmes"

export function AiProgrammeCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          {aiProgramme.startDate}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Registration details for Parenting in the Age of AI will follow. Existing registration
          pages remain for Parenting the Tech-Savvy Child.
        </p>
        <div className="mt-10">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-auto min-h-14 px-8 text-[15px] font-medium"
          >
            <Link href={TECH_SAVVY_PROGRAMME_PATH}>
              View Parenting the Tech-Savvy Child
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
