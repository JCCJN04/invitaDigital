import { Heart, Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-gradient-to-b from-[#0b0a1d] via-[#08071a] to-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[#6258FF]/15 to-transparent rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#ff8dc7]/12 to-transparent rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 group">
            <div className="flex items-center space-x-3 mb-6 group-hover:translate-x-1 transition-transform">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold text-brand-gradient">
                InvitacionesDigitalesmty
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed text-sm">
              Creamos invitaciones digitales únicas que hacen de tus momentos especiales recuerdos inolvidables. Diseño personalizado, entrega rápida, precios increíbles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-[#6258FF] hover:to-[#ff8dc7] transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-[#6258FF] hover:to-[#ff8dc7] transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center hover:from-[#6258FF] hover:to-[#ff8dc7] transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-8 text-white flex items-center gap-2">
              Enlaces Rápidos
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#6258FF] to-transparent group-hover:w-12 transition-all duration-300"></span>
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#galeria" className="text-gray-400 hover:text-[#c5c2ff] transition-all duration-300 flex items-center gap-2 group/link">
                  <span className="w-0 h-0.5 bg-[#6258FF] group-hover/link:w-4 transition-all duration-300"></span>
                  Diseños
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-400 hover:text-[#c5c2ff] transition-all duration-300 flex items-center gap-2 group/link">
                  <span className="w-0 h-0.5 bg-[#6258FF] group-hover/link:w-4 transition-all duration-300"></span>
                  Proceso
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-400 hover:text-[#c5c2ff] transition-all duration-300 flex items-center gap-2 group/link">
                  <span className="w-0 h-0.5 bg-[#6258FF] group-hover/link:w-4 transition-all duration-300"></span>
                  Precios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-400 hover:text-[#c5c2ff] transition-all duration-300 flex items-center gap-2 group/link">
                  <span className="w-0 h-0.5 bg-[#6258FF] group-hover/link:w-4 transition-all duration-300"></span>
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="group">
            <h3 className="text-lg font-semibold mb-8 text-white flex items-center gap-2">
              Contacto
              <span className="w-8 h-0.5 bg-gradient-to-r from-[#ff8dc7] to-transparent group-hover:w-12 transition-all duration-300"></span>
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                <Phone className="w-5 h-5 text-[#ff8dc7] group-hover/item:scale-110 transition-transform" />
                <span className="text-gray-400 text-sm">+52 81 1123 0266</span>
              </li>
              <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                <Instagram className="w-5 h-5 text-[#ff8dc7] group-hover/item:scale-110 transition-transform" />
                <span className="text-gray-400 text-sm">invitacionesdigitalesmty.co</span>
              </li>
              <li className="flex items-center space-x-3 group/item hover:translate-x-1 transition-transform">
                <MapPin className="w-5 h-5 text-[#ff8dc7] group-hover/item:scale-110 transition-transform" />
                <span className="text-gray-400 text-sm">Monterrey, NL, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
  <div className="h-px bg-gradient-to-r from-transparent via-[#6258FF]/25 to-transparent my-12"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">© 2025 InvitaDigital. Todos los derechos reservados.</p>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-gray-500 hover:text-[#c5c2ff] transition-colors duration-300 relative group/footer">
              Términos y Condiciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6258FF] group-hover/footer:w-full transition-all duration-300"></span>
            </a>
            <a href="#" className="text-gray-500 hover:text-[#c5c2ff] transition-colors duration-300 relative group/footer">
              Política de Privacidad
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6258FF] group-hover/footer:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
