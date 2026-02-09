"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Crown, MessageCircle, ShieldCheck } from "lucide-react"

const plans = [
  {
    id: "basico",
    name: "Básico",
    tagline: "Esencial & Elegante",
    price: 1999,
    priceDisplay: "$1,999",
    icon: Star,
    popular: false,
    description: "Comparte tus momentos más especiales con una galería personalizada.",
    features: [
      { text: "Hasta 8 fotos de alta calidad", included: true },
      { text: "Ubicación y Mesa de Regalos", included: true },
      { text: "2 rondas de revisión", included: true },
      { text: "Mapa interactivo con GPS", included: true },
      { text: "Enlace único para compartir", included: true },
      { text: "Música de fondo", included: false },
      { text: "Diseño 100% personalizado", included: false },
    ],
    ctaText: "Comenzar Básico",
    color: "gray"
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "La Experiencia Favorita",
    price: 2600,
    priceDisplay: "$2,600",
    icon: Crown,
    popular: true,
    description: "El equilibrio perfecto entre elegancia, personalización y tecnología.",
    features: [
      { text: "Todo lo del plan Básico", included: true },
      { text: "Hasta 16 fotos (Historia visual)", included: true },
      { text: "Hasta 5 secciones interactivas", included: true },
      { text: "4 rondas de revisión", included: true },
      { text: "Diseño 100% a medida", included: true },
      { text: "Animaciones elegantes", included: true },
      { text: "Música de fondo envolvente", included: true },
      { text: "Código QR personalizado de alta resolución", included: true },
    ],
    ctaText: "Quiero el Premium",
    color: "gold"
  },
  {
    id: "deluxe",
    name: "Deluxe",
    tagline: "Lujo Sin Límites",
    price: 3499,
    priceDisplay: "$3,499",
    icon: Zap,
    popular: false,
    description: "Para quienes buscan la máxima exclusividad y cero preocupaciones.",
    features: [
      { text: "Todo lo del plan Premium", included: true },
      { text: "Galería completa (Hasta 40 fotos)", included: true },
      { text: "Enlaces y secciones ilimitadas", included: true },
      { text: "Revisiones ilimitadas", included: true },
      { text: "Mix musical (Hasta 3 canciones)", included: true },
      { text: "Prioridad total en entrega", included: true },
    ],
    ctaText: "Elegir Lujo",
    color: "black"
  },
]

// Product Schema para SEO
const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Invitaciones Digitales Monterrey",
  description: "Invitaciones digitales personalizadas para bodas, XV años, baby showers y más eventos en Monterrey",
  brand: {
    "@type": "Brand",
    name: "Invitaciones Digitales MTY"
  },
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "MXN",
    lowPrice: 1999,
    highPrice: 3499,
    offerCount: 3,
    offers: plans.map(plan => ({
      "@type": "Offer",
      name: `Plan ${plan.name}`,
      price: plan.price,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      url: `https://invitacionesdigitalesmty.com.mx/#precios`,
      priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
      description: plan.description
    }))
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1"
  }
}

export function PricingSection() {
  const getWhatsappUrl = (planName: string) => {
    const message = `Hola, me interesa el plan *${planName}*. ¿Podrían darme más detalles para mi evento?`
    return `https://wa.me/528111230266?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="precios" className="py-24 bg-[#fdfcfb] relative overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-30 pointer-events-none"></div>

      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d4a373] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#e6ccb2] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <Badge variant="outline" className="mb-6 border-[#d4a373] text-[#d4a373] px-4 py-1.5 text-sm font-medium tracking-widest uppercase bg-white/50 backdrop-blur-sm">
            Inversión Transparente
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1c1917] mb-6 leading-tight">
            Elige la Experiencia Perfecta
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a4a] font-light leading-relaxed">
            Sin costos ocultos ni mensualidades. Un solo pago para tener una invitación que tus invitados amarán.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 items-center max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 group flex flex-col h-full
                ${plan.popular
                  ? "bg-[#1c1917] text-white shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] scale-100 lg:scale-105 z-20 ring-1 ring-white/10"
                  : "bg-white text-[#1c1917] border border-[#f3eee8] shadow-xl hover:shadow-2xl hover:-translate-y-2 z-10"
                }
              `}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full text-center">
                  <span className="bg-gradient-to-r from-[#d4a373] to-[#c09265] text-white text-xs font-bold tracking-widest uppercase px-6 py-2.5 rounded-full shadow-lg inline-flex items-center gap-2">
                    <Crown className="w-3 h-3" /> Más Popular
                  </span>
                </div>
              )}

              <div className="mb-8">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 
                  ${plan.popular ? "bg-white/10 text-[#d4a373]" : "bg-[#fdfcfb] text-[#1c1917] border border-[#f3eee8]"}`}>
                  <plan.icon className="w-7 h-7" />
                </div>
                <h3 className={`text-2xl font-serif font-bold mb-2 ${plan.popular ? "text-white" : "text-[#1c1917]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium tracking-wide uppercase ${plan.popular ? "text-[#9ca3af]" : "text-[#d4a373]"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className="mb-8 pb-8 border-b border-dashed border-opacity-20 border-current">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.priceDisplay}</span>
                  <span className={`text-sm font-medium ${plan.popular ? "text-gray-400" : "text-gray-500"}`}>MXN</span>
                </div>
                <p className={`mt-4 text-sm leading-relaxed ${plan.popular ? "text-gray-300" : "text-gray-500"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[15px]">
                    {feature.included ? (
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 
                        ${plan.popular ? "bg-[#d4a373] text-[#1c1917]" : "bg-[#d4a373]/10 text-[#d4a373]"}`}>
                        <Check className="w-3 h-3" />
                      </div>
                    ) : (
                      <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 
                        ${plan.popular ? "bg-white/5" : "bg-gray-100"}`}>
                        <span className={`block h-px w-2 ${plan.popular ? "bg-white/20" : "bg-gray-300"}`}></span>
                      </div>
                    )}
                    <span className={`${feature.included
                      ? (plan.popular ? "text-gray-100" : "text-gray-700")
                      : (plan.popular ? "text-gray-600" : "text-gray-400")}`}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a href={getWhatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button
                  className={`w-full py-7 rounded-2xl text-base font-bold transition-all duration-300 group-hover:scale-[1.02]
                    ${plan.popular
                      ? "bg-gradient-to-r from-[#d4a373] to-[#b08968] hover:to-[#9c7858] text-white shadow-lg shadow-[#d4a373]/20 border-0"
                      : "bg-[#1c1917] text-white hover:bg-gray-900 shadow-xl"}`}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {plan.ctaText}
                </Button>
              </a>

              {plan.popular && (
                <p className="mt-4 text-center text-xs text-gray-400 flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3 h-3" /> Garantía de Satisfacción Total
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Global Trust Indicators */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center border-t border-gray-200 pt-12">
          {[
            { label: "Pago Único", sub: "Sin mensualidades" },
            { label: "Entrega Rápida", sub: "24 a 48 horas" },
            { label: "Soporte VIP", sub: "Atención por WhatsApp" },
            { label: "Eco-Friendly", sub: "Cero papel" }
          ].map((item, i) => (
            <div key={i}>
              <h4 className="font-serif font-bold text-[#1c1917] text-lg mb-1">{item.label}</h4>
              <p className="text-sm text-gray-500">{item.sub}</p>
            </div>
          ))}
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
    </section>
  )
}