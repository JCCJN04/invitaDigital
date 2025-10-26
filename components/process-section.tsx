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
    <section id="proceso" className="py-24 bg-gradient-to-b from-white via-[#f5f3ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#6258FF]/12 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">Proceso Súper Simple</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En solo 4 pasos sencillos tendrás una invitación diseñada artesanalmente para tu evento especial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#6258FF]/40 to-transparent z-0"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-gradient-to-br from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] text-white rounded-full flex items-center justify-center font-bold text-xl z-20 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.step}
              </div>

              {/* Card */}
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl h-full transition-all duration-500 border border-[#ece9ff] hover:border-[#6258FF]/40 pt-14 group">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6258FF]/6 via-transparent to-[#ff8dc7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6258FF]/15 to-[#ff8dc7]/15 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-[#6258FF]/30 group-hover:to-[#ff8dc7]/30 group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-8 h-8 text-[#6258FF]" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#1f1c4f] mb-4 text-center group-hover:text-[#6258FF] transition-colors">{step.title}</h3>

                  <p className="text-gray-600 leading-relaxed text-center text-sm">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="bg-gradient-to-br from-white to-[#f8f7ff] rounded-2xl p-10 shadow-lg border border-[#ece9ff] max-w-2xl mx-auto">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">¿Listo para comenzar?</h3>
            <p className="text-gray-600 mb-8 text-lg">
              Contáctanos ahora y recibe tu diseño personalizado creado especialmente para ti en menos de 24 horas
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer" className="flex-1 sm:flex-none">
                <button className="bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:shadow-lg hover:shadow-[#25D366]/40 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 w-full transition-all duration-300 transform hover:-translate-y-0.5">
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