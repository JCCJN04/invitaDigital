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
  title: "Invitaciones Digitales Guadalajara | Bodas, XV Años y Eventos",
  description:
    "Invitaciones digitales para bodas, XV años y eventos en Guadalajara. Servicio 100% en línea con entrega en 24 h. Diseño personalizado con estilo tapatío y boceto gratis.",
  keywords: [
    "invitaciones digitales guadalajara",
    "invitaciones boda guadalajara",
    "invitaciones xv años guadalajara",
    "invitaciones digitales zapopan",
    "invitaciones baby shower guadalajara",
    "invitaciones eventos guadalajara jalisco",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/guadalajara",
  },
}

const whatsappUrl =
  "https://wa.me/528180836435?text=Hola,%20quiero%20cotizar%20mi%20invitación%20digital.%20¿Puedo%20ver%20un%20boceto%20gratis?"

const benefits = [
  {
    title: "Estilo tapatío en cada detalle",
    desc: "Diseños que capturan la calidez y tradición de Guadalajara — desde bodas clásicas en haciendas hasta quinceañeras llenas de color en el corazón de Jalisco.",
  },
  {
    title: "RSVP directo a tu celular",
    desc: "Cada invitado confirma con un toque en su pantalla y la respuesta llega a tu WhatsApp al instante. Sin listas en papel ni cadenas de mensajes interminables.",
  },
  {
    title: "Listo en 24 horas, sin salir de casa",
    desc: "Te atendemos completamente por WhatsApp. Nos compartes los datos de tu evento y al día siguiente tienes tu invitación lista para enviar a toda tu lista de contactos.",
  },
  {
    title: "Cambios sin costo adicional",
    desc: "Si cambia el salón, la hora o cualquier dato, actualizamos la invitación de inmediato. Todos los que ya tienen el enlace ven automáticamente la versión corregida.",
  },
]

const faqs = [
  {
    question: "¿Hacen invitaciones para eventos en Guadalajara y zona metropolitana?",
    answer:
      "Sí, atendemos toda la zona metropolitana de Guadalajara incluyendo Zapopan, Tlaquepaque, Tonalá y Tlajomulco. Nuestro servicio es 100% en línea, así que no importa en qué colonia estés — te atendemos por WhatsApp con la misma rapidez.",
  },
  {
    question: "¿Cuánto cuesta una invitación digital en Guadalajara?",
    answer:
      "Nuestros planes son de pago único: Básico $1,999 MXN, Premium $2,600 MXN y Deluxe $3,499 MXN. No hay cobros mensuales ni comisiones por invitado. El precio es el mismo para Guadalajara que para cualquier otra ciudad porque el servicio es digital.",
  },
  {
    question: "¿Pueden incluir mapa de ubicación del salón de eventos?",
    answer:
      "Por supuesto. Integramos un mapa GPS interactivo con la ubicación exacta de tu evento en Guadalajara. Tus invitados solo tienen que tocarlo para abrir la navegación directa en Google Maps o Waze.",
  },
  {
    question: "¿En cuánto tiempo entregan la invitación?",
    answer:
      "En 24 horas hábiles desde que nos envías todos los datos. Te mandamos la invitación terminada por WhatsApp para que la revises, apruebes y comiences a compartir con tus invitados.",
  },
  {
    question: "¿Puedo solicitar un diseño con temática de hacienda o mexicano?",
    answer:
      "Claro. Tenemos experiencia diseñando invitaciones con motivos de hacienda jalisciense, estilo ranchero elegante, temática mexicana con papel picado y cualquier otro concepto que tengas en mente. Cuéntanos tu idea y la hacemos realidad.",
  },
  {
    question: "¿Cómo les envío los datos de mi evento?",
    answer:
      "Solo escríbenos por WhatsApp. Te pedimos fecha, hora, lugar, nombre(s) del festejado(a) y cualquier detalle especial. Con eso diseñamos tu boceto gratis en menos de 5 minutos para que veas cómo quedará.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Invitaciones Digitales Guadalajara",
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
  areaServed: { "@type": "City", name: "Guadalajara" },
  description:
    "Invitaciones digitales para bodas, XV años y eventos en Guadalajara con RSVP automático y entrega en 24 horas.",
  url: "https://invitacionesdigitalesmty.com.mx/guadalajara",
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

export default function InvitacionesDigitalesGuadalajaraPage() {
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
                Servicio 100% en línea desde Monterrey para Guadalajara
              </span>
            </div>

            <h1
              className="font-serif font-bold leading-[0.88] tracking-tight text-foreground mb-12"
              style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}
            >
              Invitaciones<br />
              Digitales<br />
              <em className="italic text-primary">Guadalajara</em>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-border pt-10">
              <div className="flex flex-col gap-8 max-w-md">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  La Perla Tapatía se vive con mariachi, tradición y celebraciones que se recuerdan para siempre. Diseñamos invitaciones digitales con el alma de Jalisco — te atendemos por WhatsApp, las entregamos en 24 horas y el primer boceto va por nuestra cuenta.
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
                    Solicita tu boceto gratis
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
              Celebra con estilo tapatío, invita con tecnología
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
              Guadalajara celebra en grande — tu invitación también
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Compártenos la fecha y el tipo de evento. En menos de 5 minutos recibes un boceto gratis directo a tu WhatsApp.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors"
            >
              Cotizar gratis por WhatsApp
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
