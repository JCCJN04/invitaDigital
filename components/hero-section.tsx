export function HeroSection() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20dise%C3%B1o."

  return (
    <section className="relative overflow-hidden min-h-screen bg-background pt-28 md:pt-32 pb-16 flex flex-col">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl flex-1 flex flex-col justify-between">

        {/* Editorial label */}
        <div className="flex items-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <div className="h-px w-10 bg-primary" />
          <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
            Monterrey, Nuevo León · Invitaciones Digitales
          </span>
        </div>

        {/* Giant headline */}
        <div className="animate-fade-in-up" style={{ animationDelay: "80ms" }}>
          <h1 className="font-serif font-bold leading-[0.88] tracking-tight text-foreground mb-12"
            style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}>
            Invitaciones<br />
            Digitales<br />
            <em className="italic text-primary">Monterrey</em>
          </h1>
        </div>

        {/* Bottom row: copy + CTA left, stats right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 animate-fade-in-up border-t border-border pt-10" style={{ animationDelay: "160ms" }}>

          {/* Copy + CTAs */}
          <div className="flex flex-col gap-8 max-w-md">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Diseños personalizados con RSVP, música y mapas interactivos.
              Listos en 24 horas para bodas, XV años y eventos especiales.
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors"
              >
                Cotizar ahora
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 text-sm text-foreground py-4 border-b border-foreground/30 hover:border-primary hover:text-primary transition-colors"
              >
                Ver diseños <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-0 shrink-0">
            <div className="pr-8 md:pr-12">
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">+150</p>
              <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Eventos</p>
            </div>
            <div className="border-l border-border px-8 md:px-12">
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">24h</p>
              <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Entrega</p>
            </div>
            <div className="border-l border-border px-8 md:px-12">
              <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">5.0</p>
              <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Calificación</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
