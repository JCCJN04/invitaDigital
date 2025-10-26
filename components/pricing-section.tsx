"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Sparkles, Zap, XIcon } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$799",
    originalPrice: "$899",
    icon: Zap,
    popular: false,
    description: "Perfecto para eventos íntimos",
    features: [
      { text: "Hasta 8 fotos", included: true },
      { text: "Máximo 2 ligas", included: true },
      { text: "Hasta 2 revisiones", included: true },
      { text: "QR básico", included: true },
      { text: "Animaciones incluidas", included: false },
      { text: "Hasta 1 canción", included: false },
    ],
  },
  {
    name: "Premium",
    price: "$999",
    originalPrice: "$1199",
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
    price: "$1799",
    originalPrice: "$1999",
    icon: Sparkles,
    popular: false,
    description: "Para eventos extraordinarios",
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
    <section id="precios" className="py-24 bg-gradient-to-b from-white via-[#f4f2ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6258FF]/12 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">Precios que Te Sorprenderán</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Calidad premium a precios increíbles. Ahorra hasta 70% comparado con invitaciones tradicionales
          </p>

          {/* Limited Time Offer */}
          <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[#fef6f9] to-[#fff2f0] text-[#e11d48] px-6 py-3 rounded-full border border-[#ffe0e8] shadow-sm">
            <span className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></span>
            <span className="font-semibold text-sm">Precios con descuento por tiempo limitado</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg transition-all duration-500 border overflow-hidden group ${
                plan.popular ? "ring-2 ring-[#6258FF] md:scale-105 md:shadow-2xl border-[#6258FF]" : "border-[#ece9ff] hover:shadow-xl"
              }`}
              style={{
                animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6258FF]/6 via-transparent to-[#ff8dc7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Popular Badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] text-white px-6 py-1 font-semibold shadow-lg">
                  ⭐ Más Popular
                </Badge>
              )}

              <div className="p-8 relative z-10">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-br from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] text-white shadow-lg"
                      : "bg-gradient-to-br from-white to-[#f6f4ff] text-[#433d7d] group-hover:from-[#6258FF]/12 group-hover:to-[#ff8dc7]/16"
                  }`}
                >
                  <plan.icon className="w-8 h-8" />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-serif font-bold text-center text-[#111033] mb-2">{plan.name}</h3>

                <p className="text-gray-600 text-center mb-8 text-sm">{plan.description}</p>

                {/* Pricing */}
                <div className="text-center mb-8 pb-8 border-b border-[#ece9ff]">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-5xl font-bold text-brand-gradient">
                      {plan.price}
                    </span>
                    <span className="text-lg text-gray-400 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">Pago único • Sin sorpresas</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      ) : (
                        <XIcon className="w-5 h-5 text-gray-300 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-gray-700" : "text-gray-400"}`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href={getWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full py-3 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5 ${
                      plan.popular
                        ? "bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] hover:shadow-lg hover:shadow-[#6258FF]/45 text-white"
                        : "border border-[#6258FF] text-[#6258FF] hover:bg-[#6258FF] hover:text-white hover:shadow-lg"
                    }`}
                  >
                    Elegir {plan.name}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Guarantee */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-white to-[#f8f7ff] rounded-2xl p-8 shadow-lg max-w-2xl mx-auto border border-[#ece9ff]">
            <div className="w-16 h-16 bg-[#e0fce6] rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-[#22c55e]" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#111033] mb-4">Garantía de Satisfacción 100%</h3>
            <p className="text-gray-600">
              Si no quedas completamente satisfecho con tu invitación, te devolvemos tu dinero. Sin preguntas, sin
              complicaciones.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}