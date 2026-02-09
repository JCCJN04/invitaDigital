import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogClient } from "@/components/blog-client"
import { getAllPosts } from "@/lib/blog-data"

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

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen bg-[#fdfcfb]">
      <Header />

      <BlogClient initialPosts={posts} />

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
            blogPost: posts.map(post => ({
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
