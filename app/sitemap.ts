import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx"
  const posts = getAllPosts()

  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: post.date,
  }))

  const cities = [
    "cdmx",
    "guadalajara",
    "puebla",
    "queretaro",
    "merida",
    "tijuana",
    "leon",
    "cancun",
    "san-luis-potosi",
    "saltillo",
  ]

  const cityRoutes: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${baseUrl}/${city}`,
    lastModified: "2026-07-01",
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: "2026-08-27",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: "2026-08-27",
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/invitaciones-boda`,
      lastModified: "2026-08-27",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invitaciones-xv-años`,
      lastModified: "2026-07-12",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/invitaciones-baby-shower`,
      lastModified: "2026-06-01",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/invitaciones-bautizo`,
      lastModified: "2026-06-01",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/invitaciones-cumpleanos`,
      lastModified: "2026-06-01",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/invitaciones-primera-comunion`,
      lastModified: "2026-06-01",
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/invitaciones-corporativas`,
      lastModified: "2026-06-01",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...cityRoutes,
    ...blogRoutes.map((r) => ({ ...r, changeFrequency: "yearly" as const, priority: 0.6 })),
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
