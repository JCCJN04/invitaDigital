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
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">Galería de Invitaciones Digitales</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
            Explora nuestras creaciones personalizadas
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-[#1e3a8a] text-white"
                    : "border border-gray-300 text-gray-700 hover:border-[#1e3a8a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {filteredDesigns.map((design) => (
            <a
              key={design.id}
              href={design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-lg overflow-hidden border border-gray-200 hover:border-[#1e3a8a]/40 hover:shadow-lg transition-all"
            >
              {design.popular && (
                <Badge className="absolute top-3 left-3 z-20 bg-[#1e3a8a] text-white">
                  ⭐ Popular
                </Badge>
              )}

              <div className="relative overflow-hidden h-96 bg-gray-100">
                <img
                  src={design.image}
                  alt={design.altText || design.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </div>

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
                <Eye className="w-8 h-8 text-white mb-2" />
                <p className="text-white font-semibold">Ver en vivo</p>
              </div>

              <div className="p-4 bg-white">
                <h3 className="font-semibold text-[#1f2937]">{design.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{design.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
