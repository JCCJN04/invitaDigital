import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuestan las invitaciones digitales en Monterrey?",
    answer:
      "El precio de las invitaciones digitales en InvitacionesDigitalesMTY varía según el plan: Plan Básico por $1,399 MXN, Plan Premium (más popular) por $1,799 MXN y Plan Deluxe por $2,499 MXN. Todos son pagos únicos sin mensualidades.",
  },
  {
    question: "¿Qué incluyen las invitaciones digitales?",
    answer:
      "Todas nuestras invitaciones incluyen: diseño personalizado (no plantilla), enlace web único, ubicación con GPS (Google Maps/Waze), confirmación de asistencia (RSVP) a WhatsApp, cuenta regresiva y galería de fotos. Los planes Premium agregan música y animaciones.",
  },
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer:
      "Entregamos tu invitación digital terminada en 24 a 48 horas hábiles después de recibir tu información. Contamos con servicio express (entrega mismo día) por un costo adicional sujeto a disponibilidad.",
  },
  {
    question: "¿Cómo funcionan las invitaciones digitales?",
    answer:
      "Funcionan como una página web optimizada para celulares. Recibes un enlace (link) que puedes compartir ilimitadamente por WhatsApp, Facebook, Instagram o correo. Tus invitados solo dan clic para ver los detalles, ubicación y confirmar su asistencia.",
  },
  {
    question: "¿Hacen invitaciones para Bodas y XV Años?",
    answer:
      "Sí, somos especialistas en Bodas y XV Años en Monterrey. También diseñamos para Bautizos, Baby Shower, Despedidas, Cumpleaños y Eventos Corporativos.",
  },
  {
    question: "¿Tienen garantía de satisfacción?",
    answer:
      "Sí, ofrecemos garantía de satisfacción. No realizamos el pago final hasta que apruebes el diseño (se requiere anticipo del 50% para iniciar). Incluimos rondas de cambios ilimitadas en el plan Deluxe.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre tus invitaciones digitales
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#f3eee8] rounded-xl px-4 lg:px-6 bg-[#fdfcfb] data-[state=open]:border-[#d4a373] data-[state=open]:shadow-md transition-all duration-300">
                <AccordionTrigger className="text-left font-serif font-semibold text-[#1c1917] hover:text-[#d4a373] py-6 text-base lg:text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#4a4a4a] pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
