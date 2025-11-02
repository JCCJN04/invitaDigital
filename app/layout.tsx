import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"
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

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "¿En qué formatos recibo mi invitación digital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Todos los planes incluyen formato digital HD optimizado para teléfono, computadora y iPad.",
        },
      },
      {
        "@type": "Question",
        name: "¿Cuánto tiempo tardan en entregar mi invitación?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "El tiempo de entrega promedio es de 24 horas. Para diseños más complejos puede tomar hasta 48 horas.",
        },
      },
      {
        "@type": "Question",
        name: "¿Puedo hacer cambios después de recibir mi diseño?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sí, dependiendo del plan que elijas: Plan Básico incluye 2 revisiones, Premium 4 revisiones, y Deluxe 8 revisiones.",
        },
      },
    ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#6258FF" />
      </head>
      <body className="font-sans antialiased">
        <GoogleAnalytics />
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
