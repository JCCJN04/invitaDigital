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
  },
  {
    name: "Ana Rodríguez",
    event: "XV Años",
    rating: 5,
    comment:
      "El proceso fue súper fácil y rápido. En menos de 24 horas tenía mi invitación perfecta con animaciones hermosas. ¡Totalmente recomendado! Ahorré mucho comparado con invitaciones impresas.",
    image: "/persona2.jpeg?height=80&width=80",
    location: "Monterrey, NL",
  },
  {
    name: "Carlos Mendoza",
    event: "Baby Shower",
    rating: 5,
    comment:
      "Excelente atención al cliente y diseños hermosos. La invitación digital fue un éxito total en nuestro baby shower. Pudimos compartirla por WhatsApp al instante.",
    image: "/persona3.jpeg?height=80&width=80",
    location: "Guadalupe, NL",
  },
  {
    name: "Sandra Castillo",
    event: "XV Años",
    rating: 5,
    comment:
      "Calidad premium a precio increíble. El diseño superó mis expectativas y el proceso fue muy profesional. Las revisiones ilimitadas me encantaron.",
    image: "/persona4.jpeg?height=80&width=80",
    location: "Apodaca, NL",
  },
  {
    name: "Roberto Salinas",
    event: "Boda",
    rating: 5,
    comment:
      "Diseño espectacular con QR personalizado. Todos nuestros invitados confirmaron asistencia digital. Ahorramos tiempo y dinero, además de cuidar el medio ambiente.",
    image: "/placeholder.svg?height=80&width=80",
    location: "Monterrey, NL",
  },
  {
    name: "Lucia Fernández",
    event: "Cumpleaños",
    rating: 5,
    comment:
      "¡Me encantó! La invitación para el cumpleaños de mi hijo quedó hermosa. El equipo fue super atento y las animaciones le dieron un toque especial.",
    image: "/placeholder.svg?height=80&width=80",
    location: "Santa Catarina, NL",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-white via-[#f5f3ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#6258FF]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Clientes satisfechos han confiado en nosotros para sus momentos más especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 border border-[#ece9ff] hover:border-[#6258FF]/40 overflow-hidden"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6258FF]/6 via-transparent to-[#ff8dc7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                {/* Quote Icon */}
                <Quote className="w-8 h-8 text-[#6258FF] mb-4 group-hover:scale-110 transition-transform" />

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-[#FFB4E0] fill-current group-hover:scale-110 transition-transform"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-gray-700 mb-8 leading-relaxed text-sm group-hover:text-gray-900 transition-colors">
                  "{testimonial.comment}"
                </p>

                {/* Author */}
                <div className="flex items-center pt-6 border-t border-[#ece9ff]">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <h4 className="font-semibold text-[#1f1c4f] group-hover:text-[#6258FF] transition-colors">{testimonial.name}</h4>
                    <p className="text-xs text-gray-500">{testimonial.event}</p>
                    {testimonial.location && <p className="text-xs text-gray-400">📍 {testimonial.location}</p>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="bg-gradient-to-r from-white to-[#f8f7ff] border border-[#ece9ff] rounded-2xl p-12 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-center group">
                <div className="text-5xl font-bold text-brand-gradient mb-3 group-hover:scale-110 transition-transform">
                  120+
                </div>
                <div className="text-gray-600 font-medium group-hover:text-[#6258FF] transition-colors">Eventos Exitosos</div>
              </div>
              <div className="text-center group">
                <div className="text-5xl font-bold text-brand-gradient mb-3 group-hover:scale-110 transition-transform">
                  98%
                </div>
                <div className="text-gray-600 font-medium group-hover:text-[#6258FF] transition-colors">Satisfacción del Cliente</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
