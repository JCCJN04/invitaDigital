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
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Clientes satisfechos confían en nosotros para sus momentos especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a]/40 hover:shadow-md transition-all"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                "{testimonial.comment}"
              </p>

              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-sm text-[#1f2937]">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
