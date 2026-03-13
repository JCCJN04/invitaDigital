"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

const designs = [
  {
    id: "classic-rose",
    title: "Classic Rose",
    image: "/prueba.jpg", // Using existing placeholder images
    url: "https://invitacionesemmaypau.vercel.app/",
    bg: "bg-[#fdecea]"
  },
  {
    id: "golden-geo",
    title: "Golden Geo",
    image: "/boda-alma-mauricio.jpg",
    url: "https://boda-alma-mauricio.invitacionesdigitalesmty.com.mx/",
    bg: "bg-[#cfc8b3]"
  },
]

export function GallerySection() {
  return (
    <section id="galeria" className="py-24 bg-[#fafafa] relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111827] mb-2">
              Explora nuestras plantillas
            </h2>
            <p className="text-gray-500 font-light text-lg">
              Diseños armados profesionalmente para cada estilo de evento.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-primary transition-colors text-gray-400">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 hover:text-primary transition-colors text-gray-400">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Gallery Horizontal Scroll layout */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x scrollbar-hide" style={{ scrollbarWidth: "none" }}>
          {designs.map((design) => (
            <a
              key={design.id}
              href={design.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex-none w-[280px] md:w-[320px] aspect-[4/6] rounded-[2rem] overflow-hidden snap-center transition-transform hover:scale-[1.02] shadow-sm hover:shadow-xl"
            >
              <div className={`absolute inset-0 ${design.bg}`}></div>
              {/* Inner card representing the digital invitation */}
              <div className="absolute inset-x-8 top-12 bottom-0 bg-white rounded-t-xl shadow-2xl overflow-hidden border border-gray-100">
                <Image
                  src={design.image}
                  alt={`Invitación digital diseño ${design.title}`}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                />
                {/* Overlaid transparent button on hover */}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-white/90 px-4 py-2 rounded-full text-xs font-bold text-gray-900 shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    Ver Plantilla
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
