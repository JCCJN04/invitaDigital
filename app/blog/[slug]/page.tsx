import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Calendar, Clock, User, ArrowLeft, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Blog posts data - in production, this would come from a CMS
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
}> = {
  "tendencias-invitaciones-digitales-2025": {
    title: "5 Tendencias en Invitaciones Digitales para 2025",
    excerpt: "Descubre las últimas tendencias en diseño de invitaciones digitales: desde animaciones 3D hasta experiencias interactivas que sorprenderán a tus invitados.",
    content: `
## 1. Animaciones 3D y Parallax

Las invitaciones estáticas son cosa del pasado. En 2025, las animaciones 3D y los efectos parallax están dominando el diseño de invitaciones digitales. Estas técnicas crean profundidad y movimiento que capturan la atención inmediatamente.

**Ejemplo práctico:** Un sobre que se abre revelando la invitación, flores que flotan suavemente, o texto que aparece con elegantes transiciones.

## 2. Paletas de Colores Naturales

Inspirados en la naturaleza, los colores tierra, verdes salvia, terracota y tonos neutros están en tendencia. Estas paletas transmiten elegancia sosegada y son perfectas para bodas y eventos formales.

**Colores trending:**
- Verde salvia (#9DC183)
- Terracota (#E07A5F)
- Arena (#F5E6D3)
- Azul polvoriento (#8AAAE5)

## 3. Tipografías Artísticas

Las fuentes manuscritas y caligráficas personalizadas están reemplazando a las tipografías genéricas. La tendencia es combinar una fuente script elegante para títulos con una sans-serif limpia para el cuerpo del texto.

## 4. Experiencias Interactivas

Más allá de solo mostrar información, las invitaciones 2025 incluyen:
- RSVP integrado con confirmación en tiempo real
- Mapas interactivos con navegación directa
- Countdown dinámicos
- Galerías de fotos deslizables
- Mesa de regalos con actualización en vivo

## 5. Micro-interacciones y Feedback

Pequeños detalles que responden al usuario: botones que cambian al pasar el mouse, elementos que reaccionan al scroll, sonidos sutiles al interactuar.

---

**¿Listo para una invitación con estas tendencias?** Contáctanos y creamos algo único para tu evento.
    `,
    image: "/blog/tendencias-2025.jpg",
    category: "Tendencias",
    date: "2025-01-15",
    readTime: "5 min",
    author: "Equipo MTY",
  },
  "invitacion-digital-vs-papel": {
    title: "Invitaciones Digitales vs Papel: ¿Cuál Elegir?",
    excerpt: "Analizamos los pros y contras de cada opción para ayudarte a tomar la mejor decisión para tu evento.",
    content: `
## La Eterna Pregunta

Al planear un evento, una de las primeras decisiones es cómo invitar a tus seres queridos. ¿Tradicional papel o moderna digital? Analicemos ambas opciones.

## Invitaciones de Papel

### Ventajas ✅
- **Tangibles:** Los invitados pueden tocarlas, guardarlas como recuerdo
- **Tradición:** Sensación clásica y formal
- **Sin tecnología:** Accesibles para todos, sin importar edad

### Desventajas ❌
- **Costo elevado:** Diseño, impresión, sobres, timbres postales
- **Tiempo de entrega:** Producción + envío postal puede tardar semanas
- **Impacto ambiental:** Papel, tintas, transporte
- **Sin interactividad:** Solo información estática
- **Difícil de actualizar:** Si hay cambios, hay que reimprimir

## Invitaciones Digitales

### Ventajas ✅
- **Económicas:** Precio fijo sin importar cantidad de invitados
- **Instantáneas:** Se comparten en segundos por WhatsApp
- **Interactivas:** Música, mapas, countdown, RSVP
- **Actualizables:** Cambios en tiempo real si es necesario
- **Ecológicas:** Cero papel, cero desperdicio
- **Trackeable:** Sabes quién abrió y confirmó

### Desventajas ❌
- **Requieren dispositivo:** No todos tienen smartphone
- **Menos "formales":** Para algunos tradicionalistas

## Nuestra Recomendación

Para la mayoría de los eventos modernos, las invitaciones digitales son la mejor opción por su practicidad, costo y funcionalidades.

**Tip híbrido:** Puedes imprimir algunas invitaciones de papel para familiares mayores y usar la digital para el resto.
    `,
    image: "/blog/digital-vs-papel.jpg",
    category: "Consejos",
    date: "2025-01-10",
    readTime: "4 min",
    author: "Equipo MTY",
  },
  "como-redactar-invitacion-boda": {
    title: "Cómo Redactar la Invitación Perfecta para tu Boda",
    excerpt: "Guía completa con ejemplos de textos formales e informales para invitaciones de boda. Incluye frases para padres, padrinos y más.",
    content: `
## Elementos Esenciales

Toda invitación de boda debe incluir:
1. **Quién invita** (novios o padres)
2. **Nombres de los novios**
3. **Fecha y hora**
4. **Lugar** (ceremonia y recepción)
5. **Código de vestimenta** (opcional)
6. **Confirmación de asistencia**

## Ejemplos de Textos

### Formato Formal (Padres Invitan)

> *Los señores*
> **Juan García López y María Fernández de García**
> *junto con*
> **Roberto Martínez Sánchez y Laura Rodríguez de Martínez**
> 
> *tienen el honor de invitarle a la boda de sus hijos*
> 
> **Ana María & Carlos**
> 
> *Sábado 15 de marzo de 2025*
> *6:00 pm*

### Formato Moderno (Novios Invitan)

> **¡Nos casamos!**
> 
> *Con inmensa alegría, te invitamos a celebrar el inicio de nuestra historia juntos*
> 
> **Ana María & Carlos**
> 
> *15 de marzo de 2025 | 6:00 pm*
> *Jardín La Estancia, Monterrey*

### Formato Informal

> *Después de mil aventuras, decidimos embarcarnos en la más grande de todas...*
> 
> **¡Nos casamos!**
> 
> *Y no sería lo mismo sin ti*
> 
> **Ana ❤️ Carlos**

## Frases para Dress Code

- **Formal:** "Etiqueta rigurosa"
- **Semi-formal:** "Vestimenta formal" 
- **Garden party:** "Elegante casual"
- **Playa:** "Casual elegante, colores claros"

## Frases para RSVP

- "Favor de confirmar antes del 1 de marzo"
- "Tu confirmación es muy importante para nosotros"
- "Confirma tu asistencia en el botón de abajo"
    `,
    image: "/blog/redactar-invitacion.jpg",
    category: "Bodas",
    date: "2025-01-05",
    readTime: "7 min",
    author: "Equipo MTY",
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | Blog Invitaciones Digitales MTY`,
    description: post.excerpt,
    alternates: {
      canonical: `https://invitacionesdigitalesmty.com.mx/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const allSlugs = Object.keys(blogPosts)
  const currentIndex = allSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-[#1e3a8a] mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al Blog
          </Link>
          
          <Badge className="mb-4 bg-[#1e3a8a]/10 text-[#1e3a8a]">
            {post.category}
          </Badge>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 text-gray-500 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('es-MX', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-8">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <div className="aspect-video relative rounded-2xl overflow-hidden bg-gray-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-8">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <div 
            className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-[#1e3a8a] prose-strong:text-gray-900 prose-blockquote:border-[#1e3a8a] prose-blockquote:bg-gray-50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-lg prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^## /gm, '<h2>')
                .replace(/^### /gm, '<h3>')
                .replace(/\n\n/g, '</p><p>')
                .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
                .replace(/\*([^*]+)\*/g, '<em>$1</em>')
                .replace(/^> /gm, '<blockquote>')
                .replace(/^- /gm, '<li>')
            }}
          />
        </div>
      </article>

      {/* Share & CTA */}
      <section className="py-8 border-t border-gray-100">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <Button variant="outline" className="gap-2">
              <Share2 className="w-4 h-4" />
              Compartir artículo
            </Button>
            
            <Button className="bg-[#1e3a8a] hover:bg-[#1e40af] text-white" asChild>
              <a 
                href={`https://wa.me/528111230266?text=Hola,%20leí%20el%20artículo%20"${encodeURIComponent(post.title)}"%20y%20me%20gustaría%20cotizar%20una%20invitación`} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Cotizar Mi Invitación
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          <div className="flex justify-between">
            {prevSlug ? (
              <Link 
                href={`/blog/${prevSlug}`}
                className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a8a] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Artículo anterior
              </Link>
            ) : <div />}
            
            {nextSlug ? (
              <Link 
                href={`/blog/${nextSlug}`}
                className="flex items-center gap-2 text-gray-600 hover:text-[#1e3a8a] transition-colors"
              >
                Siguiente artículo
                <ArrowRight className="w-4 h-4" />
              </Link>
            ) : <div />}
          </div>
        </div>
      </section>

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `https://invitacionesdigitalesmty.com.mx${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Invitaciones Digitales MTY",
              logo: {
                "@type": "ImageObject",
                url: "https://invitacionesdigitalesmty.com.mx/logo.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://invitacionesdigitalesmty.com.mx/blog/${slug}`
            }
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
              { "@type": "ListItem", position: 3, name: post.title, item: `https://invitacionesdigitalesmty.com.mx/blog/${slug}` },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
