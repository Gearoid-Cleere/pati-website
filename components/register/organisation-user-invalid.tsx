import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export function OrganisationUserInvalidLink() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
              This registration link is not valid
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Organisation user registration is only available through a unique link provided by PATI
              to a registered organisation. If you were given a link, please use the original link or
              contact PATI for help.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild>
                <Link href="/">Return home</Link>
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
