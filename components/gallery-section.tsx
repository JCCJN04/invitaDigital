"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor } from "lucide-react"

const categories = ["Todos", "Bodas", "XV Años", "Baby Shower", "Cumpleaños", "Corporativos"]

const designs = [
  /*
  {
    id: 1,
    title: "Elegancia Dorada",
    category: ["Todos", "Bodas"],
    image: "/placeholder.svg?height=400&width=300",
    popular: true,
  },
  {
    id: 2,
    title: "Princesa Rosa",
    category: ["Todos", "XV Años"],
    image: "/placeholder.svg?height=400&width=300",
    popular: false,
  },
  {
    id: 3,
    title: "Dulce Espera",
    category: ["Todos", "Baby Shower"],
    image: "/placeholder.svg?height=400&width=300",
    popular: true,
  },*/
  {
    id: "live-preview",
    title: "XV Años Emma&pau",
    category: ["Todos", "XV Años"], // Ahora pertenece a 'Todos' y 'XV Años'
    image: "/prueba.jpg",
    url: "https://invitacionesemmaypau.vercel.app/",
    popular: false,
  }/*,
  {
    id: 4,
    title: "Fiesta Tropical",
    category: ["Todos", "Cumpleaños"],
    image: "/placeholder.svg?height=400&width=300",
    popular: false,
  },
  {
    id: 5,
    title: "Profesional Moderno",
    category: ["Todos", "Corporativos"],
    image: "/placeholder.svg?height=400&width=300",
    popular: false,
  },
  {
    id: 6,
    title: "Romance Vintage",
    category: ["Todos", "Bodas"],
    image: "/placeholder.svg?height=400&width=300",
    popular: true,
  },*/
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todos")

  const filteredDesigns =
    activeCategory === "Todos"
      ? designs
      : designs.filter((design) => design.category.includes(activeCategory))

  return (
    <section id="galeria" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-800 mb-6">Diseños que Inspiran</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Explora nuestra colección de invitaciones digitales premium, cada una diseñada para hacer tu evento
            inolvidable
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-3 sm:px-6 sm:py-2 text-sm sm:text-base ${
                  activeCategory === category
                    ? "bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                    : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDesigns.map((design) => (
            <div key={design.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover-lift">
              
              {design.id === "live-preview" ? (
                // Enlaza toda la tarjeta al sitio web de muestra
                <a href={design.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                  {/* Badge */}
                  {design.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-[#D4AF37] text-white">Más Popular</Badge>
                  )}

                  {/* Imagen de previsualización */}
                  <div className="relative overflow-hidden">
                    <img
                      src={design.image || "/placeholder.svg"}
                      alt={design.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>

                  {/* Contenido de la tarjeta */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{design.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {design.category.join(", ")}
                      </Badge>
                    </div>
                  </div>

                  {/* Overlay con el botón de "Ver en Vivo" */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-800 bg-transparent px-6 py-3 text-base"
                      asChild
                    >
                      <span className="flex items-center gap-2">
                        <Monitor className="w-5 h-5" />
                        Ver en Vivo
                      </span>
                    </Button>
                  </div>
                </a>
              ) : (
                // Código para los otros diseños de la galería
                <>
                  {design.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-[#D4AF37] text-white">Más Popular</Badge>
                  )}
                  <div className="relative overflow-hidden">
                    <img
                      src={design.image || "/placeholder.svg"}
                      alt={design.title}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-800">{design.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {design.category.join(", ")}
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <Button
                      variant="outline"
                      className="border-white text-white hover:bg-white hover:text-gray-800 bg-transparent px-6 py-3 text-base"
                    >
                      Vista Previa
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-white px-8 py-3 rounded-full font-semibold bg-transparent"
          >
            Ver Catálogo Completo
          </Button>
        </div>
      </div>
    </section>
  )
}