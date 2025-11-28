import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Check, Heart, Calendar, MapPin, Music, Camera, MessageCircle, Star, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Invitaciones de Boda Digitales en Monterrey | Diseños Elegantes 2025",
  description: "✨ Invitaciones de boda digitales personalizadas en Monterrey. Diseños románticos con música, animaciones, mapa interactivo y confirmación de asistencia. Entrega 24hrs. Desde $1,399 MXN.",
  keywords: [
    "invitaciones de boda digitales",
    "invitaciones boda monterrey",
    "invitaciones matrimonio digitales",
    "save the date digital",
    "invitaciones boda whatsapp",
    "invitaciones boda elegantes",
    "invitaciones boda economicas",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/invitaciones/boda",
  },
  openGraph: {
    title: "Invitaciones de Boda Digitales | Monterrey",
    description: "Diseños románticos personalizados para tu boda. Entrega en 24hrs.",
    url: "https://invitacionesdigitalesmty.com.mx/invitaciones/boda",
    type: "website",
  },
}

const features = [
  {
    icon: Heart,
    title: "Diseño Romántico",
    description: "Cada invitación refleja el amor único de tu historia",
  },
  {
    icon: Music,
    title: "Música Personalizada",
    description: "Incluye la canción especial de tu relación",
  },
  {
    icon: MapPin,
    title: "Mapa Interactivo",
    description: "Tus invitados llegan fácil a la ceremonia y recepción",
  },
  {
    icon: Calendar,
    title: "Cuenta Regresiva",
    description: "Muestra cuánto falta para el gran día",
  },
  {
    icon: Camera,
    title: "Galería de Fotos",
    description: "Comparte tus mejores momentos juntos",
  },
  {
    icon: MessageCircle,
    title: "Confirmación Digital",
    description: "Recibe RSVPs directamente en tu WhatsApp",
  },
]

const testimonials = [
  {
    name: "María y Carlos",
    location: "San Pedro, NL",
    comment: "Nuestra invitación fue perfecta. Todos nuestros invitados quedaron impresionados con el diseño y la música.",
    rating: 5,
  },
  {
    name: "Ana y Roberto",
    location: "Monterrey, NL",
    comment: "El proceso fue muy fácil y el resultado superó nuestras expectativas. La confirmación digital nos ahorró mucho tiempo.",
    rating: 5,
  },
]

const examples = [
  {
    title: "Boda Alma & Mauricio",
    image: "/boda-alma-mauricio.jpg",
    style: "Elegante Clásico",
    url: "https://boda-alma-mauricio.invitacionesdigitalesmty.com.mx/",
  },
]

export default function InvitacionesBodaPage() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola,%20me%20interesa%20una%20invitación%20digital%20para%20mi%20boda"

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50 via-white to-pink-50 -z-10" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl -z-10" />
        
        <div className="container mx-auto px-6 md:px-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-rose-100 text-rose-700 hover:bg-rose-100">
              💒 Invitaciones de Boda
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
              Invitaciones de Boda Digitales en{" "}
              <span className="text-rose-600">Monterrey</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Crea una invitación única que cuente tu historia de amor. Diseños románticos 
              con música, animaciones, mapa interactivo y confirmación de asistencia digital.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-rose-600 hover:bg-rose-700 text-white" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar Mi Invitación
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-rose-300 text-rose-700 hover:bg-rose-50" asChild>
                <Link href="#ejemplos">
                  Ver Ejemplos
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-sm text-gray-600">Bodas Celebradas</p>
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Todo lo que Incluye tu Invitación de Boda
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada detalle pensado para hacer tu invitación perfecta
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-6 border border-gray-200 rounded-xl hover:border-rose-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-rose-600 transition-colors">
                  <feature.icon className="w-6 h-6 text-rose-600 group-hover:text-white transition-colors" />
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
              Ejemplos de Invitaciones de Boda
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
                    alt={`Invitación de boda digital - ${example.title}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform">
                    <p className="font-semibold">{example.title}</p>
                    <p className="text-sm text-white/80">{example.style}</p>
                  </div>
                </div>
                <Badge className="absolute top-3 left-3 bg-rose-600 text-white">
                  Ver en vivo
                </Badge>
              </a>
            ))}
            
            {/* Placeholder for more examples */}
            <div className="aspect-[3/4] rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-6 text-center">
              <Sparkles className="w-12 h-12 text-gray-400 mb-4" />
              <p className="text-gray-600 font-medium mb-2">¿Tu boda aquí?</p>
              <p className="text-sm text-gray-500">Crea tu invitación personalizada</p>
              <Button className="mt-4 bg-rose-600 hover:bg-rose-700" size="sm" asChild>
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
              Parejas que Confiaron en Nosotros
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 bg-rose-50 rounded-xl">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-rose-600">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Lista para Crear tu Invitación de Boda?
          </h2>
          <p className="text-xl text-rose-100 mb-8 max-w-2xl mx-auto">
            Precios desde $1,399 MXN. Entrega en 24 horas. Satisfacción garantizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-rose-600 hover:bg-rose-50" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-rose-700" asChild>
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
              Preguntas Frecuentes sobre Invitaciones de Boda
            </h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo incluir información de la ceremonia religiosa y la recepción?
                </h3>
                <p className="text-gray-600">
                  Sí, tu invitación puede incluir múltiples ubicaciones con mapas interactivos para cada evento: ceremonia religiosa, civil, recepción, after party, etc.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Cómo funciona la confirmación de asistencia digital?
                </h3>
                <p className="text-gray-600">
                  Tus invitados pueden confirmar directamente desde la invitación. Recibes las confirmaciones en tu WhatsApp con nombre, número de acompañantes y cualquier restricción alimenticia.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Puedo agregar nuestra historia de amor?
                </h3>
                <p className="text-gray-600">
                  ¡Por supuesto! Podemos incluir una sección de "Nuestra Historia" con fotos y fechas importantes de su relación, desde cómo se conocieron hasta la propuesta.
                </p>
              </div>
              
              <div className="pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  ¿Qué pasa si necesito hacer cambios después de enviada?
                </h3>
                <p className="text-gray-600">
                  Tu invitación es un enlace web, por lo que cualquier cambio que hagamos se actualiza automáticamente. No necesitas volver a enviar nada a tus invitados.
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
              { "@type": "ListItem", position: 3, name: "Boda", item: "https://invitacionesdigitalesmty.com.mx/invitaciones/boda" },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
