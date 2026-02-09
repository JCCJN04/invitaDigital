import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart, Sparkles } from "lucide-react"

export function HeroSection() {
  const whatsappUrl = "https://wa.me/528111230266?text=Hola%2C%20me%20gustar%C3%ADa%20solicitar%20un%20dise%C3%B1o."

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center pt-20 pb-20">
      {/* Background with Premium Animated Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#fdfcfb] via-[#f3eee8] to-[#e6ccb2]/30 -z-20"></div>

      {/* Decorative Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#d4a373]/10 rounded-full blur-[100px] -z-10 animate-pulse delay-1000"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#ffb5a7]/10 rounded-full blur-[100px] -z-10 animate-pulse"></div>

      <div className="container mx-auto px-6 md:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in-up">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/50 border border-[#d4a373]/20 shadow-sm backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-[#d4a373]"></span>
              <span className="text-xs font-medium tracking-wide text-[#4a4a4a] uppercase">Tendencia Bodas 2025-2026</span>
            </div>

            <h1 className="text-4xl md:text-7xl font-serif font-bold text-[#1c1917] mb-6 leading-tight animate-fade-in-up">
              Tu Historia de Amor Comienza con una <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a373] to-[#ffb5a7] animate-gradient">Invitación Inolvidable</span>
            </h1>

            <p className="text-xl md:text-2xl text-[#4a4a4a] mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              Sorprende a tus invitados con una experiencia digital elegante, única y diseñada para emocionar desde el primer clic.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="h-14 px-8 rounded-full bg-[#1c1917] hover:bg-[#44403c] text-white text-base font-medium shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                asChild
              >
                <a href="#galeria" className="flex items-center gap-2">
                  Ver Colección Premium
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border border-[#d4a373] text-[#1c1917] hover:bg-[#d4a373]/10 text-base font-medium transition-all duration-300"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Crear Mi Diseño
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 rounded-full border border-[#1c1917]/10 hover:border-[#d4a373] text-[#1c1917] hover:text-[#d4a373] text-base font-medium transition-all duration-300 backdrop-blur-sm animate-fade-in-up delay-200"
                asChild
              >
                <a href="#muestras">
                  Ver Muestras Reales
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8 border-t border-[#d4a373]/20 pt-8 max-w-lg mx-auto lg:mx-0">
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4a373] text-[#d4a373]" />
                  ))}
                </div>
                <p className="text-sm text-[#4a4a4a]"><span className="font-bold">120+</span> Novias Felices</p>
              </div>
              <div className="w-px h-10 bg-[#d4a373]/30"></div>
              <div className="flex flex-col items-center lg:items-start">
                <div className="flex items-center gap-2 text-[#4a4a4a] font-serif italic text-lg">
                  <Heart className="w-4 h-4 text-[#ffb5a7] fill-[#ffb5a7]" />
                  100% Personalizado
                </div>
              </div>
            </div>
          </div>

          {/* Visual Element (Mockup Placeholder with Glass Effect) */}
          <div className="flex-1 relative w-full max-w-md lg:max-w-full">
            <div className="relative z-10 mx-auto aspect-[9/16] w-full max-w-[320px] rounded-[2.5rem] overflow-hidden border-8 border-white shadow-[0_20px_50px_rgba(212,163,115,0.3)] bg-white">
              {/* Simulated Phone Screen Content */}
              <div className="absolute inset-0 bg-[#fafaf9] flex flex-col items-center justify-center p-6 text-center">
                <div className="w-full h-full border border-[#d4a373]/30 rounded-3xl p-4 flex flex-col items-center">
                  <span className="font-serif text-3xl text-[#1c1917] mt-12 mb-2">Ana & Carlos</span>
                  <div className="h-px w-12 bg-[#d4a373] mb-4"></div>
                  <p className="text-sm text-[#4a4a4a] uppercase tracking-widest mb-8">Nos Casamos</p>

                  {/* Decorative Image Placeholder */}
                  <div className="w-full aspect-[4/5] bg-[#f3eee8] rounded-t-full rounded-b-lg mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#d4a373]/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur shadow-sm flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-[#d4a373]" />
                      </div>
                    </div>
                  </div>

                  <Button size="sm" className="w-full rounded-full bg-[#1c1917] text-white">Confirmar Asistencia</Button>
                </div>
              </div>
            </div>

            {/* Decorative Background Elements around Phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] border border-[#d4a373]/20 rounded-full -z-10 rotate-12"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[600px] border border-[#d4a373]/20 rounded-full -z-10 -rotate-12"></div>
          </div>

        </div>
      </div>
    </section>
  )
}
