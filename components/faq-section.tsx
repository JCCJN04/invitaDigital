import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto tiempo toma crear mi invitación?",
    answer:
      "El tiempo de entrega depende del paquete elegido. Para el plan Básico son 48 horas, Premium 24 horas y Deluxe solo 12 horas. Siempre cumplimos con nuestros tiempos prometidos.",
  },
  {
    question: "¿Puedo hacer cambios después de recibir el diseño?",
    answer:
      "¡Por supuesto! El plan Básico incluye hasta 2 revisiones, mientras que Premium 4 y Deluxe incluyen revisiones ilimitadas hasta que quedes 100% satisfecho.",
  },
  {
    question: "¿En qué formatos recibo mi invitación?",
    answer:
      "Todos los planes incluyen formato digital HD optimizado para telefono, computadora y ipad.",
  },
  {
    question: "¿Cómo comparto la invitación con mis invitados?",
    answer:
      "Es súper fácil. Recibes tu invitación en formato digital que puedes enviar por WhatsApp, email, Facebook, Instagram o cualquier plataforma digital.",
  },
  {
    question: "¿Qué información necesitan para crear mi diseño?",
    answer:
      "Necesitamos detalles básicos como fecha, lugar, tipo de evento, colores preferidos y cualquier elemento especial que quieras incluir. Nuestro equipo te guiará en todo el proceso.",
  },
  {
    question: "¿Ofrecen reembolsos si no me gusta el resultado?",
    answer:
      "Sí, tenemos una garantía de satisfacción 100%. Si no quedas completamente satisfecho con tu invitación, te devolvemos tu dinero sin preguntas.",
  },
  {
    question: "¿Pueden crear diseños para cualquier tipo de evento?",
    answer:
      "¡Absolutamente! Creamos invitaciones para bodas, XV años, baby showers, cumpleaños, graduaciones, eventos corporativos y cualquier celebración especial que tengas en mente.",
  },
  {
    question: "¿Qué hace diferentes sus diseños de otros servicios?",
    answer:
      "Nuestros diseños son 100% personalizados, nunca usamos plantillas genéricas. Cada invitación es única y refleja tu personalidad y estilo. Además, nuestro equipo tiene años de experiencia en diseño gráfico profesional.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Preguntas Frecuentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos todas tus dudas para que tengas la mejor experiencia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-gray-50 rounded-2xl px-6 border-none">
                <AccordionTrigger className="text-left font-semibold text-gray-800 hover:text-[#D4AF37] py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still have questions CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#F8BBD9]/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">¿Tienes más preguntas?</h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo está aquí para ayudarte. Contáctanos y resolveremos todas tus dudas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-3 rounded-full font-semibold">
                Chatear por WhatsApp
              </button>
              <button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-3 rounded-full font-semibold">
                Enviar Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
