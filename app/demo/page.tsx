import React from "react"
import { Metadata } from "next"
import { DEMO_EVENT, DEMO_GUESTS } from "@/lib/demo-data"
import { BodaMateoStyleView } from "@/components/boda-mateo-style-view"

interface DemoPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export const metadata: Metadata = {
  title: "Sofía & Alejandro | Boda - Invitación Digital Demo",
  description: "Demostración interactiva de invitación digital de boda con diseño editorial. Invitaciones Digitales MTY.",
}

export default async function DemoInvitationPage({ searchParams }: DemoPageProps) {
  const resolvedSearchParams = await searchParams
  const guestToken =
    typeof resolvedSearchParams.guest === "string"
      ? resolvedSearchParams.guest
      : typeof resolvedSearchParams.token === "string"
      ? resolvedSearchParams.token
      : typeof resolvedSearchParams.p === "string"
      ? resolvedSearchParams.p
      : null

  // Only match guest if a token was explicitly provided in the URL
  const currentGuest = guestToken
    ? DEMO_GUESTS.find((g) => g.token.toLowerCase() === guestToken.toLowerCase()) || null
    : null

  return (
    <main className="relative">
      <BodaMateoStyleView
        event={DEMO_EVENT}
        initialGuest={currentGuest}
      />
    </main>
  )
}
