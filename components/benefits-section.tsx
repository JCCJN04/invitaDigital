import { Leaf, Zap, Palette, Share2, DollarSign, Clock } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sin desperdicio de papel. Cuida el medio ambiente con cada invitación digital.",
  color: "text-[#0f766e]",
  },
  {
    icon: Palette,
    title: "Diseño Artesanal",
    description: "Cada invitación es diseñada a mano especialmente para tu evento.",
  color: "text-[#1e3a8a]",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Recibe tu invitación digital rapido y facil. Servicio profesional y eficiente.",
  color: "text-[#f97316]",
  },
  {
    icon: Share2,
    title: "Fácil de Compartir",
    description: "WhatsApp, email, redes sociales. Llega a todos tus invitados al instante.",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">
            ¿Por qué elegir invitaciones digitales?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Moderniza tu evento con tecnología confiable y diseño extraordinario
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-xl hover:border-[#1e3a8a]/40 hover:shadow-md transition-all duration-300 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="mb-4 w-12 h-12 rounded-lg bg-[#dbeafe] flex items-center justify-center group-hover:bg-[#1e3a8a] transition-colors duration-300">
                <benefit.icon className={`w-6 h-6 ${benefit.color} group-hover:text-white transition-colors duration-300`} />
              </div>
              <h3 className="text-lg font-semibold text-[#1f2937] mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
