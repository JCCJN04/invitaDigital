import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogClient } from "@/components/blog-client"

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

// Blog posts - estos slugs corresponden a los artículos completos en [slug]/page.tsx
const blogPosts = [
  {
    id: "tendencias-2025",
    title: "5 Tendencias en Invitaciones Digitales para 2025",
    excerpt: "Descubre las últimas tendencias en diseño de invitaciones digitales: minimalismo elegante, tipografía artística, paletas naturales, micro-animaciones y narrativa visual.",
    image: "/blog/tendencias-2025.jpg",
    category: "Tendencias",
    date: "2025-01-15",
    readTime: "5 min",
    author: "Equipo MTY",
    featured: true,
  },
  {
    id: "digital-vs-papel",
    title: "Invitaciones Digitales vs Papel: ¿Cuál Elegir en 2025?",
    excerpt: "Comparativa completa de costos, alcance, impacto ambiental y experiencia. Descubre cuál es la mejor opción para tu evento.",
    image: "/blog/digital-vs-papel.jpg",
    category: "Consejos",
    date: "2025-01-10",
    readTime: "6 min",
    author: "Equipo MTY",
    featured: true,
  },
  {
    id: "como-redactar-invitacion-boda",
    title: "Cómo Redactar la Invitación Perfecta para tu Boda",
    excerpt: "Guía completa con ejemplos de textos formales, semi-formales e informales. Incluye frases para invitaciones en nombre de los padres y más.",
    image: "/blog/redactar-invitacion.jpg",
    category: "Bodas",
    date: "2025-01-05",
    readTime: "7 min",
    author: "Equipo MTY",
    featured: true,
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      <BlogClient />

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
