import { Twitter, Mail } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-white text-gray-900 overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-10 py-12 pb-8 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs">
              i
            </div>
            <span className="font-bold text-gray-900 tracking-tight text-sm">InvitacionesDigitalesMTY</span>
          </Link>

          {/* Links */}
          <div className="flex gap-6 text-xs text-gray-500 font-medium">
            <Link href="#" className="hover:text-primary transition-colors">Términos</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacidad</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-primary transition-colors">Soporte</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-gray-50 text-[10px] text-gray-400 font-medium tracking-wide">
          <p>© 2024 InvitacionesDigitalesMTY. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
