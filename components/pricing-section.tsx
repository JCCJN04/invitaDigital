"use client"

const plans = [
  {
    name: "Básico",
    price: "$1,999",
    tagline: "Todo lo esencial para impresionar",
    features: [
      "Hasta 8 fotos de alta calidad",
      "Ubicación GPS interactiva",
      "Mesa de regalos",
      "2 rondas de revisión",
      "Enlace único para compartir",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "$2,600",
    tagline: "El favorito — elegido por 7 de cada 10 clientes",
    features: [
      "Todo lo del plan Básico",
      "Hasta 16 fotos",
      "5 secciones interactivas",
      "Animaciones elegantes",
      "Música personalizada",
      "Código QR",
      "4 rondas de revisión",
    ],
    popular: true,
  },
  {
    name: "Deluxe",
    price: "$3,499",
    tagline: "Para el evento que merece lo mejor",
    features: [
      "Todo lo del plan Premium",
      "Galería de hasta 40 fotos",
      "Secciones ilimitadas",
      "Mix musical (3 canciones)",
      "Revisiones ilimitadas",
      "Prioridad en entrega",
    ],
    popular: false,
  },
]

export function PricingSection() {
  const getWhatsappUrl = (planName: string) => {
    const message = `Hola, me interesa el plan *${planName}*. ¿Podrían darme más detalles?`
    return `https://wa.me/528180836435?text=${encodeURIComponent(message)}`
  }

  return (
    <section id="precios" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Header */}
        <div className="mb-16 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-10 bg-primary" />
            <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
              Paquetes
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] max-w-lg">
              Planes con precio único
            </h2>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Sin mensualidades ni costos ocultos. Pagas una vez, la invitación es tuya para siempre — disponible por 12 meses.
            </p>
          </div>
        </div>

        {/* Plans — boutique menu style */}
        <div className="divide-y divide-border">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`py-10 md:py-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-16 animate-fade-in-up ${
                plan.popular ? "relative" : ""
              }`}
              style={{ animationDelay: `${index * 120}ms`, opacity: 0, animationFillMode: "forwards" }}
            >
              {/* Popular indicator */}
              {plan.popular && (
                <div className="absolute -left-3 top-10 hidden md:flex items-center gap-2">
                  <div className="w-1.5 h-16 bg-primary rounded-full" />
                </div>
              )}

              <div className="md:pl-6">
                {/* Plan name + badge */}
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                    {plan.name}
                  </h3>
                  {plan.popular && (
                    <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-primary border border-primary/40 px-3 py-1 rounded-full">
                      Recomendado
                    </span>
                  )}
                </div>

                <p className="text-sm text-muted-foreground mb-6">{plan.tagline}</p>

                {/* Features inline */}
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {plan.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price + CTA */}
              <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-center gap-4 md:gap-6 md:min-w-[180px]">
                <div className="text-right">
                  <p className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-none">
                    {plan.price}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">MXN</p>
                </div>
                <a
                  href={getWhatsappUrl(plan.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button
                    className={`px-6 py-3 text-xs font-bold tracking-widest uppercase transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary-hover"
                        : "border border-foreground/30 text-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    Elegir
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <p className="text-center text-sm text-muted-foreground">
            Pagas 50% para iniciar, el resto hasta que apruebes el diseño. Sin riesgo.
          </p>
          <p className="text-center text-sm text-muted-foreground">
            ¿Tienes dudas? Escríbenos por{" "}
            <a
              href="https://wa.me/528180836435"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2 hover:text-primary transition-colors"
            >
              WhatsApp
            </a>{" "}
            y te asesoramos gratis.
          </p>
        </div>
      </div>
    </section>
  )
}
