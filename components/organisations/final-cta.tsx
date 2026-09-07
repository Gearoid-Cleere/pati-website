import Link from "next/link"
import { Button } from "@/components/ui/button"

export function OrganisationsFinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Support the Parents in Your Organisation
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Give parents across your organisation access to practical, expert-led education for
          navigating technology, teenagers and family life.
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Register your organisation today and PATI will provide the link your people need to join.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <Button size="lg" asChild className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8">
            <Link href="/register/organisation">
              Register Your Organisation <span className="whitespace-nowrap">· €999.95</span>
            </Link>
          </Button>
          <p className="text-[15px] text-muted-foreground">
            Have a question?{" "}
            <Link href="/contact" className="font-medium text-foreground underline-offset-4 hover:underline">
              Contact PATI
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
