import type { Metadata } from "next"
import { buildAlternates } from "@/lib/seo"
import dynamic from "next/dynamic"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessSection } from "@/components/process-section"
import { PricingSection } from "@/components/pricing-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const WhatsAppWidget = dynamic(() =>
  import("@/components/whatsapp-widget").then((mod) => mod.WhatsAppWidget)
)

export const metadata: Metadata = {
  title: {
    absolute: "Invitaciones Corporativas Digitales | RSVP | Todo México",
  },
  description:
    "Invitaciones digitales para eventos corporativos y empresariales en todo México. Diseño profesional, RSVP, confirmación de asistencia y entrega en 24 h. Servicio en línea.",
  keywords: [
    "invitaciones eventos corporativos monterrey",
    "invitaciones digitales empresas monterrey",
    "invitacion digital evento corporativo",
    "invitaciones congresos monterrey",
    "invitacion digital profesional empresa",
    "eventos empresariales monterrey invitaciones",
  ],
  alternates: buildAlternates("/invitaciones-corporativas"),
}

const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
  "Hola, quiero cotizar mi invitación digital. ¿Puedo ver un boceto gratis?"
)}`

const benefits = [
  {
    title: "Imagen corporativa",
    desc: "Integramos los colores, el logotipo y la tipografía de tu empresa para que la invitación sea una extensión natural de tu identidad de marca.",
  },
  {
    title: "Control de asistencia",
    desc: "El RSVP captura el nombre y la empresa de cada asistente, dándote una lista clara de confirmados para el día del evento sin formularios externos.",
  },
  {
    title: "Agenda del evento",
    desc: "Incluimos el programa completo: speakers, horarios, mesas redondas y pausas — todo en un solo link que los asistentes pueden consultar en cualquier momento.",
  },
  {
    title: "Sin impresos",
    desc: "Cero papel, cero costo de impresión y cero desperdicio. Una sola invitación digital llega a todos los asistentes sin importar cuántos sean.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta una invitación digital para un evento corporativo?",
    answer:
      "Contamos con tres planes de pago único: Básico $1,999 MXN, Premium $2,600 MXN y Deluxe $3,499 MXN. El plan Básico incluye diseño con la identidad visual de tu empresa, confirmación de asistencia con nombre y cargo del invitado, mapa GPS de la sede y entrega en 24 horas. El plan Premium añade agenda del evento con horarios y música o video corporativo de fondo. El plan Deluxe incorpora agenda multi-día, sección de ponentes o directivos y confirmación con campo de empresa. Emitimos factura CFDI para empresas que la requieran. Escríbenos por WhatsApp con los detalles de tu evento y te enviamos una propuesta sin compromiso.",
  },
  {
    question: "¿Pueden incluir el logotipo y los colores de mi empresa?",
    answer:
      "Sí, es parte esencial de nuestro servicio corporativo. Aplicamos tu manual de marca — colores exactos en código hexadecimal o Pantone, tipografías corporativas, logotipo en alta resolución y el estilo visual que define a tu organización — para que la invitación sea completamente coherente con la imagen de tu empresa. No usamos plantillas genéricas; diseñamos desde cero respetando cada elemento de tu identidad visual. Si tienes un manual de marca o brand guidelines, compártenos el PDF y nos aseguramos de seguirlo al pie de la letra. El resultado es una invitación que cualquier colaborador reconocería inmediatamente como parte de tu empresa.",
  },
  {
    question: "¿Cómo funciona el control de asistencia con nombre y empresa?",
    answer:
      "El formulario de RSVP integrado en la invitación solicita al invitado su nombre completo, empresa y cargo. Al confirmar su asistencia, recibes una notificación inmediata en tu WhatsApp con sus datos. No necesitas hacer seguimiento manual ni revisar formularios externos. Al finalizar el período de confirmaciones, te entregamos un resumen consolidado en formato de lista con todos los asistentes confirmados, sus empresas y cargos — útil para preparar gafetes, asignación de mesas o registro de entrada al evento. Este sistema funciona sin límite de invitados y las respuestas llegan en tiempo real.",
  },
  {
    question: "¿Hacen invitaciones para congresos y convenciones?",
    answer:
      "Sí, tenemos experiencia con eventos corporativos de gran formato: congresos, convenciones, cenas de gala, lanzamientos de producto, reuniones de consejo directivo y eventos de reconocimiento. Para este tipo de eventos podemos incluir agenda detallada multi-día con horarios por sesión, perfiles de ponentes o conferencistas con foto y bio, links de acceso a transmisión en vivo o plataforma virtual, información de hospedaje para eventos foráneos, y mapa GPS con indicaciones de estacionamiento. El plan Deluxe está especialmente diseñado para estos casos donde la invitación necesita funcionar como un mini-sitio del evento.",
  },
  {
    question: "¿En cuánto tiempo me entregan la invitación?",
    answer:
      "Para eventos corporativos estándar entregamos en 24 horas hábiles a partir de que nos envíes todos los elementos necesarios: brief del evento, logotipo en alta resolución, colores de marca, fecha y sede, lista de información a incluir y cualquier material visual de referencia. Para eventos de mayor complejidad con agenda detallada, múltiples sedes o sección de ponentes, el tiempo puede extenderse a 48 horas. Antes de la versión final siempre te enviamos un boceto para aprobación. Coordinamos el calendario contigo desde el primer mensaje de WhatsApp para asegurar que la invitación esté lista mucho antes de tu fecha límite de envío.",
  },
  {
    question: "¿Emiten factura por el servicio?",
    answer:
      "Sí, emitimos factura fiscal electrónica CFDI 4.0 para empresas y personas morales que la requieran. El comprobante cumple con todos los requisitos del SAT para deducibilidad de gastos. Solo necesitamos tu RFC, razón social, régimen fiscal, domicilio fiscal y correo electrónico para la emisión. La factura se envía en formato PDF y XML al correo que nos indiques dentro de los 3 días hábiles posteriores al pago. Si necesitas la factura con algún concepto o uso específico de CFDI, indícanos y lo configuramos correctamente desde el inicio.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://invitacionesdigitalesmty.com.mx/invitaciones-corporativas#service",
  name: "Invitaciones Digitales Corporativas",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://invitacionesdigitalesmty.com.mx#localbusiness",
  },
  areaServed: { "@type": "Country", name: "México" },
  description:
    "Invitaciones digitales para eventos corporativos en Monterrey con imagen de marca, control de asistencia, agenda del evento y entrega en 24 horas.",
  url: "https://invitacionesdigitalesmty.com.mx/invitaciones-corporativas",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}

export default function CorporativasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen">
        <Header />

        {/* Hero */}
        <section className="relative overflow-hidden min-h-screen bg-background pt-28 md:pt-32 pb-16 flex flex-col">
          <div className="container mx-auto px-6 md:px-10 max-w-7xl flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-10">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
                Monterrey, Nuevo León · Invitaciones Digitales
              </span>
            </div>

            <h1
              className="font-serif font-bold leading-[0.88] tracking-tight text-foreground mb-12"
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
            >
              Invitaciones<br />
              Corporativas<br />
              <em className="italic text-primary">Monterrey</em>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-border pt-10">
              <div className="flex flex-col gap-8 max-w-md">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Eventos empresariales que impresionan desde la primera comunicación. Diseño profesional con la identidad de tu empresa, confirmación de asistencia y entrega en 24 horas.
                </p>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Cotizar gratis — 5 min
                  </a>
                </div>
              </div>

              <div className="flex gap-0 shrink-0">
                <div className="pr-8 md:pr-12">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">+150</p>
                  <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Eventos</p>
                </div>
                <div className="border-l border-border px-8 md:px-12">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">24h</p>
                  <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Entrega</p>
                </div>
                <div className="border-l border-border px-8 md:px-12">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">5.0</p>
                  <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Calificación</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 md:px-10 max-w-7xl">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-16">
              Profesionalismo desde la primera comunicación
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((b, i) => (
                <div key={i} className="border-t border-border pt-6">
                  <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-foreground mt-4 mb-3">{b.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection />
        <PricingSection />

        {/* FAQ */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6 md:px-10">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-16 text-center">
              Preguntas Frecuentes
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border border-[#f3eee8] rounded-xl px-4 lg:px-6 bg-[#fdfcfb] data-[state=open]:border-[#d4a373]"
                  >
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

        {/* CTA */}
        <section className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 md:px-10 max-w-7xl text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              ¿Tienes un evento empresarial próximo?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Cuéntanos el tipo de evento, la fecha y el número de asistentes — te enviamos propuesta y boceto gratis.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors"
            >
              Cotizar gratis — 5 min
            </a>
          </div>
        </section>

        <TestimonialsSection />
        <Footer />
        <WhatsAppWidget />
      </main>
    </>
  )
}
