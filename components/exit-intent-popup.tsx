"use client"

import { useState, useEffect, useCallback } from "react"
import { X } from "lucide-react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
    "Hola, me gustaría ver los precios y diseños de invitaciones digitales. ¿Qué incluyen?"
  )}`

  const showPopup = useCallback(() => {
    if (hasShown) return

    // Check localStorage to only show once per session
    const alreadyShown = sessionStorage.getItem("exit-popup-shown")
    if (alreadyShown) return

    setIsOpen(true)
    setHasShown(true)
    sessionStorage.setItem("exit-popup-shown", "1")
  }, [hasShown])

  useEffect(() => {
    // Only on desktop
    if (typeof window === "undefined") return
    if (window.innerWidth < 768) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when cursor moves to top of viewport (browser bar)
      if (e.clientY <= 5 && e.relatedTarget === null) {
        showPopup()
      }
    }

    // Wait a bit before adding the listener so it doesn't trigger immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave)
    }, 5000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [showPopup])

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] animate-in fade-in duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Popup */}
      <div className="fixed inset-0 z-[61] flex items-center justify-center p-4 pointer-events-none">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 sm:p-10 relative pointer-events-auto animate-in slide-in-from-bottom-4 zoom-in-95 duration-400">
          {/* Close */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="text-4xl mb-4">🎉</div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1c1917] mb-3 leading-tight">
              ¿Lista tu invitación<br />en 24 horas?
            </h3>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-8 max-w-xs mx-auto">
              Tu evento merece una invitación que sorprenda. Escríbenos por WhatsApp y te ayudamos a crearla hoy mismo.
            </p>

            {/* CTA */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white w-full py-4 px-6 rounded-xl font-bold text-sm tracking-wide transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Ver precios y diseños ahora
            </a>

            {/* Trust line */}
            <p className="text-[11px] text-gray-400 mt-4 tracking-wide">
              Respuesta en menos de 5 min · Sin compromiso · +150 eventos
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
