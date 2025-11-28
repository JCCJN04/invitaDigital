import { Heart, Instagram, Facebook, Twitter, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1f2937] text-white">
      <div className="container mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-white">Invitaciones MTY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Invitaciones digitales personalizadas que hacen tus eventos especiales inolvidables.
            </p>
            <div className="flex gap-3 mt-6">
              <a 
                href="https://instagram.com/invitacionesdigitalesmty.co" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 bg-white/10 hover:bg-[#1e3a8a] rounded-full flex items-center justify-center transition-colors"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 hover:bg-[#1e3a8a] rounded-full flex items-center justify-center transition-colors"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Servicios</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/invitaciones/boda" className="hover:text-white transition-colors">Invitaciones Boda</Link></li>
              <li><Link href="/invitaciones/xv-anos" className="hover:text-white transition-colors">Invitaciones XV Años</Link></li>
              <li><Link href="/invitaciones/baby-shower" className="hover:text-white transition-colors">Invitaciones Baby Shower</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Páginas</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/galeria" className="hover:text-white transition-colors">Galería</Link></li>
              <li><Link href="/precios" className="hover:text-white transition-colors">Precios</Link></li>
              <li><Link href="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+528111230266" className="hover:text-white transition-colors flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  +52 81 1123 0266
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/528111230266" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <span className="flex items-center gap-2 text-gray-500">
                  <MapPin className="w-4 h-4" />
                  Monterrey, NL, México
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Invitaciones Digitales MTY. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <Link href="/terminos" className="hover:text-white transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
