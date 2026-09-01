"use client"

import { useState } from "react"

export async function startCheckout(payload: Record<string, unknown>) {
  const response = await fetch("/api/checkout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })

  const data = (await response.json()) as { url?: string; error?: string }

  if (!response.ok || !data.url) {
    throw new Error(data.error || "Unable to start checkout.")
  }

  window.location.href = data.url
}

export function useCheckoutSubmit() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")

  async function submit(payload: Record<string, unknown>) {
    setIsSubmitting(true)
    setError("")

    try {
      await startCheckout(payload)
    } catch (err) {
      setIsSubmitting(false)
      setError(
        err instanceof Error
          ? err.message
          : "Unable to start checkout. Please try again or contact us."
      )
    }
  }

  return { isSubmitting, error, submit }
}
