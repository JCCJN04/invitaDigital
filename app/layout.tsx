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
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}#localbusiness`,
    name: BUSINESS_NAME,
    description:
      "Diseño de invitaciones digitales premium para bodas, XV años, baby showers y eventos especiales en Monterrey, NL.",
    url: SITE_URL,
    image: `${SITE_URL}/boda-alma-mauricio.jpg`,
    logo: `${SITE_URL}/logo.png`,
    telephone: BUSINESS_PHONE,
    email: "",
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
      latitude: "25.68660",
      longitude: "-100.31610",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "14:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/invitacionesdigitalesmty",
      "https://www.instagram.com/invitacionesdigitalesmty",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: 6,
      bestRating: "5",
      worstRating: "1",
    },
    review: [
      {
        "@type": "Review",
        author: { "@type": "Person", name: "María González" },
        datePublished: "2024-12-15",
        reviewBody: "¡Increíble servicio! La invitación quedó exactamente como la imaginé. Todos mis invitados quedaron encantados con el diseño interactivo. La mejor inversión para nuestra boda en Monterrey.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Ana Rodríguez" },
        datePublished: "2024-11-28",
        reviewBody: "El proceso fue súper fácil y rápido. En menos de 24 horas tenía mi invitación perfecta con animaciones hermosas. ¡Totalmente recomendado!",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Carlos Mendoza" },
        datePublished: "2024-11-10",
        reviewBody: "Excelente atención al cliente y diseños hermosos. La invitación digital fue un éxito total en nuestro baby shower.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Sandra Castillo" },
        datePublished: "2024-10-22",
        reviewBody: "Calidad premium a precio increíble. El diseño superó mis expectativas y el proceso fue muy profesional.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Roberto Salinas" },
        datePublished: "2024-10-05",
        reviewBody: "Diseño espectacular con QR personalizado. Todos nuestros invitados confirmaron asistencia digital.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      },
      {
        "@type": "Review",
        author: { "@type": "Person", name: "Lucia Fernández" },
        datePublished: "2024-09-18",
        reviewBody: "¡Me encantó! La invitación para el cumpleaños de mi hijo quedó hermosa. El equipo fue super atento.",
        reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
      },
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
    areaServed: {
      "@type": "City",
      name: "Monterrey",
    },
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
    <html lang="es" className={`${playfair.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1c1917" />
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
