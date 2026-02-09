"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Calendar, ArrowRight, Clock, Search, Filter, Eye, TrendingUp, Sparkles, Users } from "lucide-react"
import Link from "next/link"
import { BlogImage } from "@/components/blog-image"
import { useState, useMemo } from "react"
import { BlogPost } from "@/lib/blog-data"

interface BlogClientProps {
  initialPosts: BlogPost[]
}

const categories = [
  { name: "Todos", count: 3, icon: Users, color: "from-[#d4a373] to-[#c08552]" },
  { name: "Tendencias", count: 1, icon: TrendingUp, color: "from-[#ffb5a7] to-[#f4a261]" },
  { name: "Bodas", count: 1, icon: Sparkles, color: "from-[#e6ccb2] to-[#ddbea9]" },
  { name: "Consejos", count: 1, icon: Eye, color: "from-[#a8a29e] to-[#78716c]" },
]

export function BlogClient({ initialPosts }: BlogClientProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [sortBy, setSortBy] = useState("date")

  const filteredPosts = useMemo(() => {
    let filtered = initialPosts

    // Filter by category
    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort posts
    filtered = [...filtered].sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      }
      if (sortBy === "title") {
        return a.title.localeCompare(b.title)
      }
      return 0
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy, initialPosts])

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-[#fdfcfb]">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4a373]/5 via-[#ffb5a7]/5 to-[#e6ccb2]/5" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#d4a373]/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ffb5a7]/10 rounded-full blur-3xl animate-pulse" />

        <div className="container mx-auto px-6 md:px-10 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-[#d4a373]/30 rounded-full mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#d4a373]" />
            <span className="text-sm font-medium text-[#1c1917] tracking-wide">Blog Profesional</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-[#1c1917] mb-8 leading-tight">
            Inspírate con Nuestro
            <span className="text-[#d4a373] italic"> Blog</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#4a4a4a] mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubre las últimas tendencias, consejos exclusivos y secretos profesionales
            para crear invitaciones que <span className="font-semibold text-[#d4a373]">cautiven</span> a tus invitados.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto border-t border-[#d4a373]/20 pt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1c1917] mb-2">50+</div>
              <div className="text-sm text-[#4a4a4a]">Artículos Publicados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#d4a373] mb-2">10K+</div>
              <div className="text-sm text-[#4a4a4a]">Lectores Mensuales</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1c1917] mb-2">500+</div>
              <div className="text-sm text-[#4a4a4a]">Invitaciones Creadas</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-12 bg-white border-y border-[#f3eee8]">
        <div className="container mx-auto px-6 md:px-10">
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#d4a373]" />
              <Input
                type="text"
                placeholder="Buscar artículos por título o contenido..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 pr-4 py-4 text-lg border-2 border-[#f3eee8] focus:border-[#d4a373] focus:ring-[#d4a373]/20 rounded-2xl shadow-sm bg-[#fdfcfb]"
              />
            </div>
          </div>

          {/* Categories & Sort */}
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = selectedCategory === category.name
                return (
                  <button
                    key={category.name}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`group relative px-6 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 ${isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                      : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md border border-gray-200/50"
                      }`}
                  >
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'
                        }`} />
                      {category.name}
                      <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${isActive ? 'bg-white/20' : 'bg-gray-100 text-gray-500'
                        }`}>
                        {category.count}
                      </span>
                    </div>
                    {isActive && (
                      <div className="absolute inset-0 bg-white/10 rounded-2xl animate-pulse" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-3">
              <Filter className="w-4 h-4 text-gray-500" />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 border-2 border-gray-200 rounded-xl">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="date">Más recientes</SelectItem>
                  <SelectItem value="title">Por título A-Z</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results count */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {filteredPosts.length === 0 ? (
                <span className="text-orange-600 font-medium">No se encontraron artículos</span>
              ) : (
                <>Mostrando <span className="font-semibold text-[#1c1917]">{filteredPosts.length}</span> artículos</>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-10">
          {filteredPosts.length > 0 ? (
            <>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent mb-4">
                  {selectedCategory === "Todos" ? "Todos los Artículos" : `Categoría: ${selectedCategory}`}
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
              </div>

              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group block"
                  >
                    <Card className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-2xl transition-all duration-500 h-full group-hover:-translate-y-2">
                      {/* Gradient border effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                      <div className="absolute inset-[1px] bg-white rounded-2xl" />

                      <div className="relative">
                        <div className="aspect-video relative overflow-hidden rounded-t-2xl">
                          <BlogImage
                            category={post.category}
                            title={post.title}
                            className="group-hover:scale-110 transition-transform duration-700"
                          />

                          {/* Overlay effects */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                          {/* Featured badge */}
                          {post.featured && (
                            <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold rounded-full shadow-lg">
                              ⭐ Destacado
                            </div>
                          )}

                          {/* Category badge */}
                          <Badge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 border-0 shadow-md">
                            {post.category}
                          </Badge>
                        </div>

                        <CardContent className="p-8 relative">
                          {/* Metadata */}
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {new Date(post.date).toLocaleDateString('es-MX', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-4 h-4" />
                              {post.readTime}
                            </span>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                            {post.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Read more */}
                          <div className="flex items-center justify-between">
                            <span className="text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                              Leer más <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </span>

                            {/* Reading time indicator */}
                            <div className="flex items-center gap-1 text-xs text-gray-400">
                              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                              Lectura rápida
                            </div>
                          </div>

                          {/* Hover effect gradient */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full" />
                        </CardContent>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            /* Empty state */
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full flex items-center justify-center">
                <Search className="w-10 h-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-3">No encontramos resultados</h3>
              <p className="text-gray-500 mb-6 max-w-md mx-auto">
                Intenta con otros términos de búsqueda o explora diferentes categorías.
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("Todos")
                }}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
              >
                Ver todos los artículos
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter / CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-2xl text-center">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            ¿Listo Para Crear Tu Invitación?
          </h2>
          <p className="text-gray-600 mb-6">
            Deja de leer y empieza a crear. Contáctanos para diseñar
            la invitación perfecta para tu evento.
          </p>
          <Button size="lg" className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white" asChild>
            <a href="https://wa.me/528111230266?text=Hola,%20leí%20su%20blog%20y%20me%20gustaría%20cotizar%20una%20invitación" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Cotizar Mi Invitación
            </a>
          </Button>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <p className="text-gray-600 mb-4">También te puede interesar:</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/galeria" className="text-[#1c1917] hover:text-[#d4a373] hover:underline">
              Ver Galería de Diseños →
            </Link>
            <Link href="/precios" className="text-[#1c1917] hover:text-[#d4a373] hover:underline">
              Ver Precios →
            </Link>
            <Link href="/nosotros" className="text-[#1c1917] hover:text-[#d4a373] hover:underline">
              Conocer al Equipo →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}