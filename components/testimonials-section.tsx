import { Star } from "lucide-react"

const featured = {
  name: "María González",
  event: "Boda · San Pedro, NL",
  comment:
    "La invitación quedó exactamente como la imaginé. Todos mis invitados quedaron encantados con el diseño interactivo. La mejor inversión para nuestra boda.",
  image: "/persona1.jpeg",
}

const rest = [
  {
    name: "Ana Rodríguez",
    event: "XV Años · Monterrey",
    comment: "En menos de 24 horas tenía mi invitación perfecta con animaciones hermosas. Totalmente recomendado.",
    image: "/persona2.jpeg",
  },
  {
    name: "Sandra Castillo",
    event: "XV Años · Apodaca",
    comment: "Calidad premium. El diseño superó mis expectativas y el proceso fue muy profesional.",
    image: "/persona4.jpeg",
  },
  {
    name: "Carlos Mendoza",
    event: "Baby Shower · Guadalupe",
    comment: "Excelente atención y diseños hermosos. La compartimos por WhatsApp al instante.",
    image: "/persona3.jpeg",
  },
  {
    name: "Roberto Salinas",
    event: "Boda · Monterrey",
    comment: "Diseño espectacular con QR personalizado. Todos confirmaron asistencia digital.",
    image: "",
  },
  {
    name: "Lucía Fernández",
    event: "Cumpleaños · Santa Catarina",
    comment: "Las animaciones le dieron un toque especial. El equipo fue super atento.",
    image: "",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-16 animate-fade-in-up">
          <div className="h-px w-10 bg-[#d4a373]" />
          <span className="text-[11px] tracking-[0.3em] text-[#d4a373] uppercase font-medium">
            Opiniones
          </span>
        </div>

        {/* Featured testimonial */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 animate-fade-in-up" style={{ animationDelay: "80ms", opacity: 0, animationFillMode: "forwards" }}>
          <div>
            <div className="flex gap-1 mb-8">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#d4a373] text-[#d4a373]" />
              ))}
            </div>
            <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-[#1c1917] leading-[1.2] mb-10">
              &ldquo;{featured.comment}&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#f3eee8] flex-shrink-0">
                <img
                  src={featured.image}
                  alt={featured.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-[#1c1917]">{featured.name}</p>
                <p className="text-xs text-[#d4a373] uppercase tracking-wider font-medium mt-0.5">{featured.event}</p>
              </div>
            </div>
          </div>

          {/* Rating card */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="text-center p-12 border border-[#f3eee8] bg-white rounded-2xl shadow-sm">
              <p className="font-serif text-7xl font-bold text-[#1c1917] leading-none">5.0</p>
              <div className="flex justify-center gap-1 my-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#d4a373] text-[#d4a373]" />
                ))}
              </div>
              <p className="text-sm text-[#4a4a4a]">Calificación promedio</p>
              <p className="text-xs text-[#d4a373] font-semibold tracking-wider uppercase mt-1">+150 eventos</p>
            </div>
          </div>
        </div>

        {/* Compact strip of remaining testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-[#f3eee8] pt-12">
          {rest.map((t, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${160 + index * 80}ms`, opacity: 0, animationFillMode: "forwards" }}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#d4a373] text-[#d4a373]" />
                ))}
              </div>
              <p className="text-[#4a4a4a] text-sm leading-relaxed mb-4 italic">&ldquo;{t.comment}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-[#f3eee8] flex-shrink-0 bg-[#f3eee8] flex items-center justify-center">
                  {t.image ? (
                    <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-[10px] font-bold text-[#d4a373]">
                      {t.name.split(" ").map((n: string) => n[0]).join("").slice(0, 2)}
                    </span>
                  )}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1c1917]">{t.name}</p>
                  <p className="text-[10px] text-[#d4a373] uppercase tracking-wide font-medium">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
