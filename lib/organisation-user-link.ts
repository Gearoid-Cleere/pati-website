import { createHmac, timingSafeEqual } from "node:crypto"
import type Stripe from "stripe"
import { getSiteUrl } from "@/lib/stripe"

export const ORGANISATION_USER_TOKEN_VERSION = 1

type OrganisationUserTokenPayload = {
  v: number
  iat: number
  o: string
}

function getLinkSecret() {
  const secret = process.env.ORGANISATION_USER_LINK_SECRET

  if (!secret) {
    throw new Error("ORGANISATION_USER_LINK_SECRET is not configured")
  }

  return secret
}

function signBody(body: string) {
  return createHmac("sha256", getLinkSecret()).update(body).digest("base64url")
}

function signaturesMatch(provided: string, expected: string) {
  const providedBuffer = Buffer.from(provided)
  const expectedBuffer = Buffer.from(expected)

  if (providedBuffer.length !== expectedBuffer.length) {
    return false
  }

  return timingSafeEqual(providedBuffer, expectedBuffer)
}

export function createOrganisationUserToken(organisationName: string, issuedAt: number) {
  const name = organisationName.trim()

  if (!name) {
    throw new Error("Organisation name is required to create a registration token")
  }

  const payload: OrganisationUserTokenPayload = {
    v: ORGANISATION_USER_TOKEN_VERSION,
    iat: issuedAt,
    o: name.slice(0, 200),
  }

  const body = Buffer.from(JSON.stringify(payload), "utf8").toString("base64url")
  return `${body}.${signBody(body)}`
}

export function verifyOrganisationUserToken(token: string) {
  try {
    const trimmed = token.trim()
    const separator = trimmed.lastIndexOf(".")

    if (separator <= 0 || separator === trimmed.length - 1) {
      return null
    }

    const body = trimmed.slice(0, separator)
    const signature = trimmed.slice(separator + 1)

    if (!signaturesMatch(signature, signBody(body))) {
      return null
    }

    const payload = JSON.parse(
      Buffer.from(body, "base64url").toString("utf8")
    ) as OrganisationUserTokenPayload

    if (payload.v !== ORGANISATION_USER_TOKEN_VERSION || !Number.isFinite(payload.iat)) {
      return null
    }

    const organisationName = typeof payload.o === "string" ? payload.o.trim() : ""

    if (!organisationName || organisationName.length > 200) {
      return null
    }

    return {
      organisationName,
      issuedAt: payload.iat,
    }
  } catch {
    return null
  }
}

export function getOrganisationUserRegistrationPath(token: string) {
  return `/register/organisation-user/${encodeURIComponent(token)}`
}

export function getOrganisationUserRegistrationUrl(organisationName: string, issuedAt: number) {
  const token = createOrganisationUserToken(organisationName, issuedAt)
  return `${getSiteUrl().replace(/\/$/, "")}${getOrganisationUserRegistrationPath(token)}`
}

export function getOrganisationUserRegistrationUrlFromSession(
  session: Pick<Stripe.Checkout.Session, "created"> & {
    metadata?: Stripe.Metadata | null
  }
) {
  const organisationName = session.metadata?.organisationName

  if (!organisationName) {
    return null
  }

  try {
    return getOrganisationUserRegistrationUrl(
      organisationName,
      session.created ?? Math.floor(Date.now() / 1000)
    )
  } catch (error) {
    console.warn("Unable to create organisation user registration link:", error)
    return null
  }
}
