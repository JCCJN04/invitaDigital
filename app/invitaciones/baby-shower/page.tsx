import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Baby, Calendar, MapPin, Gift, Camera, MessageCircle, Star, ArrowRight, Sparkles, Heart, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Invitaciones de Baby Shower Digitales en Monterrey | Diseños Tiernos 2025",
  description: "🍼 Invitaciones de baby shower digitales personalizadas en Monterrey. Diseños tiernos para niño y niña. Mesa de regalos, juegos y confirmación digital. Entrega 24hrs. Desde $1,399 MXN.",
  keywords: [
    "invitaciones baby shower digitales",
    "invitaciones baby shower monterrey",
    "invitaciones baby shower niño",
    "invitaciones baby shower niña",
    "invitaciones baby shower whatsapp",
    "invitaciones baby shower originales",
    "invitaciones baby shower economicas",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/invitaciones/baby-shower",
  },
  openGraph: {
    title: "Invitaciones de Baby Shower Digitales | Monterrey",
    description: "Diseños tiernos personalizados para tu baby shower. Entrega en 24hrs.",
    url: "https://invitacionesdigitalesmty.com.mx/invitaciones/baby-shower",
    type: "website",
  },
}

const features = [
  {
    icon: Baby,
    title: "Diseños Tiernos",
    description: "Temáticas adorables para niño, niña o sorpresa",
  },
  {
    icon: Gift,
    title: "Mesa de Regalos",
    description: "Enlaces directos a Amazon, Liverpool o tu lista",
  },
  {
    icon: MapPin,
    title: "Ubicación del Evento",
    description: "Mapa interactivo para que todos lleguen fácil",
  },
  {
    icon: Calendar,
    title: "Fecha y Hora",
    description: "Cuenta regresiva para el gran día",
  },
  {
    icon: Camera,
    title: "Galería de Fotos",
    description: "Comparte fotos del embarazo y ecografías",
  },
  {
    icon: Palette,
    title: "Dress Code",
    description: "Indica colores o temática del evento",
  },
]

const themes = [
  { name: "Ositos", emoji: "🧸" },
  { name: "Safari", emoji: "🦁" },
  { name: "Nubes", emoji: "☁️" },
  { name: "Estrellas", emoji: "⭐" },
  { name: "Arcoíris", emoji: "🌈" },
  { name: "Elefantes", emoji: "🐘" },
  { name: "Mariposas", emoji: "🦋" },
  { name: "Ballenas", emoji: "🐋" },
]

const testimonials = [
  {
    name: "Carlos Mendoza",
    event: "Baby Shower de Sofía",
    location: "Guadalupe, NL",
    comment: "Excelente atención al cliente y diseños hermosos. La invitación digital fue un éxito total. Pudimos compartirla por WhatsApp al instante.",
    rating: 5,
  },
  {
    name: "Laura Martínez",
    event: "Baby Shower de Mateo",
    location: "Monterrey, NL",
    comment: "Me encantó poder incluir la mesa de regalos directamente en la invitación. Súper práctico para los invitados.",
    rating: 5,
  },
]

export default function InvitacionesBabyShowerPage() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola,%20me%20interesa%20una%20invitación%20digital%20para%20baby%20shower"

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-pink-50 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-sky-100 text-sky-700 hover:bg-sky-100">
              🍼 Invitaciones Baby Shower
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Invitaciones de Baby Shower Digitales en{" "}
              <span className="text-sky-600">Monterrey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Celebra la llegada del bebé con una invitación tierna y práctica. 
              Diseños adorables con mesa de regalos integrada, juegos y confirmación digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar Mi Invitación
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-sky-300 text-sky-700 hover:bg-sky-50" asChild>
                <Link href="#tematicas">
                  Ver Temáticas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Gender Options */}
            <div className="flex justify-center gap-4 mb-12">
              <div className="bg-sky-100 px-6 py-3 rounded-full">
                <span className="text-sky-700 font-medium">👶 Es Niño</span>
              </div>
              <div className="bg-pink-100 px-6 py-3 rounded-full">
                <span className="text-pink-700 font-medium">👶 Es Niña</span>
              </div>
              <div className="bg-purple-100 px-6 py-3 rounded-full">
                <span className="text-purple-700 font-medium">🎉 Es Sorpresa</span>
              </div>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">30+</p>
                <p className="text-sm text-gray-600">Baby Showers</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">24h</p>
                <p className="text-sm text-gray-600">Entrega Promedio</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Satisfacción</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Themes Section */}
      <section id="tematicas" className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <p className="text-center text-gray-600 mb-6">Temáticas populares para baby shower:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {themes.map((theme, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm hover:shadow-md transition-shadow">
                <span className="text-xl">{theme.emoji}</span>
                <span className="text-sm text-gray-700">{theme.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Todo lo que Incluye tu Invitación de Baby Shower
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Diseñada para hacer tu celebración perfecta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 border border-gray-200 rounded-xl hover:border-sky-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Features */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-pink-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Funciones Especiales para Baby Shower
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎁</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Mesa de Regalos Integrada</h3>
                <p className="text-gray-600 mb-4">
                  Enlaces directos a Amazon Baby Registry, Liverpool, Bebé Mundo o tu lista personalizada. 
                  Los invitados ven exactamente qué necesitas.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Amazon Baby Registry
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Liverpool Mesa de Regalos
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Lista personalizada
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="text-4xl mb-4">🎮</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Juegos Incluidos</h3>
                <p className="text-gray-600 mb-4">
                  Podemos incluir sección de juegos interactivos para que tus invitados participen 
                  antes del evento.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Adivina el tamaño de la panza
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Predicciones del bebé
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-green-500">✓</span> Consejos para papás
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Mamás y Papás Felices
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-sky-50 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.event} • {testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-gradient-to-r from-sky-500 to-cyan-500">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Listo para tu Invitación de Baby Shower?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Precios desde $1,399 MXN. Entrega en 24 horas. Satisfacción garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-sky-600 hover:bg-sky-50" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/#precios">
                Ver Todos los Planes
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
              Preguntas Frecuentes sobre Invitaciones de Baby Shower
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo hacer una invitación de revelación de género?
                </h3>
                <p className="text-gray-600">
                  ¡Sí! Diseñamos invitaciones para Gender Reveal con colores neutros, cuenta regresiva especial y toda la emoción del momento.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo incluir la foto del ultrasonido?
                </h3>
                <p className="text-gray-600">
                  ¡Claro! Podemos incluir fotos del ultrasonido, fotos de la pancita, o sesión de fotos de maternidad en la galería de la invitación.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Se puede personalizar con el nombre del bebé?
                </h3>
                <p className="text-gray-600">
                  Sí, la invitación incluye el nombre del bebé (si ya lo decidieron), nombres de los papás, y cualquier mensaje especial que quieran agregar.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué pasa si es baby shower virtual?
                </h3>
                <p className="text-gray-600">
                  Perfecto para eventos virtuales. Incluimos el enlace de Zoom/Meet directamente en la invitación junto con instrucciones para los invitados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://invitacionesdigitalesmty.com.mx" },
              { "@type": "ListItem", position: 2, name: "Invitaciones", item: "https://invitacionesdigitalesmty.com.mx/invitaciones" },
              { "@type": "ListItem", position: 3, name: "Baby Shower", item: "https://invitacionesdigitalesmty.com.mx/invitaciones/baby-shower" },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
