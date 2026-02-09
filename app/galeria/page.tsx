"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, MessageCircle, Filter } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = [
  { id: "todos", label: "Todos" },
  { id: "bodas", label: "Bodas" },
  { id: "xv-anos", label: "XV Años" },
]

const designs = [
  {
    id: 1,
    title: "XV Años Emma & Pau",
    category: "xv-anos",
    categoryLabel: "XV Años",
    image: "/prueba.jpg",
    url: "https://invitacionesemmaypau.vercel.app/",
    style: "Elegante Pastel",
    features: ["Animaciones", "Música", "Countdown"],
    popular: true,
  },
  {
    id: 2,
    title: "Boda Alma & Mauricio",
    category: "bodas",
    categoryLabel: "Boda",
    image: "/boda-alma-mauricio.jpg",
    url: "https://boda-alma-mauricio.invitacionesdigitalesmty.com.mx/",
    style: "Romántico Elegante",
    features: ["Mapa", "Galería", "Música"],
    popular: true,
  },
]

export default function GaleriaPage() {
  const [activeFilter, setActiveFilter] = useState("todos")

  const whatsappUrl = "https://wa.me/528111230266?text=Hola,%20vi%20su%20galería%20y%20me%20gustaría%20cotizar%20una%20invitación%20digital"

  // Filtrar diseños según la categoría seleccionada
  const filteredDesigns = activeFilter === "todos"
    ? designs
    : designs.filter(design => design.category === activeFilter)

  // Contar diseños por categoría
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "todos") return designs.length
    return designs.filter(d => d.category === categoryId).length
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <Badge className="mb-6 bg-[#d4a373]/10 text-[#d4a373]">
            🎨 Portafolio
          </Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Galería de Invitaciones Digitales
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Explora nuestros diseños reales. Cada invitación es única y personalizada
            para reflejar la esencia de cada evento.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#1c1917] hover:bg-[#44403c] text-white" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar Mi Diseño
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Filters - Ahora funcionales */}
      <section className="py-8 border-b border-gray-200 sticky top-16 bg-white z-40">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            <Filter className="w-5 h-5 text-gray-400 flex-shrink-0" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${activeFilter === category.id
                    ? "bg-[#1c1917] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70">({getCategoryCount(category.id)})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          {filteredDesigns.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No hay diseños en esta categoría aún.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {filteredDesigns.map((design) => (
                <div
                  key={design.id}
                  className="group relative rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <div className="aspect-[3/4] relative bg-gray-100">
                    <Image
                      src={design.image}
                      alt={`Invitación digital ${design.categoryLabel} - ${design.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-white/90 text-gray-800 backdrop-blur-sm">
                        {design.categoryLabel}
                      </Badge>
                      {design.popular && (
                        <Badge className="bg-[#d4a373] text-[#1c1917]">
                          ⭐ Popular
                        </Badge>
                      )}
                    </div>

                    {/* View Button */}
                    <a
                      href={design.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                        <Eye className="w-5 h-5" />
                        Ver en Vivo
                      </span>
                    </a>
                  </div>

                  {/* Info */}
                  <div className="p-5 bg-white">
                    <h3 className="font-semibold text-gray-900 mb-1">{design.title}</h3>
                    <p className="text-sm text-gray-500 mb-3">{design.style}</p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2">
                      {design.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1c1917]">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            ¿Te Gustó Algún Diseño?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Podemos crear algo similar o completamente único para ti.
            Cuéntanos tu visión y la hacemos realidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-[#1c1917] hover:bg-gray-100" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Cotizar por WhatsApp
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/precios">
                Ver Precios
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Explora por Categoría
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/invitaciones/boda"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-rose-300 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-4xl mb-3">💒</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-rose-600 transition-colors">
                Invitaciones de Boda
              </h3>
              <p className="text-sm text-gray-500 mt-1">Diseños románticos y elegantes</p>
            </Link>

            <Link
              href="/invitaciones/xv-anos"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-4xl mb-3">👑</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                Invitaciones XV Años
              </h3>
              <p className="text-sm text-gray-500 mt-1">Dignos de una princesa</p>
            </Link>

            <Link
              href="/invitaciones/baby-shower"
              className="p-6 bg-white rounded-xl border border-gray-200 hover:border-sky-300 hover:shadow-lg transition-all text-center group"
            >
              <div className="text-4xl mb-3">🍼</div>
              <h3 className="font-semibold text-gray-900 group-hover:text-sky-600 transition-colors">
                Invitaciones Baby Shower
              </h3>
              <p className="text-sm text-gray-500 mt-1">Tiernos y adorables</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://invitacionesdigitalesmty.com.mx" },
              { "@type": "ListItem", position: 2, name: "Galería", item: "https://invitacionesdigitalesmty.com.mx/galeria" },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
