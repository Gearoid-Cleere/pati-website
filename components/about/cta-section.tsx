import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Learn more about the PATI programme
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Whether you&apos;re a parent, educator, or organisation, we have programmes designed to support you.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="/programme">
                Explore Programme
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/join">
                Join as a Parent
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/schools/register">
                Register Your School
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
