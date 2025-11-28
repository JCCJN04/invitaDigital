import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Calendar, MapPin, Music, Camera, MessageCircle, Star, ArrowRight, Sparkles, PartyPopper, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Invitaciones de XV Años Digitales en Monterrey | Diseños 2025",
  description: "👑 Invitaciones de XV años digitales personalizadas en Monterrey. Diseños elegantes con música, animaciones, mesa de regalos y confirmación digital. Entrega 24hrs. Desde $1,399 MXN.",
  keywords: [
    "invitaciones xv años digitales",
    "invitaciones quince años monterrey",
    "invitaciones 15 años digitales",
    "invitaciones quinceañera",
    "invitaciones xv años whatsapp",
    "invitaciones xv años elegantes",
    "invitaciones xv años economicas",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/invitaciones/xv-anos",
  },
  openGraph: {
    title: "Invitaciones de XV Años Digitales | Monterrey",
    description: "Diseños elegantes personalizados para tus XV años. Entrega en 24hrs.",
    url: "https://invitacionesdigitalesmty.com.mx/invitaciones/xv-anos",
    type: "website",
  },
}

const features = [
  {
    icon: Crown,
    title: "Diseño de Princesa",
    description: "Elegancia y sofisticación dignos de una reina",
  },
  {
    icon: Music,
    title: "Tu Vals Favorito",
    description: "Incluye la música de tu vals o canción especial",
  },
  {
    icon: MapPin,
    title: "Ubicación del Evento",
    description: "Mapa interactivo del salón de fiestas",
  },
  {
    icon: Calendar,
    title: "Cuenta Regresiva",
    description: "Días, horas y minutos para el gran día",
  },
  {
    icon: Camera,
    title: "Sesión de Fotos",
    description: "Galería con tus mejores fotos de XV",
  },
  {
    icon: PartyPopper,
    title: "Dress Code",
    description: "Indica el código de vestimenta a tus invitados",
  },
]

const testimonials = [
  {
    name: "Sandra Castillo",
    event: "XV Años de Valentina",
    location: "Apodaca, NL",
    comment: "La invitación quedó hermosa, todos preguntaban dónde la habíamos hecho. El diseño fue exactamente lo que queríamos.",
    rating: 5,
  },
  {
    name: "Ana Rodríguez",
    event: "XV Años de Sofía",
    location: "Monterrey, NL",
    comment: "Proceso súper fácil y rápido. En menos de 24 horas teníamos la invitación perfecta con animaciones hermosas.",
    rating: 5,
  },
]

const examples = [
  {
    title: "XV Años Emma & Pau",
    image: "/prueba.jpg",
    style: "Elegante Pastel",
    url: "https://invitacionesemmaypau.vercel.app/",
  },
]

const colorThemes = [
  { name: "Rosa Princesa", color: "bg-pink-400" },
  { name: "Azul Royal", color: "bg-blue-500" },
  { name: "Dorado Elegante", color: "bg-yellow-500" },
  { name: "Morado Mágico", color: "bg-purple-500" },
  { name: "Champagne", color: "bg-amber-300" },
  { name: "Menta Fresca", color: "bg-teal-400" },
]

export default function InvitacionesXVPage() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola,%20me%20interesa%20una%20invitación%20digital%20para%20XV%20años"

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-purple-100 text-purple-700 hover:bg-purple-100">
              👑 Invitaciones XV Años
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Invitaciones de XV Años Digitales en{" "}
              <span className="text-purple-600">Monterrey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Celebra tu transición a mujer con una invitación digna de una princesa. 
              Diseños elegantes con animaciones, música, countdown y confirmación digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar Mi Invitación
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-purple-300 text-purple-700 hover:bg-purple-50" asChild>
                <Link href="#ejemplos">
                  Ver Ejemplos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">40+</p>
                <p className="text-sm text-gray-600">XV Años Celebrados</p>
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

      {/* Color Themes */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <p className="text-center text-gray-600 mb-6">Colores disponibles para tu invitación:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {colorThemes.map((theme, index) => (
              <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <div className={`w-4 h-4 rounded-full ${theme.color}`} />
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
              Todo lo que Incluye tu Invitación de XV Años
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada detalle diseñado para hacer tu celebración inolvidable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 border border-gray-200 rounded-xl hover:border-purple-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Section */}
      <section id="ejemplos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Ejemplos de Invitaciones de XV Años
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Inspírate con nuestros diseños reales
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {examples.map((example, index) => (
              <a
                key={index}
                href={example.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
              >
                <div className="aspect-[3/4] relative bg-gray-100">
                  <Image
                    src={example.image}
                    alt={`Invitación de XV años digital - ${example.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="font-semibold">{example.title}</p>
                    <p className="text-sm text-white/80">{example.style}</p>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-purple-600 text-white">
                  Ver en vivo
                </Badge>
              </a>
            ))}
            
            {/* Placeholder for more examples */}
            <div className="aspect-[3/4] rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center">
              <Crown className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600 font-medium mb-2">¿Tus XV aquí?</p>
              <p className="text-sm text-gray-500">Crea tu invitación de princesa</p>
              <Button className="mt-4 bg-purple-600 hover:bg-purple-700" size="sm" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Empezar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Lo que Dicen Nuestras Quinceañeras
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-purple-50 rounded-xl">
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Lista para tu Invitación de XV Años?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Precios desde $1,399 MXN. Entrega en 24 horas. Satisfacción garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-purple-50" asChild>
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
              Preguntas Frecuentes sobre Invitaciones de XV Años
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo incluir la mesa de regalos en la invitación?
                </h3>
                <p className="text-gray-600">
                  ¡Claro! Agregamos enlaces directos a tus mesas de regalos en Liverpool, Amazon, o cualquier tienda. También podemos incluir tu número de cuenta para sobre de regalo.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Pueden agregar el itinerario de la fiesta?
                </h3>
                <p className="text-gray-600">
                  Sí, incluimos timeline con todos los momentos importantes: misa, recepción, vals, brindis, pastel, hora loca, etc. Con horarios y ubicaciones.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué fotos necesito enviarles?
                </h3>
                <p className="text-gray-600">
                  Idealmente fotos de tu sesión de XV años. Si aún no la tienes, podemos trabajar con fotos casuales y actualizar la invitación después con las fotos profesionales.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Los chambelanes pueden confirmar asistencia también?
                </h3>
                <p className="text-gray-600">
                  Sí, cada invitado (incluyendo chambelanes y damas) puede confirmar de forma individual. Recibes todas las confirmaciones organizadas en tu WhatsApp.
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
              { "@type": "ListItem", position: 3, name: "XV Años", item: "https://invitacionesdigitalesmty.com.mx/invitaciones/xv-anos" },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
