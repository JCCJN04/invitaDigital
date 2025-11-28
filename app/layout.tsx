import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "@/components/analytics/google-analytics"
import { FacebookPixel } from "@/components/analytics/facebook-pixel"

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const SITE_URL = "https://invitacionesdigitalesmty.com.mx" // Actualiza con tu dominio
const BUSINESS_NAME = "InvitacionesDigitalesmty"
const BUSINESS_PHONE = "+52 81 1123 0266"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invitaciones Digitales Monterrey | Diseños Premium Personalizados 2025",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "🎉 Invitaciones digitales premium en Monterrey. Bodas, XV años, baby showers. ⚡ Entrega 24hrs 🌿 Eco-friendly 💰 Hasta 70% más económicas. +120 eventos exitosos. ¡Diseño gratis!",
  keywords: [
    "invitaciones digitales monterrey",
    "invitaciones digitales monterrey nl",
    "invitaciones de boda digitales",
    "invitaciones xv años digitales",
    "invitaciones baby shower digitales",
    "invitaciones digitales mexico",
    "diseño de invitaciones personalizadas",
    "invitaciones whatsapp",
    "invitaciones ecologicas",
    "invitaciones digitales economicas",
    "invitaciones para eventos monterrey",
    "invitaciones cumpleaños digitales",
    "invitaciones corporativas digitales",
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
    title: "Invitaciones Digitales Monterrey | Diseños Premium Personalizados",
    description:
      "🎉 Crea invitaciones digitales únicas en Monterrey. Bodas, XV años, baby showers. Entrega en 24hrs. Hasta 70% más económicas que invitaciones impresas. +120 clientes satisfechos.",
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
      "🎉 Invitaciones digitales personalizadas. Entrega 24hrs. Hasta 70% más económicas. +120 eventos exitosos en Monterrey.",
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
      "Diseño de invitaciones digitales personalizadas para bodas, XV años, baby showers y eventos especiales en Monterrey, NL.",
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
            description: "Hasta 8 fotos, 2 ligas, 2 revisiones, QR básico",
          },
          price: "799",
          priceCurrency: "MXN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Premium - Invitación Digital",
            description: "Hasta 16 fotos, 5 ligas, 4 revisiones, diseño 100% personalizado, animaciones",
          },
          price: "999",
          priceCurrency: "MXN",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Deluxe - Invitación Digital",
            description: "Hasta 40 fotos, ligas ilimitadas, 8 revisiones, 3 canciones",
          },
          price: "1799",
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
        name: "¿Qué son las invitaciones digitales y cómo funcionan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Las invitaciones digitales son diseños personalizados que recibes en formato digital (enlace web/liga). Puedes compartirlas por WhatsApp, email, redes sociales o cualquier plataforma. Tus invitados solo necesitan hacer clic en el enlace para ver toda la información del evento con animaciones, música, mapas interactivos y confirmar asistencia.",
        },
      },
      {
        "@type": "Question",
        name: "¿En qué formatos recibo mi invitación digital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Recibes tu invitación como una liga/URL única optimizada para verse perfecta en celulares, tablets y computadoras. También incluimos QR personalizado para imprimir si lo deseas. Todo en HD con carga rápida garantizada.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tardan en entregar mi invitación en Monterrey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Nuestro tiempo promedio de entrega es de 24 horas. Para diseños más complejos del plan Deluxe puede tomar hasta 48 horas. ¡Tenemos servicio express disponible si lo necesitas con urgencia!",
        },
      },
      {
        "@type": "Question",
        name: "¿Cómo comparto la invitación con mis invitados?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Es súper fácil. Recibes tu invitación que sería una liga la cual puedes enviar por WhatsApp (recomendado), mensaje de texto, email, Facebook, Instagram, o cualquier medio digital. Tus invitados solo hacen clic y ven tu invitación completa. También puedes imprimir el código QR.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué incluye cada plan de invitaciones digitales?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Plan Básico ($1399): hasta 8 fotos, 2 ligas, 2 revisiones. Plan Premium ($1799): hasta 16 fotos, 5 ligas, 4 revisiones, diseño 100% personalizado, animaciones, QR personalizado, 1 canción. Plan Deluxe ($2499): hasta 40 fotos, ligas ilimitadas, 8 revisiones, 3 canciones.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo hacer cambios después de recibir mi diseño?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "¡Claro que sí! Dependiendo del plan: Plan Básico incluye 2 revisiones, Premium 4 revisiones, y Deluxe 8 revisiones. Trabajamos contigo hasta que quedes 100% satisfecho con tu invitación.",
        },
      },
      {
        "@type": "Question",
        name: "¿Qué información necesitan para crear mi diseño?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Necesitamos detalles básicos como: tipo de evento, fecha, lugar, horario, colores preferidos, fotos (si deseas incluirlas), y cualquier elemento especial. Nuestro equipo te guía en todo el proceso por WhatsApp. Es muy simple y rápido.",
        },
      },
      {
        "@type": "Question",
        name: "¿Las invitaciones digitales son más económicas que las impresas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "¡Sí! Ahorras hasta 70% comparado con invitaciones físicas tradicionales. Sin gastos de impresión, sin envíos costosos, sin desperdicios. Además son eco-friendly y puedes compartirlas ilimitadamente sin costo extra.",
        },
      },
      {
        "@type": "Question",
        name: "¿Pueden crear diseños para cualquier tipo de evento en Monterrey?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "¡Absolutamente! Creamos invitaciones para bodas, XV años, baby showers, cumpleaños, graduaciones, eventos corporativos, aniversarios, bautizos, despedidas y cualquier celebración especial que tengas en mente. Cada diseño es único y personalizado.",
        },
      },
      {
        "@type": "Question",
        name: "¿Las invitaciones digitales funcionan en todos los celulares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, están optimizadas para funcionar perfectamente en iPhone, Android, tablets y computadoras. No requieren descargar ninguna app. Se adaptan automáticamente al tamaño de pantalla y funcionan con cualquier navegador moderno.",
        },
      },
      {
        "@type": "Question",
        name: "¿Ofrecen garantía de satisfacción?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "¡Por supuesto! Tenemos garantía de satisfacción 100%. Si no quedas completamente satisfecho con tu invitación, te devolvemos tu dinero. Sin preguntas, sin complicaciones. Nuestro compromiso es tu felicidad total.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo agregar música o videos a mi invitación digital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, los planes Premium y Deluxe incluyen música de fondo personalizada. El plan Deluxe te permite hasta 3 canciones. También podemos integrar videos cortos en tu invitación para hacerla aún más especial y memorable.",
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
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
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
        <meta name="theme-color" content="#1e3a8a" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
