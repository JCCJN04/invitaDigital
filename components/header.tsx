"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const whatsappUrl = "https://wa.me/528180836435?text=Hola%2C%20me%20gustar%C3%ADa%20contactar%20con%20ustedes."

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Background Gradient overlay to hide text scrolling underneath the pill */}
      <div
        className={`fixed inset-x-0 top-0 h-32 z-40 pointer-events-none transition-opacity duration-300 ${isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        style={{
          background: 'linear-gradient(to bottom, rgba(250,248,245,1) 0%, rgba(250,248,245,0.85) 40%, rgba(250,248,245,0) 100%)'
        }}
      ></div>
      <div className="fixed top-0 w-full z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
        <header
          className={`w-full max-w-5xl rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-4 md:px-6 py-2.5 md:py-3 ${isScrolled
              ? "glass-nav"
              : "bg-card shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-border"
            }`}
        >
          {/* Logo matching the screenshot (Green Hexagon/Leaf icon abstraction) */}
          <Link href="/" className="flex items-center gap-2 group shrink-0">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm shrink-0">
              i
            </div>
            <span className="font-serif font-bold text-foreground tracking-tight text-sm md:text-base hidden sm:block">InvitacionesDigitalesMTY</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-serif font-medium text-foreground">Inicio</Link>
            <Link href="#galeria" className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors">Demos</Link>
            <Link href="#precios" className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors">Precios</Link>
            <Link href="#faq" className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors">Preguntas</Link>
            <Link href="/blog" className="text-sm font-serif font-medium text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full px-6 py-2 h-10 text-sm font-serif font-bold shadow-md shadow-primary/20 transition-all hover:shadow-lg hover:shadow-primary/30" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Crear mi invitación
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </header>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-20 inset-x-4 bg-white rounded-2xl shadow-xl border border-gray-100 p-6 flex flex-col gap-4 pointer-events-auto animate-fade-in-up md:hidden">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif font-medium text-foreground py-2">Inicio</Link>
            <Link href="#galeria" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif font-medium text-muted-foreground py-2">Demos</Link>
            <Link href="#precios" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif font-medium text-muted-foreground py-2">Precios</Link>
            <Link href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif font-medium text-muted-foreground py-2">Preguntas</Link>
            <Link href="/blog" onClick={() => setIsMenuOpen(false)} className="text-lg font-serif font-medium text-muted-foreground py-2">Blog</Link>
            <Button className="bg-primary hover:bg-primary-hover text-primary-foreground rounded-full w-full h-12 text-base font-serif font-bold mt-4" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Crear mi invitación
              </a>
            </Button>
          </div>
        )}
      </div>
    </>
  )
}