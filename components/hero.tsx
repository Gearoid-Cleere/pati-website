import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-accent">
            Parenting and Technology Institute
          </p>

          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">
              Parenting in a Digital World
              <br className="hidden sm:block" />
              Has Changed Dramatically
            </span>
          </h1>

          <div className="mx-auto mt-6 max-w-2xl space-y-4 text-lg leading-relaxed text-muted-foreground lg:mt-8 lg:text-xl">
            <p>
              Technology is reshaping childhood, family life and human connection at extraordinary speed.
            </p>
            <p>
              The Parenting and Technology Institute provides thoughtful, evidence-informed guidance to help families, schools and organisations navigate technology with greater confidence, balance and understanding.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center lg:mt-12">
            <Button
              size="lg"
              asChild
              className="h-14 px-8 text-[15px] font-medium"
            >
              <Link href="/about">
                Explore the Institute
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <Link href="/parents" className="transition-colors hover:text-foreground">
                For Parents
              </Link>
              <Link href="/schools" className="transition-colors hover:text-foreground">
                For Schools
              </Link>
              <Link href="/organisations" className="transition-colors hover:text-foreground">
                For Organisations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
