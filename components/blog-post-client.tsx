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

export function BlogPostClient({ post, slug, prevSlug, nextSlug, prevPost, nextPost }: BlogPostClientProps) {
  const [readProgress, setReadProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

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
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${readProgress}%` }}
        />
      </div>

      {/* Hero Section - Magazine Style */}
      <section className="relative pt-24 pb-8 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          {/* Breadcrumb minimalista */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
            <Link href="/" className="hover:text-blue-600 transition-colors">Inicio</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gray-900 font-medium">{post.category}</span>
          </nav>

          {/* Category Badge Minimalista */}
          <div className="mb-6">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-blue-50 text-blue-700 rounded-full">
              {post.category}
            </span>
          </div>

          {/* Title - Typography Hero */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-8 leading-[1.1] tracking-tight">
            {post.title}
          </h1>

          {/* Meta Info - Clean & Minimal */}
          <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="w-4 h-4" />
              <span className="text-sm font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="w-4 h-4" />
              <time className="text-sm">
                {new Date(post.date).toLocaleDateString('es-MX', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </time>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{post.readTime} de lectura</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image - Full Width with Subtle Shadow */}
      <section className="mb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl">
          <div className="aspect-[21/9] relative rounded-2xl overflow-hidden shadow-2xl">
            <BlogImage 
              category={post.category} 
              title={post.title}
            />
          </div>
        </div>
      </section>

      {/* Article Content - Magazine Layout */}
      <article className="mb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Lead paragraph destacado */}
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700 font-light mb-12 pb-12 border-b border-gray-200">
            {post.excerpt}
          </p>

          {/* Main content */}
          <div 
            className="article-content prose prose-lg md:prose-xl max-w-none
              prose-headings:font-serif prose-headings:font-bold prose-headings:text-gray-900 prose-headings:tracking-tight
              prose-h2:text-3xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-gray-200
              prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-4
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
              prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:not-italic prose-blockquote:font-normal prose-blockquote:text-gray-800 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:my-8 prose-blockquote:rounded-r-lg
              prose-ul:my-6 prose-li:text-gray-700 prose-li:mb-2
              prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:text-blue-700 prose-code:before:content-[''] prose-code:after:content-['']
              prose-hr:my-12 prose-hr:border-gray-200"
            dangerouslySetInnerHTML={{ 
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
            }}
          />
        </div>
      </article>

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

      {/* Floating Share Button */}
      <ShareButton title={post.title} text={post.excerpt} variant="floating" />
    </>
  )
}
