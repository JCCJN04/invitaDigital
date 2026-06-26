import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx"
  const posts = getAllPosts()

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/invitaciones-baby-shower`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invitaciones-bautizo`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invitaciones-cumpleanos`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invitaciones-primera-comunion`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invitaciones-corporativas`,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    ...blogRoutes,
    {
      url: `${baseUrl}/terminos`,
      lastModified: "2025-05-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: "2025-05-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: "2025-05-01",
      changeFrequency: "yearly",
      priority: 0.2,
    },
  ]
}
