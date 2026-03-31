import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CorporateFeature() {
  return (
    <section className="bg-primary py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20">
          <div className="max-w-xl text-center lg:text-left">
            <p className="mb-5 text-[11px] font-medium uppercase tracking-[0.2em] text-primary-foreground/50">
              Corporate Wellbeing
            </p>
            <h2 className="font-serif text-[2rem] font-normal tracking-tight text-primary-foreground sm:text-4xl lg:text-[2.75rem]">
              PATI Corporate Wellbeing
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-primary-foreground/75">
              Deliver practical sessions helping your employees navigate parenting in a digital world. A unique wellbeing offering that makes a meaningful difference.
            </p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="h-13 min-w-[220px] px-8 text-[15px] font-medium"
          >
            <Link href="/organisations">
              Explore Corporate Wellbeing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
