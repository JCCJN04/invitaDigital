import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contacto-form" className="py-24 bg-[#fdfcfb]">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1c1917] mb-6">
            Cotiza tu Invitación
          </h2>
          <p className="text-lg text-[#4a4a4a] max-w-2xl mx-auto">
            Cuéntanos sobre tu evento. Recibe una propuesta en menos de 1 hora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white border border-[#f3eee8] rounded-2xl p-8 shadow-sm">
            <ContactForm />
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white border border-[#f3eee8] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-serif font-bold text-[#1c1917] mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-[#d4a373] uppercase tracking-wider font-semibold mb-1">WhatsApp / Teléfono</p>
                  <a href="tel:+528111230266" className="text-xl font-medium text-[#1c1917] hover:text-[#d4a373] transition-colors">
                    +52 81 1123 0266
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#d4a373] uppercase tracking-wider font-semibold mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/invitacionesdigitalesmty.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-[#1c1917] hover:text-[#d4a373] transition-colors"
                  >
                    @invitacionesdigitalesmty.co
                  </a>
                </div>

                <div>
                  <p className="text-xs text-[#d4a373] uppercase tracking-wider font-semibold mb-1">Ubicación</p>
                  <p className="text-lg text-[#4a4a4a]">Monterrey, Nuevo León, México</p>
                </div>

                <div>
                  <p className="text-xs text-[#d4a373] uppercase tracking-wider font-semibold mb-1">Horario de Atención</p>
                  <p className="text-lg text-[#4a4a4a]">Lunes a Domingo, 9 AM - 8 PM</p>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-[#1c1917] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#d4a373]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <p className="font-serif font-bold text-lg mb-2 text-[#d4a373]">✨ Diseño d prueba gratis</p>
              <p className="text-sm text-[#e6ccb2] leading-relaxed relative z-10">
                Solicita tu cotización ahora y recibe un boceto inicial de tu invitación completamente gratis. Sin compromiso de compra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
