import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Qué son las invitaciones digitales y cómo funcionan?",
    answer:
      "Las invitaciones digitales son diseños personalizados que recibes en formato digital (enlace web/liga). Puedes compartirlas por WhatsApp, email, redes sociales o cualquier plataforma. Tus invitados solo necesitan hacer clic en el enlace para ver toda la información del evento con animaciones, música, mapas interactivos y confirmar asistencia.",
  },
  {
    question: "¿En qué formatos recibo mi invitación digital?",
    answer:
      "Recibes tu invitación como una liga/URL única optimizada para verse perfecta en celulares, tablets y computadoras. También incluimos QR personalizado para imprimir si lo deseas. Todo en HD con carga rápida garantizada.",
  },
  {
    question: "¿Cuánto tiempo tardan en entregar mi invitación en Monterrey?",
    answer:
      "Nuestro tiempo promedio de entrega es de 24 horas. Para diseños más complejos del plan Deluxe puede tomar hasta 48 horas. ¡Tenemos servicio express disponible si lo necesitas con urgencia!",
  },
  {
    question: "¿Cómo comparto la invitación con mis invitados?",
    answer:
      "Es súper fácil. Recibes tu invitación que sería una liga la cual puedes enviar por WhatsApp (recomendado), mensaje de texto, email, Facebook, Instagram, o cualquier medio digital. Tus invitados solo hacen clic y ven tu invitación completa. También puedes imprimir el código QR.",
  },
  {
    question: "¿Qué incluye cada plan de invitaciones digitales?",
    answer:
      "Plan Básico ($799): hasta 8 fotos, 2 ligas, 2 revisiones, QR básico. Plan Premium ($999): hasta 16 fotos, 5 ligas, 4 revisiones, diseño 100% personalizado, animaciones, QR personalizado, 1 canción. Plan Deluxe ($1799): hasta 40 fotos, ligas ilimitadas, 8 revisiones, 3 canciones.",
  },
  {
    question: "¿Puedo hacer cambios después de recibir mi diseño?",
    answer:
      "¡Claro que sí! Dependiendo del plan: Plan Básico incluye 2 revisiones, Premium 4 revisiones, y Deluxe 8 revisiones. Trabajamos contigo hasta que quedes 100% satisfecho con tu invitación.",
  },
  {
    question: "¿Qué información necesitan para crear mi diseño?",
    answer:
      "Necesitamos detalles básicos como: tipo de evento, fecha, lugar, horario, colores preferidos, fotos (si deseas incluirlas), y cualquier elemento especial. Nuestro equipo te guía en todo el proceso por WhatsApp. Es muy simple y rápido.",
  },
  {
    question: "¿Las invitaciones digitales son más económicas que las impresas?",
    answer:
      "¡Sí! Ahorras hasta 70% comparado con invitaciones físicas tradicionales. Sin gastos de impresión, sin envíos costosos, sin desperdicios. Además son eco-friendly y puedes compartirlas ilimitadamente sin costo extra.",
  },
  {
    question: "¿Pueden crear diseños para cualquier tipo de evento en Monterrey?",
    answer:
      "¡Absolutamente! Creamos invitaciones para bodas, XV años, baby showers, cumpleaños, graduaciones, eventos corporativos, aniversarios, bautizos, despedidas y cualquier celebración especial que tengas en mente. Cada diseño es único y personalizado.",
  },
  {
    question: "¿Las invitaciones digitales funcionan en todos los celulares?",
    answer:
      "Sí, están optimizadas para funcionar perfectamente en iPhone, Android, tablets y computadoras. No requieren descargar ninguna app. Se adaptan automáticamente al tamaño de pantalla y funcionan con cualquier navegador moderno.",
  },
  {
    question: "¿Ofrecen garantía de satisfacción?",
    answer:
      "¡Por supuesto! Tenemos garantía de satisfacción 100%. Si no quedas completamente satisfecho con tu invitación, te devolvemos tu dinero. Sin preguntas, sin complicaciones. Nuestro compromiso es tu felicidad total.",
  },
  {
    question: "¿Puedo agregar música o videos a mi invitación digital?",
    answer:
      "Sí, los planes Premium y Deluxe incluyen música de fondo personalizada. El plan Deluxe te permite hasta 3 canciones. También podemos integrar videos cortos en tu invitación para hacerla aún más especial y memorable.",
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-[#f5f3ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6258FF]/12 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">Preguntas Frecuentes</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Resolvemos todas tus dudas para que tengas la mejor experiencia
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-[#ece9ff] hover:border-[#6258FF]/40 shadow-md hover:shadow-lg transition-all duration-500 overflow-hidden group px-0"
                style={{
                  animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <AccordionTrigger className="text-left font-semibold text-[#1f1c4f] hover:text-[#6258FF] py-6 px-6 transition-all duration-300 group-hover:px-8 [&[data-state=open]]:bg-gradient-to-r [&[data-state=open]]:from-[#6258FF]/6 [&[data-state=open]]:to-[#ff8dc7]/10">
                  <span className="flex items-center gap-3">
                    <span className="text-[#6258FF] font-bold">{String(index + 1).padStart(2, "0")}.</span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-6 px-6 border-t border-[#ece9ff] pt-6 bg-gradient-to-b from-white/50 to-transparent text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Additional Help Section */}
        <div className="mt-20 bg-gradient-to-r from-white to-[#f8f7ff] border border-[#ece9ff] rounded-2xl p-12 text-center shadow-lg" style={{ animationDelay: "0.5s" }}>
          <h3 className="text-2xl font-serif font-bold text-[#111033] mb-4">¿Aún tienes dudas?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver todas tus preguntas y ayudarte a crear la invitación perfecta para tu evento especial.
          </p>
          <a
            href="https://wa.me/8111230266?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20las%20invitaciones%20digitales."
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] hover:shadow-lg hover:shadow-[#6258FF]/45 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5">
              Contáctanos por WhatsApp
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
