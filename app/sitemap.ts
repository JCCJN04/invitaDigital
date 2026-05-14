import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx"

  return [
    {
      url: baseUrl,
      lastModified: "2025-05-14",
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: "2025-05-14",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: "2025-05-14",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: "2025-05-14",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ]
}
