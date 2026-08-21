"use client"

import React, { useState, useEffect } from "react"
import { supabase, type Guest, type Event } from "@/lib/supabase"
import { submitRsvpAction } from "@/app/actions/rsvp"
import { QRCodeSVG } from "qrcode.react"
import { CheckCircle2, XCircle, QrCode, Sparkles, Loader2, Users, Calendar, MapPin } from "lucide-react"

interface RsvpModalProps {
  eventSlug: string
  guestToken?: string | null
  initialGuest?: Guest | null
  eventTitle?: string
  eventDate?: string
  venueName?: string
  isOpen: boolean
  onClose: () => void
}

export function RsvpModal({
  eventSlug,
  guestToken: initialToken,
  initialGuest,
  eventTitle,
  eventDate,
  venueName,
  isOpen,
  onClose,
}: RsvpModalProps) {
  const [token, setToken] = useState<string | null>(initialToken || initialGuest?.token || null)
  const [guest, setGuest] = useState<Guest | null>(initialGuest || null)
  const [eventData, setEventData] = useState<Event | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(initialGuest?.rsvp_status === "confirmed" || initialGuest?.rsvp_status === "declined")

  // Form state
  const [attending, setAttending] = useState<"confirmed" | "declined">(
    initialGuest?.rsvp_status === "declined" ? "declined" : "confirmed"
  )
  const [passes, setPasses] = useState<number>(
    initialGuest?.passes_confirmed && initialGuest.passes_confirmed > 0
      ? initialGuest.passes_confirmed
      : initialGuest?.passes_assigned || 1
  )
  const [guestName, setGuestName] = useState(initialGuest?.name || "")
  const [phone, setPhone] = useState(initialGuest?.phone || "")
  const [notes, setNotes] = useState(initialGuest?.notes || "")
  const [error, setError] = useState<string | null>(null)

  // Update from initialGuest if changed
  useEffect(() => {
    if (initialGuest) {
      setGuest(initialGuest)
      setToken(initialGuest.token)
      setGuestName(initialGuest.name)
      setPhone(initialGuest.phone || "")
      setPasses(
        initialGuest.passes_confirmed > 0 ? initialGuest.passes_confirmed : initialGuest.passes_assigned
      )
      setNotes(initialGuest.notes || "")
      if (initialGuest.rsvp_status === "confirmed" || initialGuest.rsvp_status === "declined") {
        setAttending(initialGuest.rsvp_status)
        setSubmitted(true)
      }
    }
  }, [initialGuest])

  // Detect token from URL if not passed
  useEffect(() => {
    if (typeof window !== "undefined" && !token) {
      const params = new URLSearchParams(window.location.search)
      const urlToken = params.get("guest") || params.get("token") || params.get("p")
      if (urlToken) setToken(urlToken)
    }
  }, [token])

  // Fetch guest and event data
  useEffect(() => {
    if (!isOpen) return

    async function loadData() {
      // If we already have both guest and eventData, no need to show loader
      if (guest && eventData) return

      setLoading(!guest)
      setError(null)
      try {
        // Fetch event
        const { data: event, error: eventErr } = await supabase
          .from("events")
          .select("*")
          .eq("slug", eventSlug)
          .maybeSingle()

        if (event) setEventData(event)

        // Fetch guest if token exists and not loaded
        const currentToken = token || (typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("guest") : null)
        if (currentToken && !guest) {
          const { data: guestData, error: guestErr } = await supabase
            .from("guests")
            .select("*")
            .eq("token", currentToken)
            .maybeSingle()

          if (guestData) {
            setGuest(guestData)
            setGuestName(guestData.name)
            setPhone(guestData.phone || "")
            setPasses(guestData.passes_confirmed > 0 ? guestData.passes_confirmed : guestData.passes_assigned)
            setNotes(guestData.notes || "")
            if (guestData.rsvp_status === "confirmed" || guestData.rsvp_status === "declined") {
              setAttending(guestData.rsvp_status)
              setSubmitted(true)
            }
          }
        }
      } catch (err: any) {
        console.error("Error in loadData:", err)
      } finally {
        setLoading(false)
      }
    }

    loadData()
  }, [isOpen, eventSlug, token, guest, eventData])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    try {
      if (!guest && !guestName.trim()) {
        setError("Por favor ingresa tu nombre completo.")
        setSubmitting(false)
        return
      }

      const result = await submitRsvpAction({
        guestId: guest?.id,
        token: guest?.token || token,
        eventSlug,
        attending,
        passes,
        guestName,
        phone,
        notes,
      })

      if (!result.success || !result.guest) {
        throw new Error(result.error || "Ocurrió un error al guardar la confirmación.")
      }

      setGuest(result.guest)
      setSubmitted(true)
    } catch (err: any) {
      console.error("Error submitting RSVP:", err)
      setError(err.message || "Ocurrió un error al guardar tu confirmación. Intenta de nuevo.")
    } finally {
      setSubmitting(false)
    }
  }

  if (!isOpen) return null

  const maxPasses = guest ? guest.passes_assigned : 6
  const displayTitle = eventData?.title || eventTitle || "Nuestro Evento"
  const passQrValue = guest
    ? `${typeof window !== "undefined" ? window.location.origin : "https://invitacionesdigitalesmty.com.mx"}/boda/${eventSlug}?guest=${guest.token}`
    : `boda-${eventSlug}`

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-card text-card-foreground rounded-2xl shadow-2xl border border-border overflow-hidden animate-in zoom-in-95 duration-300 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-border bg-muted/30 flex items-center justify-between">
          <div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary">
              Confirmación de Asistencia
            </span>
            <h3 className="font-serif text-xl font-bold text-foreground">
              {displayTitle}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3 text-muted-foreground">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
              <p className="text-sm">Cargando detalles de tu invitación...</p>
            </div>
          ) : submitted ? (
            /* Digital Pass / Success State */
            <div className="space-y-6 text-center animate-in fade-in duration-300">
              {attending === "confirmed" ? (
                <div className="space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="font-serif text-2xl font-bold text-foreground">
                      ¡Tu pase está confirmado!
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Hemos registrado tu asistencia con éxito.
                    </p>
                  </div>

                  {/* Digital Pass Card */}
                  <div className="bg-gradient-to-b from-card to-secondary/30 rounded-xl p-5 border border-border shadow-sm text-left relative overflow-hidden space-y-4">
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <div>
                        <p className="text-[10px] uppercase tracking-wider font-bold text-primary">
                          Pase de Acceso Digital
                        </p>
                        <p className="font-serif font-bold text-lg text-foreground">
                          {guest?.name || guestName}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="inline-block bg-primary/10 text-primary font-bold text-xs px-2.5 py-1 rounded-full">
                          {passes} {passes === 1 ? "Persona" : "Personas"}
                        </span>
                      </div>
                    </div>

                    {guest?.table_assigned && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-foreground">
                        <span>📍 Mesa Asignada:</span>
                        <span className="text-primary">{guest.table_assigned}</span>
                      </div>
                    )}

                    {/* QR Code Container (Sin fondo) */}
                    <div className="flex flex-col items-center justify-center mx-auto w-fit py-2">
                      <QRCodeSVG
                        value={passQrValue}
                        size={150}
                        level="H"
                        bgColor="transparent"
                        fgColor="currentColor"
                        className="text-foreground"
                        includeMargin={false}
                      />
                      <p className="text-[10px] text-muted-foreground font-semibold mt-3 uppercase tracking-wider">
                        Pase de Acceso Válido
                      </p>
                    </div>

                    <p className="text-[11px] text-center text-muted-foreground">
                      Presenta este código QR al llegar a la recepción del evento.
                    </p>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="w-full py-2.5 text-xs font-semibold text-muted-foreground hover:text-foreground border border-border rounded-lg transition-colors cursor-pointer"
                    >
                      Modificar respuesta
                    </button>
                    <button
                      onClick={onClose}
                      className="w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary-hover rounded-lg transition-colors cursor-pointer"
                    >
                      Listo
                    </button>
                  </div>
                </div>
              ) : (
                /* Declined State */
                <div className="space-y-4 py-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-amber-500/10 text-amber-600 flex items-center justify-center">
                    <XCircle className="w-8 h-8" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-bold text-foreground">
                      Respuesta registrada
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lamentamos que no puedas acompañarnos. ¡Agradecemos mucho que nos hayas avisado!
                    </p>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-primary underline underline-offset-4 cursor-pointer"
                  >
                    ¿Cambiaste de opinión? Haz clic aquí para confirmar asistencia
                  </button>
                  <button
                    onClick={onClose}
                    className="block w-full py-2.5 text-xs font-bold uppercase tracking-wider bg-foreground text-background rounded-lg cursor-pointer"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* RSVP Form State */
            <form onSubmit={handleSubmit} className="space-y-5">
              {guest ? (
                <div className="bg-secondary/50 rounded-xl p-3.5 border border-border flex items-center justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">
                      Invitación para:
                    </p>
                    <p className="font-serif font-bold text-base text-foreground">
                      {guest.name}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                    {guest.passes_assigned} {guest.passes_assigned === 1 ? "Pase reservado" : "Pases reservados"}
                  </span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Tu Nombre Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="Ej. Carlos Mendoza"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-foreground mb-1">
                      Teléfono / WhatsApp (Opcional)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ej. 81 1234 5678"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
                    />
                  </div>
                </div>
              )}

              {/* Attending selector */}
              <div>
                <label className="block text-xs font-semibold text-foreground mb-2">
                  ¿Nos acompañarás al evento?
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setAttending("confirmed")}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      attending === "confirmed"
                        ? "border-primary bg-primary/10 text-primary shadow-sm ring-1 ring-primary"
                        : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                    }`}
                  >
                    <span>🎉</span> Sí, asistiré
                  </button>
                  <button
                    type="button"
                    onClick={() => setAttending("declined")}
                    className={`py-3 px-4 rounded-xl border text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      attending === "declined"
                        ? "border-destructive bg-destructive/10 text-destructive shadow-sm ring-1 ring-destructive"
                        : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
                    }`}
                  >
                    <span>😔</span> No podré
                  </button>
                </div>
              </div>

              {/* Passes selector (only if attending) */}
              {attending === "confirmed" && (
                <div className="animate-in fade-in duration-200">
                  <label className="block text-xs font-semibold text-foreground mb-2">
                    ¿Cuántas personas asistirán en total?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: maxPasses }, (_, i) => i + 1).map((num) => (
                      <button
                        key={num}
                        type="button"
                        onClick={() => setPasses(num)}
                        className={`w-11 h-11 rounded-lg text-sm font-bold border transition-all cursor-pointer flex items-center justify-center ${
                          passes === num
                            ? "bg-primary text-primary-foreground border-primary shadow-sm"
                            : "bg-background border-border text-foreground hover:border-primary/50"
                        }`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-muted-foreground mt-1.5">
                    {guest ? `Tienes hasta ${guest.passes_assigned} pases disponibles.` : "Selecciona el número de personas."}
                  </p>
                </div>
              )}

              {/* Notes / Dietary restrictions */}
              <div>
                <label className="block text-xs font-semibold text-foreground mb-1">
                  Mensaje para los festejados o notas (Opcional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="¡Muchas felicidades! / Alguna restricción alimenticia..."
                  className="w-full px-3.5 py-2 rounded-lg border border-border bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
                />
              </div>

              {error && (
                <p className="text-xs text-destructive bg-destructive/10 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest bg-primary text-primary-foreground hover:bg-primary-hover transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Guardando confirmación...
                  </>
                ) : (
                  <>
                    <span>Confirmar Respuesta</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
