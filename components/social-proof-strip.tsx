"use client"

import { useEffect, useState } from "react"

const recentEvents = [
  { name: "Cumple Paulina", type: "Cumpleaños", time: "Esta semana" },
  { name: "Boda Carla & Ángel", type: "Boda", time: "Reciente" },
  { name: "XV Paula", type: "XV Años", time: "Reciente" },
]

const trustItems = [
  "Diseño 100% personalizado",
  "Pago seguro — 50% anticipo",
  "Garantía de satisfacción",
  "Entrega en 24 horas",
  "RSVP automático a WhatsApp",
  "+150 eventos entregados",
]

export function SocialProofStrip() {
  const [currentEvent, setCurrentEvent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show after a brief delay to draw attention
    const showTimer = setTimeout(() => setIsVisible(true), 1200)

    // Rotate through recent events
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % recentEvents.length)
    }, 3500)

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [])

  const event = recentEvents[currentEvent]

  return (
    <section className="relative bg-[#1c1917] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 max-w-7xl">

        {/* Main strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-4 sm:py-5">

          {/* Recent delivery notification */}
          <div
            className={`flex items-center gap-3 transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            <span className="relative flex h-2.5 w-2.5 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <p className="text-white/90 text-xs sm:text-sm font-medium">
              <span className="text-emerald-400 font-semibold">{event.time}</span>
              {" · "}
              <span className="text-white/70">{event.type}:</span>
              {" "}
              <span className="font-serif italic text-white">{event.name}</span>
            </p>
          </div>

          {/* Trust badges scrolling marquee */}
          <div className="overflow-hidden relative w-full sm:w-auto sm:max-w-md [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex gap-6 animate-marquee whitespace-nowrap">
              {[...trustItems, ...trustItems].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] text-white/50 tracking-widest uppercase font-medium flex-shrink-0"
                >
                  <span className="w-1 h-1 rounded-full bg-[#d4a373] flex-shrink-0" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
