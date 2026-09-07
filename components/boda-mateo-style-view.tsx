"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { type Event, type Guest } from "@/lib/supabase"
import {
  LayoutDashboard,
  MapPin,
  Clock,
  Gift,
  Copy,
  Check,
  Calendar,
  Heart,
  Send,
  Sparkles,
  ExternalLink,
} from "lucide-react"

interface BodaMateoStyleViewProps {
  event: Event
  initialGuest?: Guest | null
}

export function BodaMateoStyleView({
  event,
  initialGuest,
}: BodaMateoStyleViewProps) {
  const [guest, setGuest] = useState<Guest | null>(initialGuest || null)
  const [guestNameInput, setGuestNameInput] = useState("")
  const [copiedBank, setCopiedBank] = useState(false)
  
  // RSVP form state
  const [rsvpStatus, setRsvpStatus] = useState<"confirmed" | "declined">("confirmed")
  const [confirmedPasses, setConfirmedPasses] = useState<number>(
    initialGuest?.passes_assigned || 2
  )
  const [dietaryNotes, setDietaryNotes] = useState(initialGuest?.notes || "")
  const [wishesMessage, setWishesMessage] = useState("")
  const [rsvpSubmitted, setRsvpSubmitted] = useState(
    initialGuest?.confirmed_at ? true : false
  )
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
  })

  // Target event date
  useEffect(() => {
    const targetDate = new Date("2026-11-14T17:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const diff = targetDate - now

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00" })
        return
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))

      setTimeLeft({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
      })
    }

    updateCountdown()
    const timer = setInterval(updateCountdown, 30000)
    return () => clearInterval(timer)
  }, [])

  // Copy bank CLABE
  const handleCopyClabe = (clabe: string) => {
    navigator.clipboard.writeText(clabe)
    setCopiedBank(true)
    setTimeout(() => setCopiedBank(false), 2500)
  }

  // Handle RSVP Submit (Demo local state)
  const handleRsvpSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setRsvpSubmitted(true)
      if (guest) {
        setGuest({
          ...guest,
          rsvp_status: rsvpStatus,
          confirmed_at: new Date().toISOString(),
          passes_confirmed: rsvpStatus === "confirmed" ? confirmedPasses : 0,
          notes: dietaryNotes ? `${wishesMessage} (Alergias: ${dietaryNotes})` : wishesMessage,
        })
      }
    }, 600)
  }

  const maxPasses = guest?.passes_assigned || 4

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#2C3524] relative selection:bg-[#EADCB3] selection:text-[#2C3524]">
      {/* Import Google Fonts for exact match with bautizo-mateo */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Lora:ital,wght@0,400;0,500;1,400;1,500&family=Montserrat:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />

      <style jsx global>{`
        .font-display-mateo {
          font-family: 'Cinzel', serif;
        }
        .font-body-mateo {
          font-family: 'Lora', serif;
        }
        .font-sans-mateo {
          font-family: 'Montserrat', sans-serif;
        }

        /* Fixed Linen Paper Overlay */
        .linen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 40;
          opacity: 0.025;
          background-image: url("https://www.transparenttextures.com/patterns/linen-design.png");
          mix-blend-mode: multiply;
        }

        /* Double Passepartout Frame */
        .passepartout-outer-frame {
          position: fixed;
          top: 14px;
          left: 14px;
          right: 14px;
          bottom: 14px;
          border: 1px solid #DFE3D8;
          pointer-events: none;
          z-index: 35;
        }

        .passepartout-inner-frame {
          position: fixed;
          top: 21px;
          left: 21px;
          right: 21px;
          bottom: 21px;
          border: 1px dashed #C59B27;
          opacity: 0.45;
          pointer-events: none;
          z-index: 35;
        }

        /* Vertical & Horizontal hairline dividers */
        .hairline-vertical {
          width: 1px;
          height: 64px;
          background-color: #C59B27;
          opacity: 0.4;
          margin: 3rem auto;
        }

        .hairline-horizontal {
          width: 44px;
          height: 1px;
          background-color: #C59B27;
          opacity: 0.4;
          margin: 1.75rem auto;
        }

        .map-frame {
          width: 100%;
          height: 230px;
          border: 1px solid #DFE3D8;
          filter: grayscale(0.25) contrast(1.02);
          transition: filter 0.3s ease;
        }
        .map-frame:hover {
          filter: grayscale(0) contrast(1);
        }
      `}</style>

      {/* Linen texture & Passepartout frames */}
      <div className="linen-overlay" />
      <div className="passepartout-outer-frame hidden sm:block" />
      <div className="passepartout-inner-frame hidden sm:block" />

      {/* Floating Demo back button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link
          href="/panel/demo"
          className="bg-[#2C3524]/90 hover:bg-[#2C3524] text-[#FAF9F6] px-5 py-2.5 rounded-full text-xs font-sans-mateo uppercase tracking-widest shadow-xl border border-[#C59B27]/40 backdrop-blur-md flex items-center gap-2.5 transition-all hover:scale-105 active:scale-95"
        >
          <LayoutDashboard className="w-3.5 h-3.5 text-[#C59B27]" />
          <span>← Volver al Panel Demo</span>
        </Link>
      </div>

      {/* Main Centered Invitation Container */}
      <div className="max-w-[560px] mx-auto px-6 sm:px-10 py-20 text-center relative z-10 space-y-14 font-body-mateo text-[16px] leading-[1.75]">
        
        {/* HEADER / CALLIGRAPHY */}
        <header className="space-y-6">
          <p className="font-sans-mateo text-[11px] font-medium tracking-[0.3em] text-[#C59B27] uppercase">
            Nuestra Boda
          </p>

          {/* Wedding Rings Fine Icon */}
          <div className="py-2 flex justify-center items-center">
            <svg
              viewBox="0 0 100 100"
              className="w-9 h-9 text-[#C59B27] mx-auto opacity-85"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <circle cx="42" cy="50" r="22" stroke="currentColor" />
              <circle cx="58" cy="50" r="22" stroke="currentColor" strokeDasharray="3 2" />
              <path d="M42 28L45 22L39 22Z" fill="currentColor" />
            </svg>
          </div>

          <h1 className="font-display-mateo text-4xl sm:text-5xl font-normal leading-[1.25] tracking-[0.06em] uppercase text-[#2C3524]">
            Sofía Morales
            <br />
            <span className="text-3xl font-light font-body-mateo italic lowercase text-[#C59B27]">
              &amp;
            </span>
            <br />
            Alejandro Cantú
          </h1>

          <p className="font-sans-mateo text-xs tracking-[0.22em] text-[#5F6856] uppercase mt-4">
            Sábado 14 de Noviembre de 2026
          </p>
        </header>

        {/* PORTRAIT FRAME (Arch double halo like bautizo-mateo) */}
        <div className="flex flex-col items-center justify-center py-2">
          <div className="relative w-48 sm:w-52 h-64 sm:h-72 mx-auto">
            <div className="absolute inset-[-8px] rounded-t-[110px] rounded-b-[110px] border border-[#C59B27]/40 pointer-events-none" />
            <img
              className="w-full h-full object-cover rounded-t-[110px] rounded-b-[110px] border border-[#D0D7C5] shadow-sm filter contrast-[1.02]"
              style={{ objectPosition: "28% 8%" }}
              src="/boda-sofia-alejandro.jpg"
              alt="Sofía & Alejandro"
            />
          </div>
        </div>

        <div className="hairline-vertical" />

        {/* DATE CALLOUT */}
        <section className="space-y-2">
          <p className="font-display-mateo text-xl tracking-[0.1em] uppercase text-[#2C3524]">
            Sábado
          </p>
          <p className="font-display-mateo text-3xl text-[#C59B27] font-medium">
            A las cinco de la tarde
          </p>
          <p className="font-sans-mateo text-[10px] tracking-[0.25em] text-[#5F6856] uppercase">
            San Pedro Garza García, N.L.
          </p>
        </section>

        {/* COUNTDOWN TIMER */}
        <section className="py-2">
          <div className="flex justify-center items-center gap-6 sm:gap-8">
            <div className="flex flex-col items-center">
              <span className="font-display-mateo text-3xl font-normal text-[#2C3524]">
                {timeLeft.days}
              </span>
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856] mt-0.5">
                Días
              </span>
            </div>
            <span className="font-display-mateo text-2xl text-[#C59B27] pb-4">:</span>
            <div className="flex flex-col items-center">
              <span className="font-display-mateo text-3xl font-normal text-[#2C3524]">
                {timeLeft.hours}
              </span>
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856] mt-0.5">
                Horas
              </span>
            </div>
            <span className="font-display-mateo text-2xl text-[#C59B27] pb-4">:</span>
            <div className="flex flex-col items-center">
              <span className="font-display-mateo text-3xl font-normal text-[#2C3524]">
                {timeLeft.minutes}
              </span>
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856] mt-0.5">
                Minutos
              </span>
            </div>
          </div>
        </section>

        <div className="hairline-vertical" />

        {/* PERSONALIZED GUEST PASS CARD (Adapted for digital invitation system) */}
        {guest && (
          <section className="relative p-6 sm:p-8 rounded-sm border border-[#DFE3D8] bg-white/40 backdrop-blur-xs space-y-4 shadow-xs">
            <div className="absolute top-2 left-2 right-2 bottom-2 border border-dashed border-[#C59B27]/30 pointer-events-none" />
            
            <p className="font-sans-mateo text-[9px] tracking-[0.25em] uppercase text-[#C59B27] font-semibold">
              Pase Exclusivo de Asistencia
            </p>

            <h3 className="font-display-mateo text-2xl sm:text-3xl text-[#2C3524] font-medium">
              {guest.name}
            </h3>

            <div className="flex items-center justify-center gap-2 text-sm text-[#5F6856]">
              <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
              <span className="font-body-mateo italic">
                Hemos reservado{" "}
                <strong className="font-medium text-[#2C3524] not-italic">
                  {guest.passes_assigned} {guest.passes_assigned === 1 ? "pase" : "pases"}
                </strong>{" "}
                en su honor
              </span>
            </div>

            {guest.confirmed_at ? (
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-sans-mateo tracking-wider">
                <Check className="w-3 h-3" />
                <span>Asistencia Confirmada ({guest.passes_confirmed} pases)</span>
              </div>
            ) : (
              <p className="text-xs text-[#5F6856] italic">
                Favor de confirmar antes del 15 de Octubre de 2026
              </p>
            )}
          </section>
        )}

        {/* PARENTS & GODPARENTS */}
        <section className="space-y-6">
          <div>
            <p className="font-sans-mateo text-[9px] tracking-[0.25em] uppercase text-[#5F6856] mb-1">
              Con la bendición de nuestros padres
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div>
                <p className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#C59B27] mb-0.5">
                  Padres de la Novia
                </p>
                <p className="font-display-mateo text-lg font-medium tracking-[0.04em] text-[#2C3524]">
                  Roberto Morales
                  <br />
                  <span className="font-light text-sm font-body-mateo italic">&amp;</span>
                  <br />
                  María Elena Treviño
                </p>
              </div>
              <div>
                <p className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#C59B27] mb-0.5">
                  Padres del Novio
                </p>
                <p className="font-display-mateo text-lg font-medium tracking-[0.04em] text-[#2C3524]">
                  Fernando Cantú
                  <br />
                  <span className="font-light text-sm font-body-mateo italic">&amp;</span>
                  <br />
                  Patricia Lozano
                </p>
              </div>
            </div>
          </div>

          <div className="hairline-horizontal" />

          <div>
            <p className="font-sans-mateo text-[9px] tracking-[0.25em] uppercase text-[#5F6856] mb-1">
              Nuestros Padrinos de Velación
            </p>
            <p className="font-display-mateo text-xl font-medium tracking-[0.05em] text-[#2C3524]">
              Laura Morales &amp; Carlos Sada
            </p>
          </div>
        </section>

        <div className="hairline-vertical" />

        {/* CEREMONIA RELIGIOSA */}
        <section className="space-y-5">
          <p className="font-sans-mateo text-[10px] font-semibold tracking-[0.25em] uppercase text-[#5F6856]">
            Ceremonia Religiosa
          </p>
          <h3 className="font-display-mateo text-2xl font-medium tracking-[0.05em] text-[#2C3524]">
            Parroquia Nuestra Señora Reina de los Ángeles
          </h3>
          <p className="text-[16px] text-[#5F6856] max-w-[85%] mx-auto leading-relaxed">
            17:00 hrs &middot; Ave. Roberto Garza Sada 300, Col. Carrizalejo,
            <br />
            San Pedro Garza García, N.L.
          </p>

          {/* Embedded Google Map */}
          <div className="pt-2 max-w-[92%] mx-auto">
            <iframe
              className="map-frame rounded-sm shadow-xs"
              src="https://maps.google.com/maps?q=Parroquia+Nuestra+Se%C3%B1ora+Reina+de+los+%C3%81ngeles,+San+Pedro+Garza+Garc%C3%ADa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Ceremonia"
            />
          </div>

          <div className="pt-1">
            <a
              href="https://maps.google.com/?q=Parroquia+Nuestra+Señora+Reina+de+los+Ángeles+San+Pedro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display-mateo text-xs tracking-wider uppercase text-[#C59B27] border-b border-[#EADCB3] pb-0.5 hover:border-[#C59B27] transition-colors"
            >
              <span>Abrir en Waze / Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        <div className="hairline-vertical" />

        {/* RECEPCIÓN */}
        <section className="space-y-5">
          <p className="font-sans-mateo text-[10px] font-semibold tracking-[0.25em] uppercase text-[#5F6856]">
            Recepción
          </p>
          <h3 className="font-display-mateo text-2xl font-medium tracking-[0.05em] text-[#2C3524]">
            Hacienda Los Arcángeles
          </h3>
          <p className="text-[16px] text-[#5F6856] max-w-[85%] mx-auto leading-relaxed">
            19:30 hrs &middot; Carretera a Chipinque Km 4.5,
            <br />
            San Pedro Garza García, N.L.
          </p>

          {/* Embedded Google Map */}
          <div className="pt-2 max-w-[92%] mx-auto">
            <iframe
              className="map-frame rounded-sm shadow-xs"
              src="https://maps.google.com/maps?q=Hacienda+Los+Arcangeles+San+Pedro+Garza+Garcia&t=&z=15&ie=UTF8&iwloc=&output=embed"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Recepción"
            />
          </div>

          <div className="pt-1">
            <a
              href="https://maps.google.com/?q=San+Pedro+Garza+Garcia+Nuevo+Leon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-display-mateo text-xs tracking-wider uppercase text-[#C59B27] border-b border-[#EADCB3] pb-0.5 hover:border-[#C59B27] transition-colors"
            >
              <span>Abrir en Waze / Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        <div className="hairline-vertical" />

        {/* DRESS CODE */}
        <section className="space-y-4">
          <h3 className="font-display-mateo text-2xl font-medium tracking-[0.05em] text-[#2C3524]">
            Código de Vestimenta
          </h3>
          <p className="text-[16px] text-[#5F6856] max-w-[85%] mx-auto leading-relaxed">
            <strong>Rigurosa Etiqueta / Black Tie</strong>
            <br />
            Mujeres: Vestido largo de gala &middot; Hombres: Esmoquin o traje formal oscuro.
          </p>

          {/* Palette Swatches */}
          <div className="flex justify-center items-center gap-4 sm:gap-6 mt-6">
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-10 rounded-full border border-[#D0D7C5] shadow-xs"
                style={{ backgroundColor: "#1B4D3E" }}
              />
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856]">
                Esmeralda
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-10 rounded-full border border-[#D0D7C5] shadow-xs"
                style={{ backgroundColor: "#192841" }}
              />
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856]">
                Medianoche
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-10 rounded-full border border-[#D0D7C5] shadow-xs"
                style={{ backgroundColor: "#E7D8C9" }}
              />
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856]">
                Champagne
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-10 rounded-full border border-[#D0D7C5] shadow-xs"
                style={{ backgroundColor: "#6B1724" }}
              />
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856]">
                Borgoña
              </span>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div
                className="w-10 h-10 rounded-full border border-[#D0D7C5] shadow-xs"
                style={{ backgroundColor: "#2B2C2D" }}
              />
              <span className="font-sans-mateo text-[8px] uppercase tracking-widest text-[#5F6856]">
                Grafito
              </span>
            </div>
          </div>

          <p className="font-body-mateo italic text-xs text-[#5F6856] pt-3">
            * Con cariño les pedimos reservar los tonos blanco y marfil exclusivamente para la novia.
          </p>
        </section>

        <div className="hairline-vertical" />

        {/* MESA DE REGALOS */}
        <section className="space-y-6">
          <p className="font-sans-mateo text-[10px] font-semibold tracking-[0.25em] uppercase text-[#5F6856]">
            Mesa de Regalos
          </p>

          <div className="space-y-3.5 max-w-[85%] mx-auto text-left">
            {/* Liverpool */}
            <div className="flex justify-between items-center py-2.5 border-b border-[#C59B27]/25">
              <div className="flex items-center gap-3">
                <span className="font-body-mateo italic font-semibold text-lg text-[#E6007E]">
                  Liverpool
                </span>
                <span className="text-xs text-[#5F6856] font-sans-mateo">(No. 51294812)</span>
              </div>
              <a
                href="https://www.liverpool.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-mateo text-xs tracking-wider uppercase text-[#C59B27] hover:underline"
              >
                Ir a la mesa
              </a>
            </div>

            {/* El Palacio de Hierro */}
            <div className="flex justify-between items-center py-2.5 border-b border-[#C59B27]/25">
              <div className="flex items-center gap-3">
                <span className="font-display-mateo font-bold text-sm tracking-wider text-[#B8860B]">
                  El Palacio de Hierro
                </span>
                <span className="text-xs text-[#5F6856] font-sans-mateo">(No. 384910)</span>
              </div>
              <a
                href="https://www.elpalaciodehierro.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-mateo text-xs tracking-wider uppercase text-[#C59B27] hover:underline"
              >
                Ir a la mesa
              </a>
            </div>

            {/* Amazon */}
            <div className="flex justify-between items-center py-2.5 border-b border-[#C59B27]/25">
              <div className="flex items-center gap-3">
                <span className="font-sans-mateo font-extrabold text-sm tracking-tight text-[#232F3E]">
                  amazon
                </span>
                <span className="text-xs text-[#5F6856] font-sans-mateo">
                  (Boda Sofía &amp; Alejandro)
                </span>
              </div>
              <a
                href="https://www.amazon.com.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display-mateo text-xs tracking-wider uppercase text-[#C59B27] hover:underline"
              >
                Ir a la mesa
              </a>
            </div>
          </div>

          {/* Lluvia de Sobres / Transferencia */}
          <div className="pt-6 max-w-[88%] mx-auto space-y-3">
            <h4 className="font-display-mateo text-2xl font-light italic text-[#2C3524]">
              Lluvia de Sobres
            </h4>
            <p className="text-sm text-[#5F6856] leading-relaxed">
              Su presencia en nuestro gran día es nuestro mayor regalo. Si desean tener un detalle
              en efectivo para nuestro nuevo hogar, les compartimos los datos de transferencia:
            </p>

            <div className="pt-2 p-4 rounded border border-[#DFE3D8] bg-white/50 space-y-2 text-center">
              <p className="font-sans-mateo text-[9px] uppercase tracking-widest text-[#5F6856]">
                Banco Banorte &middot; Cuenta CLABE
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="font-sans-mateo text-sm font-semibold tracking-widest text-[#2C3524]">
                  072 580 010293847561
                </span>
                <button
                  type="button"
                  onClick={() => handleCopyClabe("072580010293847561")}
                  className="p-1.5 rounded-full hover:bg-stone-200/60 text-[#C59B27] transition-colors"
                  title="Copiar CLABE"
                >
                  {copiedBank ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copiedBank && (
                <p className="text-xs text-emerald-700 font-sans-mateo tracking-wider">
                  ¡CLABE copiada al portapapeles!
                </p>
              )}
              <p className="text-xs text-[#5F6856] font-light italic">
                Titulares: Sofía Morales &amp; Alejandro Cantú
              </p>
            </div>
          </div>
        </section>

        <div className="hairline-vertical" />

        {/* CONFIRMACIÓN DE ASISTENCIA (RSVP INTERACTIVO) */}
        <section className="space-y-6 pb-6">
          <p className="font-sans-mateo text-[10px] font-semibold tracking-[0.25em] uppercase text-[#5F6856]">
            Confirmación
          </p>
          <h3 className="font-display-mateo text-2xl sm:text-3xl font-medium tracking-[0.05em] uppercase text-[#2C3524]">
            R.S.V.P.
          </h3>
          <p className="text-[16px] text-[#5F6856] max-w-[85%] mx-auto leading-relaxed">
            Nos llenaría de profunda alegría contar con tu presencia. Por favor confirma tu
            asistencia antes del <strong>15 de Octubre de 2026</strong>.
          </p>

          {rsvpSubmitted ? (
            <div className="p-8 rounded border border-emerald-300 bg-emerald-50/70 space-y-3 max-w-[90%] mx-auto text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h4 className="font-display-mateo text-xl font-medium text-emerald-900">
                {rsvpStatus === "confirmed" ? "¡Muchas gracias por confirmar!" : "Respuesta Registrada"}
              </h4>
              <p className="text-sm text-emerald-800 font-body-mateo">
                {rsvpStatus === "confirmed"
                  ? `Hemos registrado ${confirmedPasses} ${confirmedPasses === 1 ? "asistencia" : "asistencias"} para ${guest?.name || guestNameInput || "tu pase"}. ¡Será un honor celebrar juntos!`
                  : "Lamentamos que no puedas acompañarnos, estarás en nuestros corazones."}
              </p>
              <button
                type="button"
                onClick={() => setRsvpSubmitted(false)}
                className="mt-3 text-xs font-sans-mateo text-[#C59B27] underline tracking-widest uppercase"
              >
                Modificar mi respuesta
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleRsvpSubmit}
              className="p-6 sm:p-8 rounded border border-[#DFE3D8] bg-white/60 backdrop-blur-xs space-y-5 max-w-[92%] mx-auto text-left shadow-xs"
            >
              {/* Guest name input/badge */}
              <div>
                <label className="block font-sans-mateo text-[9px] uppercase tracking-widest text-[#5F6856] mb-1">
                  {guest ? "Nombre de los Invitados" : "Nombre y Apellido(s) o Familia"}
                </label>
                {guest ? (
                  <div className="w-full px-3 py-2 bg-stone-50 border border-[#DFE3D8] rounded text-sm font-display-mateo font-medium text-[#2C3524]">
                    {guest.name}
                  </div>
                ) : (
                  <input
                    type="text"
                    required
                    placeholder="Ingresa tu nombre completo..."
                    value={guestNameInput}
                    onChange={(e) => setGuestNameInput(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#DFE3D8] rounded text-sm font-body-mateo text-[#2C3524] placeholder:text-stone-400 focus:outline-none focus:border-[#C59B27]"
                  />
                )}
              </div>

              {/* Attending Radio */}
              <div>
                <label className="block font-sans-mateo text-[9px] uppercase tracking-widest text-[#5F6856] mb-2">
                  ¿Asistirás a nuestra boda?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <label
                    className={`flex items-center gap-2.5 p-3 rounded border cursor-pointer transition-all ${
                      rsvpStatus === "confirmed"
                        ? "border-[#C59B27] bg-[#FDFBF7] shadow-xs text-[#2C3524]"
                        : "border-[#DFE3D8] bg-white text-[#5F6856]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      checked={rsvpStatus === "confirmed"}
                      onChange={() => setRsvpStatus("confirmed")}
                      className="accent-[#C59B27]"
                    />
                    <span className="text-xs font-sans-mateo font-medium">Sí, con gusto asistiré</span>
                  </label>

                  <label
                    className={`flex items-center gap-2.5 p-3 rounded border cursor-pointer transition-all ${
                      rsvpStatus === "declined"
                        ? "border-[#C59B27] bg-[#FDFBF7] shadow-xs text-[#2C3524]"
                        : "border-[#DFE3D8] bg-white text-[#5F6856]"
                    }`}
                  >
                    <input
                      type="radio"
                      name="attending"
                      checked={rsvpStatus === "declined"}
                      onChange={() => setRsvpStatus("declined")}
                      className="accent-[#C59B27]"
                    />
                    <span className="text-xs font-sans-mateo font-medium">No podré asistir</span>
                  </label>
                </div>
              </div>

              {/* Number of passes */}
              {rsvpStatus === "confirmed" && (
                <div>
                  <label className="block font-sans-mateo text-[9px] uppercase tracking-widest text-[#5F6856] mb-1">
                    Número de pases que confirmas (Máximo: {maxPasses})
                  </label>
                  <select
                    value={confirmedPasses}
                    onChange={(e) => setConfirmedPasses(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-white border border-[#DFE3D8] rounded text-sm font-sans-mateo text-[#2C3524] focus:outline-none focus:border-[#C59B27]"
                  >
                    {Array.from({ length: maxPasses }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? "pase confirmado" : "pases confirmados"}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Dietary notes */}
              <div>
                <label className="block font-sans-mateo text-[9px] uppercase tracking-widest text-[#5F6856] mb-1">
                  Restricciones o alergias alimentarias (opcional)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Vegetariano, alergia a mariscos, etc."
                  value={dietaryNotes}
                  onChange={(e) => setDietaryNotes(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#DFE3D8] rounded text-xs font-body-mateo text-[#2C3524] placeholder:text-stone-400 focus:outline-none focus:border-[#C59B27]"
                />
              </div>

              {/* Wishes message */}
              <div>
                <label className="block font-sans-mateo text-[9px] uppercase tracking-widest text-[#5F6856] mb-1">
                  Mensaje o buenos deseos para los novios
                </label>
                <textarea
                  rows={2}
                  placeholder="Escribe aquí unas palabras con cariño..."
                  value={wishesMessage}
                  onChange={(e) => setWishesMessage(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#DFE3D8] rounded text-xs font-body-mateo text-[#2C3524] placeholder:text-stone-400 focus:outline-none focus:border-[#C59B27]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-[#2C3524] hover:bg-[#1E2519] text-[#FAF9F6] font-display-mateo text-xs uppercase tracking-[0.2em] rounded transition-all shadow-md flex items-center justify-center gap-2 active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <span>Enviando confirmación...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-[#C59B27]" />
                    <span>Enviar Confirmación</span>
                  </>
                )}
              </button>
            </form>
          )}
        </section>

        {/* FOOTER */}
        <footer className="pt-8 text-center">
          <div className="hairline-horizontal" />
          <p className="font-sans-mateo text-[9px] tracking-[0.25em] uppercase text-[#5F6856] mt-6">
            Sofía &amp; Alejandro &middot; 2026
          </p>
          <p className="text-[10px] text-[#5F6856]/70 mt-1 font-body-mateo italic">
            Invitaciones Digitales México &middot; Demostración Interactiva
          </p>
        </footer>

      </div>
    </div>
  )
}
