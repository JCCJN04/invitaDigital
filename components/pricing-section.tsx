"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Crown, Sparkles, Zap, XIcon } from "lucide-react"

const plans = [
  {
    name: "Básico",
    price: "$699",
    originalPrice: "$599",
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
    price: "$899",
    originalPrice: "$799",
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
    price: "$1599",
    originalPrice: "$1499",
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
  const getWhatsappUrl = (planName) => {
    const message = `Hola, me interesa el plan de invitaciones digitales "${planName}".`
    return `https://wa.me/8111230266?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="precios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Precios que Te Sorprenderán</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Calidad premium a precios increíbles. Ahorra hasta 70% comparado con invitaciones tradicionales
          </p>

          {/* Limited Time Offer */}
          <div className="inline-flex items-center space-x-2 bg-red-100 text-red-800 px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="font-medium">Precios con descuento por tiempo limitado</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover-lift ${
                plan.popular ? "ring-2 ring-[#D4AF37] scale-105" : ""
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#D4AF37] text-white px-4 py-1">
                  Más Popular
                </Badge>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 ${
                    plan.popular ? "bg-[#D4AF37]" : "bg-gray-100"
                  }`}
                >
                  <plan.icon className={`w-8 h-8 ${plan.popular ? "text-white" : "text-gray-600"}`} />
                </div>

                {/* Plan Name */}
                <h3 className="text-2xl font-serif font-bold text-center text-gray-800 mb-2">{plan.name}</h3>

                <p className="text-gray-600 text-center mb-6">{plan.description}</p>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <span className="text-4xl font-bold text-gray-800">{plan.price}</span>
                    <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                  </div>
                  <p className="text-sm text-gray-500">Pago único</p>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <XIcon className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                      )}
                      <span className="text-gray-700">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <a href={getWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                  <Button
                    className={`w-full py-3 rounded-full font-semibold ${
                      plan.popular
                        ? "bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                        : "bg-gray-800 hover:bg-gray-700 text-white"
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
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">Garantía de Satisfacción 100%</h3>
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