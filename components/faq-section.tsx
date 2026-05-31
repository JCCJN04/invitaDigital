import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuestan las invitaciones digitales en Monterrey?",
    answer:
      "Una invitación digital web es una experiencia interactiva diseñada para sorprender a tus invitados desde su celular. El precio de las invitaciones digitales web premium en InvitacionesDigitalesMTY (Monterrey) varía según el nivel de personalización y las funcionalidades interactivas deseadas. Contamos con tres opciones principales de pago único (sin mensualidades). El Plan Básico tiene un costo de $1,999 MXN e incluye hasta 8 fotografías, confirmación de asistencia (RSVP), y enlace de ubicación GPS Google Maps. Nuestro paquete más solicitado es el Plan Premium por $2,600 MXN, el cual eleva la experiencia añadiendo música de fondo personalizada, animaciones sutiles a medida, 5 secciones de información detallada de tu Boda o XV Años, y hasta 16 fotografías. Finalmente, contamos con el exclusivo Plan Deluxe por $3,499 MXN, ideal para todo tipo de eventos que buscan el máximo lujo, incluyendo una galería inmersiva de hasta 40 fotos, múltiples pistas musicales, enlaces ilimitados a mesas de regalos, y el beneficio único de contar con revisiones de diseño ilimitadas hasta alcanzar la perfección absoluta.",
  },
  {
    question: "¿Qué incluyen las invitaciones digitales?",
    answer:
      "Todas nuestras invitaciones incluyen: diseño personalizado, enlace web único, ubicación con Google Maps, confirmación de asistencia (RSVP), cuenta regresiva y galería de fotos. Los planes Premium agregan música y animaciones.",
  },
  {
    question: "¿Cuál es el tiempo de entrega?",
    answer:
      "Entregamos tu invitación digital terminada en 24 a 48 horas hábiles después de recibir tu información. Contamos con servicio express (entrega mismo día) por un costo adicional sujeto a disponibilidad.",
  },
  {
    question: "¿Cómo funcionan las invitaciones digitales?",
    answer:
      "Funcionan como una página web optimizada para celulares y todos los dispositivos. Recibes un enlace (link) que puedes compartir ilimitadamente por WhatsApp, Facebook, Instagram o correo. Tus invitados solo dan clic para ver los detalles, ubicación y confirmar su asistencia.",
  },
  {
    question: "¿Hacen invitaciones para Bodas y XV Años?",
    answer:
      "Sí, somos especialistas en Bodas y XV Años. También diseñamos para Bautizos, Baby Shower, Despedidas, Cumpleaños y Eventos Corporativos.",
  },
  {
    question: "¿Tienen garantía de satisfacción?",
    answer:
      "Sí, ofrecemos garantía de satisfacción. No realizamos el pago final hasta que apruebes el diseño (se requiere anticipo del 50% para iniciar). Incluimos rondas de cambios ilimitadas en el plan Deluxe.",
  },
  {
    question: "¿Cuál es la diferencia entre una invitación digital y una impresa?",
    answer:
      "Las invitaciones digitales son páginas web interactivas que se comparten por WhatsApp en segundos, sin costos de impresión ni envío. A diferencia del papel, incluyen mapa GPS con Google Maps o Waze, RSVP automático, música de fondo, cuenta regresiva animada y galería de fotos. Además se pueden actualizar si hay cambios de fecha o lugar sin reimprimir nada. El costo total es considerablemente menor que imprimir y distribuir invitaciones físicas premium para una lista de 100 o más invitados.",
  },
  {
    question: "¿Puedo actualizar la invitación si cambian los datos del evento?",
    answer:
      "Sí. Si cambia la fecha, el salón u otro dato importante, actualizamos la invitación sin costo adicional. El mismo enlace que ya tienen tus invitados mostrará la información actualizada automáticamente. No es necesario reenviar un link diferente.",
  },
  {
    question: "¿Cómo funciona el RSVP? ¿Cómo sé quién confirma asistencia?",
    answer:
      "Cuando un invitado confirma su asistencia, recibes una notificación directa en tu WhatsApp con su nombre y el número de acompañantes. El sistema recopila las confirmaciones automáticamente sin que necesites llevar un registro manual. Es rápido y sencillo tanto para ti como para tus invitados.",
  },
  {
    question: "¿Hacen invitaciones digitales para Baby Shower, Bautizo y Primera Comunión?",
    answer:
      "Sí. Diseñamos invitaciones para todo tipo de celebraciones: Baby Shower, Bautizos, Primera Comunión, Cumpleaños, Despedidas de Soltera y Eventos Corporativos, además de Bodas y XV Años. Cada diseño se personaliza completamente según el estilo y colores del evento.",
  },
  {
    question: "¿Atienden a clientes fuera de Monterrey?",
    answer:
      "Sí. Aunque estamos basados en Monterrey, Nuevo León, atendemos clientes en toda la República Mexicana de forma 100% remota por WhatsApp. El proceso es igual: compartes los detalles de tu evento, diseñamos en 24-48 horas y recibes el enlace listo para compartir.",
  },
  {
    question: "¿Qué es un save the date digital y lo ofrecen?",
    answer:
      "Un save the date digital es una invitación previa que se envía con meses de anticipación para que los invitados reserven la fecha en su agenda. Es más sencilla que la invitación formal: incluye la fecha tentativa, los nombres y un diseño elegante para crear expectativa. Sí los diseñamos como complemento para bodas y XV años.",
  },
]

export function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-background">
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
