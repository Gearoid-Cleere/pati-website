import type Stripe from "stripe"
import { isPaidEmailEvent } from "./paid-registration-emails.ts"

export type StripeWebhookResponse = {
  status: number
  body: { error: string } | { received: true }
}

export type StripeWebhookDependencies = {
  secretKey: string | undefined
  webhookSecret: string | undefined
  createStripe: (secretKey: string) => Stripe
  deliver: (
    stripe: Stripe,
    sessionId: string
  ) => Promise<{ incomplete: boolean }>
}

export async function handleStripeWebhook(
  request: Request,
  deps: StripeWebhookDependencies
): Promise<StripeWebhookResponse> {
  const secretKey = deps.secretKey?.trim() ?? ""
  const webhookSecret = deps.webhookSecret?.trim() ?? ""

  if (!secretKey || !webhookSecret) {
    return {
      status: 503,
      body: { error: "Webhook is not configured." },
    }
  }

  const signature = request.headers.get("stripe-signature")

  if (!signature) {
    return {
      status: 400,
      body: { error: "Invalid signature." },
    }
  }

  const payload = await request.text()
  const stripe = deps.createStripe(secretKey)

  let event: Stripe.Event

  try {
    event = await stripe.webhooks.constructEventAsync(
      payload,
      signature,
      webhookSecret
    )
  } catch {
    console.error("Stripe webhook signature verification failed.")
    return {
      status: 400,
      body: { error: "Invalid signature." },
    }
  }

  if (!isPaidEmailEvent(event.type)) {
    return { status: 200, body: { received: true } }
  }

  const session = event.data.object as Stripe.Checkout.Session

  try {
    const result = await deps.deliver(stripe, session.id)

    if (result.incomplete) {
      return {
        status: 500,
        body: { error: "Email delivery incomplete." },
      }
    }
  } catch (error) {
    console.error("PATI paid registration email delivery failed:", error)
    return {
      status: 500,
      body: { error: "Email delivery incomplete." },
    }
  }

  return { status: 200, body: { received: true } }
}
