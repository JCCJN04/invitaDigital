"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Eye } from "lucide-react"

const categories = ["Todos", "Bodas", "XV Años", "Baby Shower", "Cumpleaños", "Corporativos"]

const designs = [
  {
    id: "live-preview",
    title: "XV Años Emma & Pau",
    category: ["Todos", "XV Años"],
    image: "/prueba.jpg",
    url: "https://invitacionesemmaypau.vercel.app/",
    popular: true,
    description: "Diseño elegante con tonos pastel y animaciones",
    altText: "Invitación digital XV años Emma y Pau - diseño elegante tonos pastel con animaciones Monterrey",
  },
  {
    id: "boda-alma-mauricio",
    title: "Boda Alma & Mauricio",
    category: ["Todos", "Bodas"],
    image: "/boda-alma-mauricio.jpg",
    url: "https://boda-alma-mauricio.invitacionesdigitalesmty.com.mx/",
    popular: true,
    description: "Invitación de boda elegante con diseño romántico",
    altText: "Invitación digital de boda Alma y Mauricio - diseño romántico elegante Monterrey",
  },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredDesigns =
    activeCategory === "Todos" ? designs : designs.filter((design) => design.category.includes(activeCategory))

  return (
    <section id="galeria" className="py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-6">Galería de Diseños</h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto mb-10">
            Explora nuestra colección de invitaciones digitales exclusivas
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${(
                  activeCategory === category
                    ? "bg-[#1c1917] text-white shadow-md"
                    : "bg-white border border-[#e5e7eb] text-[#4a4a4a] hover:border-[#d4a373] hover:text-[#d4a373]"
                )}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredDesigns.map((design) => (
            <a
              key={design.id}
              href={design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 bg-white"
            >
              {design.popular && (
                <Badge className="absolute top-4 left-4 z-20 bg-[#d4a373] hover:bg-[#d4a373] text-[#1c1917] font-semibold border-none">
                  ★ Popular
                </Badge>
              )}

              <div className="relative overflow-hidden aspect-[4/5] bg-[#f3eee8]">
                <img
                  src={design.image}
                  alt={design.altText || design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={800}
                  height={1000}
                />

                <div className="absolute inset-0 bg-[#1c1917]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-white/90 text-[#1c1917] px-6 py-3 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    Ver Invitación
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-serif font-bold text-xl text-[#1c1917] mb-2">{design.title}</h3>
                <p className="text-sm text-[#4a4a4a] line-clamp-2">{design.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
