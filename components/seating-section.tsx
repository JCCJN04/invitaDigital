"use client"

import Image from "next/image"

const steps = [
  {
    number: "01",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Escanea el QR",
    description: "Al llegar al evento, cada invitado escanea el código QR en la entrada con su celular.",
  },
  {
    number: "02",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
    ),
    title: "Busca tu nombre",
    description: "Escribe tu nombre en el buscador y al instante aparece tu mesa asignada.",
  },
  {
    number: "03",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "Encuentra tu mesa",
    description: "Ve el plano interactivo del salón con tu mesa resaltada. Sin confusiones.",
  },
]

export function SeatingSection() {
  const whatsappUrl = `https://wa.me/528180836435?text=${encodeURIComponent(
    "Hola, me interesa agregar *Encuentra tu Lugar* a mi invitación. ¿Me dan más información?"
  )}`

  return (
    <section id="encuentra-tu-lugar" className="py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
              Complemento
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05]">
                Encuentra tu Lugar
              </h2>
              <p className="text-muted-foreground text-sm mt-4 leading-relaxed max-w-md">
                Que tus invitados lleguen y encuentren su mesa en segundos.
                Sin listas impresas, sin confusión — todo desde su celular.
              </p>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary border border-primary/40 px-3 py-1.5 rounded-full self-start md:self-end whitespace-nowrap">
              Disponible en Premium y Deluxe
            </span>
          </div>
        </div>

        {/* Content: Mockup + Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Phone mockup */}
          <div
            className="relative flex justify-center animate-fade-in-up"
            style={{ animationDelay: "150ms", opacity: 0, animationFillMode: "forwards" }}
          >
            {/* Decorative glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full opacity-[0.07]"
              style={{ background: "radial-gradient(circle, var(--primary) 0%, transparent 70%)" }}
            />
            <div className="relative w-full max-w-[320px] md:max-w-[380px]">
              <Image
                src="/encuentra-tu-lugar-mockup.png"
                alt="Mockup de Encuentra tu Lugar — buscador de mesa digital para eventos"
                width={760}
                height={760}
                className="relative z-10 drop-shadow-2xl"
                priority={false}
              />
            </div>
          </div>

          {/* Steps */}
          <div
            className="flex flex-col gap-0 animate-fade-in-up"
            style={{ animationDelay: "300ms", opacity: 0, animationFillMode: "forwards" }}
          >
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-5 top-[60px] w-px h-[calc(100%-40px)] bg-border hidden md:block" />
                )}
                <div className="flex gap-6 py-6">
                  {/* Step icon circle */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground relative z-10 bg-background">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[10px] tracking-[0.2em] text-muted-foreground/60 font-medium uppercase">
                        Paso {step.number}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="mt-6 flex flex-col sm:flex-row items-start gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="px-6 py-3 text-xs font-bold tracking-widest uppercase bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
                  Agregar a mi invitación
                </button>
              </a>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-2xl font-bold text-foreground">+$800</span>
                <span className="text-xs text-muted-foreground">MXN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom feature highlights */}
        <div
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 animate-fade-in-up"
          style={{ animationDelay: "450ms", opacity: 0, animationFillMode: "forwards" }}
        >
          {[
            {
              title: "Sin app, sin descargas",
              description: "Funciona directo desde el navegador del celular. Tus invitados solo escanean y listo.",
            },
            {
              title: "Plano interactivo del salón",
              description: "Diseñamos el mapa de tu venue con la distribución real de mesas. Tu mesa se resalta automáticamente.",
            },
            {
              title: "Actualizable en tiempo real",
              description: "¿Cambios de último minuto en las mesas? Se actualiza al instante sin reimprimir nada.",
            },
          ].map((feature, i) => (
            <div key={i} className="border-t border-border pt-5">
              <h4 className="text-sm font-bold text-foreground mb-1">{feature.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
