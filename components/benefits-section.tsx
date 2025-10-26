import { Leaf, Zap, Palette, Share2, DollarSign, Clock } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sin desperdicio de papel. Cuida el medio ambiente con cada invitación digital.",
  color: "text-[#2dd4bf]",
  },
  {
    icon: Palette,
    title: "Diseño Artesanal",
    description: "Cada invitación es diseñada a mano especialmente para tu evento.",
  color: "text-[#6258FF]",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Recibe tu invitación digital rapido y facil. Servicio profesional y eficiente.",
  color: "text-[#f59e0b]",
  },
  {
    icon: Share2,
    title: "Fácil de Compartir",
    description: "WhatsApp, email, redes sociales. Llega a todos tus invitados al instante.",
  color: "text-[#38bdf8]",
  },
  {
    icon: DollarSign,
    title: "Súper Económico",
    description: "Hasta 85% más barato que invitaciones físicas. Calidad premium, precio justo.",
  color: "text-[#22c55e]",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Mucho mas facil y rapido que las invitaciones fisica.",
  color: "text-[#ff8dc7]",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f6f4ff] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">
            ¿Por qué elegir invitaciones digitales?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre todas las ventajas de modernizar tus celebraciones con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-[#ece9ff] hover:border-[#6258FF]/40"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6258FF]/6 via-transparent to-[#ff8dc7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br from-white to-[#f6f4ff] flex items-center justify-center mb-6 group-hover:from-[#6258FF]/12 group-hover:to-[#ff8dc7]/12 group-hover:scale-110 transition-all duration-500 shadow-md group-hover:shadow-lg`}
                >
                  <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-[#1f1c4f] mb-3 group-hover:text-[#6258FF] transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
