import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Check, Sparkles, Crown, Rocket, MessageCircle, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Precios Invitaciones Digitales Monterrey 2025 | Desde $1,399 MXN",
  description: "💰 Conoce nuestros precios de invitaciones digitales para bodas, XV años, baby shower y más. Planes desde $1,399 MXN con entrega rápida. ¡Cotiza gratis hoy!",
  keywords: [
    "precios invitaciones digitales",
    "costo invitaciones digitales monterrey",
    "invitaciones digitales baratas",
    "cotizacion invitaciones digitales",
    "precios invitaciones boda",
    "precios invitaciones xv años",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/precios",
  },
}

const plans = [
  {
    id: "basico",
    name: "Básico",
    description: "Ideal para eventos íntimos",
    price: 1399,
    originalPrice: 1699,
    popular: false,
    icon: Sparkles,
    color: "blue",
    features: [
      "Hasta 8 fotos",
      "Máximo 2 ligas",
      "Hasta 2 revisiones",
      "Mapa de ubicación interactivo",
      "Compatible móvil y desktop",
      "Link único para compartir",
      "Soporte por WhatsApp",
    ],
    notIncluded: [
      "Animaciones incluidas",
      "Hasta 1 canción",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    description: "La opción más elegida",
    price: 1799,
    originalPrice: 2199,
    popular: true,
    icon: Crown,
    color: "purple",
    features: [
      "Todo lo de Básico",
      "Hasta 16 fotos",
      "Hasta 5 ligas",
      "4 Revisiones",
      "Diseño 100% personalizado",
      "Animaciones incluidas",
      "QR personalizado",
      "Hasta 1 canción",
    ],
    notIncluded: [],
  },
  {
    id: "deluxe",
    name: "Deluxe",
    description: "La experiencia completa",
    price: 2499,
    originalPrice: 2999,
    popular: false,
    icon: Rocket,
    color: "rose",
    features: [
      "Todo lo de Premium",
      "Hasta 40 fotos",
      "Ligas ilimitadas",
      "8 Revisiones",
      "Hasta 3 canciones",
    ],
    notIncluded: [],
  },
]

// Addons removidos según solicitud del cliente

const guarantees = [
  { text: "Satisfacción 100% garantizada", icon: "✅" },
  { text: "Ajustes hasta quedar perfecta", icon: "🔄" },
  { text: "Soporte continuo post-entrega", icon: "💬" },
  { text: "Sin cargos ocultos", icon: "💰" },
]

export default function PreciosPage() {
  const whatsappUrl = (plan: string) =>
    `https://wa.me/528111230266?text=Hola,%20me%20interesa%20el%20plan%20${plan}%20de%20invitaciones%20digitales`

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <Badge className="mb-6 bg-green-100 text-green-700">
            🎉 Promoción de Temporada - Hasta 35% OFF
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Precios de Invitaciones Digitales
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Planes para todo tipo de evento y presupuesto. Todas nuestras invitaciones
            incluyen diseño personalizado y soporte completo.
          </p>

          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-500">
            {guarantees.map((guarantee, index) => (
              <span key={index} className="flex items-center gap-1">
                {guarantee.icon} {guarantee.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => {
              const Icon = plan.icon
              const discount = Math.round((1 - plan.price / plan.originalPrice) * 100)

              return (
                <Card
                  key={plan.id}
                  className={`relative flex flex-col ${plan.popular
                      ? "border-2 border-[#d4a373] shadow-xl scale-105 z-10"
                      : "border-gray-200"
                    }`}
                >
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-[#d4a373] text-[#1c1917] px-4 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Más Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <div className={`w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center ${plan.color === "blue" ? "bg-blue-100 text-blue-600" :
                        plan.color === "purple" ? "bg-purple-100 text-purple-600" :
                          "bg-rose-100 text-rose-600"
                      }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                    <p className="text-gray-500">{plan.description}</p>

                    <div className="mt-4">
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-sm text-gray-400 line-through">
                          ${plan.originalPrice.toLocaleString()}
                        </span>
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          -{discount}%
                        </Badge>
                      </div>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-gray-900">
                          ${plan.price.toLocaleString()}
                        </span>
                        <span className="text-gray-500 ml-1">MXN</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Pago único, sin suscripciones</p>
                    </div>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <ul className="space-y-3">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                      {plan.notIncluded.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 opacity-50">
                          <span className="w-5 h-5 flex items-center justify-center text-gray-400 flex-shrink-0">✗</span>
                          <span className="text-gray-400 text-sm line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      className={`w-full ${plan.popular
                          ? "bg-[#1c1917] hover:bg-[#44403c] text-white"
                          : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                        }`}
                      size="lg"
                      asChild
                    >
                      <a href={whatsappUrl(plan.name)} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Elegir {plan.name}
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>



      {/* Comparison Table */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4 text-center">
            Compara Nuestros Planes
          </h2>
          <p className="text-gray-600 text-center mb-10">
            Encuentra el plan perfecto para tu evento
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Característica</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Esencial</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#1c1917]">Premium ⭐</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Deluxe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { feature: "Hasta fotos", esencial: "8", premium: "16", deluxe: "40" },
                  { feature: "Ligas/enlaces", esencial: "2", premium: "5", deluxe: "Ilimitadas" },
                  { feature: "Revisiones", esencial: "2", premium: "4", deluxe: "8" },
                  { feature: "Mapa interactivo", esencial: true, premium: true, deluxe: true },
                  { feature: "Responsivo móvil/desktop", esencial: true, premium: true, deluxe: true },
                  { feature: "Animaciones incluidas", esencial: false, premium: true, deluxe: true },
                  { feature: "Canción/música", esencial: false, premium: "1", deluxe: "3" },
                  { feature: "Diseño 100% personalizado", esencial: false, premium: true, deluxe: true },
                  { feature: "QR personalizado", esencial: false, premium: true, deluxe: true },
                  { feature: "Precio", esencial: "$1,399", premium: "$1,799", deluxe: "$2,499" },
                ].map((row, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-700">{row.feature}</td>
                    <td className="py-3 px-4 text-center">
                      {row.esencial === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                        row.esencial === false ? <span className="text-gray-300">—</span> :
                          <span className="text-gray-600">{row.esencial}</span>}
                    </td>
                    <td className="py-3 px-4 text-center bg-blue-50/50">
                      {row.premium === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                        row.premium === false ? <span className="text-gray-300">—</span> :
                          <span className="text-[#1c1917] font-medium">{row.premium}</span>}
                    </td>
                    <td className="py-3 px-4 text-center">
                      {row.deluxe === true ? <Check className="w-5 h-5 text-green-500 mx-auto" /> :
                        row.deluxe === false ? <span className="text-gray-300">—</span> :
                          <span className="text-gray-600">{row.deluxe}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-10 text-center">
            Preguntas sobre Precios
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "¿Hay costos adicionales después del pago?",
                a: "No. El precio incluye todo lo mencionado en el plan. Solo pagas extra si decides agregar complementos opcionales."
              },
              {
                q: "¿Qué métodos de pago aceptan?",
                a: "Aceptamos transferencia bancaria, depósito, tarjeta de crédito/débito, y pagos por OXXO."
              },
              {
                q: "¿Puedo cambiar de plan después?",
                a: "Sí, puedes hacer upgrade a un plan superior pagando la diferencia antes de la entrega final."
              },
              {
                q: "¿Por cuánto tiempo estará disponible mi invitación?",
                a: "Tu invitación estará activa por tiempo indefinido. No la eliminamos después del evento."
              },
              {
                q: "¿Ofrecen descuentos por volumen?",
                a: "Sí, si necesitas múltiples invitaciones (ej: boda civil y religiosa), te hacemos precio especial. Consúltanos."
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1917]">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿No Estás Seguro Cuál Elegir?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Cuéntanos sobre tu evento y te ayudamos a elegir el plan perfecto.
            La cotización es 100% gratis y sin compromiso.
          </p>
          <Button size="lg" className="bg-white text-[#1c1917] hover:bg-gray-100" asChild>
            <a href="https://wa.me/528111230266?text=Hola,%20necesito%20ayuda%20para%20elegir%20un%20plan%20de%20invitación%20digital" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Asesoría Gratis por WhatsApp
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Links to Categories */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-600 mb-4">Ver precios específicos por tipo de evento:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/invitaciones/boda" className="text-[#1c1917] hover:text-[#d4a373] hover:underline">
              Invitaciones de Boda →
            </Link>
            <Link href="/invitaciones/xv-anos" className="text-[#1c1917] hover:text-[#d4a373] hover:underline">
              Invitaciones XV Años →
            </Link>
            <Link href="/invitaciones/baby-shower" className="text-[#1c1917] hover:text-[#d4a373] hover:underline">
              Invitaciones Baby Shower →
            </Link>
          </div>
        </div>
      </section>

      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Invitaciones Digitales Monterrey",
            description: "Invitaciones digitales personalizadas para bodas, XV años, baby showers y más eventos",
            brand: {
              "@type": "Brand",
              name: "Invitaciones Digitales MTY"
            },
            offers: {
              "@type": "AggregateOffer",
              priceCurrency: "MXN",
              lowPrice: 799,
              highPrice: 1999,
              offerCount: 3,
              offers: plans.map(plan => ({
                "@type": "Offer",
                name: `Plan ${plan.name}`,
                price: plan.price,
                priceCurrency: "MXN",
                availability: "https://schema.org/InStock",
                url: `https://invitacionesdigitalesmty.com.mx/precios#${plan.id}`,
              }))
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127"
            }
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://invitacionesdigitalesmty.com.mx" },
              { "@type": "ListItem", position: 2, name: "Precios", item: "https://invitacionesdigitalesmty.com.mx/precios" },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
