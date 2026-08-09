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
const BUSINESS_PHONE = "+52 81 8083 6435"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Invitaciones Digitales México | Bodas, XV Años y Eventos",
    template: `%s | ${BUSINESS_NAME}`,
  },
  description:
    "Invitaciones digitales para bodas, XV años y eventos en todo México. Diseño personalizado, RSVP automático por WhatsApp y entrega en 24 h. Boceto gratis.",
  keywords: [
    "invitaciones digitales mexico",
    "invitaciones digitales monterrey",
    "invitaciones digitales boda",
    "invitaciones digitales xv años",
    "invitaciones de boda digitales",
    "invitaciones digitales cdmx",
    "invitaciones digitales guadalajara",
    "invitaciones digitales puebla",
    "invitaciones digitales online",
    "save the date digital mexico",
    "invitaciones web boda",
    "invitaciones interactivas whatsapp",
    "diseño de invitaciones premium",
    "invitaciones digitales para eventos",
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
    title: "Invitaciones Digitales México | Bodas, XV Años y Eventos Premium",
    description:
      "Invitaciones digitales premium para bodas, XV años, bautizos y eventos en todo México. Servicio 100% en línea con entrega en 24 h.",
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
    title: "Invitaciones Digitales México | Bodas, XV Años y Eventos Premium",
    description:
      "Invitaciones digitales premium para bodas, XV años y eventos en todo México. Servicio en línea desde Monterrey.",
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
      "Diseño de invitaciones digitales premium para bodas, XV años, baby showers y eventos especiales. Servicio 100% en línea desde Monterrey para todo México.",
    url: SITE_URL,
    image: `${SITE_URL}/boda-alma-mauricio.jpg`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.png`,
      width: 200,
      height: 60,
    },
    telephone: BUSINESS_PHONE,
    email: "contacto@invitacionesdigitalesmty.com.mx",
    priceRange: "$$",
    paymentAccepted: "Credit Card, Bank Transfer",
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
        "@type": "Country",
        name: "México",
      },
      {
        "@type": "City",
        name: "Monterrey",
      },
      {
        "@type": "City",
        name: "Ciudad de México",
      },
      {
        "@type": "City",
        name: "Guadalajara",
      },
      {
        "@type": "City",
        name: "Puebla",
      },
      {
        "@type": "City",
        name: "Querétaro",
      },
      {
        "@type": "City",
        name: "Mérida",
      },
      {
        "@type": "City",
        name: "Tijuana",
      },
      {
        "@type": "City",
        name: "León",
      },
      {
        "@type": "City",
        name: "Cancún",
      },
      {
        "@type": "City",
        name: "San Luis Potosí",
      },
      {
        "@type": "City",
        name: "Saltillo",
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
      "https://www.instagram.com/invitacionesdigitalesmty.co",
    ],
  }

  // JSON-LD para Service/Product
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}#service`,
    name: "Diseño de Invitaciones Digitales en México",
    serviceType: "Diseño de Invitaciones Digitales",
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
    },
    areaServed: {
      "@type": "Country",
      name: "México",
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
            description: "Hasta 6 fotos, ubicación GPS interactiva, mesa de regalos, código de vestimenta, enlace único",
          },
          price: 1999,
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
          url: `${SITE_URL}/#precios`,
          seller: { "@type": "LocalBusiness", "@id": `${SITE_URL}#localbusiness` },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Premium - Invitación Digital",
            description: "Música de fondo, confirmación RSVP interactiva con pases, itinerario por horas, paleta de colores, hasta 15 fotos",
          },
          price: 2600,
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
          url: `${SITE_URL}/#precios`,
          seller: { "@type": "LocalBusiness", "@id": `${SITE_URL}#localbusiness` },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Plan Deluxe - Invitación Digital",
            description: "Galería ilimitada con video de portada, mix musical de 3 canciones, sección de corte de honor/chambelanes, guía de hospedaje foráneos",
          },
          price: 3499,
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
          url: `${SITE_URL}/#precios`,
          seller: { "@type": "LocalBusiness", "@id": `${SITE_URL}#localbusiness` },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complemento Encuentra tu Lugar - Buscador de Mesas Digital",
            description: "Buscador de mesas digital con código QR y plano interactivo del salón. Los invitados escanean el QR al llegar, buscan su nombre y ven su mesa asignada. Disponible como complemento de los planes Premium y Deluxe.",
          },
          price: 800,
          priceCurrency: "MXN",
          availability: "https://schema.org/InStock",
          priceValidUntil: "2027-12-31",
          url: `${SITE_URL}/#encuentra-tu-lugar`,
          seller: { "@type": "LocalBusiness", "@id": `${SITE_URL}#localbusiness` },
        },
      ],
    },
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
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
