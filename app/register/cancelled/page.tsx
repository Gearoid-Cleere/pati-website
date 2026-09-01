import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { journeys, type Journey } from "@/lib/registration"

const retryHrefs: Record<Journey, string> = {
  parent: "/register/parent",
  school: "/register/school",
  organisation: "/register/organisation",
}

export default async function RegisterCancelledPage({
  searchParams,
}: {
  searchParams: Promise<{ journey?: string }>
}) {
  const { journey } = await searchParams
  const validJourney = journeys.includes(journey as Journey)
    ? (journey as Journey)
    : null

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              Payment was not completed
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Your registration has not been charged. You can return to the form and try again when you are ready.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href={validJourney ? retryHrefs[validJourney] : "/#access"}>
                  {validJourney ? "Return to registration" : "Choose how to join"}
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact PATI</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
