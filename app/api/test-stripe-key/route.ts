
import Stripe from "stripe";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (process.env.VERCEL_ENV !== "preview") {
    return new Response(null, { status: 404 });
  }

  const expectedToken = process.env.STRIPE_TEST_ACCESS_TOKEN;
  const suppliedToken = request.headers.get("x-test-token");

  if (!expectedToken || suppliedToken !== expectedToken) {
    return new Response(null, { status: 404 });
  }

  const key = process.env.STRIPE_RESTRICTED_KEY_SANDBOX;

  if (!key) {
    return NextResponse.json(
      { status: "not_configured" },
      { status: 500 }
    );
  }

  try {
    const stripe = new Stripe(key);

    await stripe.prices.list({ limit: 1 });

    return NextResponse.json({
      status: "success",
      message: "Restricted Stripe key works",
    });
  } catch {
    return NextResponse.json(
      { status: "failed" },
      { status: 500 }
    );
  }
}
