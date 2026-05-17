import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { FacebookPixel } from "@/components/analytics/facebook-pixel"

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-playfair",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

const SITE_URL = "https://invitacionesdigitalesmty.com.mx"
const BUSINESS_NAME = "Invitaciones Digitales MTY"
const BUSINESS_PHONE = "+52 81 1123 0266"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invitaciones Digitales en Monterrey | Bodas, XV Años y Eventos",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Invitaciones digitales premium en Monterrey para bodas, XV años y eventos especiales. Diseños personalizados con RSVP, mapa y confirmación por WhatsApp.",
  keywords: [
    "invitaciones digitales monterrey",
    "invitaciones de boda monterrey",
    "invitaciones xv años elegantes",
    "diseño de invitaciones premium",
    "save the date digital",
    "invitaciones web boda",
    "wedding invitations digital",
    "invitaciones interactivas",
    "invitaciones digitales mexico",
    "invitaciones para eventos monterrey",
  ],
  authors: [{ name: BUSINESS_NAME, url: SITE_URL }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    title: "Invitaciones Digitales en Monterrey | Diseños Premium",
    description:
      "Invitaciones digitales premium para bodas, XV años, bautizos y eventos en Monterrey. Diseños personalizados listos para compartir.",
    images: [
      {
        url: `${SITE_URL}/boda-alma-mauricio.jpg`,
        width: 1200,
        height: 630,
        alt: "Invitaciones Digitales MTY en Monterrey",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitaciones Digitales en Monterrey | Diseños Premium",
    description:
      "Invitaciones digitales premium para bodas, XV años y eventos especiales en Monterrey.",
    images: [`${SITE_URL}/boda-alma-mauricio.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
    languages: {
      "es-MX": SITE_URL,
      "x-default": SITE_URL,
    },
  },
  category: "business",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  // JSON-LD estructurado para LocalBusiness
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${SITE_URL}#localbusiness`,
    name: BUSINESS_NAME,
    description:
      "Diseño de invitaciones digitales premium para bodas, XV años, baby showers y eventos especiales en Monterrey, NL.",
    url: SITE_URL,
    image: `${SITE_URL}/boda-alma-mauricio.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: BUSINESS_PHONE,
    email: "contacto@invitacionesdigitalesmty.com.mx",
    priceRange: "$$",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    currenciesAccepted: "MXN",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "Nuevo León",
      postalCode: "64000",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 25.68660,
      longitude: -100.31610,
    },
    areaServed: [
      {
        "@type": "City",
        name: "Monterrey",
      },
      {
        "@type": "AdministrativeArea",
        name: "Nuevo León",
      },
      {
        "@type": "Country",
        name: "México",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "09:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/invitacionesdigitalesmty",
      "https://www.instagram.com/invitacionesdigitalesmty",
    ],
  }

  // JSON-LD para Service/Product
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}#service`,
    name: "Diseño de Invitaciones Digitales en Monterrey",
    serviceType: "Diseño de Invitaciones Digitales",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
    },
    areaServed: [
      { "@type": "City", name: "Monterrey" },
      { "@type": "AdministrativeArea", name: "Nuevo León" },
      { "@type": "Country", name: "México" },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Invitaciones Digitales",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Básico - Invitación Digital",
            description: "Hasta 8 fotos, ubicación, mesa de regalos, 2 revisiones",
          },
          price: "1999",
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Premium - Invitación Digital",
            description: "Hasta 16 fotos, 5 secciones, 4 revisiones, diseño a medida, animaciones",
          },
          price: "2600",
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Deluxe - Invitación Digital",
            description: "Galería completa (40 fotos), enlaces ilimitados, revisiones ilimitadas, 3 canciones",
          },
          price: "3499",
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2026-12-31",
        },
      ],
    },
  }

  // FAQ Schema - Sincronizado con todas las FAQs del sitio
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
    ],
  }

  // BreadcrumbList Schema para navegación estructurada
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

  // WebPage Schema
  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}#webpage`,
    url: SITE_URL,
    name: "Invitaciones Digitales en Monterrey | Bodas, XV Años y Eventos",
    isPartOf: { "@id": `${SITE_URL}#website` },
    about: { "@id": `${SITE_URL}#localbusiness` },
    inLanguage: "es-MX",
    dateModified: new Date().toISOString().split("T")[0],
  }

  // HowTo Schema — proceso de 4 pasos
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo pedir tu invitación digital en Monterrey",
    description: "Proceso de 4 pasos para obtener tu invitación digital personalizada para bodas, XV años y eventos en Monterrey.",
    totalTime: "PT48H",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "MXN",
      value: "1999",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Cuéntanos tu sueño",
        text: "Comparte los detalles de tu evento por WhatsApp: fecha, nombres, tema y estilo deseado.",
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Diseñamos tu invitación",
        text: "Creamos un diseño personalizado con tus colores, fotos y música favorita en 24-48 horas.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Revisiones y aprobación",
        text: "Recibes el diseño y solicitas cambios hasta que quede perfecto. No pagas el total hasta aprobar.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Comparte y celebra",
        text: "Obtienes tu enlace personalizado listo para compartir por WhatsApp con todos tus invitados.",
      },
    ],
  }

  // WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    inLanguage: "es-MX",
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
    },
  }

  return (
    <html lang="es-MX" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1c1917" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs.txt — AI-readable content" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <FacebookPixel />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
