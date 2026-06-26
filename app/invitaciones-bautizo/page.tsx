import type { Metadata } from "next"
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
  title: "Invitaciones Digitales para Bautizo en Monterrey | RSVP y GPS",
  description:
    "Invitaciones digitales para bautizo en Monterrey. Diseño elegante con RSVP, mapa GPS a la iglesia y recepción, y entrega en 24 h. Boceto gratis.",
  keywords: [
    "invitaciones bautizo digital monterrey",
    "invitaciones para bautizo con rsvp",
    "invitacion digital bautizo",
    "invitaciones bautizo personalizadas monterrey",
    "invitacion bautizo whatsapp",
    "invitaciones bautizo precio",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/invitaciones-bautizo",
  },
}

const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
  "Hola, quiero cotizar mi invitación digital. ¿Puedo ver un boceto gratis?"
)}`

const benefits = [
  {
    title: "Dos ubicaciones GPS",
    desc: "Incluimos el mapa tanto de la iglesia como del salón de recepción en un solo link, para que ningún invitado se pierda en ninguna parte del día.",
  },
  {
    title: "RSVP sin llamadas",
    desc: "Los invitados confirman su asistencia con un clic desde la propia invitación y tú recibes la notificación al instante en tu WhatsApp.",
  },
  {
    title: "Diseño personalizado",
    desc: "Elige entre estilo clásico con cruces y paloma, moderno con tipografía limpia, o acuarela con florales delicados — siempre a tu gusto.",
  },
  {
    title: "Sin costos de impresión",
    desc: "Comparte la invitación por WhatsApp, Instagram o email a todos tus invitados sin pagar un peso adicional por cada uno.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta una invitación digital para bautizo?",
    answer:
      "Contamos con tres planes de pago único: Básico $1,999 MXN, Premium $2,600 MXN y Deluxe $3,499 MXN. Todos incluyen diseño personalizado, RSVP y entrega en 24 horas. Escríbenos por WhatsApp para un boceto gratis sin compromiso.",
  },
  {
    question: "¿Qué incluye la invitación digital de bautizo?",
    answer:
      "Incluye diseño personalizado, RSVP automático con notificaciones a tu WhatsApp, GPS de la iglesia y del salón de recepción, música opcional, cuenta regresiva y datos de los padrinos si lo deseas.",
  },
  {
    question: "¿Pueden poner el mapa de dos lugares: iglesia y salón?",
    answer:
      "Sí, es uno de nuestros elementos más pedidos en bautizos. Ponemos ambas ubicaciones claramente diferenciadas para que los invitados sepan a dónde ir en cada momento del día.",
  },
  {
    question: "¿En cuánto tiempo me entregan la invitación?",
    answer:
      "En 24 horas hábiles a partir de que nos envíes los datos del bebé, la fecha, la iglesia, el salón y el estilo que prefieras.",
  },
  {
    question: "¿Hacen diseños con estilo religioso clásico?",
    answer:
      "Claro que sí. Tenemos plantillas con cruces, paloma del Espíritu Santo, ángeles y detalles dorados que dan un tono sacro y elegante, perfecto para la ocasión.",
  },
  {
    question: "¿Pueden incluir los datos del padrino y la madrina?",
    answer:
      "Sí, lo agregamos sin costo adicional. Muchas familias en Monterrey aprecian reconocer a los padrinos en la invitación y nosotros lo hacemos con gusto.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Invitaciones Digitales Bautizo Monterrey",
  provider: {
    "@type": "LocalBusiness",
    name: "Invitaciones Digitales MTY",
    telephone: "+52 81 8083 6435",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      addressCountry: "MX",
    },
  },
  areaServed: { "@type": "City", name: "Monterrey" },
  description:
    "Invitaciones digitales para bautizo en Monterrey con RSVP automático, GPS de iglesia y recepción, y entrega en 24 horas.",
  url: "https://invitacionesdigitalesmty.com.mx/invitaciones-bautizo",
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

export default function BautizoPage() {
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
              Bautizo<br />
              <em className="italic text-primary">Monterrey</em>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-border pt-10">
              <div className="flex flex-col gap-8 max-w-md">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Una invitación digna del día más especial. GPS a la iglesia y recepción, RSVP automático y diseño clásico o moderno — entregamos en 24 horas.
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
              Cada detalle del bautizo, en un solo link
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
              ¿Listos para celebrar el bautizo?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Cuéntanos los detalles — iglesia, salón, fecha — y te enviamos un boceto gratis en minutos.
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
