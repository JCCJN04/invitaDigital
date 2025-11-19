"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Sparkles, Zap, XIcon } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$1399",
    originalPrice: "$1699",
    icon: Zap,
    popular: false,
    description: ".",
    features: [
      { text: "Hasta 8 fotos", included: true },
      { text: "Máximo 2 ligas", included: true },
      { text: "Hasta 2 revisiones", included: true },
      { text: "Animaciones incluidas", included: false },
      { text: "Hasta 1 canción", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$1799",
    originalPrice: "$2199",
    icon: Crown,
    popular: true,
    description: "La opción más elegida",
    features: [
      { text: "Todo lo de Básico", included: true },
      { text: "Hasta 16 fotos", included: true },
      { text: "Hasta 5 ligas", included: true },
      { text: "4 Revisiones", included: true },
      { text: "Diseño 100% personalizado", included: true },
      { text: "Animaciones incluidas", included: true },
      { text: "QR personalizado", included: true },
      { text: "Hasta 1 canción", included: true },
    ],
  },
  {
    name: "Deluxe",
    price: "$2499",
    originalPrice: "$2999",
    icon: Sparkles,
    popular: false,
    description: "",
    features: [
      { text: "Todo lo de Premium", included: true },
      { text: "Hasta 40 fotos", included: true },
      { text: "Ligas ilimitadas", included: true },
      { text: "8 Revisiones", included: true },
      { text: "Hasta 3 canciones", included: true },
    ],
  },
]

export function PricingSection() {
  const getWhatsappUrl = (planName: string) => {
    const message = `Hola, me interesa el plan de invitaciones digitales "${planName}".`
    return `https://wa.me/8111230266?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="precios" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">
            Planes simples y transparentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elige el plan perfecto para tu evento. Sin sorpresas, sin compromisos largos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all duration-300 ${
                plan.popular
                  ? "border-[#1e3a8a] bg-[#dbeafe]/20 shadow-lg ring-1 ring-[#1e3a8a]/40"
                  : "border-gray-200 bg-white hover:border-[#1e3a8a]/40 hover:shadow-md"
              } p-8 relative`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#1e3a8a] text-white text-xs px-3 py-1">
                    ⭐ Más popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-6 pt-2">
                <h3 className="text-2xl font-bold text-[#1f2937] mb-1">{plan.name}</h3>
                {plan.description && (
                  <p className="text-xs text-gray-500">{plan.description}</p>
                )}
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-bold text-[#1f2937]">{plan.price}</span>
                  <span className="text-sm text-gray-500 line-through">{plan.originalPrice}</span>
                </div>
                <p className="text-xs text-gray-500 mt-2">Pago único</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 text-sm">
                    {feature.included ? (
                      <Check className="w-4 h-4 text-[#1e3a8a] flex-shrink-0 mt-0.5" />
                    ) : (
                      <span className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5">−</span>
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a href={getWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                <Button
                  className={`w-full py-2 rounded-lg text-sm font-semibold transition-all ${
                    plan.popular
                      ? "bg-[#1e3a8a] hover:bg-[#1e40af] text-white"
                      : "border border-gray-300 text-gray-700 hover:border-[#1e3a8a] hover:text-[#1e3a8a]"
                  }`}
                >
                  Elegir {plan.name}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}