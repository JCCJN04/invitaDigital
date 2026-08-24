"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function HeroSection() {
  const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
    "Hola, me gustaría cotizar mi invitación digital personalizada. ¿Me pueden mostrar un boceto gratis sin compromiso?"
  )}`

  return (
    <section className="relative overflow-hidden bg-background pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 flex flex-col justify-between">
      <div className="container mx-auto px-5 sm:px-6 md:px-10 max-w-7xl">

        {/* Top Editorial Label */}
        <div className="flex items-center gap-3 mb-6 sm:mb-8 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <div className="h-px w-8 sm:w-10 bg-primary" />
          <span className="text-[10px] sm:text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
            Invitaciones Digitales Exclusivas · Monterrey & Todo México
          </span>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          {/* Left Column: Headline, Copy & Action CTAs */}
          <div className="md:col-span-7 flex flex-col space-y-6 sm:space-y-8 animate-fade-in-up">
            
            {/* Giant Editorial Headline */}
            <h1
              className="font-serif font-bold leading-[0.92] sm:leading-[0.88] tracking-tight text-foreground"
              style={{ fontSize: "clamp(2.8rem, 8vw, 8.5rem)" }}
            >
              Invitaciones<br />
              Digitales<br />
              <em className="italic text-primary">Monterrey</em>
            </h1>

            {/* Clear Value Proposition */}
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              Sorprende a tus invitados desde el primer mensaje. Diseños 100% personalizados y hechos a la medida para cada cliente, con RSVP automático a WhatsApp, música, animaciones y mapa interactivo — lista en 24 horas. Boceto gratis, sin compromiso.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <div className="flex flex-col items-stretch sm:items-start">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-7 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-all shadow-sm hover:shadow-md cursor-pointer text-center"
                >
                  <WhatsAppIcon className="w-4 h-4 fill-current flex-shrink-0" />
                  <span>Pedir mi boceto gratis</span>
                </a>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground mt-2 text-center sm:text-left tracking-wide">
                  Respuesta en menos de 5 min · Sin compromiso
                </span>
              </div>

              <a
                href="#galeria"
                className="inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-medium text-foreground py-3 sm:py-4 border-b border-foreground/30 hover:border-primary hover:text-primary transition-colors text-center"
              >
                <span>Ver diseños en vivo</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Editorial Stats Bar */}
            <div className="flex items-center gap-0 pt-4 sm:pt-6 border-t border-border/70">
              <div className="pr-5 sm:pr-8 md:pr-10">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">+150</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Eventos</p>
              </div>
              <div className="border-l border-border px-5 sm:px-8 md:px-10">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">24h</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Entrega</p>
              </div>
              <div className="border-l border-border px-5 sm:px-8 md:px-10">
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">5.0</p>
                <p className="text-[10px] sm:text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Calificación</p>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide">Pago seguro</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/></svg>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide">Diseño a tu medida</span>
              </div>
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                <span className="text-[10px] sm:text-[11px] text-muted-foreground tracking-wide">Entrega garantizada</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Phone Showcase */}
          <div className="md:col-span-5 flex justify-center md:justify-end animate-fade-in-up mt-6 md:mt-0" style={{ animationDelay: "120ms" }}>
            <Link
              href="/carlayangel"
              target="_blank"
              className="group relative block w-[270px] sm:w-[290px] rounded-3xl p-3 bg-card border border-border/80 shadow-[0_20px_50px_rgba(0,0,0,0.06)] hover:shadow-[0_25px_60px_rgba(140,58,90,0.15)] hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
              title="Haz clic para ver la invitación de Carla & Ángel"
            >
              {/* Preview Image Frame */}
                <div className="relative w-full h-[480px] sm:h-[515px] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/boda-carlayangel.png"
                    alt="Invitación digital Carla y Ángel"
                    fill
                    priority
                    sizes="(max-width: 640px) 270px, 290px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Clean Bottom Overlay */}
                  <div className="absolute inset-x-3 bottom-3 bg-background/95 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-border/60 text-center text-foreground shadow-sm group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-colors">
                    <p className="font-serif font-bold text-xs flex items-center justify-center gap-1.5">
                      <span>Boda Carla & Ángel</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </p>
                  </div>
                </div>
              </Link>
          </div>

        </div>

      </div>
    </section>
  )
}
