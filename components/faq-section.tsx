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
      "Plan Básico ($1399): hasta 8 fotos, 2 ligas, 2 revisiones. Plan Premium ($1799): hasta 16 fotos, 5 ligas, 4 revisiones, diseño 100% personalizado, animaciones, QR personalizado, 1 canción. Plan Deluxe ($2499): hasta 40 fotos, ligas ilimitadas, 8 revisiones, 3 canciones.",
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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Resolvemos tus dudas para que disfrutes del mejor servicio
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-semibold text-[#1f2937] hover:text-[#1e3a8a] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-4">
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
