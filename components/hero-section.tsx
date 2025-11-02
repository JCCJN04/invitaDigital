import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Leaf, Smartphone, Sparkles } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = "https://wa.me/8111230266?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20dise%C3%B1o."
  const stats = [
    { value: "120+", label: "Eventos celebrados" },
    { value: "24h", label: "Entrega promedio" },
    { value: "98%", label: "Clientes felices" },
  ]
  const quickHighlights = [
    { icon: Clock, text: "Entrega express en 24 horas" },
    { icon: Smartphone, text: "Experiencia interactiva en móvil" },
    { icon: Leaf, text: "100% digital y eco-friendly" },
  ]

  return (
    <section className="relative overflow-hidden pt-40 pb-32">
      {/* Enhanced background glows */}
  <div className="floating-glow purple -top-32 -left-24 w-[26rem] h-[26rem] animate-pulse"></div>
  <div className="floating-glow rose top-1/3 -right-16 w-[22rem] h-[22rem] animate-pulse" style={{ animationDelay: "1s" }}></div>
  <div className="floating-glow sky bottom-[-6rem] left-1/2 -translate-x-1/2 w-[28rem] h-[28rem] animate-pulse" style={{ animationDelay: "2s" }}></div>

      <div className="container mx-auto px-6 md:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          <div className="relative z-10 max-w-3xl animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/80 px-4 py-2 shadow-lg backdrop-blur mb-8 group hover:bg-white transition-all duration-300 hover:border-[#6258FF]">
              <Sparkles className="h-4 w-4 text-[#6258FF] group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-medium text-gray-700">🔥 Oferta especial: Diseño de prueba GRATIS + Descuento por lanzamiento</span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight text-[#111033] md:text-6xl lg:text-7xl font-serif">
              Invitaciones digitales
              <span className="ml-3 inline text-brand-gradient animate-pulse">que enamoran</span>
            </h1>

            {/* Description */}
            <p className="mt-8 text-lg text-gray-600 md:text-xl md:leading-relaxed">
              Transforma tu evento en una experiencia digital inolvidable. Invitaciones interactivas con animaciones, música y confirmación instantánea. <strong className="text-[#6258FF]">Ahorra hasta 70% vs invitaciones impresas</strong> y cuida el medio ambiente. Entrega en 24 horas garantizada.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="group rounded-full bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] px-8 py-4 text-lg font-semibold text-white shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-[#6258FF]/50"
                asChild
              >
                <a href="#galeria" className="flex items-center justify-center gap-2">
                  Ver galería de diseños
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-[#6258FF] px-8 py-4 text-lg font-semibold text-[#6258FF] shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#6258FF] hover:text-white"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar diseño
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="group rounded-2xl border border-white/60 bg-white/80 p-4 text-center shadow-md backdrop-blur hover:shadow-lg hover:border-[#6258FF] transition-all duration-300 transform hover:scale-105"
                  style={{
                    animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="text-3xl font-semibold text-[#6258FF] md:text-4xl group-hover:scale-110 transition-transform">{stat.value}</div>
                  <div className="mt-1 text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Quick Highlights */}
            <ul className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {quickHighlights.map((item, index) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 rounded-full border border-transparent bg-white/75 px-4 py-2 text-sm text-gray-700 shadow-sm backdrop-blur transition hover:border-[#6258FF]/60 hover:bg-white group hover:shadow-md transform hover:scale-105"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s both`,
                  }}
                >
                  <item.icon className="h-4 w-4 text-[#6258FF] group-hover:scale-125 transition-transform" />
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Mobile Preview */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {/* Floating decoration */}
            <div className="absolute -top-10 -left-8 hidden h-24 w-24 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 shadow-2xl backdrop-blur lg:block group hover:scale-110 transition-transform"></div>
            
            {/* Main mobile frame */}
            <div className="gradient-border relative mx-auto max-w-sm overflow-hidden shadow-2xl backdrop-blur group hover:shadow-3xl transition-all duration-500">
              {/* Header bar */}
              <div className="h-14 bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] group-hover:scale-x-105 transition-transform duration-500 origin-center" />
              
              {/* Content */}
              <div className="relative bg-white/95 p-6 group-hover:bg-white transition-colors">
                <div className="mx-auto w-[240px] rounded-[2.5rem] border border-gray-200 bg-white p-4 shadow-xl group-hover:shadow-2xl transition-all group-hover:scale-105">
                  <div className="mb-3 flex items-center justify-between text-xs text-gray-400 group-hover:text-[#6258FF] transition-colors">
                    <span className="font-semibold">Emma &amp; Pau</span>
                    <span className="font-semibold">XV Años</span>
                  </div>
                  <div className="overflow-hidden rounded-[1.8rem] border border-gray-100 shadow-sm">
                    <img
                      src="/prueba.jpg"
                      alt="Previsualización de invitación digital"
                      className="h-[420px] w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                {/* Live design indicator */}
                <div className="absolute -bottom-10 right-4 hidden w-40 rounded-2xl border border-white/40 bg-white/90 p-4 text-sm font-medium text-gray-700 shadow-xl backdrop-blur lg:block group-hover:scale-110 transition-transform duration-300">
                  <div className="flex items-center gap-2 text-[#6258FF]">
                    <Sparkles className="h-4 w-4 animate-spin" />
                    Diseño en vivo
                  </div>
                  <p className="mt-2 text-xs text-gray-500">Actualizaciones ilimitadas hasta que quede perfecto.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 hidden h-12 w-8 -translate-x-1/2 items-center justify-center rounded-full border border-gray-300/80 p-2 md:flex animate-bounce">
        <div className="h-4 w-1 rounded-full bg-gray-400" />
      </div>
    </section>
  )
}