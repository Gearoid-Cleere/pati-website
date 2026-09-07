import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ProgrammeFinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Ready to Join the PATI Programme?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Join independently, or choose the school or organisation route that fits your situation.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8"
          >
            <Link href="/register/parent">
              Join Independently <span className="whitespace-nowrap">· €79.95</span>
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8"
          >
            <Link href="#access">Choose How to Access</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
