import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold mb-6">Terms and Conditions</h1>

        <p className="text-sm text-muted-foreground mb-4">
          By accessing and using the Parenting and Technology Institute services,
          you agree to the following terms.
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          Programme content is provided for educational purposes and may not be
          reproduced or distributed without permission.
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          We reserve the right to update our services and terms at any time.
        </p>

        <p className="text-sm text-muted-foreground">
          For queries, please contact:
          schools@parentingandtechnologyinstitute.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
