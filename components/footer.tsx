import { Heart, Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">Invitaciones</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Invitaciones digitales personalizadas que hacen tus eventos especiales inolvidables.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://instagram.com/invitacionesdigitalesmty.co" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 hover:bg-[#1e3a8a] rounded-full flex items-center justify-center transition-colors">
                <Heart className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-[#1e3a8a] rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#galeria" className="hover:text-white transition-colors">Diseños</a></li>
              <li><a href="#proceso" className="hover:text-white transition-colors">Proceso</a></li>
              <li><a href="#precios" className="hover:text-white transition-colors">Precios</a></li>
              <li><a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="tel:+528111230266" className="hover:text-white transition-colors">+52 81 1123 0266</a></li>
              <li><a href="https://instagram.com/invitacionesdigitalesmty.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a></li>
              <li><p className="text-gray-500">Monterrey, NL, México</p></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 InvitaDigital. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="/terminos" className="hover:text-white transition-colors">Términos</a>
            <a href="/privacidad" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
