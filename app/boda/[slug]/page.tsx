import React from "react"
import { supabase, type Event, type Guest } from "@/lib/supabase"
import { WeddingInvitationView } from "@/components/wedding-invitation-view"
import { Metadata } from "next"

interface WeddingPageProps {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({
  params,
}: WeddingPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const slug = decodeURIComponent(resolvedParams.slug || "").trim()

  const { data: event } = await supabase
    .from("events")
    .select("title")
    .eq("slug", slug)
    .maybeSingle()

  const title = event?.title ? `${event.title} | Nuestra Boda` : "Nuestra Boda | Invitación Digital"

  return {
    title,
    description: "Te invitamos a celebrar nuestra boda. Consulta la fecha, itinerario, ubicación y confirma tu asistencia.",
  }
}

export default async function WeddingPage({
  params,
  searchParams,
}: WeddingPageProps) {
  const resolvedParams = await params
  const resolvedSearchParams = await searchParams
  const slug = decodeURIComponent(resolvedParams.slug || "").trim()

  const guestToken = typeof resolvedSearchParams.guest === "string"
    ? resolvedSearchParams.guest
    : typeof resolvedSearchParams.token === "string"
    ? resolvedSearchParams.token
    : typeof resolvedSearchParams.p === "string"
    ? resolvedSearchParams.p
    : null

  // Fetch event
  const { data: eventData, error: eventErr } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .maybeSingle()

  if (eventErr || !eventData) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">Invitación no encontrada</h1>
        <p className="text-muted-foreground text-sm max-w-md">
          No pudimos localizar la invitación de boda <span className="font-mono text-primary font-bold">"{slug}"</span>. Verifica el enlace.
        </p>
      </div>
    )
  }

  // Fetch guest if token provided
  let initialGuest: Guest | null = null
  if (guestToken) {
    const { data: guestData } = await supabase
      .from("guests")
      .select("*")
      .eq("token", guestToken)
      .maybeSingle()

    if (guestData) {
      initialGuest = guestData as Guest
    }
  }

  return (
    <WeddingInvitationView
      event={eventData as Event}
      initialGuest={initialGuest}
    />
  )
}
