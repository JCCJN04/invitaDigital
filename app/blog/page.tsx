import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Calendar, ArrowRight, Clock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Blog | Invitaciones Digitales | Tips, Ideas y Tendencias 2025",
  description: "📝 Lee nuestro blog sobre invitaciones digitales: tendencias 2025, ideas de diseño, tips para bodas, XV años y más. ¡Inspírate para tu evento!",
  keywords: [
    "blog invitaciones digitales",
    "tips invitaciones boda",
    "tendencias invitaciones 2025",
    "ideas invitaciones digitales",
    "consejos eventos monterrey",
  ],
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/blog",
  },
}

// Placeholder blog posts - in a real implementation, these would come from a CMS or database
const blogPosts = [
  {
    id: "tendencias-invitaciones-digitales-2025",
    title: "5 Tendencias en Invitaciones Digitales para 2025",
    excerpt: "Descubre las últimas tendencias en diseño de invitaciones digitales: desde animaciones 3D hasta experiencias interactivas que sorprenderán a tus invitados.",
    image: "/blog/tendencias-2025.jpg",
    category: "Tendencias",
    date: "2025-01-15",
    readTime: "5 min",
    author: "Equipo MTY",
    featured: true,
  },
  {
    id: "invitacion-digital-vs-papel",
    title: "Invitaciones Digitales vs Papel: ¿Cuál Elegir?",
    excerpt: "Analizamos los pros y contras de cada opción para ayudarte a tomar la mejor decisión para tu evento.",
    image: "/blog/digital-vs-papel.jpg",
    category: "Consejos",
    date: "2025-01-10",
    readTime: "4 min",
    author: "Equipo MTY",
    featured: false,
  },
  {
    id: "como-redactar-invitacion-boda",
    title: "Cómo Redactar la Invitación Perfecta para tu Boda",
    excerpt: "Guía completa con ejemplos de textos formales e informales para invitaciones de boda. Incluye frases para padres, padrinos y más.",
    image: "/blog/redactar-invitacion.jpg",
    category: "Bodas",
    date: "2025-01-05",
    readTime: "7 min",
    author: "Equipo MTY",
    featured: true,
  },
  {
    id: "colores-xv-anos-2025",
    title: "Los Colores Más Populares para XV Años en 2025",
    excerpt: "Desde el rosa tradicional hasta combinaciones modernas como verde salvia y terracota. Conoce las paletas de colores tendencia.",
    image: "/blog/colores-xv.jpg",
    category: "XV Años",
    date: "2024-12-28",
    readTime: "4 min",
    author: "Equipo MTY",
    featured: false,
  },
  {
    id: "mesa-regalos-digital",
    title: "Cómo Integrar tu Mesa de Regalos en tu Invitación Digital",
    excerpt: "Tips para incluir tu mesa de regalos de forma elegante y efectiva, sin que parezca que solo pides regalos.",
    image: "/blog/mesa-regalos.jpg",
    category: "Tips",
    date: "2024-12-20",
    readTime: "3 min",
    author: "Equipo MTY",
    featured: false,
  },
  {
    id: "musica-invitaciones-digitales",
    title: "Las Mejores Canciones para tu Invitación Digital",
    excerpt: "Playlist con las canciones más populares para bodas, XV años y baby showers. Incluye opciones románticas, clásicas y modernas.",
    image: "/blog/musica-invitaciones.jpg",
    category: "Ideas",
    date: "2024-12-15",
    readTime: "5 min",
    author: "Equipo MTY",
    featured: false,
  },
]

const categories = [
  { name: "Todos", count: blogPosts.length },
  { name: "Tendencias", count: 1 },
  { name: "Bodas", count: 1 },
  { name: "XV Años", count: 1 },
  { name: "Consejos", count: 1 },
  { name: "Tips", count: 1 },
  { name: "Ideas", count: 1 },
]

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 md:px-10 text-center">
          <Badge className="mb-6 bg-[#1e3a8a]/10 text-[#1e3a8a]">
            📝 Blog
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6">
            Blog de Invitaciones Digitales
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Tips, tendencias, ideas y consejos para crear la invitación perfecta 
            para tu evento.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-6 border-b border-gray-200">
        <div className="container mx-auto px-6 md:px-10">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category.name === "Todos"
                    ? "bg-[#1e3a8a] text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
                <span className="ml-1 opacity-70">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Artículos Destacados
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow h-full">
                  <div className="aspect-video relative bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#1e3a8a] text-white">
                      ⭐ Destacado
                    </Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('es-MX', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <Badge className="mb-3 bg-gray-100 text-gray-700">
                      {post.category}
                    </Badge>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <span className="text-[#1e3a8a] font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Leer más <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Regular Posts */}
          <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
            Últimos Artículos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group"
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-video relative bg-gray-100">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                      <Badge className="bg-gray-100 text-gray-600 text-xs">
                        {post.category}
                      </Badge>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#1e3a8a] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm line-clamp-2">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
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
            <Link href="/galeria" className="text-[#1e3a8a] hover:underline">
              Ver Galería de Diseños →
            </Link>
            <Link href="/precios" className="text-[#1e3a8a] hover:underline">
              Ver Precios →
            </Link>
            <Link href="/nosotros" className="text-[#1e3a8a] hover:underline">
              Conocer al Equipo →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Blog Invitaciones Digitales MTY",
            description: "Tips, tendencias e ideas para invitaciones digitales",
            url: "https://invitacionesdigitalesmty.com.mx/blog",
            publisher: {
              "@type": "Organization",
              name: "Invitaciones Digitales MTY",
              logo: {
                "@type": "ImageObject",
                url: "https://invitacionesdigitalesmty.com.mx/logo.png"
              }
            },
            blogPost: blogPosts.map(post => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Person",
                name: post.author
              },
              url: `https://invitacionesdigitalesmty.com.mx/blog/${post.id}`
            }))
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://invitacionesdigitalesmty.com.mx" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://invitacionesdigitalesmty.com.mx/blog" },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
