import React from "react"
import { supabase, type Event, type Guest } from "@/lib/supabase"
import { PanelClientView } from "@/components/panel-client-view"
import { PanelLoginGate } from "@/components/panel-login-gate"
import { isPanelAuthenticated } from "@/app/actions/panel-auth"

interface PanelPageProps {
  params: Promise<{ slug: string }>
}

export default async function HostPanelPage({ params }: PanelPageProps) {
  const resolvedParams = await params
  const slug = decodeURIComponent(resolvedParams.slug || "").trim()

  const { data: eventData, error: eventErr } = await supabase
    .from("events")
    .select("*")
    .eq("slug", slug)
    .maybeSingle()

  if (eventErr || !eventData) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
        <h1 className="font-serif text-3xl font-bold mb-2">Evento no encontrado</h1>
        <p className="text-muted-foreground text-sm max-w-md">
          No pudimos encontrar el evento <span className="font-mono text-primary font-bold">"{slug}"</span>. Verifica el enlace.
        </p>
      </div>
    )
  }

  // Check if host is authenticated
  const isAuthenticated = await isPanelAuthenticated(slug)

  if (!isAuthenticated) {
    return <PanelLoginGate event={eventData as Event} slug={slug} />
  }

  const { data: guestsData } = await supabase
    .from("guests")
    .select("*")
    .eq("event_id", eventData.id)
    .order("created_at", { ascending: false })

  return (
    <PanelClientView
      initialEvent={eventData as Event}
      initialGuests={(guestsData || []) as Guest[]}
      slug={slug}
    />
  )
}
