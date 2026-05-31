import { MessageSquare } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Cuéntanos tu sueño",
    description:
      "Comparte los detalles de tu gran día: estilo, colores y la esencia que los hace únicos. Por WhatsApp o formulario.",
  },
  {
    step: "02",
    title: "Diseñamos cada detalle",
    description:
      "Creamos tu invitación a medida, cuidando cada pixel para reflejar tu personalidad y el espíritu del evento.",
  },
  {
    step: "03",
    title: "Recibe la magia en 24h",
    description:
      "Tu invitación digital lista para sorprender. Revisas, ajustas si necesitas, y apruebas cuando estés satisfecha.",
  },
  {
    step: "04",
    title: "Comparte y celebra",
    description:
      "Un clic para enviarlo por WhatsApp. Tus invitados confirman asistencia y reciben el mapa automáticamente.",
  },
]

const whatsappQuoteUrl =
  "https://wa.me/528111230266?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20mi%20boceto%20gratis%20de%20invitaci%C3%B3n%20digital.%20%C2%BFC%C3%B3mo%20empezamos%3F"

export function ProcessSection() {
  return (
    <section id="proceso" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-10 max-w-6xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 animate-fade-in-up">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
                Proceso
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] max-w-md">
              Tu invitación en 4 pasos
            </h2>
          </div>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-3 bg-[#1c1917] text-white px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-[#2c2520] transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            Iniciar ahora
          </a>
        </div>

        {/* Steps — horizontal timeline on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-6 left-[2.5rem] right-[2.5rem] h-px bg-border z-0" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${index * 120}ms`, opacity: 0, animationFillMode: "forwards" }}
              >
                {/* Step number circle */}
                <div className="w-12 h-12 rounded-full border-2 border-border bg-background flex items-center justify-center mb-8 relative z-10">
                  <span className="font-serif font-bold text-sm text-foreground">{step.step}</span>
                </div>

                <h3 className="font-serif text-lg font-bold text-foreground mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA band */}
        <div className="mt-24 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-12 animate-fade-in-up" style={{ animationDelay: "480ms", opacity: 0, animationFillMode: "forwards" }}>
          <div>
            <p className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-1">
              Boceto inicial gratis
            </p>
            <p className="text-muted-foreground text-sm">
              Sin compromiso de compra. Te mostramos cómo quedaría antes de pagar.
            </p>
          </div>
          <a
            href={whatsappQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors whitespace-nowrap"
          >
            Ver mi boceto gratis
          </a>
        </div>
      </div>
    </section>
  )
}
