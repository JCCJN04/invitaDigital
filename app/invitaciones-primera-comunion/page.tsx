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
    absolute: "Invitaciones Primera Comunión Digital | GPS | Todo México",
  },
  description:
    "Invitaciones digitales para primera comunión en todo México. Diseño elegante y religioso, RSVP automático, GPS iglesia y recepción. Servicio en línea. Boceto gratis.",
  keywords: [
    "invitaciones primera comunion digital monterrey",
    "invitaciones digitales primera comunion",
    "invitacion comunion con rsvp monterrey",
    "invitaciones primera comunion personalizadas",
    "invitacion digital primera comunion precio",
    "invitaciones comunion whatsapp",
  ],
  alternates: buildAlternates("/invitaciones-primera-comunion"),
}

const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
  "Hola, quiero cotizar mi invitación digital. ¿Puedo ver un boceto gratis?"
)}`

const benefits = [
  {
    title: "Diseño religioso y elegante",
    desc: "Cruces, ángeles, detalles dorados y paleta en blanco — diseños que honran la solemnidad del sacramento con refinamiento y buen gusto.",
  },
  {
    title: "GPS doble incluido",
    desc: "Ponemos la ubicación de la iglesia y del salón de recepción en la misma invitación, para que los invitados lleguen a tiempo a ambos momentos del día.",
  },
  {
    title: "RSVP sin complicaciones",
    desc: "Las confirmaciones de asistencia llegan directamente a tu WhatsApp con el nombre de cada invitado. Sin llamadas, sin hojas de papel, sin seguimientos.",
  },
  {
    title: "Compártela ilimitadamente",
    desc: "Un solo link funciona para toda la lista de invitados. Sin costo adicional por persona, sin límite de envíos, sin app que descargar.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta una invitación digital para primera comunión?",
    answer:
      "Contamos con tres planes de pago único: Básico $1,999 MXN, Premium $2,600 MXN y Deluxe $3,499 MXN. El plan Básico incluye diseño religioso personalizado, RSVP automático con notificaciones a tu WhatsApp, mapa GPS de la iglesia y la recepción, cuenta regresiva animada y entrega en 24 horas. El plan Premium añade música litúrgica o de fondo y galería de fotos del niño o la niña. El plan Deluxe incorpora también mesa de regalos integrada y secciones adicionales. Antes de cualquier pago te enviamos un boceto gratis personalizado para que apruebes el diseño sin compromiso. Escríbenos por WhatsApp con los datos básicos del evento.",
  },
  {
    question: "¿Qué incluye la invitación digital de primera comunión?",
    answer:
      "La invitación incluye diseño religioso completamente personalizado con los colores, el estilo y los elementos sagrados que prefieras, RSVP automático que envía las confirmaciones directo a tu WhatsApp sin que tengas que hacer seguimiento manual, mapa GPS con las ubicaciones de la iglesia y del salón de recepción con botón directo a Google Maps o Waze, datos del niño o la niña con foto opcional, música litúrgica o clásica de fondo, y cuenta regresiva animada hasta el día del evento. Todo en un enlace compartible por WhatsApp que los invitados abren desde su celular sin descargar ninguna aplicación ni crear ninguna cuenta.",
  },
  {
    question: "¿Qué estilos religiosos tienen disponibles?",
    answer:
      "Tenemos una amplia variedad de estilos para primera comunión. El estilo clásico incluye motivos como cáliz, hostia, paloma del Espíritu Santo y cruz con detalles dorados o plateados. El estilo acuarela combina florales blancos y rosas con toques dorados para una estética más delicada y moderna. El estilo minimalista usa líneas limpias con un solo elemento religioso sutil y tipografía elegante. También hacemos versiones más elaboradas con ángeles, guirnaldas de flores y texturas de mármol. Si tienes referencias de lo que imaginas, compártelas y adaptamos el diseño exactamente a tus preferencias.",
  },
  {
    question: "¿Pueden incluir la foto del niño o la niña?",
    answer:
      "Sí, es una de las opciones más solicitadas en invitaciones de primera comunión. Integramos la foto del niño o la niña de manera elegante dentro del diseño, ya sea como elemento central o como parte de la composición visual de la invitación. Puedes enviarnos la foto que prefieras: una portrait formal, una foto espontánea o incluso una imagen ya vestido con el traje de comunión. En los planes Premium y Deluxe también puedes incluir una pequeña galería con varias fotos. Este detalle hace la invitación mucho más personal y memorable para quienes la reciben.",
  },
  {
    question: "¿En cuánto tiempo me entregan la invitación?",
    answer:
      "Entregamos en 24 horas hábiles a partir de que nos envíes todos los datos necesarios: nombre del niño o la niña, fecha y hora de la misa, nombre de la parroquia o iglesia con dirección, nombre del salón de recepción con dirección y horario, foto si deseas incluirla, y el estilo o colores que prefieres. Antes de la versión final te mandamos un boceto gratis en menos de 5 minutos para que veas el resultado y lo apruebes sin pagar nada. Una vez aprobado y realizado el pago, la invitación definitiva estará lista al siguiente día hábil.",
  },
  {
    question: "¿Pueden actualizarla si cambia el salón de recepción?",
    answer:
      "Sí, el enlace de la invitación permanece exactamente igual aunque hagamos cambios en el contenido. Si después de compartir la invitación cambia algún detalle — el salón, el horario, la dirección o cualquier otra información — lo actualizamos de inmediato en la misma invitación. Todos los invitados que ya tienen el link verán la información correcta y actualizada automáticamente la próxima vez que lo abran, sin que tengas que reenviar nada ni aclarar nada. Esto es especialmente útil cuando los cambios ocurren cercanos a la fecha del evento y ya tienes la invitación ampliamente distribuida.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://invitacionesdigitalesmty.com.mx/invitaciones-primera-comunion#service",
  name: "Invitaciones Digitales Primera Comunión",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://invitacionesdigitalesmty.com.mx#localbusiness",
  },
  areaServed: { "@type": "Country", name: "México" },
  description:
    "Invitaciones digitales para primera comunión en Monterrey con diseño religioso, RSVP automático, GPS doble y entrega en 24 horas.",
  url: "https://invitacionesdigitalesmty.com.mx/invitaciones-primera-comunion",
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

export default function PrimeraComunionPage() {
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
              Primera Comunión<br />
              <em className="italic text-primary">Monterrey</em>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-border pt-10">
              <div className="flex flex-col gap-8 max-w-md">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Honra este sacramento con una invitación que refleje su importancia. Diseño elegante y religioso, GPS a iglesia y recepción, RSVP automático — entregamos en 24 horas.
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
              Una invitación a la altura de este momento
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
              Honra este día como se merece
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Cuéntanos los detalles — iglesia, salón, fecha — y te enviamos un boceto gratis hoy mismo.
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
