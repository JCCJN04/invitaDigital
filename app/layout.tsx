import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import "./globals.css"

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

export const metadata: Metadata = {
  title: "Invitaciones Digitales que Enamoran | Diseños Personalizados",
  description:
    "Crea momentos únicos con invitaciones digitales personalizadas. Eco-friendly, entrega instantánea y hasta 70% más económicas. ¡Ver diseños exclusivos!",
  generator: "v0.dev",
  keywords: "invitaciones digitales, invitaciones personalizadas, bodas, XV años, baby shower, cumpleaños",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
