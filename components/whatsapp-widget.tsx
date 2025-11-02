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
            className="group relative bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 transform hover:scale-110 animate-bounce hover:animate-none"
            aria-label="Abrir chat de WhatsApp"
          >
            <MessageCircle className="w-7 h-7" />
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
            {/* Badge */}
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              1
            </span>
          </button>
        )}

        {/* Popup Card */}
        {isOpen && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <h3 className="font-semibold">InvitaDigital</h3>
                    <p className="text-xs opacity-90">En línea</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/20 rounded-full p-1 transition-colors"
                  aria-label="Cerrar chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Message */}
            <div className="p-4 bg-[#ECE5DD]">
              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm mb-4">
                <p className="text-gray-800 text-sm leading-relaxed">
                  ¡Hola! 👋 Bienvenido a InvitaDigital
                  <br />
                  <br />
                  ¿Te gustaría crear una invitación digital única para tu evento especial?
                  <br />
                  <br />
                  🎉 Diseños personalizados
                  <br />
                  ⚡ Entrega en 24hrs
                  <br />
                  💰 Desde $799
                  <br />
                  <br />
                  Escríbenos y te ayudamos ahora mismo!
                </p>
                <p className="text-xs text-gray-500 mt-2">Hace 2 minutos</p>
              </div>

              {/* CTA Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-center py-3 px-4 rounded-lg font-semibold transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chatear por WhatsApp
              </a>

              <p className="text-xs text-gray-600 text-center mt-3">
                Respuesta promedio: <span className="font-semibold">menos de 5 minutos</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
