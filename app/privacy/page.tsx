import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <p className="text-sm text-muted-foreground mb-4">
          The Parenting and Technology Institute is committed to protecting your privacy.
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          We collect only the information necessary to provide our services and communicate
          with schools, parents, and organisations.
        </p>

        <p className="text-sm text-muted-foreground mb-4">
          We do not sell or share your personal data with third parties except where required
          to deliver our services.
        </p>

        <p className="text-sm text-muted-foreground">
          For any questions, please contact:
          schools@parentingandtechnologyinstitute.com
        </p>
      </main>

      <Footer />
    </div>
  )
}
