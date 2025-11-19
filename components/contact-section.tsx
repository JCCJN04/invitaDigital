import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contacto-form" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1f2937] mb-4">
            Solicita tu cotización
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cuéntanos sobre tu evento. Respuesta en menos de 1 hora.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Form */}
          <div className="bg-white border border-gray-200 rounded-lg p-8">
            <ContactForm />
          </div>

          {/* Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="bg-white border border-gray-200 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-[#1f2937] mb-6">Contacto</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-600 mb-1">WhatsApp / Teléfono</p>
                  <a href="tel:+528111230266" className="text-lg font-semibold text-[#1e3a8a] hover:text-[#1e40af]">
                    +52 81 1123 0266
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Instagram</p>
                  <a
                    href="https://instagram.com/invitacionesdigitalesmty.co"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-semibold text-[#1e3a8a] hover:text-[#1e40af]"
                  >
                    @invitacionesdigitalesmty.co
                  </a>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Ubicación</p>
                  <p className="font-medium text-gray-900">Monterrey, Nuevo León, México</p>
                </div>

                <div>
                  <p className="text-sm text-gray-600 mb-1">Horario</p>
                  <p className="font-medium text-gray-900">Lunes a domingo, 9 AM - 8 PM</p>
                </div>
              </div>
            </div>

            {/* Guarantee */}
            <div className="bg-[#1e3a8a] text-white rounded-lg p-8">
              <p className="font-semibold mb-2">🎉 Diseño de prueba gratis</p>
              <p className="text-sm text-white/90 leading-relaxed">
                Solicita una cotización y recibe un boceto inicial completamente gratis. Sin compromiso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
