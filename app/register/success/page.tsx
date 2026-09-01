import Link from "next/link"
import Stripe from "stripe"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { getStripe } from "@/lib/stripe"

function confirmationCopy(session: Stripe.Checkout.Session) {
  const journey = session.metadata?.journey
  const email =
    session.customer_email ||
    session.metadata?.email ||
    "the email address provided"

  if (journey === "school") {
    return {
      title: "School registration received",
      body: `Thank you. Your school registration payment has been received. You will receive an email at ${email} with the registration/payment link for parents associated with your registered school. You can forward that same link to your parents. Programme details will follow from PATI.`,
    }
  }

  if (journey === "organisation") {
    return {
      title: "Organisation registration received",
      body: `Thank you. Your organisation registration payment has been received. PATI will follow up at ${email} about employee and parent access.`,
    }
  }

  if (journey === "schoolParent") {
    const schoolName = session.metadata?.schoolName
    const schoolLine = schoolName
      ? ` You identified your school as ${schoolName}.`
      : ""

    return {
      title: "Registration received",
      body: `Thank you. Your payment has been received.${schoolLine} We will email programme details to ${email}.`,
    }
  }

  return {
    title: "Registration received",
    body: `Thank you. Your payment has been received. We will email programme details to ${email}.`,
  }
}

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
      <Header />
      <main className="flex-1 bg-background">
        <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            {copy ? (
              <>
                <h1 className="font-serif text-3xl font-medium tracking-tight text-foreground sm:text-4xl">
                  {copy.title}
                </h1>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                  {copy.body}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Stripe will also send a payment receipt to the email used at checkout.
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
