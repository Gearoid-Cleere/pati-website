import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-serif text-[2.75rem] font-normal leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            <span className="text-balance">
              Helping Families Navigate
              <br className="hidden sm:block" />
              Technology with Confidence
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground lg:mt-8 lg:text-xl">
            Expert-led programmes supporting families, schools and organisations to manage children&apos;s technology use with clarity and confidence.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-12">
            <Button
              size="lg"
              asChild
              className="h-14 min-w-[200px] px-8 text-[15px] font-medium"
            >
              <Link href="/schools">
                Register Your School
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="h-14 min-w-[200px] border px-8 text-[15px] font-medium"
            >
              <Link href="/parents">Join as a Parent</Link>
            </Button>
          </div>

          <div className="mt-8">
            <Link
              href="/organisations"
              className="inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Looking for corporate wellbeing solutions?
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
