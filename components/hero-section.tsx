import Image from "next/image"

export function HeroSection() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20dise%C3%B1o."

  return (
    <section className="relative overflow-hidden min-h-screen bg-background pt-28 md:pt-32 pb-0 flex flex-col">
      <div className="container mx-auto px-6 md:px-10 max-w-7xl flex-1 flex flex-col">

        {/* Editorial label */}
        <div className="flex items-center gap-3 mb-10 animate-fade-in-up" style={{ animationDelay: "0ms", opacity: 0 }}>
          <div className="h-px w-10 bg-primary" />
          <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
            Monterrey, Nuevo León · Invitaciones Digitales
          </span>
        </div>

        {/* Giant headline */}
        <div className="animate-fade-in-up" style={{ animationDelay: "80ms", opacity: 0 }}>
          <h1 className="font-serif font-bold leading-[0.88] tracking-tight text-foreground mb-12"
            style={{ fontSize: "clamp(3.5rem, 9vw, 7.5rem)" }}>
            Invitaciones<br />
            <em className="italic text-primary">que</em> emocionan
          </h1>
        </div>

        {/* Bottom grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 flex-1 items-end">

          {/* Left: copy + CTA + stats */}
          <div className="pb-12 lg:pb-24 animate-fade-in-up" style={{ animationDelay: "160ms", opacity: 0 }}>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-sm mb-10">
              Diseños personalizados con RSVP, música y mapas interactivos.
              Listos en 24 horas para bodas, XV años y eventos especiales.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-14">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <button className="bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors">
                  Cotizar ahora
                </button>
              </a>
              <a
                href="#galeria"
                className="inline-flex items-center gap-2 text-sm text-foreground py-4 border-b border-foreground/30 hover:border-primary hover:text-primary transition-colors"
              >
                Ver diseños <span aria-hidden="true">→</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-0 border-t border-border pt-8">
              <div className="pr-8 md:pr-10">
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">+150</p>
                <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Eventos</p>
              </div>
              <div className="border-l border-border px-8 md:px-10">
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">24h</p>
                <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Entrega</p>
              </div>
              <div className="border-l border-border px-8 md:px-10">
                <p className="font-serif text-3xl md:text-4xl font-bold text-foreground leading-none mb-1">5.0</p>
                <p className="text-[11px] text-muted-foreground tracking-[0.2em] uppercase mt-1">Calificación</p>
              </div>
            </div>
          </div>

          {/* Right: editorial image composition */}
          <div
            className="relative h-[420px] lg:h-[560px] animate-fade-in-up overflow-hidden rounded-t-[2.5rem]"
            style={{ animationDelay: "240ms", opacity: 0 }}
          >
            {/* Main image — fills most of the panel */}
            <div className="absolute inset-y-0 right-0 left-[28%] rounded-t-[2.5rem] overflow-hidden shadow-2xl">
              <Image
                src="/boda-alma-mauricio.jpg"
                alt="Invitación digital de boda en Monterrey"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            {/* Smaller card — left, offset down to avoid header clash */}
            <div className="absolute top-10 left-0 w-[36%] h-[70%] rounded-[2rem] overflow-hidden shadow-xl border-4 border-background z-10">
              <Image
                src="/paula.png"
                alt="Invitación digital XV años Monterrey"
                fill
                className="object-cover object-top"
              />
            </div>
            {/* Champagne accent */}
            <div className="absolute top-3 right-3 w-12 h-12 rounded-full bg-accent/60 z-20" />
          </div>
        </div>
      </div>
    </section>
  )
}
