import { Leaf, Zap, Palette, Share2, DollarSign, Clock } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Un gesto de amor por el planeta. Elegancia que no deja huella: cero papel, 100% estilo.",
    color: "text-[#0f766e]",
  },
  {
    icon: Palette,
    title: "Diseño Artesanal",
    description: "Refleja tu esencia en cada detalle. No usamos plantillas genéricas, creamos algo tan único como su historia.",
    color: "text-[#1e3a8a]",
  },
  {
    icon: Zap,
    title: "Entrega Instantánea",
    description: "Listas para compartir en un instante. Sin esperas ni imprentas, tu invitación lista cuando la emoción está a flor de piel.",
    color: "text-[#f97316]",
  },
  {
    icon: Share2,
    title: "Comparte la Magia",
    description: "Llega al corazón de tus invitados al instante por WhatsApp, Email o Redes Sociales.",
    color: "text-[#06b6d4]",
  },
  {
    icon: DollarSign,
    title: "Súper Económico",
    description: "Hasta 85% más barato que invitaciones físicas. Calidad premium, precio justo.",
    color: "text-[#10b981]",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Mucho mas facil y rapido que las invitaciones fisica.",
    color: "text-[#f97316]",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-4">
            ¿Por qué elegir invitaciones digitales?
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            La forma moderna, elegante y emotiva de invitar a tus seres queridos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-[#fdfcfb] border border-[#f3eee8] hover:shadow-lg hover:border-[#d4a373]/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-[#f3eee8] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#d4a373]/20 transition-colors">
                <benefit.icon className="w-6 h-6 text-[#1c1917] group-hover:text-[#d4a373] transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-[#1c1917] mb-3">{benefit.title}</h3>
              <p className="text-sm text-[#4a4a4a]/80 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
