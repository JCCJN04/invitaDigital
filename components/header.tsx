"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Heart } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const whatsappUrl = "https://wa.me/8111230266?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20ustedes."

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
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
          <a href="#" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-[#1e3a8a] rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="hidden sm:inline text-sm font-semibold text-[#1f2937]">Invitaciones</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-[#1e3a8a] transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg text-sm font-semibold transition-all" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contáctame
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200/50 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-3 pt-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-[#1e3a8a] transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white px-6 py-2 rounded-lg text-sm font-semibold mt-2 w-full transition-all" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  Contáctame
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}