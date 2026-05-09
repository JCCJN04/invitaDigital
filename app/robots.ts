import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx"

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"],
      },
      // AI search bots — explicitly allowed to index and cite content
      {
        userAgent: [
          "GPTBot",           // ChatGPT / OpenAI
          "ChatGPT-User",     // ChatGPT browsing
          "OAI-SearchBot",    // OpenAI SearchGPT
          "ClaudeBot",        // Claude (Anthropic)
          "anthropic-ai",     // Anthropic crawler
          "PerplexityBot",    // Perplexity AI
          "Google-Extended",  // Gemini / Google AI Overviews
          "Googlebot",        // Google Search
          "Bingbot",          // Bing / Microsoft Copilot
          "meta-externalagent", // Meta AI
          "cohere-ai",        // Cohere AI
        ],
        allow: "/",
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  }
}
