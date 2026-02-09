import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Montserrat } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
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

const SITE_URL = "https://invitacionesdigitalesmty.com.mx" // Actualiza con tu dominio
const BUSINESS_NAME = "InvitacionesDigitalesmty"
const BUSINESS_PHONE = "+52 81 1123 0266"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invitaciones Digitales Monterrey | Bodas y XV Años Inolvidables",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "✨ Crea una primera impresión inolvidable. Invitaciones digitales premium para bodas y XV años en Monterrey. Diseños elegantes, animados y personalizados.",
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
    title: "Invitaciones Digitales Monterrey | Bodas y XV Años Premium",
    description:
      "✨ Crea la primera impresión perfecta para tu evento. Invitaciones digitales de lujo, animadas y personalizadas. Bodas, XV años, Baby Shower.",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`, // Deberás crear esta imagen 1200x630px
        width: 1200,
        height: 630,
        alt: "Invitaciones Digitales Premium - InvitacionesDigitalesmty",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Invitaciones Digitales Monterrey | Diseños Premium",
    description:
      "✨ Invitaciones digitales de lujo. La forma más elegante y moderna de invitar a tu evento en Monterrey.",
    images: [`${SITE_URL}/og-image.jpg`],
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
    "@id": SITE_URL,
    name: BUSINESS_NAME,
    description:
      "Diseño de invitaciones digitales premium para bodas, XV años, baby showers y eventos especiales en Monterrey, NL.",
    url: SITE_URL,
    telephone: BUSINESS_PHONE,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Monterrey",
      addressRegion: "NL",
      addressCountry: "MX",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "25.6866",
      longitude: "-100.3161",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Monterrey",
      },
      {
        "@type": "State",
        name: "Nuevo León",
      },
      {
        "@type": "Country",
        name: "México",
      },
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "09:00",
      closes: "20:00",
    },
    sameAs: ["https://www.instagram.com/invitacionesdigitalesmty.co"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "120",
      bestRating: "5",
      worstRating: "1",
    },
  }

  // JSON-LD para Service/Product
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Diseño de Invitaciones Digitales",
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: BUSINESS_PHONE,
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
          text: "El precio de las invitaciones digitales en InvitacionesDigitalesMTY varía según el plan: Plan Básico por $1,399 MXN, Plan Premium (más popular) por $1,799 MXN y Plan Deluxe por $2,499 MXN. Todos son pagos únicos sin mensualidades.",
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

  // WebSite Schema para búsqueda del sitio
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BUSINESS_NAME,
    url: SITE_URL,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/?s={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
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
      </body>
    </html>
  )
}
