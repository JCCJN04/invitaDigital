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

const SITE_URL = "https://invitacionesdigitalesmty.com.mx"

export const metadata: Metadata = {
  title: {
    absolute: "Invitaciones Digitales para Bodas | RSVP WhatsApp | México",
  },
  description:
    "Invitaciones digitales para bodas en todo México. Diseño personalizado, RSVP automático por WhatsApp, mapa GPS, mesa de regalos, música de fondo y cuenta regresiva. Entrega en 24 h. Boceto gratis.",
  keywords: [
    "invitaciones digitales boda",
    "invitaciones de boda digitales",
    "invitaciones boda whatsapp",
    "invitaciones digitales boda monterrey",
    "invitaciones boda online",
    "invitaciones digitales boda mexico",
    "invitaciones boda con rsvp",
    "invitaciones boda digital precio",
    "save the date digital boda",
    "invitaciones boda interactivas",
  ],
  alternates: buildAlternates("/invitaciones-boda"),
  openGraph: {
    title: "Invitaciones Digitales para Bodas | Diseño Premium | México",
    description:
      "Invitaciones de boda digitales con diseño 100% personalizado, RSVP automático a WhatsApp, música, mapa GPS y entrega en 24 horas. Boceto gratis.",
    url: `${SITE_URL}/invitaciones-boda`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/boda-carlayangel.png`,
        width: 1200,
        height: 630,
        alt: "Invitación digital de boda — Invitaciones Digitales MTY",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitaciones Digitales para Bodas | México",
    description:
      "Invitaciones de boda digitales premium con RSVP automático, música y mapa interactivo. Entrega en 24 h.",
    images: [`${SITE_URL}/boda-carlayangel.png`],
  },
}

const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
  "Hola, quiero cotizar una invitación digital para mi boda. ¿Puedo ver un boceto gratis?"
)}`

const benefits = [
  {
    title: "Tu estilo, tu boda, tu invitación",
    desc: "Elegante, rústica, minimalista, bohemia, clásica, moderna — diseñamos la invitación alrededor de la estética que define a ustedes como pareja. Colores exactos, tipografía cuidada y cada detalle que hace única su boda.",
  },
  {
    title: "RSVP automático a tu WhatsApp",
    desc: "Tus invitados confirman asistencia con un solo toque y tú recibes al instante su respuesta en tu WhatsApp: nombre, número de acompañantes y restricciones alimentarias. Sin llamadas, sin Excel — todo llega solo.",
  },
  {
    title: "Misa, civil y recepción en un solo enlace",
    desc: "Incluimos todas las ubicaciones que necesites con su mapa GPS individual. Iglesia, juzgado, salón, after party — cada lugar con dirección exacta, horario y botón directo a Google Maps o Waze.",
  },
  {
    title: "Mesa de regalos sin incomodidad",
    desc: "Comparte tus tiendas favoritas, lista de regalos o datos bancarios de forma elegante y discreta dentro de la invitación. Nada de mencionar regalos en persona — todo queda a un toque de distancia.",
  },
]

const faqs = [
  {
    question: "¿Cuánto cuesta una invitación digital para boda?",
    answer:
      "Manejamos tres planes de pago único: Básico $1,999 MXN, Premium $2,600 MXN y Deluxe $3,499 MXN. El plan Básico incluye diseño personalizado (no plantilla), RSVP automático a tu WhatsApp, cuenta regresiva animada, mapa GPS interactivo y entrega en 24 horas. El plan Premium (nuestro más solicitado para bodas) agrega música de fondo, galería de hasta 15 fotos, itinerario por horas y paleta de colores para invitados. El plan Deluxe incluye video de portada, mix musical de 3 canciones, galería ilimitada, guía de hospedaje para foráneos y sección de padrinos. Antes de cualquier pago, te enviamos un boceto gratis personalizado.",
  },
  {
    question: "¿Cómo funciona el RSVP para bodas?",
    answer:
      "Cuando un invitado abre la invitación, verá un botón de confirmación. Al presionarlo, elige cuántos acompañantes asistirán y puede agregar notas (como restricciones alimentarias). En ese momento tú recibes una notificación instantánea en tu WhatsApp con todos los datos: nombre, número de personas confirmadas y comentarios. Sin perseguir a nadie por teléfono, sin hojas de cálculo — el sistema recopila todo automáticamente y lo puedes consultar cuando quieras.",
  },
  {
    question: "¿Pueden incluir iglesia, civil y salón en la misma invitación?",
    answer:
      "Por supuesto. Incluimos todas las ubicaciones que necesites, cada una con su mapa GPS individual, horario y botón para abrir en Google Maps o Waze directamente desde el celular del invitado. Lo más común es agregar la ceremonia religiosa, la ceremonia civil (si es en otro lugar) y la recepción. También podemos incluir el hotel sede para invitados foráneos o el after party.",
  },
  {
    question: "¿Puedo compartir la invitación con invitados ilimitados?",
    answer:
      "Sí. La invitación es un enlace web que puedes compartir por WhatsApp, mensaje de texto, Instagram, correo electrónico o cualquier otro medio. No hay límite de invitados ni de visualizaciones. Si tienes 50 o 500 invitados, el link funciona igual para todos. Tampoco cobramos por número de confirmaciones RSVP. Una vez que la invitación está lista, es tuya para compartir con quien quieras.",
  },
  {
    question: "¿Qué estilos de boda manejan?",
    answer:
      "Diseñamos para cualquier estilo: elegante clásica, rústica campestre, boho chic, minimalista moderna, glamour dorado, playa y destino, vintage, industrial, art déco, jardín inglés o cualquier concepto que tengas en mente. No usamos plantillas: cada invitación se construye desde cero alrededor de la estética de tu boda. Solo compártenos tus referencias — una foto del venue, tu paleta de colores o ejemplos que te gusten — y lo adaptamos a tu medida.",
  },
  {
    question: "¿Puedo ver un ejemplo antes de pagar?",
    answer:
      "Sí. Escríbenos por WhatsApp con los datos básicos de tu boda — nombres, fecha, estilo o colores — y en menos de 5 minutos te mandamos un boceto gratis personalizado. No es una plantilla genérica: es una propuesta real con los elementos de tu boda. Sin pago adelantado, sin compromiso. Si te convence, avanzamos con un anticipo del 50%. Si no, no hay ningún costo.",
  },
  {
    question: "¿Puedo actualizar la invitación si cambia algo?",
    answer:
      "Sí. Si cambia la fecha, el salón, el horario o cualquier otro detalle, actualizamos tu invitación sin costo adicional. El mismo enlace que ya tienen tus invitados mostrará la información actualizada automáticamente — no necesitas reenviar nada. Es una de las grandes ventajas sobre las invitaciones impresas.",
  },
  {
    question: "¿Atienden bodas fuera de Monterrey?",
    answer:
      "Sí. Aunque estamos basados en Monterrey, nuestro servicio es 100% en línea y atendemos bodas en toda la República Mexicana: CDMX, Guadalajara, Puebla, Querétaro, Mérida, Tijuana, León, Cancún, San Luis Potosí, Saltillo y cualquier otra ciudad. También hemos diseñado invitaciones para bodas destino en playa. El proceso es remoto por WhatsApp: nos compartes los detalles, diseñamos en 24-48 horas y recibes el enlace listo para compartir.",
  },
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/invitaciones-boda#service`,
  name: "Invitaciones Digitales para Bodas",
  provider: {
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
  },
  areaServed: { "@type": "Country", name: "México" },
  description:
    "Invitaciones digitales para bodas en México con diseño 100% personalizado, RSVP automático por WhatsApp, mapa GPS interactivo, mesa de regalos, música de fondo y entrega en 24 horas.",
  url: `${SITE_URL}/invitaciones-boda`,
  offers: [
    {
      "@type": "Offer",
      name: "Plan Básico Boda",
      price: 1999,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
    },
    {
      "@type": "Offer",
      name: "Plan Premium Boda",
      price: 2600,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
    },
    {
      "@type": "Offer",
      name: "Plan Deluxe Boda",
      price: 3499,
      priceCurrency: "MXN",
      availability: "https://schema.org/InStock",
      priceValidUntil: "2027-12-31",
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

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Inicio",
      item: SITE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Invitaciones Boda",
      item: `${SITE_URL}/invitaciones-boda`,
    },
  ],
}

export default function InvitacionesBodaPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
              Invitaciones
              <br />
              Digitales
              <br />
              <em className="italic text-primary">Bodas</em>
            </h1>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 border-t border-border pt-10">
              <div className="flex flex-col gap-8 max-w-md">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Su boda merece una invitación tan especial como su historia de amor. Diseñamos invitaciones 100% personalizadas con RSVP automático a WhatsApp, mapa GPS interactivo, mesa de regalos, música de fondo y cuenta regresiva. Entregamos en 24 horas y el boceto es gratis.
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
              Todo lo que tu boda necesita en un solo enlace
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
              Su boda, su invitación, su historia
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Cuéntanos sobre su boda — te mandamos un boceto personalizado gratis en menos de 5 minutos. Sin adelantos, sin compromiso.
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
