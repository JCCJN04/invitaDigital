import { Leaf, Zap, Palette, Share2, DollarSign, Clock } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sin desperdicio de papel. Cuida el medio ambiente con cada invitación digital.",
    color: "text-green-600",
  },
  {
    icon: Palette,
    title: "Diseño Artesanal",
    description: "Cada invitación es diseñada a mano especialmente para tu evento. Trabajo artesanal y único.",
    color: "text-purple-600",
  },
  {
    icon: Zap,
    title: "Entrega Rápida",
    description: "Recibe tu diseño personalizado en máximo 24 horas. Servicio profesional y eficiente.",
    color: "text-yellow-600",
  },
  {
    icon: Share2,
    title: "Fácil de Compartir",
    description: "WhatsApp, email, redes sociales. Llega a todos tus invitados al instante.",
    color: "text-blue-600",
  },
  {
    icon: DollarSign,
    title: "Súper Económico",
    description: "Hasta 70% más barato que invitaciones físicas. Calidad premium, precio justo.",
    color: "text-green-600",
  },
  {
    icon: Clock,
    title: "Disponible 24/7",
    description: "Crea y modifica tus invitaciones cuando quieras, donde quieras.",
    color: "text-indigo-600",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
            ¿Por qué elegir invitaciones digitales?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre todas las ventajas de modernizar tus celebraciones con tecnología de vanguardia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover-lift group">
              <div
                className={`w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
