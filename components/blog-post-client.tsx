"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShareButton } from "@/components/share-button"
import { MessageCircle, Calendar, Clock, User, ArrowLeft, BookOpen, ChevronRight } from "lucide-react"
import Link from "next/link"
import { BlogImage } from "@/components/blog-image"

interface BlogPost {
  title: string
  excerpt: string
  content: string
  category: string
  date: string
  readTime: string
  author: string
}

interface BlogPostClientProps {
  post: BlogPost
  slug: string
  prevSlug: string | null
  nextSlug: string | null
  prevPost?: BlogPost
  nextPost?: BlogPost
}

import { BlogSidebar } from "@/components/blog-sidebar"

// Mock data for sidebar (in real app, pass from parent)
const sidebarRelatedPosts = [
  {
    id: "tendencias-2025",
    title: "5 Tendencias en Invitaciones Digitales para 2025",
    excerpt: "", content: "", image: "", category: "Tendencias", date: "2025-01-15", readTime: "5 min", author: "Equipo MTY"
  },
  {
    id: "digital-vs-papel",
    title: "Invitaciones Digitales vs Papel: ¿Cuál Elegir?",
    excerpt: "", content: "", image: "", category: "Consejos", date: "2025-01-10", readTime: "4 min", author: "Equipo MTY"
  }
]

const sidebarCategories = [
  { name: "Bodas", count: 12 },
  { name: "XV Años", count: 8 },
  { name: "Tendencias", count: 5 },
  { name: "Consejos", count: 15 },
]

