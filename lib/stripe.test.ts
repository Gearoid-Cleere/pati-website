import assert from "node:assert/strict"
import { describe, it } from "node:test"
import { isStripeConfigured } from "./stripe.ts"

describe("isStripeConfigured", () => {
  const originalEnv = process.env.VERCEL_ENV
  const originalSecret = process.env.STRIPE_SECRET_KEY
  const originalRestricted = process.env.STRIPE_RESTRICTED_KEY_TEST

  function restore() {
    if (originalEnv === undefined) {
      delete process.env.VERCEL_ENV
    } else {
      process.env.VERCEL_ENV = originalEnv
    }

    if (originalSecret === undefined) {
      delete process.env.STRIPE_SECRET_KEY
    } else {
      process.env.STRIPE_SECRET_KEY = originalSecret
    }

    if (originalRestricted === undefined) {
      delete process.env.STRIPE_RESTRICTED_KEY_TEST
    } else {
      process.env.STRIPE_RESTRICTED_KEY_TEST = originalRestricted
    }
  }

  it("uses STRIPE_RESTRICTED_KEY_TEST in Preview, not STRIPE_SECRET_KEY", () => {
    try {
      process.env.VERCEL_ENV = "preview"
      delete process.env.STRIPE_SECRET_KEY
      process.env.STRIPE_RESTRICTED_KEY_TEST = "rk_test_fixture"
      assert.equal(isStripeConfigured(), true)

      delete process.env.STRIPE_RESTRICTED_KEY_TEST
      process.env.STRIPE_SECRET_KEY = "sk_test_fixture"
      assert.equal(isStripeConfigured(), false)
    } finally {
      restore()
    }
  })

  it("uses STRIPE_SECRET_KEY outside Preview", () => {
    try {
      process.env.VERCEL_ENV = "production"
      process.env.STRIPE_SECRET_KEY = "sk_live_fixture"
      delete process.env.STRIPE_RESTRICTED_KEY_TEST
      assert.equal(isStripeConfigured(), true)

      delete process.env.STRIPE_SECRET_KEY
      process.env.STRIPE_RESTRICTED_KEY_TEST = "rk_test_fixture"
      assert.equal(isStripeConfigured(), false)
    } finally {
      restore()
    }
  })
})
