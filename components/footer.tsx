import { Instagram, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card text-foreground overflow-hidden border-t border-border">
      <div className="container mx-auto px-6 md:px-10 py-12 pb-8 max-w-6xl">
        {/* Event links */}
        <nav aria-label="Invitaciones por tipo de evento" className="mb-10">
          <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-medium mb-4">Invitaciones por evento</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-serif">
            <Link href="/invitaciones-boda" className="hover:text-primary transition-colors">Bodas</Link>
            <Link href="/invitaciones-xv-años" className="hover:text-primary transition-colors">XV Años</Link>
            <Link href="/invitaciones-baby-shower" className="hover:text-primary transition-colors">Baby Shower</Link>
            <Link href="/invitaciones-bautizo" className="hover:text-primary transition-colors">Bautizo</Link>
            <Link href="/invitaciones-cumpleanos" className="hover:text-primary transition-colors">Cumpleaños</Link>
            <Link href="/invitaciones-primera-comunion" className="hover:text-primary transition-colors">Primera Comunión</Link>
            <Link href="/invitaciones-corporativas" className="hover:text-primary transition-colors">Eventos Corporativos</Link>
          </div>
        </nav>

        {/* Blog link */}
        <div className="mb-10">
          <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-medium mb-4">Recursos</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-serif">
            <Link href="/blog" className="hover:text-primary transition-colors">Blog de invitaciones</Link>
            <Link href="/blog/tendencias-invitaciones-digitales-2025" className="hover:text-primary transition-colors">Tendencias 2026</Link>
            <Link href="/blog/guia-completa-invitaciones-bodas-2025" className="hover:text-primary transition-colors">Guía de bodas</Link>
            <Link href="/blog/cuanto-cuesta-invitacion-digital-boda-mexico" className="hover:text-primary transition-colors">¿Cuánto cuesta?</Link>
          </div>
        </div>

        {/* City links */}
        <nav aria-label="Invitaciones por ciudad" className="mb-10">
          <p className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase font-medium mb-4">Invitaciones por ciudad</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground font-serif">
            <Link href="/cdmx" className="hover:text-primary transition-colors">CDMX</Link>
            <Link href="/guadalajara" className="hover:text-primary transition-colors">Guadalajara</Link>
            <Link href="/puebla" className="hover:text-primary transition-colors">Puebla</Link>
            <Link href="/queretaro" className="hover:text-primary transition-colors">Querétaro</Link>
            <Link href="/merida" className="hover:text-primary transition-colors">Mérida</Link>
            <Link href="/tijuana" className="hover:text-primary transition-colors">Tijuana</Link>
            <Link href="/leon" className="hover:text-primary transition-colors">León</Link>
            <Link href="/cancun" className="hover:text-primary transition-colors">Cancún</Link>
            <Link href="/san-luis-potosi" className="hover:text-primary transition-colors">San Luis Potosí</Link>
            <Link href="/saltillo" className="hover:text-primary transition-colors">Saltillo</Link>
          </div>
        </nav>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
              i
            </div>
            <span className="font-serif font-bold text-foreground tracking-tight text-sm">InvitacionesDigitalesMTY</span>
          </Link>

          {/* Links */}
          <div className="flex gap-6 text-xs text-muted-foreground font-serif font-medium">
            <Link href="/terminos" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookies</Link>
            <a href="https://wa.me/528180836435?text=Hola%2C%20necesito%20soporte." target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Soporte</a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="https://www.instagram.com/invitacionesdigitalesmty.co" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.facebook.com/invitacionesdigitalesmty" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors" aria-label="Facebook">
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="tel:+528180836435" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors" aria-label="Llamar">
              <Phone className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-gray-50 text-[10px] text-gray-400 font-medium tracking-wide">
          <p className="font-serif">© 2026 InvitacionesDigitalesMTY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
