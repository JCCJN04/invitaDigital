import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getAllPosts } from "@/lib/blog-data"

const SITE_URL = "https://invitacionesdigitalesmty.com.mx"

export const metadata: Metadata = {
  title: "Blog de Invitaciones Digitales en Monterrey | Consejos y Tendencias",
  description:
    "Guías, tendencias y consejos para bodas, XV años y eventos en Monterrey. Aprende a elegir la mejor invitación digital para tu celebración.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Blog de Invitaciones Digitales MTY",
    description:
      "Consejos, tendencias y guías para bodas, XV años y eventos en Monterrey.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
}

const categoryColors: Record<string, string> = {
  Tendencias: "bg-rose-50 text-rose-700",
  Consejos: "bg-amber-50 text-amber-700",
  Bodas: "bg-purple-50 text-purple-700",
  "Real Weddings": "bg-emerald-50 text-emerald-700",
}

export default function BlogPage() {
  const posts = getAllPosts()
  const featured = posts.filter((p) => p.featured)
  const rest = posts.filter((p) => !p.featured)

  const blogListingSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: "Blog de Invitaciones Digitales MTY",
    description:
      "Consejos, tendencias y guías para invitaciones digitales en Monterrey.",
    url: `${SITE_URL}/blog`,
    publisher: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}#localbusiness`,
    },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      url: `${SITE_URL}/blog/${p.id}`,
      datePublished: p.date,
      author: {
        "@type": "Organization",
        name: p.author,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogListingSchema) }}
      />
      <Header />
      <main className="min-h-screen pt-28 pb-24">
        <div className="container mx-auto px-6 md:px-10 max-w-5xl">
          {/* Hero */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-primary" />
              <span className="text-[11px] tracking-[0.3em] text-muted-foreground uppercase font-medium">
                Blog
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] mb-4">
              Consejos e inspiración<br />
              <em className="italic text-primary">para tu evento</em>
            </h1>
            <p className="text-muted-foreground max-w-xl text-base leading-relaxed">
              Guías, tendencias y tips de invitaciones digitales para bodas, XV años y eventos en Monterrey.
            </p>
          </div>

          {/* Featured posts */}
          {featured.length > 0 && (
            <section className="mb-16">
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Artículos destacados
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {featured.slice(0, 4).map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group block border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-colors"
                  >
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span
                          className={`text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-foreground leading-tight mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                        Leer artículo
                        <span aria-hidden="true">→</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* All posts */}
          {rest.length > 0 && (
            <section>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-8">
                Más artículos
              </h2>
              <div className="divide-y divide-border">
                {rest.map((post) => (
                  <Link
                    key={post.id}
                    href={`/blog/${post.id}`}
                    className="group flex items-start justify-between gap-6 py-6 hover:pl-1 transition-all"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span
                          className={`text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full ${categoryColors[post.category] ?? "bg-muted text-muted-foreground"}`}
                        >
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground">{post.readTime}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-foreground leading-tight mb-1 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>
                    </div>
                    <span className="text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" aria-hidden="true">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
