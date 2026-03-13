import { CalendarCheck, Timer, Gift, MapPin } from "lucide-react"

const features = [
  {
    icon: CalendarCheck,
    title: "RSVP automatizado",
    description: "Tus invitados confirman su asistencia con un solo toque. Recibe notificaciones instantáneas y gestiona tu lista de invitados desde un panel centralizado.",
  },
  {
    icon: Timer,
    title: "Cuenta regresiva",
    description: "Crea anticipación y emoción con un cronómetro elegante que marca cada segundo hasta el gran momento.",
    hasTimers: true
  },
  {
    icon: Gift,
    title: "Mesa de regalos",
    description: "Integra tus listas de deseos de cualquier tienda o añade datos bancarios de forma elegante.",
  },
  {
    icon: MapPin,
    title: "Ubicación GPS",
    description: "Mapas interactivos para que nadie se pierda. Enlace directo a Google Maps o Waze.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mb-4">
            Todo lo que necesitas para tu evento
          </h2>
          <p className="text-gray-500 font-light text-lg md:text-xl max-w-2xl mx-auto">
            Nuestra tecnología se encarga de los detalles para que tú te encargues de disfrutar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl bg-[#e0f8eb] flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-[#00d65b]" strokeWidth={2} />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed font-light mb-6">
                {feature.description}
              </p>

              {feature.hasTimers && (
                <div className="flex items-center gap-3 mt-auto">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e0f8eb] text-[#00d65b] font-bold text-sm">12</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e0f8eb] text-[#00d65b] font-bold text-sm">05</span>
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#e0f8eb] text-[#00d65b] font-bold text-sm">48</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
