import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿En qué formatos recibo mi invitación?",
    answer:
      "Todos los planes incluyen formato digital HD optimizado para telefono, computadora y ipad.",
  },
  {
    question: "¿Cómo comparto la invitación con mis invitados?",
    answer:
      "Es súper fácil. Recibes tu invitación que seria una liga la cual puedes enviar por WhatsApp, email, Facebook, Instagram o cualquier medio de tu preferencia.",
  },
  {
    question: "¿Qué información necesitan para crear mi diseño?",
    answer:
      "Necesitamos detalles básicos como fecha, lugar, tipo de evento, colores preferidos y cualquier elemento especial que quieras incluir. Nuestro equipo te guiará en todo el proceso.",
  },
  {
    question: "¿Pueden crear diseños para cualquier tipo de evento?",
    answer:
      "¡Absolutamente! Creamos invitaciones para bodas, XV años, baby showers, cumpleaños, graduaciones, eventos corporativos y cualquier celebración especial que tengas en mente.",
  }
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
      </div>
    </section>
  )
}
