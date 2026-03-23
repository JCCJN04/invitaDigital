import { Button } from "@/components/ui/button"

export function HeroSection() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20dise%C3%B1o."

  return (
    <section className="relative overflow-hidden min-h-screen pt-40 pb-20 flex flex-col items-center justify-start bg-gradient-to-b from-[#f8fafc] to-[#ffffff]">
      {/* Subtle green glow characteristic of the screenshot */}
      <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-6 text-center z-10 max-w-5xl">
        {/* Top badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms", opacity: 0 }}>
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-[#e0f8eb] text-[10px] font-bold tracking-[0.2em] text-[#008a39] uppercase">
            INVITACIONES DIGITALES PREMIUM
          </div>
        </div>

        {/* Headline exact copy from screenshot */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111827] mb-6 leading-[1.1] animate-fade-in-up max-w-4xl mx-auto" style={{ animationDelay: "100ms", opacity: 0 }}>
          <span className="text-primary">Invitaciones Digitales Premium</span><br className="hidden md:block" />
          para tus momentos más <br className="hidden lg:block"/> importantes
        </h1>

        {/* Subtitle exact copy from screenshot */}
        <p className="text-base md:text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "200ms", opacity: 0 }}>
          Crea invitaciones digitales premium con RSVP automático, mapas interactivos y confirmación en tiempo real. Sorprende a tus invitados desde el primer clic.
        </p>

        <p className="text-sm md:text-base text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "250ms", opacity: 0 }}>
          Servicio especializado en Monterrey, San Pedro y toda el area metropolitana de Nuevo Leon para bodas, XV anos, bautizos y eventos sociales.
        </p>

        {/* Buttons exact copy from screenshot */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "300ms", opacity: 0 }}>
          <Button
            size="lg"
            className="h-12 px-8 rounded-full bg-primary hover:bg-[#00c050] text-white text-base font-semibold shadow-lg shadow-primary/25 transition-all w-full sm:w-auto"
            asChild
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Empezar ahora
            </a>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="h-12 px-8 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 text-base font-semibold transition-all shadow-sm w-full sm:w-auto"
            asChild
          >
            <a href="#galeria">
              Ver demostración
            </a>
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm animate-fade-in-up" style={{ animationDelay: "340ms", opacity: 0 }}>
          <a href="#precios" className="text-gray-700 hover:text-primary transition-colors">
            Ver paquetes y precios
          </a>
          <span className="text-gray-300" aria-hidden="true">|</span>
          <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">
            Resolver dudas frecuentes
          </a>
          <span className="text-gray-300" aria-hidden="true">|</span>
          <a href="#contacto-form" className="text-gray-700 hover:text-primary transition-colors">
            Solicitar cotizacion
          </a>
        </div>

        {/* Hero Image Mockups Representation from Screenshot */}
        <div className="mt-16 sm:mt-24 relative mx-auto w-full h-[250px] sm:h-[350px] md:h-[420px] flex items-end justify-center -space-x-8 animate-fade-in-up origin-bottom transform scale-[0.65] sm:scale-90 md:scale-100" style={{ animationDelay: "400ms", opacity: 0 }}>

          {/* Left Mockup */}
          <div className="relative w-64 h-[320px] bg-[#f9e0db] rounded-[2rem] border-[3px] border-[#111827] z-10 flex flex-col items-center pt-5 px-5 overflow-hidden translate-y-8 md:translate-y-0 md:rounded-b-none md:border-b-0">
            <div className="w-full flex-1 bg-white rounded-t-2xl md:rounded-b-none rounded-[1.5rem] shadow-inner border border-gray-100 flex items-center justify-center p-4">
              {/* Internal Mobile Frame */}
              <div className="w-24 h-48 bg-white border-[3px] border-gray-200 rounded-[1.5rem] shadow-sm flex flex-col p-2 items-center justify-center gap-2">
                <div className="w-full h-1/2 bg-[#f9e0db]/50 rounded mb-2"></div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full"></div>
                <div className="w-2/3 h-1.5 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Center Mockup (Taller, Prominent) */}
          <div className="relative w-80 h-[400px] bg-[#f2e6d8] rounded-[2rem] md:rounded-b-none border-[3px] md:border-b-0 border-[#111827] z-20 flex flex-col items-center pt-6 px-6 shadow-2xl overflow-hidden">
            <div className="w-full flex-1 bg-white rounded-[1.5rem] md:rounded-b-none shadow-md border border-gray-200 flex flex-col p-1 relative">
              {/* Simulate a floral real invitation inside */}
              <div className="w-full h-2/3 bg-gray-50 rounded-lg relative overflow-hidden flex items-center justify-center">
                <div className="absolute top-2 left-2 text-[#4a5e4b] opacity-20 text-4xl">🌿</div>
                <div className="w-16 h-16 border-2 border-[#d4a373] rotate-45 opacity-50 absolute"></div>
                <h3 className="font-serif italic text-lg text-gray-800 z-10">Ana & Luis</h3>
              </div>
              <div className="mt-6 px-4 space-y-2">
                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                <div className="w-full h-2 bg-gray-100 rounded-full"></div>
                <div className="w-3/4 h-2 bg-gray-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Mockup */}
          <div className="relative w-64 h-[320px] bg-[#e1f5e8] rounded-[2rem] border-[3px] border-[#111827] z-10 flex flex-col items-center pt-5 px-5 overflow-hidden translate-y-8 md:translate-y-0 md:rounded-b-none md:border-b-0">
            <div className="w-full flex-1 bg-white rounded-[1.5rem] md:rounded-b-none shadow-inner border border-gray-100 flex items-center justify-center p-4">
              {/* Internal Mobile Frame */}
              <div className="w-24 h-48 bg-[#fffbfa] border-[3px] border-[#111827] rounded-[1.5rem] shadow-md flex flex-col p-2 items-center">
                <div className="w-full h-8 bg-[#e1f5e8]/50 rounded-t-xl mb-3"></div>
                <div className="w-full h-1 bg-gray-200 rounded-full mb-1"></div>
                <div className="w-2/3 h-1 bg-gray-200 rounded-full mb-3"></div>

                <div className="w-full h-[1px] bg-gray-100 my-2"></div>
                <div className="w-10 h-10 rounded bg-[#f2e6d8]/50 mt-2"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
