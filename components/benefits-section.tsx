import { UserCheck, Timer, Gift, MapPin } from "lucide-react"

const features = [
  {
    number: "01",
    icon: UserCheck,
    title: "Olvídate de perseguir confirmaciones",
    description:
      "Tus invitados confirman con un toque. Ves en tiempo real quién va — sin llamadas, sin estrés.",
  },
  {
    number: "02",
    icon: Timer,
    title: "Genera emoción antes del evento",
    description:
      "Un contador elegante que enciende la expectativa. Tus invitados lo verán cada vez que abran la invitación.",
  },
  {
    number: "03",
    icon: Gift,
    title: "Mesa de regalos sin incomodidad",
    description:
      "Comparte tus tiendas favoritas o datos bancarios de forma elegante y discreta. Nada de mencionar regalos en persona.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Que nadie llegue perdido",
    description:
      "Mapa interactivo con botón directo a Google Maps y Waze. Sin excusas para llegar tarde.",
  },
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 bg-[#1c1917]">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Header */}
        <div className="mb-14 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#d4a373]" />
            <span className="text-[11px] tracking-[0.3em] text-[#d4a373]/60 uppercase font-medium">
              Funcionalidades
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.05] max-w-xl">
            Todo lo que tu evento necesita
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white/[0.04] border border-white/[0.08] p-7 md:p-9 hover:bg-white/[0.07] hover:border-[#d4a373]/30 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                {/* Background number */}
                <span className="absolute bottom-4 right-6 font-serif text-[6rem] font-bold text-white/[0.04] leading-none select-none group-hover:text-[#d4a373]/[0.07] transition-colors duration-300 pointer-events-none">
                  {feature.number}
                </span>

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-[#d4a373]/10 border border-[#d4a373]/20 flex items-center justify-center mb-6 group-hover:bg-[#d4a373]/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-[#d4a373]" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-lg md:text-xl font-bold text-white leading-snug mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 leading-relaxed text-sm md:text-[0.9375rem] relative z-10">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA band */}
        <div className="mt-10 p-6 md:p-8 rounded-2xl bg-[#d4a373]/[0.06] border border-[#d4a373]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div>
            <p className="text-white font-semibold text-sm mb-0.5">
              Todo incluido desde el plan Básico.
            </p>
            <p className="text-white/45 text-sm">
              Sin costos extra ni sorpresas.
            </p>
          </div>
          <a
            href="#precios"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-[#d4a373] bg-[#d4a373]/10 border border-[#d4a373]/30 px-6 py-3 rounded-full hover:bg-[#d4a373]/20 hover:border-[#d4a373]/60 transition-all duration-200"
          >
            Ver precios →
          </a>
        </div>
      </div>
    </section>
  )
}
