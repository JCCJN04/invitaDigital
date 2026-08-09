import type { Metadata } from "next"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BenefitsSection } from "@/components/benefits-section"
import { GallerySection } from "@/components/gallery-section"
import { ProcessSection } from "@/components/process-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { SeatingSection } from "@/components/seating-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { buildAlternates } from "@/lib/seo"

import dynamic from "next/dynamic"

const WhatsAppWidget = dynamic(() => import("@/components/whatsapp-widget").then((mod) => mod.WhatsAppWidget))

const SITE_URL = "https://invitacionesdigitalesmty.com.mx"

export const metadata: Metadata = {
  title: {
    absolute: "Invitaciones Digitales Monterrey | Bodas y XV Años",
  },
  description:
    "Invitaciones digitales para bodas y XV años en Monterrey. Diseño personalizado, RSVP automático por WhatsApp y entrega en 24 h. Boceto gratis sin compromiso.",
  keywords: [
    "invitaciones digitales monterrey",
    "invitaciones digitales boda monterrey",
    "invitaciones xv años monterrey",
    "invitaciones digitales con rsvp",
    "invitaciones digitales rsvp whatsapp",
    "invitacion digital interactiva animada",
    "save the date digital boda",
    "invitaciones xv años con rsvp",
    "invitaciones baby shower digital",
    "invitaciones digitales precio monterrey",
  ],
  alternates: buildAlternates("/"),
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cuánto cuestan las invitaciones digitales en Monterrey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "El precio de las invitaciones digitales en InvitacionesDigitalesMTY varía según el plan: Plan Básico por $1,999 MXN, Plan Premium (más popular) por $2,600 MXN y Plan Deluxe por $3,499 MXN. Todos son pagos únicos sin mensualidades.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué incluyen las invitaciones digitales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Todas nuestras invitaciones incluyen: diseño personalizado (no plantilla), enlace web único, ubicación con GPS (Google Maps/Waze), confirmación de asistencia (RSVP) a WhatsApp, cuenta regresiva y galería de fotos. Los planes Premium agregan música y animaciones.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es el tiempo de entrega?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Entregamos tu invitación digital terminada en 24 a 48 horas hábiles después de recibir tu información. Contamos con servicio express (entrega mismo día) por un costo adicional sujeto a disponibilidad.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funcionan las invitaciones digitales?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Funcionan como una página web optimizada para celulares. Recibes un enlace (link) que puedes compartir ilimitadamente por WhatsApp, Facebook, Instagram o correo. Tus invitados solo dan clic para ver los detalles, ubicación y confirmar su asistencia.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen invitaciones para Bodas y XV Años?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, somos especialistas en Bodas y XV Años en Monterrey. También diseñamos para Bautizos, Baby Shower, Despedidas, Cumpleaños y Eventos Corporativos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Tienen garantía de satisfacción?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí, ofrecemos garantía de satisfacción. No realizamos el pago final hasta que apruebes el diseño (se requiere anticipo del 50% para iniciar). Incluimos rondas de cambios ilimitadas en el plan Deluxe.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cuál es la diferencia entre una invitación digital y una impresa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las invitaciones digitales son páginas web interactivas que se comparten por WhatsApp en segundos, sin costos de impresión ni envío. Incluyen mapa GPS, RSVP automático, música de fondo y galería de fotos. Se pueden actualizar si hay cambios. El costo total es menor que imprimir invitaciones físicas premium para 100 o más invitados.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo actualizar la invitación si cambian los datos del evento?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Si cambia la fecha, el salón u otro dato, actualizamos la invitación sin costo adicional. El mismo enlace que ya tienen tus invitados mostrará la información actualizada automáticamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cómo funciona el RSVP? ¿Cómo sé quién confirma asistencia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cuando un invitado confirma asistencia, recibes una notificación directa en tu WhatsApp con su nombre y número de acompañantes. El sistema recopila las confirmaciones automáticamente sin registro manual.",
      },
    },
    {
      "@type": "Question",
      name: "¿Hacen invitaciones digitales para Baby Shower, Bautizo y Primera Comunión?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Diseñamos invitaciones para Baby Shower, Bautizos, Primera Comunión, Cumpleaños, Despedidas de Soltera y Eventos Corporativos, además de Bodas y XV Años. Cada diseño se personaliza según el estilo del evento.",
      },
    },
    {
      "@type": "Question",
      name: "¿Atienden a clientes fuera de Monterrey?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sí. Atendemos clientes en toda la República Mexicana: CDMX, Guadalajara, Puebla, Querétaro, Mérida, Tijuana, León, Cancún, San Luis Potosí, Saltillo y cualquier otra ciudad. El proceso es 100% remoto por WhatsApp: compartes los detalles de tu evento, diseñamos en 24-48 horas y recibes el enlace listo para compartir.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es un save the date digital y lo ofrecen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un save the date digital es una invitación previa que se envía meses antes para que los invitados reserven la fecha. Incluye la fecha, los nombres y un diseño elegante. Sí los diseñamos como complemento para bodas y XV años.",
      },
    },
    {
      "@type": "Question",
      name: "¿Qué es Encuentra tu Lugar y cómo funciona?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Encuentra tu Lugar es un complemento digital para tu invitación que permite a tus invitados encontrar su mesa asignada al llegar al evento. Funciona así: colocas un código QR en la entrada, el invitado lo escanea con su celular, busca su nombre y ve su número de mesa junto con el plano interactivo del salón. No necesita descargar ninguna app. Está disponible como add-on (+$800 MXN) para los planes Premium y Deluxe.",
      },
    },
  ],
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
  ],
}

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "Invitaciones Digitales MTY — Cómo se ve una invitación digital",
  description:
    "Mira cómo luce una invitación digital profesional de InvitacionesDigitalesMTY: diseño personalizado, RSVP automático y cuenta regresiva animada para bodas, XV años y eventos en México.",
  thumbnailUrl: "https://www.instagram.com/p/DaCBijaRKTs/media/?size=l",
  uploadDate: "2026-07-12",
  contentUrl: "https://www.instagram.com/reel/DaCBijaRKTs/",
  embedUrl: "https://www.instagram.com/reel/DaCBijaRKTs/embed",
  publisher: {
    "@type": "Organization",
    name: "Invitaciones Digitales MTY",
    url: "https://invitacionesdigitalesmty.com.mx",
  },
}

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}#webpage`,
  url: SITE_URL,
  name: "Invitaciones Digitales Monterrey | Bodas y XV Años",
  isPartOf: { "@id": `${SITE_URL}#website` },
  about: { "@id": `${SITE_URL}#localbusiness` },
  inLanguage: "es-MX",
  datePublished: "2024-01-01",
  dateModified: "2026-07-12",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "#faq", "#beneficios"],
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }}
      />
      <main className="min-h-screen">
        <Header />
        <HeroSection />
        <BenefitsSection />
        <GallerySection />
        <ProcessSection />
        <PricingSection />
        <SeatingSection />
        <TestimonialsSection />

        <FAQSection />
        <ContactSection />
        <Footer />
        <WhatsAppWidget />
      </main>
    </>
  )
}
