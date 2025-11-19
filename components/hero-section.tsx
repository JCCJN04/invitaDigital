import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Leaf, Smartphone } from "lucide-react"

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
    <section className="relative overflow-hidden pt-32 pb-24">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fafaf9] via-white to-[#fafaf9] -z-10"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#1e3a8a]/8 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <div className="relative z-10 animate-fade-in-up">
            {/* Minimal Badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="inline-block px-3 py-1.5 text-xs font-semibold text-[#1e3a8a] bg-[#dbeafe] rounded-full">✨ Oferta especial</span>
            </div>

            {/* Main Heading - Minimalista */}
            <h1 className="mt-4 text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight text-[#1f2937]">
              Invitaciones digitales<br />
              <span className="text-[#1e3a8a]">que enamoran</span>
            </h1>

            {/* Description - Limpia y concisa */}
            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl">
              Transforma tu evento en una experiencia digital inolvidable. Diseños personalizados con animaciones, música y confirmación instantánea. Entrega en 24 horas garantizada.
            </p>

            {/* Stats Row - Minimalista */}
            <div className="mt-8 flex gap-8 md:gap-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col">
                  <span className="text-2xl md:text-3xl font-bold text-[#1f2937]">{stat.value}</span>
                  <span className="text-sm text-gray-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Minimalista */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="group rounded-lg bg-[#1e3a8a] px-8 py-3 text-base font-semibold text-white shadow-md hover:shadow-lg transition-all hover:bg-[#1e40af]"
                asChild
              >
                <a href="#galeria" className="flex items-center justify-center gap-2">
                  Ver diseños
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-lg border border-gray-300 px-8 py-3 text-base font-semibold text-[#1f2937] hover:bg-gray-50 transition-all"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Solicitar diseño
                </a>
              </Button>
            </div>

            {/* Quick Highlights - Minimalista */}
            <div className="mt-12 flex flex-col gap-3">
              {quickHighlights.map((item, index) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-gray-700 text-sm"
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.1}s both`,
                  }}
                >
                  <item.icon className="h-4 w-4 text-[#1e3a8a] flex-shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
