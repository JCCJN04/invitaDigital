import { MessageSquare, Palette, Download, Share2 } from "lucide-react"

const steps = [
  {
    icon: MessageSquare,
    title: "Cuéntanos tu Sueño",
    description: "Comparte los detalles de tu gran día: estilo, colores y esa chispa que los hace únicos.",
    step: "01",
  },
  {
    icon: Palette,
    title: "Personalizamos cada Detalle",
    description: "Diseñamos artesanalmente tu invitación, cuidando cada pixel para reflejar su personalidad.",
    step: "02",
  },
  {
    icon: Download,
    title: "Recibe la Magia",
    description: "En 24 horas tendrás en tus manos una experiencia digital lista para emocionar.",
    step: "03",
  },
  {
    icon: Share2,
    title: "Comparte y Celebra",
    description: "Envía con un clic y prepárate para recibir los mensajes de emoción de tus invitados.",
    step: "04",
  },
]

export function ProcessSection() {
  const whatsappQuoteUrl = "https://wa.me/8111230266?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20un%20dise%C3%B1o%20de%20invitaci%C3%B3n%20digital."

  return (
    <section id="proceso" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4a373]/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-6">
            Proceso de Diseño
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Creamos tu invitación perfecta en 4 sencillos pasos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Step Number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#1c1917] text-[#d4a373] flex items-center justify-center font-serif font-bold text-lg shadow-lg z-10 border-4 border-white transition-transform group-hover:scale-110">
                {step.step}
              </div>

              {/* Card */}
              <div className="pt-10 pb-8 px-6 bg-[#fdfcfb] border border-[#f3eee8] rounded-2xl h-full hover:border-[#d4a373] hover:shadow-xl transition-all duration-300 text-center">
                <div className="w-14 h-14 rounded-full bg-[#f3eee8] flex items-center justify-center mb-6 mx-auto group-hover:bg-[#d4a373]/10 transition-colors">
                  <step.icon className="w-6 h-6 text-[#1c1917] group-hover:text-[#d4a373] transition-colors" />
                </div>

                <h3 className="font-serif font-bold text-lg text-[#1c1917] mb-3">{step.title}</h3>
                <p className="text-sm text-[#4a4a4a] leading-relaxed">{step.description}</p>
              </div>

              {/* Connector line (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[28px] left-[60%] w-[80%] h-[2px] bg-[#f3eee8] -z-10"></div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-[#1c1917] rounded-2xl p-10 max-w-3xl mx-auto relative overflow-hidden shadow-2xl">
            {/* Background elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1c1917] to-[#44403c] z-0"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#d4a373]/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-serif font-bold text-white mb-4">¿Listo para comenzar?</h3>
              <p className="text-[#e6ccb2] mb-8 text-lg">
                Agenda tu pedido hoy mismo y recibe tu diseño en tiempo récord.
              </p>
              <a href={whatsappQuoteUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#d4a373] hover:bg-[#c08552] text-[#1c1917] px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-3 mx-auto transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                  <MessageSquare className="w-5 h-5" />
                  Iniciar Cotización
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}