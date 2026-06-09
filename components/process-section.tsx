
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
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
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
            className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary-hover transition-colors whitespace-nowrap"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Ver mi boceto gratis
          </a>
        </div>
      </div>
    </section>
  )
}
