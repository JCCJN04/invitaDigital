import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Sparkles, MessageCircle, MapPin, Clock, Award, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Nosotros | Invitaciones Digitales MTY | Quiénes Somos",
  description: "👋 Conoce al equipo detrás de Invitaciones Digitales Monterrey. Diseñadores especializados en crear invitaciones únicas para bodas, XV años y más. ¡Descubre nuestra historia!",
  keywords: [
    "invitaciones digitales monterrey equipo",
    "quienes somos invitaciones digitales",
    "diseñadores invitaciones monterrey",
    "agencia invitaciones digitales",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/nosotros",
  },
}

const stats = [
  { value: "500+", label: "Invitaciones Creadas", icon: Sparkles },
  { value: "100%", label: "Clientes Satisfechos", icon: Heart },
  { value: "48hrs", label: "Tiempo Promedio de Entrega", icon: Clock },
  { value: "3+", label: "Años de Experiencia", icon: Award },
]

const values = [
  {
    title: "Creatividad",
    description: "Cada diseño es único. No usamos plantillas genéricas, creamos desde cero para reflejar tu estilo.",
    icon: Sparkles,
  },
  {
    title: "Compromiso",
    description: "Tu evento es importante para ti, y por eso es importante para nosotros. Entregamos a tiempo, siempre.",
    icon: Heart,
  },
  {
    title: "Cercanía",
    description: "Somos un equipo pequeño que te trata como amigo, no como número. Comunicación directa y personalizada.",
    icon: Users,
  },
  {
    title: "Innovación",
    description: "Usamos las últimas tecnologías web para que tu invitación sea rápida, interactiva y memorable.",
    icon: Zap,
  },
]

const timeline = [
  {
    year: "2021",
    title: "El Inicio",
    description: "Comenzamos creando invitaciones para amigos y familiares. La respuesta fue tan positiva que decidimos convertirlo en nuestro trabajo.",
  },
  {
    year: "2022",
    title: "Primeras 100 Invitaciones",
    description: "Alcanzamos nuestras primeras 100 invitaciones entregadas. Aprendimos que cada cliente tiene una historia única que contar.",
  },
  {
    year: "2023",
    title: "Expansión Regional",
    description: "Empezamos a trabajar con clientes de todo México, no solo Monterrey. La tecnología digital no tiene fronteras.",
  },
  {
    year: "2024",
    title: "500+ Invitaciones",
    description: "Superamos las 500 invitaciones creadas y lanzamos nuevos servicios premium con RSVP y mesas de regalos.",
  },
  {
    year: "2025",
    title: "El Futuro",
    description: "Continuamos innovando con nuevas tecnologías, animaciones más impresionantes y experiencias más personalizadas.",
  },
]

export default function NosotrosPage() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola,%20me%20gustaría%20conocer%20más%20sobre%20sus%20servicios"

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <Badge className="mb-6 bg-[#d4a373]/10 text-[#d4a373]">
            👋 Conócenos
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Creamos Invitaciones con <span className="text-[#d4a373]">Pasión</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Somos un equipo creativo de Monterrey, especializado en transformar
            tus eventos más importantes en experiencias digitales memorables.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div key={index} className="text-center">
                  <Icon className="w-8 h-8 text-[#d4a373] mx-auto mb-3" />
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Todo comenzó con una invitación de boda. Un amigo nos pidió ayuda
                  para crear algo diferente, algo que no fuera un simple PDF enviado
                  por WhatsApp. Queríamos algo interactivo, hermoso y memorable.
                </p>
                <p>
                  Esa primera invitación fue tan bien recibida que los invitados empezaron
                  a preguntarnos quién la había hecho. Y así, casi sin darnos cuenta,
                  nació <strong>Invitaciones Digitales MTY</strong>.
                </p>
                <p>
                  Hoy, varios años después, hemos creado cientos de invitaciones para
                  bodas, XV años, baby showers, cumpleaños y todo tipo de celebraciones.
                  Cada una es especial porque cada historia es única.
                </p>
              </div>

              <div className="flex items-center gap-4 mt-8">
                <div className="flex items-center text-gray-500">
                  <MapPin className="w-5 h-5 mr-2 text-[#d4a373]" />
                  <span>Monterrey, Nuevo León, México</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/prueba.jpg"
                  alt="Equipo Invitaciones Digitales MTY Monterrey"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#1c1917] text-white p-4 rounded-xl shadow-lg">
                <p className="text-2xl font-bold">Desde 2021</p>
                <p className="text-[#d4a373] text-sm">Haciendo eventos memorables</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lo que nos guía en cada proyecto que emprendemos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className="w-14 h-14 bg-[#d4a373]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[#d4a373]" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-12 text-center">
            Nuestro Camino
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gray-200" />

              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-start mb-8 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#1c1917] rounded-full border-4 border-white shadow z-10" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                    }`}>
                    <Badge className="mb-2 bg-[#1c1917] text-white">{item.year}</Badge>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
              ¿Por Qué Elegirnos?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-semibold text-gray-900 mb-2">Diseños 100% Originales</h3>
              <p className="text-gray-600 text-sm">
                No usamos plantillas. Cada invitación se diseña desde cero para ti.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-semibold text-gray-900 mb-2">Entrega Rápida</h3>
              <p className="text-gray-600 text-sm">
                Entregamos en 24-48 horas. Tu evento no puede esperar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="font-semibold text-gray-900 mb-2">Soporte Humano</h3>
              <p className="text-gray-600 text-sm">
                Atención personalizada por WhatsApp. Sin bots, personas reales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1c1917]">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Listo Para Crear Tu Invitación?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Platícanos sobre tu evento. Nos encantaría ser parte de tu celebración.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1c1917] hover:bg-gray-100" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contáctanos por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/galeria">
                Ver Nuestro Trabajo
              </Link>
            </Button>
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
              { "@type": "ListItem", position: 2, name: "Nosotros", item: "https://invitacionesdigitalesmty.com.mx/nosotros" },
            ],
          }),
        }}
      />

      {/* AboutPage Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "Sobre Nosotros - Invitaciones Digitales MTY",
            description: "Conoce al equipo detrás de Invitaciones Digitales Monterrey",
            mainEntity: {
              "@type": "Organization",
              name: "Invitaciones Digitales MTY",
              foundingDate: "2021",
              foundingLocation: "Monterrey, Nuevo León, México",
              description: "Empresa especializada en invitaciones digitales para eventos",
              areaServed: "México",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+52-811-123-0266",
                contactType: "customer service",
                availableLanguage: "Spanish"
              }
            }
          }),
        }}
      />

      <Footer />
    </main>
  )
}
