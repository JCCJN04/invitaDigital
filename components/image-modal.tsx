"use client"

import { X } from "lucide-react"
import { useEffect } from "react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title: string
  category: string
}

export function ImageModal({ isOpen, onClose, imageSrc, imageAlt, title, category }: ImageModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }

    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent z-10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 id="modal-title" className="text-xl font-semibold text-white">
                {title}
              </h3>
              <p className="text-sm text-white/80">{category}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur flex items-center justify-center transition-colors"
              aria-label="Cerrar vista previa"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="max-h-[80vh] overflow-auto">
          <img src={imageSrc || "/placeholder.svg"} alt={imageAlt} className="w-full h-auto" />
        </div>

        {/* Footer CTA */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent z-10 p-6">
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/8111230266?text=Hola%2C%20me%20interesa%20este%20dise%C3%B1o"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d4a373] hover:bg-[#c08552] text-[#1c1917] px-8 py-3 rounded-full font-bold transition-all duration-300 text-center shadow-lg hover:shadow-[#d4a373]/20"
            >
              Me Interesa Este Diseño
            </a>
            <button
              onClick={onClose}
              className="border border-white/30 text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur"
            >
              Ver Más Diseños
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
