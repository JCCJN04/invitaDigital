import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog-data"

const SITE_URL = "https://invitacionesdigitalesmty.com.mx"
const WHATSAPP_URL =
  "https://wa.me/528180836435?text=Hola%2C%20me%20gustar%C3%ADa%20cotizar%20mi%20invitaci%C3%B3n%20digital."

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.id }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} | Invitaciones Digitales MTY`,
    description: post.excerpt,
    alternates: {
      canonical: `${SITE_URL}/blog/${post.id}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.id}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

function renderMarkdown(content: string) {
  // Convert markdown to HTML-like JSX — simple inline renderer
  const lines = content.split("\n")
  const elements: React.ReactNode[] = []
  let i = 0

  while (i < lines.length) {
    const line = lines[i].trimEnd()

    if (!line.trim()) {
      i++
      continue
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4 leading-tight"
        >
          {line.slice(3)}
        </h2>
      )
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-xl font-bold text-foreground mt-8 mb-3">
          {line.slice(4)}
        </h3>
      )
    } else if (line.startsWith("#### ")) {
      elements.push(
        <h4 key={i} className="font-semibold text-foreground mt-6 mb-2">
          {line.slice(5)}
        </h4>
      )
    } else if (line.startsWith("---")) {
      elements.push(<hr key={i} className="border-border my-10" />)
    } else if (line.startsWith("- ") || line.startsWith("* ") || line.startsWith("-   ") || line.startsWith("*   ")) {
      // Collect list items
      const items: string[] = []
      while (i < lines.length && (lines[i].startsWith("- ") || lines[i].startsWith("* ") || lines[i].startsWith("-   ") || lines[i].startsWith("*   "))) {
        items.push(lines[i].replace(/^[-*]\s+/, "").trimEnd())
        i++
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-1.5 text-muted-foreground text-base leading-relaxed my-4">
          {items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: applyInlineFormatting(item) }} />
          ))}
        </ul>
      )
      continue
    } else if (/^\d+\.\s/.test(line) || /^\d+\.\s{2,}/.test(line)) {
      // Ordered list
      const items: string[] = []
      while (i < lines.length && (/^\d+\.\s/.test(lines[i]) || /^\d+\.\s{2,}/.test(lines[i]))) {
        items.push(lines[i].replace(/^\d+\.\s+/, "").trimEnd())
        i++
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 space-y-1.5 text-muted-foreground text-base leading-relaxed my-4">
          {items.map((item, idx) => (
            <li key={idx} dangerouslySetInnerHTML={{ __html: applyInlineFormatting(item) }} />
          ))}
        </ol>
      )
      continue
    } else if (line.startsWith("> ")) {
      elements.push(
        <blockquote
          key={i}
          className="border-l-4 border-primary pl-6 py-1 my-6 text-muted-foreground italic text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: applyInlineFormatting(line.slice(2)) }}
        />
      )
    } else if (line.startsWith("|")) {
      // Simple table
      const rows: string[][] = []
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].match(/^\|[-| ]+\|$/)) {
          rows.push(
            lines[i]
              .split("|")
              .slice(1, -1)
              .map((c) => c.trim())
          )
        }
        i++
      }
      if (rows.length > 0) {
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-border">
                  {rows[0].map((cell, ci) => (
                    <th
                      key={ci}
                      className="text-left px-4 py-2 font-semibold text-foreground"
                      dangerouslySetInnerHTML={{ __html: applyInlineFormatting(cell) }}
                    />
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.slice(1).map((row, ri) => (
                  <tr key={ri} className="border-b border-border/50 hover:bg-muted/30">
                    {row.map((cell, ci) => (
                      <td
                        key={ci}
                        className="px-4 py-2 text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: applyInlineFormatting(cell) }}
                      />
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )
      }
      continue
    } else {
      elements.push(
        <p
          key={i}
          className="text-base text-muted-foreground leading-relaxed my-4"
          dangerouslySetInnerHTML={{ __html: applyInlineFormatting(line) }}
        />
      )
    }
    i++
  }

  return elements
}

function applyInlineFormatting(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-muted px-1 py-0.5 rounded text-sm font-mono'>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href='$2' class='text-primary underline underline-offset-2 hover:no-underline'>$1</a>")
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.id, post.category)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${SITE_URL}/blog/${post.id}#article`,
    headline: post.title,
    description: post.excerpt,
    url: `${SITE_URL}/blog/${post.id}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Invitaciones Digitales MTY",
      url: SITE_URL,
    },
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
    },
    isPartOf: {
      "@type": "Blog",
      "@id": `${SITE_URL}/blog#blog`,
    },
    inLanguage: "es-MX",
    about: {
      "@type": "Thing",
      name: "Invitaciones Digitales Monterrey",
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header />
      <main className="min-h-screen pt-28 pb-24">
        <div className="container mx-auto px-6 md:px-10 max-w-3xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-10" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Inicio</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <header className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground">{post.readTime} de lectura</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Por {post.author}</span>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </header>

          {/* Content */}
          <article className="prose-custom">
            {renderMarkdown(post.content)}
          </article>

          {/* CTA */}
          <div className="mt-16 border border-border rounded-2xl p-8 text-center bg-muted/30">
            <p className="font-serif text-2xl font-bold text-foreground mb-2">
              ¿Lista tu invitación digital?
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Diseñamos desde cero en 24–48 horas. Bodas, XV Años y más eventos en Monterrey.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold tracking-widest uppercase hover:bg-primary/90 transition-colors rounded-full"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Related */}
          {related.length > 0 && (
            <section className="mt-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Artículos relacionados
              </h2>
              <div className="grid sm:grid-cols-2 gap-6">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/blog/${p.id}`}
                    className="group block border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors"
                  >
                    <span className="text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-primary/10 text-primary mb-3 inline-block">
                      {p.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{p.excerpt}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Back */}
          <div className="mt-12">
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              ← Volver al blog
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
