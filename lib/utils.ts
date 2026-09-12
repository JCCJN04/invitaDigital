import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Mapping for events whose public invitation URL slug differs from their database/panel slug.
 */
export const EVENT_INVITATION_SLUG_MAP: Record<string, string> = {
  "aaron-sebastian": "bautizoaaron",
  "aaron_sebastian": "bautizoaaron",
}

export function getEventInvitationSlug(slug: string): string {
  const clean = (slug || "").trim().toLowerCase()
  return EVENT_INVITATION_SLUG_MAP[clean] || slug
}

export function getEventInvitationPath(slug: string): string {
  const target = getEventInvitationSlug(slug)
  return `/${target}`
}

/**
 * Slugs of events that do NOT use individual personalized guest invitation links.
 */
export const EVENTS_WITHOUT_PERSONALIZED_LINKS: Set<string> = new Set([
  "aaron-sebastian",
  "aaron_sebastian",
  "bautizoaaron",
])

export function hasPersonalizedLinks(
  slug: string,
  event?: { has_personalized_links?: boolean | null } | null
): boolean {
  if (event && event.has_personalized_links !== undefined && event.has_personalized_links !== null) {
    return Boolean(event.has_personalized_links)
  }
  const clean = (slug || "").trim().toLowerCase()
  if (EVENTS_WITHOUT_PERSONALIZED_LINKS.has(clean)) {
    return false
  }
  return true
}


