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
  isScrolled ? "bg-gradient-to-b from-white via-white/98 to-white/95 backdrop-blur-xl shadow-2xl border-b border-[#d8d5f0]/60" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6258FF] to-[#ff8dc7] rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-serif font-bold text-brand-gradient">InvitacionesDigitalesMty</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-gray-700 hover:text-[#6258FF] transition-all duration-300 font-medium px-3 py-2 text-sm group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#6258FF] to-[#ff8dc7] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] hover:shadow-lg hover:shadow-[#6258FF]/50 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:-translate-y-0.5" asChild>
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
          <div className="md:hidden mt-4 pb-6 border-t border-gray-200/50 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col space-y-3 mt-6">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-700 hover:text-[#6258FF] transition-all duration-300 font-medium py-2 text-base hover:pl-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button className="bg-gradient-to-r from-[#6258FF] via-[#7e6bff] to-[#ff8dc7] hover:shadow-lg text-white px-8 py-3 rounded-full font-semibold mt-4 text-base w-full transition-all duration-300" asChild>
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