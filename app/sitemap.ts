import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx"

  // Páginas principales con prioridades específicas
  const mainRoutes = [
    { route: "", priority: 1.0, changeFrequency: "daily" as const },
    { route: "/galeria", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/precios", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/nosotros", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/blog", priority: 0.8, changeFrequency: "weekly" as const },
  ]

  // Páginas de categorías de invitaciones (landing pages)
  const categoryRoutes = [
    { route: "/invitaciones/boda", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/invitaciones/xv-anos", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/invitaciones/baby-shower", priority: 0.9, changeFrequency: "weekly" as const },
  ]

  // Artículos del blog
  const blogPosts = [
    "tendencias-invitaciones-digitales-2025",
    "invitacion-digital-vs-papel",
    "como-redactar-invitacion-boda",
  ]

  const blogRoutes = blogPosts.map((slug) => ({
    route: `/blog/${slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }))

  // Páginas legales
  const legalRoutes = [
    { route: "/privacidad", priority: 0.3, changeFrequency: "yearly" as const },
    { route: "/terminos", priority: 0.3, changeFrequency: "yearly" as const },
  ]

  // Combinar todas las rutas
  const allRoutes = [
    ...mainRoutes,
    ...categoryRoutes,
    ...blogRoutes,
    ...legalRoutes,
  ]

  return allRoutes.map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
