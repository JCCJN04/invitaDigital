import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx"

  return [
    {
      url: baseUrl,
      lastModified: new Date().toISOString().split("T")[0],
      changeFrequency: "weekly",
      priority: 1.0,
    },
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
