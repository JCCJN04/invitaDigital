const features = [
  {
    number: "01",
    title: "RSVP Automático",
    description:
      "Tus invitados confirman su asistencia con un solo toque. Recibe notificaciones y gestiona tu lista desde el móvil.",
  },
  {
    number: "02",
    title: "Cuenta Regresiva",
    description:
      "Un cronómetro elegante marca cada segundo hasta el gran día. Crea anticipación desde el primer momento.",
  },
  {
    number: "03",
    title: "Mesa de Regalos",
    description:
      "Integra tus listas de cualquier tienda o añade datos bancarios de forma discreta y elegante.",
  },
  {
    number: "04",
    title: "Ubicación GPS",
    description:
      "Mapas interactivos con enlace directo a Google Maps y Waze. Nadie llega tarde al gran día.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-[#1c1917]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-[#d4a373]" />
            <span className="text-[11px] tracking-[0.3em] text-[#d4a373]/60 uppercase font-medium">
              Funcionalidades
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-lg">
            Todo lo que tu evento en Monterrey necesita
          </h2>
        </div>

        {/* Feature list */}
        <div className="divide-y divide-white/10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="py-10 grid grid-cols-[3.5rem_1fr] md:grid-cols-[5rem_1fr_1.2fr] gap-x-6 md:gap-x-10 gap-y-3 items-baseline group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
            >
              <span className="font-serif text-3xl md:text-4xl font-bold text-white/15 group-hover:text-[#d4a373]/40 transition-colors duration-300 leading-none">
                {feature.number}
              </span>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-snug">
                {feature.title}
              </h3>
              <p className="col-start-2 md:col-start-auto text-white/45 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
