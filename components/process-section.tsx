import { MessageSquare, Palette, Download, Share2 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Cuéntanos tu Visión",
    description: "Comparte los detalles de tu evento: fecha, estilo, colores favoritos y cualquier idea especial.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Creamos tu Diseño",
    description: "Diseño artesanalmente tu invitación única, cuidando cada detalle para reflejar tu estilo personal.",
    step: "02",
  },
  {
    icon: Download,
    title: "Recibe tu Invitación",
    description: "En máximo 24 horas recibes tu invitación digital en alta calidad, lista para compartir.",
    step: "03",
  },
  {
    icon: Share2,
    title: "Comparte y Celebra",
    description: "Envía por WhatsApp, email o redes sociales. ¡Tus invitados quedarán encantados!",
    step: "04",
  },
]

export function ProcessSection() {
  const whatsappQuoteUrl = "https://wa.me/8111230266?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20dise%C3%B1o%20de%20invitaci%C3%B3n%20digital."
  
  return (
    <section id="proceso" className="py-20 bg-gradient-to-br from-[#F8BBD9]/20 to-[#D4AF37]/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Proceso Súper Simple</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 4 pasos sencillos tendrás una invitación diseñada artesanalmente para tu evento especial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#D4AF37] text-white rounded-full flex items-center justify-center font-bold text-lg z-10">
                {step.step}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift h-full">
                <div className="w-16 h-16 bg-gradient-to-br from-[#D4AF37] to-[#F8BBD9] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>

                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#D4AF37]/30 z-0"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">¿Listo para comenzar?</h3>
            <p className="text-gray-600 mb-6">
              Contáctanos ahora y recibe tu diseño personalizado creado especialmente para ti en menos de 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Chatear por WhatsApp
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}