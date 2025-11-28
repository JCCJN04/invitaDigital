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

  const homeMenuItems = [
    { href: "#galeria", label: "Diseños" },
    { href: "#proceso", label: "Proceso" },
    { href: "#precios", label: "Precios" },
    { href: "#testimonios", label: "Testimonios" },
    { href: "#contacto", label: "Contacto" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200/50" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Minimalista */}
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-[#1f2937]">Invitaciones MTY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button 
                className="flex items-center gap-1 text-gray-600 hover:text-[#1e3a8a] transition-colors text-sm font-medium"
                aria-expanded={isServicesOpen}
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-[#1e3a8a] transition-colors"
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
                className="text-gray-600 hover:text-[#1e3a8a] transition-colors text-sm font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Cotizar Ahora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200/50 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-1 pt-4">
              {/* Services Section */}
              <div className="py-2">
                <span className="text-xs text-gray-400 uppercase tracking-wide px-2">Servicios</span>
                {serviceItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block text-gray-600 hover:text-[#1e3a8a] transition-colors text-sm font-medium py-2 px-2"
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
                  className="text-gray-600 hover:text-[#1e3a8a] transition-colors text-sm font-medium py-2 px-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg text-sm font-semibold mt-4 w-full transition-all" asChild>
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