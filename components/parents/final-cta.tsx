import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ParentsFinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Ready to Join PATI?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          Join independently, or access the programme through your school if it is already
          registered with PATI.
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

          <div>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal border-primary/40 bg-primary/10 px-5 py-3 text-center text-[15px] font-medium leading-snug text-foreground shadow-none hover:bg-primary/15 hover:text-foreground sm:px-8"
            >
              <Link href="/register/school-parent">
                Access Through Your School <span className="whitespace-nowrap">· €14.95</span>
              </Link>
            </Button>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              For parents whose school is already registered with PATI.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
