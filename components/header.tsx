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
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-hero-gradient rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-serif font-bold text-gray-800">InvitacionesDigitalesMty</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-6 py-2 rounded-full font-medium" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Contáctame
                </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-3 -m-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-6 mt-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#D4AF37] transition-colors font-medium py-2 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-[#D4AF37] hover:bg-[#B8941F] text-white px-8 py-4 rounded-full font-medium mt-6 text-lg" asChild>
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