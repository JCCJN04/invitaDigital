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
    absolute: "Invitaciones XV Años Digital | RSVP y Chambelanes | México",
  },
  description:
    "Invitaciones digitales para XV años en todo México. Diseño personalizado con el tema que elijas, RSVP automático, cuenta regresiva y waltz integrado. Entrega en 24 h. Boceto gratis.",
  keywords: [
    "invitaciones xv años digital",
    "invitaciones digitales xv años",
    "invitaciones quinceañera digital",
    "invitaciones 15 años digital",
    "invitaciones xv años monterrey",
    "invitaciones xv años whatsapp",
    "invitaciones quince años online",
    "invitaciones xv años con rsvp",
    "invitaciones digitales quinceañera mexico",
    "diseño invitacion xv años",
  ],
  alternates: buildAlternates("/invitaciones-xv-años"),
}

const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
  "Hola, quiero cotizar una invitación digital para XV años. ¿Puedo ver un boceto gratis?"
)}`

const benefits = [
  {
    title: "El tema que ella sueña",
    desc: "Paris, Disney, jardín, boho, moderna, vintage, glamour — diseñamos la invitación alrededor del tema que la quinceañera eligió. Colores exactos, tipografía elegante y cada detalle que hace única su celebración.",
  },
  {
    title: "Waltz, chambelanes y agenda completa",
    desc: "Incluimos secciones para el itinerario completo: misa, presentación, recepción, primera pieza y vals. Si quieres la lista de chambelanes o el orden del baile, también va dentro de la invitación.",
  },
  {
    title: "RSVP sin perseguir a nadie",
    desc: "Los invitados confirman con un toque en la invitación y tú recibes la respuesta al instante en tu WhatsApp. Sin llamadas, sin cadenas de mensajes, sin hojas de cálculo — todo llega solo.",
  },
  {
    title: "Dos o más ubicaciones en un solo enlace",
    desc: "Iglesia y salón en el mismo link con mapas GPS independientes. Tus invitados saben exactamente a dónde ir para cada parte del evento sin confusión ni preguntas de último minuto.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta una invitación digital para XV años?",
    answer:
      "Manejamos tres planes de pago único: Básico $1,999 MXN, Premium $2,600 MXN y Deluxe $3,499 MXN. El plan Básico incluye diseño personalizado, RSVP automático, cuenta regresiva animada, mapa GPS y entrega en 24 horas. Los planes Premium y Deluxe añaden música de fondo, galería de fotos, mesa de regalos integrada y secciones adicionales como lista de chambelanes o itinerario del evento. Antes de cualquier pago, te enviamos un boceto gratis para que veas el resultado.",
  },
  {
    question: "¿Pueden hacer el diseño con el tema de mis XV años?",
    answer:
      "Sí, diseñamos con cualquier tema que elijas. Paris, Disney, jardín inglés, boho, elegancia clásica, glamour dorado, acuarela, minimalista moderno o cualquier concepto personalizado. Solo compártenos tus referencias de estilo — colores, mood board o ejemplos que te gusten — y lo adaptamos desde cero. No usamos plantillas genéricas: cada invitación se construye alrededor de la quinceañera y su celebración específica.",
  },
  {
    question: "¿La invitación puede incluir misa y salón en la misma página?",
    answer:
      "Por supuesto. Incluimos todas las ubicaciones que necesites con su mapa GPS individual: la parroquia o iglesia para la misa de XV años y el salón o quinta para la recepción. También podemos agregar el ensayo o cualquier otro evento previo. Cada ubicación tiene su horario, dirección exacta y botón para abrir en Google Maps o Waze directamente desde el celular del invitado.",
  },
  {
    question: "¿Pueden agregar lista de chambelanes o el orden del vals?",
    answer:
      "Sí, lo agregamos como una sección adicional en la invitación. Podemos incluir los nombres de chambelanes con foto, el orden del baile sorpresa, el itinerario completo de la noche o cualquier información que quieras compartir con tus invitados. Es muy popular agregar también el código de vestimenta con paleta de colores para que todos lleguen coordinados.",
  },
  {
    question: "¿Cuántos invitados pueden recibir la invitación?",
    answer:
      "No hay límite de invitados. La invitación es un enlace web que puedes compartir por WhatsApp, mensaje de texto, Instagram o cualquier otro medio. No importa si son 50 o 500 personas — el link funciona igual para todos. Tampoco cobramos por número de visualizaciones ni de confirmaciones de asistencia. Una vez que tienes la invitación, es tuya para compartir con quien quieras.",
  },
  {
    question: "¿Puedo ver un ejemplo antes de contratar?",
    answer:
      "Sí. Escríbenos por WhatsApp con los datos básicos de tu evento — nombre de la quinceañera, fecha, tema o colores que tienes en mente — y en menos de 5 minutos te mandamos un boceto gratis personalizado. No es una plantilla genérica sino una propuesta real con los elementos de tu celebración. Sin pago adelantado, sin compromiso. Si el boceto te convence, avanzamos. Si no, no hay ningún costo.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://invitacionesdigitalesmty.com.mx/invitaciones-xv-años#service",
  name: "Invitaciones Digitales XV Años",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://invitacionesdigitalesmty.com.mx#localbusiness",
  },
  areaServed: { "@type": "Country", name: "México" },
  description:
    "Invitaciones digitales para XV años en México con diseño personalizado por tema, RSVP automático, chambelanes, múltiples ubicaciones y entrega en 24 horas.",
  url: "https://invitacionesdigitalesmty.com.mx/invitaciones-xv-años",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Básico XV Años",
      price: 1999,
      priceCurrency: "MXN",
    },
    {
      "@type": "Offer",
      name: "Plan Premium XV Años",
      price: 2600,
      priceCurrency: "MXN",
    },
    {
      "@type": "Offer",
      name: "Plan Deluxe XV Años",
      price: 3499,
      priceCurrency: "MXN",
    },
  ],
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

export default function InvitacionesXVAnosPage() {
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
                Invitaciones Digitales · Todo México
              </span>
            </div>

            <h1
              className="font-serif font-bold leading-[0.88] tracking-tight text-foreground mb-12"
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
            >
              Invitaciones<br />
              Digitales<br />
              <em className="italic text-primary">XV Años</em>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-border pt-10">
              <div className="flex flex-col gap-8 max-w-md">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Sus XV años merecen una invitación tan especial como ella. Diseñamos con el tema que eligió — Paris, Disney, jardín, boho o cualquier concepto — con RSVP automático, chambelanes, mapa GPS y cuenta regresiva. Te atendemos por WhatsApp y la entregamos en 24 horas. El boceto va por nuestra cuenta.
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
                    Ver boceto gratis — 5 min
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
              Una invitación tan única como sus XV años
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
              Sus XV años, su invitación, su momento
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Cuéntanos el tema y la fecha — te mandamos un boceto personalizado gratis en menos de 5 minutos. Sin adelantos, sin compromiso.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors"
            >
              Quiero el boceto gratis
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
