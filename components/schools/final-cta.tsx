import Link from "next/link"
import { Button } from "@/components/ui/button"

export function SchoolsFinalCta() {
  return (
    <section className="border-t border-border/40 bg-muted/30 py-20 lg:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center sm:px-8 lg:px-12">
        <h2 className="font-serif text-[1.9rem] font-normal tracking-tight text-foreground sm:text-3xl lg:text-4xl">
          Bring Expert Parent Education to Your School
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
          PATI provides the expertise, programme and communications support. Your school provides
          the connection to parents.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4">
          <Button size="lg" asChild className="h-auto min-h-14 min-w-0 max-w-full whitespace-normal px-5 py-3 text-center text-[15px] font-medium leading-snug sm:px-8">
            <Link href="/register/school">
              Register Your School <span className="whitespace-nowrap">· €499.95</span>
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
