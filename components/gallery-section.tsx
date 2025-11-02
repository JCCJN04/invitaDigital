"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Monitor, Eye } from "lucide-react"
import { ImageModal } from "./image-modal"

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
  },
  {
    id: "boda-alma-mauricio",
    title: "Boda Alma & Mauricio",
    category: ["Todos", "Bodas"],
    image: "/boda-alma-mauricio.jpg",
    url: "https://boda-alma-mauricio.invitacionesdigitalesmty.com.mx/",
    popular: true,
    description: "Invitación de boda elegante con diseño romántico y detalles personalizados",
  },
]

export function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("Todos")
  const [selectedDesign, setSelectedDesign] = useState<typeof designs[0] | null>(null)

  const filteredDesigns =
    activeCategory === "Todos" ? designs : designs.filter((design) => design.category.includes(activeCategory))

  return (
    <section id="galeria" className="py-24 bg-gradient-to-b from-white via-[#f4f2ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6258FF]/12 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-20 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">Diseños que Inspiran</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explora nuestra colección de invitaciones digitales premium, cada una diseñada para hacer tu evento inolvidable
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2 sm:px-7 sm:py-3 text-sm sm:text-base font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] hover:shadow-lg hover:shadow-[#6258FF]/50 text-white shadow-lg"
                    : "border-2 border-[#6258FF] text-[#6258FF] hover:bg-[#6258FF] hover:text-white hover:border-[#6258FF] transform hover:scale-105"
                }`}
                style={{
                  animation: `slideInUp 0.5s ease-out ${index * 0.05}s both`,
                }}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {filteredDesigns.map((design, index) => (
            <div
              key={design.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-[#ece9ff] hover:border-[#6258FF]/40"
              style={{
                animation: `scaleIn 0.5s ease-out ${index * 0.1}s both`,
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#6258FF]/6 via-transparent to-[#ff8dc7]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"></div>

              {(design.id === "live-preview" || design.id === "boda-alma-mauricio") ? (
                // Enlaza toda la tarjeta al sitio web de muestra
                <>
                  <a href={design.url} target="_blank" rel="noopener noreferrer" className="block w-full h-full relative">
                    {/* Badge */}
                    {design.popular && (
                      <Badge className="absolute top-4 left-4 z-30 bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] text-white shadow-lg">
                        ⭐ Más Popular
                      </Badge>
                    )}

                    {/* Imagen de previsualización */}
                    <div className="relative overflow-hidden">
                      <img
                        src={design.image || "/placeholder.svg"}
                        alt={design.title}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
                    </div>

                    {/* Contenido de la tarjeta */}
                    <div className="p-6 relative">
                      <div className="flex flex-col gap-3">
                        <h3 className="text-xl font-semibold text-[#1f1c4f] group-hover:text-[#6258FF] transition-colors">{design.title}</h3>
                        <p className="text-sm text-gray-600">{design.description}</p>
                        <Badge variant="secondary" className="text-xs w-fit bg-gradient-to-r from-[#6258FF]/12 to-[#ff8dc7]/16 text-[#433d7d] border-0">
                          {design.category.filter(c => c !== "Todos").join(", ")}
                        </Badge>
                      </div>
                    </div>

                    {/* Overlay con el botón de "Ver en Vivo" */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 z-20 pointer-events-none">
                      <div className="pointer-events-auto">
                        <Button
                          className="border-white bg-white/20 text-white hover:bg-white hover:text-[#111033] backdrop-blur px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
                        >
                          <Monitor className="w-5 h-5" />
                          Ver en Vivo
                        </Button>
                      </div>
                    </div>
                  </a>
                </>
              ) : (
                // Código para los otros diseños de la galería - con modal
                <div
                  className="block w-full h-full relative z-10 cursor-pointer"
                  onClick={() => setSelectedDesign(design)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault()
                      setSelectedDesign(design)
                    }
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label={`Ver diseño ${design.title}`}
                >
                  {design.popular && (
                    <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] text-white shadow-lg">
                      ⭐ Más Popular
                    </Badge>
                  )}
                  <div className="relative overflow-hidden">
                    <img
                      src={design.image || "/placeholder.svg"}
                      alt={design.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500"></div>
                  </div>
                  <div className="p-6 relative z-10">
                    <div className="flex flex-col gap-3">
                      <h3 className="text-xl font-semibold text-[#1f1c4f] group-hover:text-[#6258FF] transition-colors">
                        {design.title}
                      </h3>
                      <p className="text-sm text-gray-600">{design.description}</p>
                      <Badge
                        variant="secondary"
                        className="text-xs w-fit bg-gradient-to-r from-[#6258FF]/12 to-[#ff8dc7]/16 text-[#433d7d] border-0"
                      >
                        {design.category.filter((c) => c !== "Todos").join(", ")}
                      </Badge>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-8 z-20">
                    <Button className="border-white bg-white/20 text-white hover:bg-white hover:text-[#111033] backdrop-blur px-8 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-110 flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Vista Previa
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <a
            href="https://wa.me/8111230266?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20el%20cat%C3%A1logo%20completo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="border-2 border-[#6258FF] bg-white text-[#6258FF] hover:bg-gradient-to-r hover:from-[#6258FF] hover:via-[#7e6bff] hover:to-[#ff8dc7] hover:text-white px-10 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Catálogo Completo por WhatsApp
            </Button>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selectedDesign && (
        <ImageModal
          isOpen={!!selectedDesign}
          onClose={() => setSelectedDesign(null)}
          imageSrc={selectedDesign.image || "/placeholder.svg"}
          imageAlt={selectedDesign.title}
          title={selectedDesign.title}
          category={selectedDesign.category.filter((c) => c !== "Todos").join(", ")}
        />
      )}
    </section>
  )
}