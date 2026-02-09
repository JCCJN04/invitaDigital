import { Heart, Instagram, Facebook, Twitter, Phone, MapPin, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-[#1c1917] text-[#f3eee8]">
      <div className="container mx-auto px-6 md:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-[#d4a373] rounded-full flex items-center justify-center text-[#1c1917] group-hover:scale-110 transition-transform">
                <Heart className="w-5 h-5 fill-current" />
              </div>
              <span className="font-serif font-bold text-xl text-[#f3eee8]">Invitaciones MTY</span>
            </Link>
            <p className="text-[#a8a29e] text-sm leading-relaxed max-w-xs mb-6">
              Creamos experiencias digitales que marcan el inicio de tu nueva historia. Elegancia, tecnología y emoción en cada pixel.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/invitacionesdigitalesmty.co"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-[#44403c] hover:bg-[#d4a373] hover:border-[#d4a373] hover:text-[#1c1917] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#44403c] hover:bg-[#d4a373] hover:border-[#d4a373] hover:text-[#1c1917] rounded-full flex items-center justify-center transition-all duration-300"
                aria-label="Síguenos en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-[#d4a373]">Servicios</h4>
            <ul className="space-y-3 text-sm text-[#a8a29e]">
              <li><Link href="/invitaciones/boda" className="hover:text-[#d4a373] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#d4a373] rounded-full opacity-0 hover:opacity-100"></span>Invitaciones Boda</Link></li>
              <li><Link href="/invitaciones/xv-anos" className="hover:text-[#d4a373] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#d4a373] rounded-full opacity-0 hover:opacity-100"></span>Invitaciones XV Años</Link></li>
              <li><Link href="/invitaciones/baby-shower" className="hover:text-[#d4a373] transition-colors flex items-center gap-2"><span className="w-1 h-1 bg-[#d4a373] rounded-full opacity-0 hover:opacity-100"></span>Invitaciones Baby Shower</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-[#d4a373]">Explorar</h4>
            <ul className="space-y-3 text-sm text-[#a8a29e]">
              <li><Link href="/galeria" className="hover:text-[#d4a373] transition-colors">Galería de Diseños</Link></li>
              <li><Link href="/precios" className="hover:text-[#d4a373] transition-colors">Paquetes</Link></li>
              <li><Link href="/nosotros" className="hover:text-[#d4a373] transition-colors">Nuestra Historia</Link></li>
              <li><Link href="/blog" className="hover:text-[#d4a373] transition-colors">Consejos para Bodas</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-6 text-[#d4a373]">Contacto</h4>
            <ul className="space-y-4 text-sm text-[#a8a29e]">
              <li>
                <a href="tel:+528111230266" className="group flex items-start gap-3 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-[#d4a373] group-hover:scale-110 transition-transform" />
                  <span>+52 81 1123 0266<br /><span className="text-xs opacity-60">Lunes a Sábado 9am - 8pm</span></span>
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/528111230266"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#d4a373] group-hover:scale-110 transition-transform" />
                  <span>Atención inmediata<br /><span className="text-xs opacity-60">Vía WhatsApp</span></span>
                </a>
              </li>
              <li>
                <span className="flex items-start gap-3 text-[#a8a29e]">
                  <MapPin className="w-5 h-5 text-[#d4a373]" />
                  <span>Monterrey, Nuevo León<br /><span className="text-xs opacity-60">Servicio en todo México</span></span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#44403c] pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a8a29e]">
          <p>© 2025 Invitaciones Digitales MTY. Hecho con <Heart className="w-3 h-3 inline text-[#d4a373]" /> en Monterrey.</p>
          <div className="flex gap-6">
            <Link href="/terminos" className="hover:text-[#d4a373] transition-colors">Términos y Condiciones</Link>
            <Link href="/privacidad" className="hover:text-[#d4a373] transition-colors">Aviso de Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
