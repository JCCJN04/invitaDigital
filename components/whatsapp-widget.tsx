"use client"

import { MessageCircle, X } from "lucide-react"
import { useState, useEffect } from "react"

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const phoneNumber = "8111230266"
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
            <MessageCircle className="w-7 h-7" />
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
                <MessageCircle className="w-24 h-24" />
              </div>
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-sm">
                    <MessageCircle className="w-5 h-5 text-[#075e54]" />
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
                <MessageCircle className="w-5 h-5" />
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
