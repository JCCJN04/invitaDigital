import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "María González",
    event: "Boda",
    rating: 5,
    comment:
      "Increíble servicio! La invitación quedó exactamente como la imaginé. Todos mis invitados quedaron encantados con el diseño.",
    image: "/persona2.jpeg?height=80&width=80",
  },
  {
    name: "Ana Rodríguez",
    event: "XV Años",
    rating: 5,
    comment:
      "El proceso fue súper fácil y rápido. En menos de un día tenía mi invitación perfecta. ¡Totalmente recomendado!",
    image: "/persona1.jpeg?height=80&width=80",
  },
  {
    name: "Carlos Mendoza",
    event: "Baby Shower",
    rating: 5,
    comment:
      "Excelente atención al cliente y diseños hermosos. La invitación digital fue un éxito total en nuestro baby shower.",
    image: "/persona3.jpeg?height=80&width=80",
  },
  {
    name: "Sofía Martín",
    event: "Cumpleaños",
    rating: 5,
    comment: "Calidad premium a precio increíble. El diseño superó mis expectativas y el proceso fue muy profesional.",
    image: "/persona4.jpeg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clientes satisfechos han confiado en nosotros para sus momentos más especiales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 hover-lift relative">
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-[#D4AF37] mb-4" />

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.comment}"</p>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F8BBD9]/10 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">5+</div>
                <div className="text-gray-600">Invitaciones Entregadas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#D4AF37] mb-2">100%</div>
                <div className="text-gray-600">Satisfacción del Cliente</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
