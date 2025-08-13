import { Heart, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-serif font-bold">InvitacionesDigitalesmty</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Creamos invitaciones digitales únicas que hacen de tus momentos especiales recuerdos inolvidables. Diseño
              personalizado, entrega rápida, precios increíbles.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Enlaces Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#galeria" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Diseños
                </a>
              </li>
              <li>
                <a href="#proceso" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Proceso
                </a>
              </li>
              <li>
                <a href="#precios" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Precios
                </a>
              </li>
              <li>
                <a href="#testimonios" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
                  Testimonios
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-gray-300">+52 81 1123 0266</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-gray-300">hola@invitadigital.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-[#D4AF37]" />
                <span className="text-gray-300">Monterrey, Nuevo león, México</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2025 InvitaDigital. Todos los derechos reservados.</p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Términos y Condiciones
              </a>
              <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Política de Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
