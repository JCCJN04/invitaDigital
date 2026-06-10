"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "8180836435"
  const message = "Hola, me interesa una invitación digital. ¿Me pueden ayudar?"

  useEffect(() => {
    // Show widget after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const whatsappUrl = `https://wa.me/52${phoneNumber}?text=${encodeURIComponent(message)}`

  if (!isVisible) return null

  return (
    <>
      {/* Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full p-4 shadow-xl transition-all duration-300 transform hover:scale-110 hover:shadow-2xl"
            aria-label="Abrir chat de WhatsApp"
          >
            <WhatsAppIcon className="w-7 h-7" />
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>

            {/* Notification Badge */}
            <span className="absolute -top-1 -right-1 bg-[#ef4444] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm animate-bounce">
              1
            </span>
          </button>
        )}

        {/* Popup Card */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300 border border-gray-100">
            {/* Header */}
            <div className="bg-[#075e54] p-4 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10">
                <WhatsAppIcon className="w-24 h-24" />
              </div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                    <WhatsAppIcon className="w-5 h-5 text-[#075e54]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">Invitaciones MTY</h3>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></span>
                      <p className="text-[10px] opacity-90 font-medium tracking-wide">Línea Directa</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-active/20 rounded-full p-1.5 transition-colors text-white/80 hover:text-white"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message Area */}
            <div className="p-4 bg-[#e5ddd5]/30 bg-opacity-50">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm mb-4 border-l-4 border-[#25D366] relative">
                <p className="text-gray-700 text-sm leading-relaxed">
                  ¡Hola! 👋 Bienvenido a <span className="font-semibold text-[#075e54]">Invitaciones MTY</span>
                  <br />
                  <br />
                  ¿Te gustaría una cotización rápida o ver nuestros diseños premium?
                </p>
                <div className="text-[10px] text-gray-400 mt-2 text-right">Justo ahora</div>
              </div>

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#20bd5a] text-white text-center py-3 px-4 rounded-xl font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Iniciar Chat
              </a>

              <p className="text-[10px] text-center text-gray-400 mt-3">
                Respuesta promedio: &lt; 5 minutos
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
