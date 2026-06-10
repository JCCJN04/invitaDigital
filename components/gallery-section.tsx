"use client"

import { useState } from "react"
import Image from "next/image"

type Category = "todas" | "bodas" | "xv" | "otros"

const designs = [
  {
    id: "golden-geo",
    title: "Alma & Mauricio",
    subtitle: "Boda",
    tag: "Estilo Romántico",
    category: "bodas" as Category,
    image: "/boda-alma-mauricio.jpg",
    url: "https://boda-alma-mauricio.invitacionesdigitalesmty.com.mx/",
    bg: "bg-[#cfc8b3]",
  },
  {
    id: "citliyamed",
    title: "Citli & Yamed",
    subtitle: "Boda",
    tag: "Estilo Moderno",
    category: "bodas" as Category,
    image: "/boda-citliyamed.png",
    url: "https://www.invitacionesdigitalesmty.com.mx/citliyamed",
    bg: "bg-[#e8e0d5]",
  },
  {
    id: "carlayangel",
    title: "Carla & Ángel",
    subtitle: "Boda",
    tag: "",
    category: "bodas" as Category,
    image: "/boda-carlayangel.png",
    url: "https://www.invitacionesdigitalesmty.com.mx/carlayangel",
    bg: "bg-[#e8ddd5]",
  },
  {
    id: "classic-rose",
    title: "Emma & Pau",
    subtitle: "XV Años",
    tag: "Estilo Jardín",
    category: "xv" as Category,
    image: "/xv-emmaypau.png",
    url: "https://invitacionesemmaypau.vercel.app/",
    bg: "bg-[#fdecea]",
  },
  {
    id: "primera-comunion-victoria",
    title: "Victoria",
    subtitle: "Primera Comunión",
    tag: "",
    category: "otros" as Category,
    image: "/primera-comunion-victoria.png",
    url: "https://www.invitacionesdigitalesmty.com.mx/primera-comunion-victoria",
    bg: "bg-[#ede8f5]",
  },
  {
    id: "cumple-edgar",
    title: "Edgar",
    subtitle: "Cumpleaños",
    tag: "",
    category: "otros" as Category,
    image: "/cumple-edgar.png",
    url: "https://invitacionesdigitalesmty.com.mx/cumple-edgar",
    bg: "bg-[#d8e8d4]",
  },
  {
    id: "paula-xv",
    title: "Paula",
    subtitle: "XV Años",
    tag: "Estilo Elegante",
    category: "xv" as Category,
    image: "/xv-paula.png",
    url: "https://www.invitacionesdigitalesmty.com.mx/paulaxv",
    bg: "bg-[#e9d9d1]",
  },
  {
    id: "bautizo-mateo",
    title: "Mateo",
    subtitle: "Bautizo",
    tag: "Estilo Clásico",
    category: "otros" as Category,
    image: "/bautizo-mateo.png",
    url: "https://invitacionesdigitalesmty.com.mx/bautizo-mateo",
    bg: "bg-[#edf5ed]",
  },
  {
    id: "babyshower-liam",
    title: "Liam",
    subtitle: "Baby Shower",
    tag: "Estilo Boho Chic",
    category: "otros" as Category,
    image: "/babyshower-liam.png",
    url: "https://invitacionesdigitalesmty.com.mx/babyshower-liam",
    bg: "bg-[#f5edf0]",
  },
]

const tabs: { key: Category; label: string }[] = [
  { key: "todas", label: "Todos los diseños" },
  { key: "bodas", label: "Bodas" },
  { key: "xv", label: "XV Años" },
  { key: "otros", label: "Otros eventos" },
]

