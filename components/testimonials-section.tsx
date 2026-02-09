import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    event: "Boda",
    rating: 5,
    comment:
      "¡Increíble servicio! La invitación quedó exactamente como la imaginé. Todos mis invitados quedaron encantados con el diseño interactivo. La mejor inversión para nuestra boda en Monterrey.",
    image: "/persona1.jpeg?height=80&width=80",
    location: "San Pedro, NL",
    date: "2024-12-15",
  },
  {
    name: "Ana Rodríguez",
    event: "XV Años",
    rating: 5,
    comment:
      "El proceso fue súper fácil y rápido. En menos de 24 horas tenía mi invitación perfecta con animaciones hermosas. ¡Totalmente recomendado! Ahorré mucho comparado con invitaciones impresas.",
    image: "/persona2.jpeg?height=80&width=80",
    location: "Monterrey, NL",
    date: "2024-11-28",
  },
  {
    name: "Carlos Mendoza",
    event: "Baby Shower",
    rating: 5,
    comment:
      "Excelente atención al cliente y diseños hermosos. La invitación digital fue un éxito total en nuestro baby shower. Pudimos compartirla por WhatsApp al instante.",
    image: "/persona3.jpeg?height=80&width=80",
    location: "Guadalupe, NL",
    date: "2024-11-10",
  },
  {
    name: "Sandra Castillo",
    event: "XV Años",
    rating: 5,
    comment:
      "Calidad premium a precio increíble. El diseño superó mis expectativas y el proceso fue muy profesional. Las revisiones ilimitadas me encantaron.",
    image: "/persona4.jpeg?height=80&width=80",
    location: "Apodaca, NL",
    date: "2024-10-22",
  },
  {
    name: "Roberto Salinas",
    event: "Boda",
    rating: 5,
    comment:
      "Diseño espectacular con QR personalizado. Todos nuestros invitados confirmaron asistencia digital. Ahorramos tiempo y dinero, además de cuidar el medio ambiente.",
    image: "/placeholder.svg?height=80&width=80",
    location: "Monterrey, NL",
    date: "2024-10-05",
  },
  {
    name: "Lucia Fernández",
    event: "Cumpleaños",
    rating: 5,
    comment:
      "¡Me encantó! La invitación para el cumpleaños de mi hijo quedó hermosa. El equipo fue super atento y las animaciones le dieron un toque especial.",
    image: "/placeholder.svg?height=80&width=80",
    location: "Santa Catarina, NL",
    date: "2024-09-18",
  },
]

// Calcular rating promedio para AggregateRating
const averageRating = testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length

export function TestimonialsSection() {
  // Schema de Review para cada testimonio
  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Invitaciones Digitales MTY",
    image: "https://invitacionesdigitalesmty.com.mx/logo.png",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      addressCountry: "MX"
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: averageRating.toFixed(1),
      reviewCount: testimonials.length,
      bestRating: 5,
      worstRating: 1
    },
    review: testimonials.map((t) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: t.name
      },
      datePublished: t.date,
      reviewBody: t.comment,
      reviewRating: {
        "@type": "Rating",
        ratingValue: t.rating,
        bestRating: 5,
        worstRating: 1
      }
    }))
  }

  return (
    <section id="testimonios" className="py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-6">
            Historias de Amor
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Lo que dicen nuestras parejas y clientes en Monterrey
          </p>
          {/* Rating summary */}
          <div className="flex items-center justify-center gap-2 mt-4 bg-white inline-flex px-4 py-2 rounded-full shadow-sm border border-[#f3eee8]">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4a373] text-[#d4a373]" />
              ))}
            </div>
            <span className="text-[#1c1917] font-semibold text-sm">{averageRating.toFixed(1)}/5 Excellence</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-[#f3eee8] rounded-2xl p-8 hover:border-[#d4a373]/30 hover:shadow-xl transition-all duration-300 relative group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#f3eee8] group-hover:text-[#d4a373]/20 transition-colors" />

              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#d4a373] text-[#d4a373]" />
                ))}
              </div>

              <p className="text-[#4a4a4a] text-base leading-relaxed mb-8 italic">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center gap-4 border-t border-[#f3eee8] pt-6">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
                  <img
                    src={testimonial.image}
                    alt={`Opinión sobre Invitaciones Digitales Monterrey - ${testimonial.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-serif font-bold text-base text-[#1c1917]">{testimonial.name}</p>
                  <p className="text-xs text-[#d4a373] font-medium uppercase tracking-wide">{testimonial.event} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Review Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </section>
  )
}