export function BlogPostClient({ post, slug, prevSlug, nextSlug, prevPost, nextPost }: BlogPostClientProps) {
  const [readProgress, setReadProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100
      setReadProgress(Math.min(scrollPercent, 100))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Fixed Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-[#f3eee8] z-50">
        <div
          className="h-full bg-[#d4a373] transition-all duration-300"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden bg-[#fdfcfb]">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#d4a373]/5 via-[#ffb5a7]/5 to-[#e6ccb2]/5" />

        <div className="container mx-auto px-6 md:px-10 max-w-7xl relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center gap-2 text-sm text-[#4a4a4a] mb-8">
              <Link href="/" className="hover:text-[#d4a373] transition-colors">Inicio</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/blog" className="hover:text-[#d4a373] transition-colors">Blog</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="font-medium text-[#1c1917]">{post.category}</span>
            </nav>

            {/* Category Badge */}
            <Badge className="mb-6 bg-[#d4a373]/10 text-[#d4a373] hover:bg-[#d4a373]/20 border-0 px-4 py-1.5 text-sm uppercase tracking-wider">
              {post.category}
            </Badge>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1c1917] mb-8 leading-tight">
              {post.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#4a4a4a]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#d4a373]/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-[#d4a373]" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#d4a373]" />
                <time>
                  {new Date(post.date).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#d4a373]" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-6 md:px-10 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Article Content */}
            <div className="lg:col-span-8">
              {/* Featured Image */}
              <div className="aspect-video relative rounded-3xl overflow-hidden shadow-2xl mb-12 transform hover:scale-[1.01] transition-transform duration-700">
                <BlogImage
                  category={post.category}
                  title={post.title}
                />
              </div>

              {/* Content */}
              <article className="prose prose-lg md:prose-xl max-w-none
                prose-headings:font-serif prose-headings:text-[#1c1917] 
                prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 
                prose-p:text-[#4a4a4a] prose-p:leading-relaxed
                prose-a:text-[#d4a373] prose-a:no-underline hover:prose-a:underline
                prose-strong:text-[#1c1917]
                prose-blockquote:border-[#d4a373] prose-blockquote:bg-[#fdfcfb] prose-blockquote:text-[#1c1917]
                prose-li:text-[#4a4a4a]
                prose-img:rounded-2xl prose-img:shadow-lg">
                <p className="lead text-2xl text-[#1c1917] font-serif italic mb-12">
                  {post.excerpt}
                </p>

                <div dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                    .replace(/\*(.+?)\*/g, '<em>$1</em>')
                    .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
                    .replace(/^- (.+)$/gm, '<li>$1</li>')
                    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
                    .replace(/^\|(.+)\|$/gm, (match) => {
                      const cells = match.split('|').filter(Boolean).map(cell => cell.trim())
                      return `<tr>${cells.map(cell => `<td>${cell}</td>`).join('')}</tr>`
                    })
                    .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="min-w-full divide-y divide-gray-200 my-8"><tbody class="divide-y divide-gray-200">$&</tbody></table>')
                    .split('\n\n')
                    .map(para => {
                      if (para.startsWith('<') || para.trim() === '') return para
                      return `<p>${para}</p>`
                    })
                    .join('\n')
                }} />
              </article>

              {/* Share */}
              <div className="mt-16 pt-8 border-t border-[#f3eee8]">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <span className="font-serif text-xl text-[#1c1917]">Comparte este artículo:</span>
                  <ShareButton title={post.title} text={post.excerpt} variant="inline" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-12">
              <BlogSidebar relatedPosts={sidebarRelatedPosts} categories={sidebarCategories} />
            </div>
          </div>
        </div>
      </section>

      {/* Share Section - Minimal */}
      <section className="py-12 border-y border-gray-200 mb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-gray-900 mb-1">¿Te resultó útil este artículo?</p>
              <p className="text-gray-600">Compártelo con quien lo necesite</p>
            </div>
            <ShareButton title={post.title} text={post.excerpt} variant="inline" />
          </div>
        </div>
      </section>

      {/* CTA Section - Clean & Minimal */}
      <section className="mb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <div className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-20" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-200 rounded-full filter blur-3xl opacity-20" />

            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                ¿Listo para crear tu invitación?
              </h3>
              <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
                Transforma estas ideas en realidad. Diseñamos invitaciones digitales que reflejan tu estilo único.
              </p>
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a
                  href={`https://wa.me/528111230266?text=Hola,%20leí%20el%20artículo%20"${encodeURIComponent(post.title)}"%20y%20me%20gustaría%20cotizar%20una%20invitación`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Cotizar mi invitación
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation - Card Style */}
      <section className="mb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-8 text-center">
            Continúa leyendo
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {prevSlug && prevPost && (
              <Link
                href={`/blog/${prevSlug}`}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <ArrowLeft className="w-4 h-4" />
                  <span className="uppercase tracking-wide font-semibold">Anterior</span>
                </div>
                <h4 className="text-xl font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
                  {prevPost.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {prevPost.excerpt}
                </p>
              </Link>
            )}

            {nextSlug && nextPost && (
              <Link
                href={`/blog/${nextSlug}`}
                className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center justify-end gap-2 text-sm text-gray-500 mb-3">
                  <span className="uppercase tracking-wide font-semibold">Siguiente</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                <h4 className="text-xl font-serif font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2 text-right">
                  {nextPost.title}
                </h4>
                <p className="text-gray-600 text-sm line-clamp-2 text-right">
                  {nextPost.excerpt}
                </p>
              </Link>
            )}
          </div>

          {/* Back to blog */}
          <div className="text-center mt-12">
            <Link href="/blog">
              <Button variant="outline" className="border-2 border-gray-300 hover:border-gray-900 hover:bg-gray-50 px-8 py-6 rounded-full">
                <BookOpen className="w-4 h-4 mr-2" />
                Ver todos los artículos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Share Button (Desktop Only) */}
      <div className="hidden md:block">
        <ShareButton title={post.title} text={post.excerpt} variant="floating" />
      </div>

      {/* Mobile Sticky Action Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50 flex gap-3">
        <Button
          variant="outline"
          className="flex-1 border-[#d4a373] text-[#d4a373] hover:bg-[#d4a373]/5"
          onClick={() => {
            if (navigator.share) {
              navigator.share({
                title: post.title,
                text: post.excerpt,
                url: window.location.href,
              }).catch(console.error);
            }
          }}
        >
          Compartir
        </Button>
        <Button
          className="flex-[2] bg-[#d4a373] hover:bg-[#c09265] text-[#1c1917] font-semibold"
          asChild
        >
          <a
            href={`https://wa.me/528111230266?text=Hola,%20leí%20el%20artículo%20"${encodeURIComponent(post.title)}"%20y%20me%20gustaría%20cotizar%20una%20invitación`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Cotizar
          </a>
        </Button>
      </div>
    </>
  )
}
