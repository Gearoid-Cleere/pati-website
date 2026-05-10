import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8 lg:px-12">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-accent">
          Continue Exploring
        </p>

        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Supporting families, schools and organisations through a period of profound technological change
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          The Parenting and Technology Institute exists to help families and communities navigate technology thoughtfully, practically and with greater confidence. Explore the Institute’s work, programmes, insights and areas of support.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-14">
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-13 px-8 text-[15px]"
          >
            <Link href="/about">About the Institute</Link>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            asChild
            className="h-13 px-8 text-[15px] text-muted-foreground hover:text-foreground"
          >
            <Link href="/resources">Explore Resources</Link>
          </Button>

          <Button
            size="lg"
            variant="ghost"
            asChild
            className="h-13 px-8 text-[15px] text-muted-foreground hover:text-foreground"
          >
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
