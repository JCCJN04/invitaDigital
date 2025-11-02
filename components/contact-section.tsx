import { ContactForm } from "./contact-form"
import { MapPin, Phone, Instagram, Clock } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contacto-form" className="py-24 bg-gradient-to-b from-white via-[#f5f3ff] to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6258FF]/12 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-6">
            Solicita tu Cotización Gratis
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Cuéntanos sobre tu evento y te enviaremos una propuesta personalizada en minutos
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-[#ece9ff]">
            <ContactForm />
          </div>

          {/* Info Sidebar */}
          <div className="space-y-8">
            {/* Contact Info Card */}
            <div className="bg-gradient-to-br from-white to-[#f8f7ff] rounded-2xl p-8 shadow-lg border border-[#ece9ff]">
              <h3 className="text-2xl font-serif font-bold text-[#111033] mb-6">Información de Contacto</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6258FF]/15 to-[#ff8dc7]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-[#6258FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">WhatsApp / Teléfono</h4>
                    <a href="tel:+528111230266" className="text-gray-600 hover:text-[#6258FF] transition-colors">
                      +52 81 1123 0266
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Respuesta inmediata por WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6258FF]/15 to-[#ff8dc7]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Instagram className="w-6 h-6 text-[#6258FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Instagram</h4>
                    <a
                      href="https://instagram.com/invitacionesdigitalesmty.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-[#6258FF] transition-colors"
                    >
                      @invitacionesdigitalesmty.co
                    </a>
                    <p className="text-sm text-gray-500 mt-1">Síguenos para ver más diseños</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6258FF]/15 to-[#ff8dc7]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#6258FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Ubicación</h4>
                    <p className="text-gray-600">Monterrey, Nuevo León, México</p>
                    <p className="text-sm text-gray-500 mt-1">Servicio en toda el área metropolitana</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6258FF]/15 to-[#ff8dc7]/15 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Clock className="w-6 h-6 text-[#6258FF]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Horario de Atención</h4>
                    <p className="text-gray-600">Lunes a Domingo</p>
                    <p className="text-sm text-gray-500 mt-1">9:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Guarantee Badge */}
            <div className="bg-gradient-to-br from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] rounded-2xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-4">🎉 Diseño de Prueba GRATIS</h3>
              <p className="text-white/90 leading-relaxed mb-6">
                Solicita una cotización ahora y recibe un boceto inicial completamente gratis. Sin compromiso, sin
                costos ocultos.
              </p>
              <div className="flex items-center gap-2 text-white/90 text-sm">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                <span>Respuesta en menos de 1 hora</span>
              </div>
              <div className="flex items-center gap-2 text-white/90 text-sm mt-2">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">✓</div>
                <span>Asesoría personalizada incluida</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
