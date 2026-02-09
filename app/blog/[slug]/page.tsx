import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostClient } from "@/components/blog-post-client"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/lib/blog-data"

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

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
      modifiedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: `https://invitacionesdigitalesmty.com.mx${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`https://invitacionesdigitalesmty.com.mx${post.image}`],
    },
    authors: [{ name: post.author }],
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const allPosts = getAllPosts()
  const currentIndex = allPosts.findIndex((p) => p.id === slug)
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : undefined
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : undefined

  // Schema de Artículo optimizado para Google
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [
      `https://invitacionesdigitalesmty.com.mx${post.image}`
    ],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://invitacionesdigitalesmty.com.mx",
    },
    publisher: {
      "@type": "Organization",
      name: "Invitaciones Digitales MTY",
      logo: {
        "@type": "ImageObject",
        url: "https://invitacionesdigitalesmty.com.mx/logo.png",
        width: 190, // Dimensiones recomendadas
        height: 60
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://invitacionesdigitalesmty.com.mx/blog/${slug}`
    }
  }

  // Schema de Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: "https://invitacionesdigitalesmty.com.mx"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://invitacionesdigitalesmty.com.mx/blog"
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://invitacionesdigitalesmty.com.mx/blog/${slug}`
      }
    ]
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <BlogPostClient
        post={post}
        slug={slug}
        prevSlug={prevPost?.id ?? null}
        nextSlug={nextPost?.id ?? null}
        prevPost={prevPost}
        nextPost={nextPost}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Footer />
    </main>
  )
}
