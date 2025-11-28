import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShareButton } from "@/components/share-button"
import { MessageCircle, Calendar, Clock, User, ArrowLeft, Share2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { BlogImage } from "@/components/blog-image"
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
  "tendencias-2025": {
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
  "digital-vs-papel": {
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
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      
      {/* Hero */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5" />
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 md:px-10 max-w-5xl relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-500 hover:text-blue-600 mb-8 transition-all duration-300 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Volver al Blog</span>
          </Link>
          
          <div className="text-center mb-12">
            <Badge className="mb-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-0 shadow-lg">
              {post.category}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-8 leading-tight">
              {post.title}
            </h1>
            
            {/* Article meta with improved design */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <User className="w-4 h-4 text-blue-500" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <Calendar className="w-4 h-4 text-green-500" />
                <span>{new Date(post.date).toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
                <Clock className="w-4 h-4 text-purple-500" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
            
            {/* Reading progress indicator */}
            <div className="w-full max-w-md mx-auto bg-gray-200 rounded-full h-2 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full w-0 transition-all duration-300" id="reading-progress" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-16">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-lg opacity-30 transform scale-105" />
            
            <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl bg-white p-2">
              <BlogImage 
                category={post.category} 
                title={post.title}
                className="rounded-2xl"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full opacity-60" />
            <div className="absolute -top-2 -right-6 w-4 h-4 bg-purple-500 rounded-full opacity-40" />
            <div className="absolute -bottom-6 -left-2 w-6 h-6 bg-pink-500 rounded-full opacity-50" />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <div className="relative">
            {/* Article content with enhanced typography */}
            <div 
              className="prose prose-xl max-w-none prose-headings:font-serif prose-headings:bg-gradient-to-r prose-headings:from-gray-900 prose-headings:to-blue-900 prose-headings:bg-clip-text prose-headings:text-transparent prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50/50 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-li:text-gray-700 prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-blue-600"
              dangerouslySetInnerHTML={{ 
                __html: post.content
                  .replace(/^## /gm, '<h2 class="text-3xl font-bold mb-6 mt-12">')
                  .replace(/^### /gm, '<h3 class="text-2xl font-semibold mb-4 mt-8">')
                  .replace(/\n\n/g, '</p><p class="mb-6">')
                  .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')
                  .replace(/\*([^*]+)\*/g, '<em class="italic">$1</em>')
                  .replace(/^> /gm, '<blockquote class="border-l-4 border-blue-500 bg-blue-50/50 py-4 px-6 rounded-r-xl my-6 font-medium text-gray-800">')
                  .replace(/^- /gm, '<li class="mb-2">')
              }}
            />
            
            {/* Floating action button for sharing */}
            <ShareButton title={post.title} text={post.excerpt} variant="floating" />
          </div>
        </div>
      </article>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 via-white to-purple-50 border-y border-blue-100">
        <div className="container mx-auto px-6 md:px-10 max-w-4xl">
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-serif font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                ¿Te inspiró este artículo?
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Dale vida a tus ideas con nuestras invitaciones digitales profesionales. 
                Creamos diseños únicos que reflejan la personalidad de tu evento.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <ShareButton title={post.title} text={post.excerpt} variant="inline" />
              
              <Button 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all px-8 py-3 text-lg"
                asChild
              >
                <a 
                  href={`https://wa.me/528111230266?text=Hola,%20leí%20el%20artículo%20"${encodeURIComponent(post.title)}"%20y%20me%20gustaría%20cotizar%20una%20invitación`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar Mi Invitación
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Navigation */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 md:px-10 max-w-6xl">
          <h3 className="text-2xl font-serif font-bold text-center text-gray-900 mb-12">
            Continúa Leyendo
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {prevSlug && (
              <Link 
                href={`/blog/${prevSlug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center gap-3 text-blue-600 mb-3">
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-semibold uppercase tracking-wide">Anterior</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {blogPosts[prevSlug]?.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                    {blogPosts[prevSlug]?.excerpt}
                  </p>
                </div>
              </Link>
            )}
            
            {nextSlug && (
              <Link 
                href={`/blog/${nextSlug}`}
                className="group block"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full">
                  <div className="flex items-center justify-end gap-3 text-purple-600 mb-3">
                    <span className="text-sm font-semibold uppercase tracking-wide">Siguiente</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight text-right">
                    {blogPosts[nextSlug]?.title}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 line-clamp-2 text-right">
                    {blogPosts[nextSlug]?.excerpt}
                  </p>
                </div>
              </Link>
            )}
          </div>
          
          {/* Back to blog center button */}
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button 
                variant="outline" 
                className="bg-white/80 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all px-8 py-3"
              >
                Ver Todos los Artículos
              </Button>
            </Link>
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
