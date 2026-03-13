"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"

const plans = [
  {
    id: "basico",
    name: "Básico",
    price: 1999,
    priceDisplay: "$1,999",
    tagline: "Esencial & Elegante",
    popular: false,
    features: [
      "Hasta 8 fotos de alta calidad",
      "Ubicación y Mesa de Regalos",
      "2 rondas de revisión",
      "Mapa interactivo con GPS",
      "Enlace único para compartir"
    ],
    ctaText: "Comenzar Básico",
  },
  {
    id: "premium",
    name: "Premium",
    price: 2600,
    priceDisplay: "$2,600",
    tagline: "Más Popular",
    popular: true,
    features: [
      "Todo lo del plan Básico",
      "Hasta 16 fotos (Historia visual)",
      "Hasta 5 secciones interactivas",
      "4 rondas de revisión",
      "Diseño 100% a medida",
      "Animaciones elegantes",
      "Música envolvente",
      "Código QR personalizado"
    ],
    ctaText: "Quiero el Premium",
  },
  {
    id: "deluxe",
    name: "Deluxe",
    price: 3499,
    priceDisplay: "$3,499",
    tagline: "Lujo Sin Límites",
    popular: false,
    features: [
      "Todo lo del plan Premium",
      "Galería completa (Hasta 40 fotos)",
      "Secciones ilimitadas",
      "Revisiones ilimitadas",
      "Mix musical (3 canciones)",
      "Prioridad total en entrega"
    ],
    ctaText: "Elegir Lujo",
  },
]

export function PricingSection() {
  const getWhatsappUrl = (planName: string) => {
    const message = `Hola, me interesa el plan *${planName}*. ¿Podrían darme más detalles?`
    return `https://wa.me/528111230266?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="precios" className="py-24 bg-white relative">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mb-4">
            Planes diseñados para ti
          </h2>
          <p className="text-gray-500 font-light text-lg">
            Precios transparentes sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-3xl p-8 lg:p-10 flex flex-col h-full transition-all duration-300 animate-fade-in-up
                ${plan.popular
                  ? "bg-[#0a0f1c] text-white shadow-2xl md:scale-105 z-20 py-12"
                  : "bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-lg hover:border-gray-200"
                }
              `}
              style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-primary text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full shadow-lg shadow-primary/20">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 tracking-tight ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>

                <div className="flex items-baseline gap-1 mt-4">
                  <span className={`text-4xl lg:text-5xl font-bold tracking-tighter ${plan.popular ? "text-white" : "text-gray-900"}`}>
                    {plan.priceDisplay}
                  </span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.tagline}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-10 flex-grow mt-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className={`w-5 h-5 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    <span className={`${plan.popular ? "text-gray-300" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href={getWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                <Button
                  className={`w-full h-12 rounded-full text-sm font-bold transition-all duration-300
                    ${plan.popular
                      ? "bg-primary hover:bg-[#00c050] text-white shadow-lg shadow-primary/25"
                      : "bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-sm"}`}
                >
                  {plan.ctaText}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}