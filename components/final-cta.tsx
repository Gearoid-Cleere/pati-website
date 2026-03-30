import Link from "next/link"
import { Button } from "@/components/ui/button"

export function FinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
        <h2 className="font-serif text-[1.75rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          <span className="text-balance">
            Bring PATI to your school, family or organisation
          </span>
        </h2>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:mt-14">
          <Button size="lg" asChild className="h-13 px-8 text-[15px]">
            <Link href="/register-school">Register Your School</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            asChild
            className="h-13 px-8 text-[15px]"
          >
            <Link href="/join-parent">Join as a Parent</Link>
          </Button>
          <Button
            size="lg"
            variant="ghost"
            asChild
            className="h-13 px-8 text-[15px] text-muted-foreground hover:text-foreground"
          >
            <Link href="/corporate">Corporate Enquiry</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
