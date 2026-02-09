"use client"

import { useState, useEffect, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart, ChevronDown } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  const whatsappUrl = "https://wa.me/528111230266?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20ustedes."

  // Throttle function para optimizar rendimiento
  const throttle = useCallback((func: () => void, delay: number) => {
    let lastCall = 0
    return () => {
      const now = Date.now()
      if (now - lastCall >= delay) {
        lastCall = now
        func()
      }
    }
  }, [])

  useEffect(() => {
    const handleScroll = throttle(() => {
      setIsScrolled(window.scrollY > 50)
    }, 100) // Throttle a 100ms para mejor rendimiento

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [throttle])

  const mainMenuItems = [
    { href: "/galeria", label: "Galería", isExternal: false },
    { href: "/precios", label: "Precios", isExternal: false },
    { href: "/nosotros", label: "Nosotros", isExternal: false },
    { href: "/blog", label: "Blog", isExternal: false },
  ]

  const serviceItems = [
    { href: "/invitaciones/boda", label: "Invitaciones Boda" },
    { href: "/invitaciones/xv-anos", label: "Invitaciones XV Años" },
    { href: "/invitaciones/baby-shower", label: "Invitaciones Baby Shower" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-[#d4a373]/20" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Premium */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacitygroup">
            <div className="w-9 h-9 bg-[#1c1917] rounded-full flex items-center justify-center border border-[#d4a373]">
              <Heart className="w-4 h-4 text-[#d4a373]" />
            </div>
            <span className="hidden sm:inline text-lg font-serif font-bold text-[#1c1917]">Invitaciones MTY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className="flex items-center gap-1 text-[#4a4a4a] hover:text-[#d4a373] transition-colors text-sm font-medium tracking-wide uppercase"
                aria-expanded={isServicesOpen}
              >
                Servicios
                <ChevronDown className={`w-3 h-3 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-[#d4a373]/20 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-[#4a4a4a] hover:bg-[#f3eee8] hover:text-[#1c1917] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#4a4a4a] hover:text-[#d4a373] transition-colors text-sm font-medium tracking-wide uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#1c1917] hover:bg-[#44403c] text-white px-6 py-2 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1c1917]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-6 border-t border-[#d4a373]/20 animate-in fade-in slide-in-from-top-2 duration-300 bg-white/95 backdrop-blur-md absolute left-0 right-0 px-6 shadow-xl">
            <nav className="flex flex-col gap-2 pt-6">
              {/* Services Section */}
              <div className="py-2">
                <span className="text-xs text-[#d4a373] uppercase tracking-widest px-2 font-bold">Servicios</span>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-[#4a4a4a] hover:text-[#1c1917] transition-colors text-base font-medium py-2 px-2 border-l-2 border-transparent hover:border-[#d4a373] hover:bg-[#f3eee8]/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="border-t border-gray-100 my-2"></div>

              {/* Main Pages */}
              {mainMenuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#4a4a4a] hover:text-[#1c1917] transition-colors text-base font-medium py-2 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <Button className="bg-[#1c1917] hover:bg-[#44403c] text-white px-6 py-3 rounded-full text-base font-semibold mt-6 w-full transition-all" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Cotizar Ahora
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}