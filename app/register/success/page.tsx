import Link from "next/link"
import Stripe from "stripe"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { OFFERING_AGE_OF_AI, readRegistrationOffering } from "@/lib/programme-id"
import {
  confirmationCopy,
  stripePaymentReceiptNote,
} from "@/lib/registration-success"
import { getStripe } from "@/lib/stripe"

export default async function RegisterSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>
}) {
  const { session_id: sessionId } = await searchParams

  let session: Stripe.Checkout.Session | null = null

  if (sessionId && process.env.STRIPE_SECRET_KEY) {
    try {
      session = await getStripe().checkout.sessions.retrieve(sessionId)
    } catch (error) {
      console.error("Unable to retrieve Stripe checkout session:", error)
    }
  }

  const paid = session?.payment_status === "paid"
  const copy = paid && session ? confirmationCopy(session) : null

  return (
    <div className="flex min-h-screen flex-col">
      <Header hideRegister={readRegistrationOffering(session?.metadata) === OFFERING_AGE_OF_AI} />
      <main className="flex-1 bg-background">
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            {copy ? (
              <>
                <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {copy.title}
                </h1>
                {copy.body.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className={
                      index === 0
                        ? "mt-6 text-base leading-relaxed text-muted-foreground"
                        : "mt-4 text-base leading-relaxed text-muted-foreground"
                    }
                  >
                    {paragraph}
                  </p>
                ))}
                <p className="mt-4 text-sm text-muted-foreground">
                  {stripePaymentReceiptNote}
                </p>
              </>
            ) : (
              <>
                <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  We could not confirm this payment
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  If you completed payment, it may still have gone through. Please check your email or contact PATI and we will help you.
                </p>
              </>
            )}

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