const whatsappUrls: Record<Category, string> = {
  todas:
    "https://wa.me/528180836435?text=Hola%2C%20vi%20sus%20dise%C3%B1os%20y%20me%20gustar%C3%ADa%20ver%20un%20boceto%20gratis%20para%20mi%20evento.",
  bodas:
    "https://wa.me/528180836435?text=Hola%2C%20vi%20sus%20dise%C3%B1os%20de%20boda%20y%20me%20interesa%20una%20invitaci%C3%B3n%20digital%20para%20mi%20boda.",
  xv: "https://wa.me/528180836435?text=Hola%2C%20vi%20sus%20dise%C3%B1os%20de%20XV%20a%C3%B1os%20y%20me%20interesa%20una%20invitaci%C3%B3n%20digital%20para%20los%20XV%20a%C3%B1os.",
  otros:
    "https://wa.me/528180836435?text=Hola%2C%20me%20interesa%20una%20invitaci%C3%B3n%20digital%20para%20mi%20evento.",
}

const ctaText: Record<Category, string> = {
  todas: "Quiero mi invitación",
  bodas: "Quiero invitación de boda",
  xv: "Quiero invitación XV años",
  otros: "Quiero cotizar mi evento",
}

export function GallerySection() {
  const [activeTab, setActiveTab] = useState<Category>("todas")

  const filtered =
    activeTab === "todas"
      ? designs
      : designs.filter((d) => d.category === activeTab)

  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl">

        {/* Header */}
        <div className="mb-12 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
              Portafolio
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
              Explora nuestros<br />
              <em className="italic text-primary">diseños reales</em>
            </h2>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              Cada invitación es única, creada desde cero para reflejar el estilo de cada cliente.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-2" style={{ scrollbarWidth: "none" }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 text-sm font-medium tracking-wide transition-all whitespace-nowrap rounded-full border ${
                activeTab === tab.key
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground/40 hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Empty state for "otros" */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center border border-dashed border-border rounded-3xl">
            <p className="font-serif text-2xl font-bold text-foreground mb-3">
              Próximamente
            </p>
            <p className="text-muted-foreground text-sm max-w-xs mb-8">
              Estamos cargando ejemplos de este tipo de evento. Mientras tanto, cotiza directo por WhatsApp.
            </p>
            <a
              href={whatsappUrls[activeTab]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {ctaText[activeTab]}
            </a>
          </div>
        )}

        {/* Grid */}
        {filtered.length > 0 && (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 md:gap-x-6 md:gap-y-12 items-start">
            {filtered.map((design) => (
              <div key={design.id} className="group">
                <a
                  href={design.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver invitación digital: ${design.title} — ${design.subtitle} en Monterrey`}
                  className="relative block overflow-hidden"
                >
                  {/* Image — full natural dimensions */}
                  <Image
                    src={design.image}
                    alt={`Invitación digital de ${design.subtitle} en Monterrey — ${design.title}`}
                    width={400}
                    height={700}
                    className="w-full h-auto block"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Fade bottom into page background */}
                  <div
                    className="absolute inset-x-0 bottom-0 h-24 pointer-events-none z-10"
                    style={{ background: "linear-gradient(to top, hsl(var(--background)) 20%, transparent)" }}
                  />

                  {/* Hover CTA — desktop */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                    <span className="bg-white text-foreground text-[10px] md:text-[11px] font-bold tracking-widest uppercase px-4 md:px-6 py-2.5 rounded-full shadow-lg">
                      Ver invitación
                    </span>
                  </div>
                </a>

                {/* Title below image */}
                <div className="pt-2 px-1">
                  <p className="font-serif font-semibold text-sm md:text-base text-foreground leading-tight">
                    {design.title}
                  </p>
                  <p className="text-[10px] md:text-xs text-muted-foreground tracking-widest uppercase mt-0.5">
                    {design.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA band */}
        {filtered.length > 0 && (
          <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-border pt-10 animate-fade-in-up">
            <div>
              <p className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                ¿Te gustó algún estilo?
              </p>
              <p className="text-muted-foreground text-sm mt-1">
                Diseñamos algo similar o completamente a tu medida. Boceto gratis, sin compromiso.
              </p>
            </div>
            <a
              href={whatsappUrls[activeTab]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors whitespace-nowrap"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              {ctaText[activeTab]}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
