"use client"

import React, { useState, useEffect } from "react"
import { supabase, type Event, type Guest } from "@/lib/supabase"
import { RsvpModal } from "@/components/rsvp-modal"
import { QRCodeSVG } from "qrcode.react"
import {
  Calendar,
  Clock,
  MapPin,
  Music,
  Volume2,
  VolumeX,
  Heart,
  Sparkles,
  Gift,
  Search,
  Navigation,
  CheckCircle2,
  Shirt,
  Church,
  PartyPopper,
  Wine,
  Share2,
  Copy,
} from "lucide-react"

interface WeddingInvitationViewProps {
  event: Event
  initialGuest?: Guest | null
}

export function WeddingInvitationView({
  event,
  initialGuest,
}: WeddingInvitationViewProps) {
  const [guest, setGuest] = useState<Guest | null>(initialGuest || null)
  const [isRsvpOpen, setIsRsvpOpen] = useState(false)
  const [seatingSearch, setSeatingSearch] = useState("")
  const [seatingResults, setSeatingResults] = useState<Guest[]>([])
  const [searchingSeating, setSearchingSeating] = useState(false)
  const [copiedBank, setCopiedBank] = useState(false)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  // Detect guest from URL searchParams if not passed
  useEffect(() => {
    if (typeof window !== "undefined" && !guest) {
      const params = new URLSearchParams(window.location.search)
      const token = params.get("guest") || params.get("token") || params.get("p")
      if (token) {
        supabase
          .from("guests")
          .select("*")
          .eq("token", token)
          .maybeSingle()
          .then(({ data }) => {
            if (data) setGuest(data)
          })
      }
    }
  }, [guest])

  // Countdown calculation
  useEffect(() => {
    const targetDate = new Date(event.event_date).getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 1000)
    return () => clearInterval(timer)
  }, [event.event_date])

  // Seating search function
  const handleSearchSeating = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!seatingSearch.trim()) return

    setSearchingSeating(true)
    try {
      const { data } = await supabase
        .from("guests")
        .select("*")
        .eq("event_id", event.id)
        .ilike("name", `%${seatingSearch.trim()}%`)
        .limit(5)

      setSeatingResults(data || [])
    } catch (err) {
      console.error("Error searching seating:", err)
    } finally {
      setSearchingSeating(false)
    }
  }

  const handleCopyClabe = (clabe: string) => {
    navigator.clipboard.writeText(clabe)
    setCopiedBank(true)
    setTimeout(() => setCopiedBank(false), 2500)
  }

  const formattedDate = new Date(event.event_date).toLocaleDateString("es-MX", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#121110] text-[#2C2925] dark:text-[#E8E6E3] font-sans antialiased selection:bg-[#D4AF37]/20 pb-20">
      
      {/* 1. TOP PERSONALIZED BANNER (Only if accessed with guest token) */}
      {guest && (
        <div className="sticky top-0 z-40 bg-white/90 dark:bg-[#1A1918]/90 backdrop-blur-md border-b border-[#E8E4DC] dark:border-[#2D2A26] shadow-sm">
          <div className="max-w-xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-[#A67C1E] dark:text-[#E0C068] block">
                Invitación Personalizada
              </span>
              <p className="font-serif font-bold text-sm sm:text-base text-foreground truncate">
                {guest.name}
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-0.5">
                <span>{guest.passes_assigned} {guest.passes_assigned === 1 ? "pase reservado" : "pases reservados"}</span>
                {guest.table_assigned && (
                  <span className="text-[#A67C1E] dark:text-[#E0C068] font-semibold">
                    · 📍 {guest.table_assigned}
                  </span>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-3.5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[#2C2925] text-[#FAF8F5] dark:bg-[#FAF8F5] dark:text-[#2C2925] hover:opacity-90 transition-all flex items-center gap-1.5 shadow-sm cursor-pointer whitespace-nowrap"
            >
              {guest.rsvp_status === "confirmed" ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Ver Pase QR</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5 text-[#A67C1E]" />
                  <span>Confirmar</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* 2. HERO / COVER SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-16 overflow-hidden">
        {/* Subtle Decorative Background Glow */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-[#E0C068]/15 dark:bg-[#A67C1E]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-[#D4AF37]/15 dark:bg-[#A67C1E]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto space-y-6 relative z-10">
          
          <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-[#A67C1E] dark:text-[#E0C068] font-semibold">
            <Heart className="w-3.5 h-3.5 fill-current animate-pulse" />
            <span>Nuestra Boda</span>
            <Heart className="w-3.5 h-3.5 fill-current animate-pulse" />
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#2C2925] dark:text-[#FAF8F5] leading-[1.1]">
            {event.title}
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#7A746B] dark:text-[#A8A49D] max-w-md mx-auto">
            «Con la bendición de Dios y nuestras familias, tenemos el honor de invitarte a celebrar nuestra unión matrimonial.»
          </p>

          {/* Date Badge */}
          <div className="pt-2">
            <div className="inline-block bg-[#F2EDE4] dark:bg-[#211F1C] border border-[#E0D8C8] dark:border-[#38342E] px-6 py-3 rounded-2xl shadow-sm">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#A67C1E] dark:text-[#E0C068] capitalize">
                {formattedDate}
              </p>
              {event.venue_name && (
                <p className="text-xs text-muted-foreground mt-0.5">
                  📍 {event.venue_name}
                </p>
              )}
            </div>
          </div>

          {/* Live Countdown Timer */}
          <div className="pt-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#8C857B] dark:text-[#9E988F] font-bold mb-3">
              Faltan sólo
            </p>
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-sm mx-auto">
              {[
                { label: "Días", value: timeLeft.days },
                { label: "Horas", value: timeLeft.hours },
                { label: "Minutos", value: timeLeft.minutes },
                { label: "Segundos", value: timeLeft.seconds },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-[#1E1D1A] rounded-xl p-3 border border-[#E8E4DC] dark:border-[#2D2A26] shadow-sm"
                >
                  <p className="font-serif text-2xl sm:text-3xl font-bold text-[#2C2925] dark:text-[#FAF8F5]">
                    {String(item.value).padStart(2, "0")}
                  </p>
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold mt-0.5">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Primary RSVP CTA Button */}
          <div className="pt-6">
            <button
              onClick={() => setIsRsvpOpen(true)}
              className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] bg-[#A67C1E] text-white hover:bg-[#8F6915] transition-all shadow-xl hover:shadow-[#A67C1E]/20 hover:scale-[1.02] cursor-pointer flex items-center justify-center gap-2 mx-auto"
            >
              <Sparkles className="w-4 h-4" />
              <span>{guest?.rsvp_status === "confirmed" ? "Ver Mi Pase Digital" : "Confirmar Mi Asistencia"}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. ITINERARIO DEL EVENTO */}
      <section className="max-w-xl mx-auto px-4 py-16 border-t border-[#E8E4DC] dark:border-[#2D2A26]">
        <div className="text-center space-y-2 mb-10">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A67C1E] dark:text-[#E0C068]">
            El Gran Día
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Itinerario del Evento
          </h2>
          <div className="w-12 h-0.5 bg-[#A67C1E]/40 mx-auto mt-2" />
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#E0D8C8] dark:border-[#38342E] space-y-8 ml-4">
          {[
            {
              time: "17:00 HRS",
              title: "Ceremonia Religiosa",
              desc: "Parroquia Nuestra Señora de Guadalupe · San Pedro Garza García",
              icon: Church,
            },
            {
              time: "19:00 HRS",
              title: "Recepción & Cóctel de Bienvenida",
              desc: "Hacienda Las Nubes · Jardín Central",
              icon: Wine,
            },
            {
              time: "20:30 HRS",
              title: "Cena & Brindis de Honor",
              desc: "Banquete de 3 tiempos y palabras de los novios",
              icon: PartyPopper,
            },
            {
              time: "22:00 HRS",
              title: "Fiesta, Música & Baile",
              desc: "¡A celebrar hasta el amanecer!",
              icon: Music,
            },
          ].map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="relative group">
                <div className="absolute -left-[31px] sm:-left-[39px] top-0.5 w-6 h-6 rounded-full bg-[#FAF8F5] dark:bg-[#121110] border-2 border-[#A67C1E] flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-[#A67C1E]" />
                </div>
                <div className="bg-white dark:bg-[#1C1B18] p-4 sm:p-5 rounded-2xl border border-[#E8E4DC] dark:border-[#2D2A26] shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold tracking-wider text-[#A67C1E] dark:text-[#E0C068]">
                      {item.time}
                    </span>
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 4. UBICACIÓN & CÓMO LLEGAR */}
      <section className="max-w-xl mx-auto px-4 py-16 border-t border-[#E8E4DC] dark:border-[#2D2A26]">
        <div className="text-center space-y-2 mb-8">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A67C1E] dark:text-[#E0C068]">
            Ubicación
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            ¿Cómo Llegar?
          </h2>
          <p className="text-xs text-muted-foreground">
            {event.venue_name || "Hacienda Las Nubes"}
          </p>
        </div>

        <div className="bg-white dark:bg-[#1C1B18] rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] dark:border-[#2D2A26] shadow-sm space-y-6 text-center">
          <div className="w-12 h-12 rounded-full bg-[#A67C1E]/10 text-[#A67C1E] flex items-center justify-center mx-auto">
            <MapPin className="w-6 h-6" />
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold text-foreground">
              {event.venue_name || "Hacienda Las Nubes"}
            </h3>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm mx-auto">
              {event.venue_address || "Av. Real de San Agustín 100, San Pedro Garza García, N.L."}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <a
              href={event.venue_maps_url || "https://maps.google.com/?q=Hacienda+Las+Nubes+San+Pedro+Garza+Garcia"}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl border border-[#E0D8C8] dark:border-[#38342E] bg-[#FAF8F5] dark:bg-[#24221E] hover:bg-[#F2EDE4] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-[#A67C1E]" />
              Abrir Google Maps
            </a>
            <a
              href={`https://waze.com/ul?q=${encodeURIComponent(event.venue_name || "Hacienda Las Nubes Monterrey")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-4 rounded-xl border border-[#E0D8C8] dark:border-[#38342E] bg-[#FAF8F5] dark:bg-[#24221E] hover:bg-[#F2EDE4] text-xs font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <Navigation className="w-4 h-4 text-blue-500" />
              Abrir en Waze
            </a>
          </div>
        </div>
      </section>

      {/* 5. ADD-ON: BUSCADOR DE MESA «ENCUENTRA TU LUGAR» */}
      <section className="max-w-xl mx-auto px-4 py-16 border-t border-[#E8E4DC] dark:border-[#2D2A26]">
        <div className="text-center space-y-2 mb-6">
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A67C1E] dark:text-[#E0C068]">
            Encuentra tu Lugar
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Busca tu Mesa
          </h2>
          <p className="text-xs text-muted-foreground">
            Escribe tu nombre o apellido para conocer tu mesa asignada.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1C1B18] rounded-3xl p-6 sm:p-8 border border-[#E8E4DC] dark:border-[#2D2A26] shadow-sm space-y-5">
          <form onSubmit={handleSearchSeating} className="flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                value={seatingSearch}
                onChange={(e) => setSeatingSearch(e.target.value)}
                placeholder="Ej. Gómez o Mendoza..."
                className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-[#A67C1E]/40"
              />
            </div>
            <button
              type="submit"
              disabled={searchingSeating}
              className="px-4 py-2.5 rounded-xl bg-[#A67C1E] text-white hover:bg-[#8F6915] text-xs font-bold transition-colors cursor-pointer"
            >
              {searchingSeating ? "Buscando..." : "Buscar"}
            </button>
          </form>

          {seatingResults.length > 0 && (
            <div className="space-y-2 pt-2 animate-in fade-in duration-200">
              {seatingResults.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#FAF8F5] dark:bg-[#24221E] p-3.5 rounded-xl border border-border flex items-center justify-between"
                >
                  <div>
                    <p className="font-bold text-xs text-foreground">{item.name}</p>
                    <p className="text-[11px] text-muted-foreground">
                      {item.passes_assigned} {item.passes_assigned === 1 ? "pase" : "pases"}
                    </p>
                  </div>
                  <span className="text-xs font-bold text-[#A67C1E] dark:text-[#E0C068] bg-[#A67C1E]/10 px-3 py-1 rounded-full">
                    {item.table_assigned ? `📍 ${item.table_assigned}` : "Recepción / Mesa Libre"}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 6. CÓDIGO DE VESTIMENTA (DRESS CODE) */}
      <section className="max-w-xl mx-auto px-4 py-16 border-t border-[#E8E4DC] dark:border-[#2D2A26] text-center space-y-6">
        <div className="w-12 h-12 rounded-full bg-[#A67C1E]/10 text-[#A67C1E] flex items-center justify-center mx-auto">
          <Shirt className="w-6 h-6" />
        </div>

        <div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A67C1E] dark:text-[#E0C068] block mb-1">
            Código de Vestimenta
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Rigurosa Etiqueta / Formal
          </h2>
          <p className="text-xs text-muted-foreground mt-2 max-w-sm mx-auto">
            Hombres: Traje oscuro o Esmoquin.<br />
            Mujeres: Vestido largo de noche.
          </p>
        </div>

        <div className="bg-white dark:bg-[#1C1B18] p-4 rounded-2xl border border-dashed border-[#E0D8C8] dark:border-[#38342E] max-w-xs mx-auto text-xs text-muted-foreground">
          ✨ <strong className="text-foreground">Nota especial:</strong> El color blanco y marfil está reservado exclusivamente para la novia.
        </div>
      </section>

      {/* 7. MESA DE REGALOS */}
      <section className="max-w-xl mx-auto px-4 py-16 border-t border-[#E8E4DC] dark:border-[#2D2A26] text-center space-y-8">
        <div>
          <div className="w-12 h-12 rounded-full bg-[#A67C1E]/10 text-[#A67C1E] flex items-center justify-center mx-auto mb-3">
            <Gift className="w-6 h-6" />
          </div>
          <span className="text-[10px] tracking-[0.25em] uppercase font-bold text-[#A67C1E] dark:text-[#E0C068]">
            Mesa de Regalos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mt-1">
            Tu presencia es nuestro mejor regalo
          </h2>
          <p className="text-xs text-muted-foreground mt-2 max-w-sm mx-auto">
            Si deseas hacernos un obsequio, ponemos a tu disposición nuestras siguientes opciones:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          {/* Opción 1: Liverpool */}
          <div className="bg-white dark:bg-[#1C1B18] p-5 rounded-2xl border border-border shadow-sm space-y-2">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[#A67C1E]">
              Liverpool
            </p>
            <p className="font-bold text-sm text-foreground">Evento: #51283940</p>
            <a
              href="https://www.liverpool.com.mx"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-primary underline underline-offset-4 block pt-1"
            >
              Ver mesa en Liverpool →
            </a>
          </div>

          {/* Opción 2: Transferencia bancaria */}
          <div className="bg-white dark:bg-[#1C1B18] p-5 rounded-2xl border border-border shadow-sm space-y-2">
            <p className="text-[10px] uppercase tracking-wider font-bold text-[#A67C1E]">
              Transferencia / Sobre
            </p>
            <p className="text-xs text-muted-foreground font-mono">BBVA: 012 180 0154 8291 0382</p>
            <button
              onClick={() => handleCopyClabe("012180015482910382")}
              className="text-xs font-semibold text-primary flex items-center gap-1 cursor-pointer pt-1"
            >
              <Copy className="w-3 h-3" />
              {copiedBank ? "¡CLABE Copiada!" : "Copiar CLABE"}
            </button>
          </div>
        </div>
      </section>

      {/* 8. FOOTER / CONFIRMATION SECTION */}
      <footer className="max-w-xl mx-auto px-4 py-16 border-t border-[#E8E4DC] dark:border-[#2D2A26] text-center space-y-6">
        <h2 className="font-serif text-3xl font-bold">
          ¡Esperamos contar con tu presencia!
        </h2>
        <p className="text-xs text-muted-foreground max-w-sm mx-auto">
          Por favor confirma tu asistencia lo antes posible para una adecuada organización de lugares.
        </p>
        <button
          onClick={() => setIsRsvpOpen(true)}
          className="px-8 py-4 rounded-full font-bold text-xs uppercase tracking-[0.2em] bg-[#A67C1E] text-white hover:bg-[#8F6915] transition-all shadow-xl cursor-pointer"
        >
          {guest?.rsvp_status === "confirmed" ? "Ver Mi Pase QR" : "Confirmar Asistencia Ahora"}
        </button>

        <p className="text-[10px] text-muted-foreground/60 pt-8 uppercase tracking-widest">
          Invitaciones Digitales MTY
        </p>
      </footer>

      {/* RSVP Modal */}
      <RsvpModal
        eventSlug={event.slug}
        eventTitle={event.title}
        eventDate={event.event_date}
        venueName={event.venue_name || undefined}
        guestToken={guest?.token}
        initialGuest={guest}
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
      />
    </div>
  )
}
