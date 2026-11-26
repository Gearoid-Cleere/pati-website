export const OFFERING_TECH_SAVVY = "techSavvy" as const
export const OFFERING_AGE_OF_AI = "ageOfAi2027" as const
export const OFFERING_ANNUAL_ACCESS = "annualAccess" as const

export const registrationOfferings = [
  OFFERING_TECH_SAVVY,
  OFFERING_AGE_OF_AI,
  OFFERING_ANNUAL_ACCESS,
] as const

export type RegistrationOfferingId = (typeof registrationOfferings)[number]

export const participantOfferings = [
  OFFERING_TECH_SAVVY,
  OFFERING_AGE_OF_AI,
] as const

export type ParticipantOfferingId = (typeof participantOfferings)[number]

const offeringJourneys: Record<RegistrationOfferingId, readonly string[]> = {
  [OFFERING_TECH_SAVVY]: ["parent", "schoolParent", "organisationUser"],
  [OFFERING_AGE_OF_AI]: ["parent", "school", "schoolParent", "organisationUser"],
  [OFFERING_ANNUAL_ACCESS]: ["school", "organisation"],
}

export const januaryRegistrationPaths = {
  parent: "/register/ai/parent",
  school: "/register/ai/school",
  schoolParent: "/register/ai/school-parent",
  organisationUser: "/register/ai/organisation-user",
} as const

export function isRegistrationOfferingId(
  value: string | undefined | null
): value is RegistrationOfferingId {
  return (
    value === OFFERING_TECH_SAVVY ||
    value === OFFERING_AGE_OF_AI ||
    value === OFFERING_ANNUAL_ACCESS
  )
}

export function isValidOfferingJourney(
  offering: string | undefined | null,
  journey: string | undefined | null
) {
  if (!isRegistrationOfferingId(offering) || !journey) {
    return false
  }

  return offeringJourneys[offering].includes(journey)
}

export function readRegistrationOffering(
  metadata: { offering?: string | null; programme?: string | null } | null | undefined
) {
  if (!metadata) {
    return undefined
  }

  if (typeof metadata.offering === "string" && metadata.offering !== "") {
    return metadata.offering
  }

  if (Object.prototype.hasOwnProperty.call(metadata, "offering")) {
    return undefined
  }

  if (typeof metadata.programme === "string" && metadata.programme !== "") {
    return metadata.programme
  }

  return undefined
}
