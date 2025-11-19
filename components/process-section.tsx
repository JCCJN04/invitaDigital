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
    <section id="proceso" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">
            Proceso simple y rápido
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuatro pasos para tu invitación perfecta
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Step Number Circle */}
              <div className="w-10 h-10 rounded-full bg-[#1e3a8a] text-white flex items-center justify-center font-bold text-sm mb-4">
                {step.step}
              </div>

              {/* Card */}
              <div className="border border-gray-200 rounded-lg p-6 hover:border-[#1e3a8a]/40 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-lg bg-[#f0ecff] flex items-center justify-center mb-4">
                  <step.icon className="w-5 h-5 text-[#1e3a8a]" />
                </div>

                <h3 className="font-semibold text-[#1f2937] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>

              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 -right-3 w-6 h-0.5 bg-gray-200"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#f9f8ff] border border-gray-200 rounded-lg p-10 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#1f2937] mb-3">¿Listo para comenzar?</h3>
            <p className="text-gray-600 mb-6">
              Contacta con nosotros hoy mismo
            </p>
            <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
              <button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-all">
                <MessageSquare className="w-4 h-4" />
                Chatear por WhatsApp
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}