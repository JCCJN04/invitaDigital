const SITE_URL = "https://invitacionesdigitalesmty.com.mx"

/**
 * Builds a consistent alternates object with canonical + hreflang for every page.
 * Use in every page-level metadata export instead of setting canonical manually.
 */
export function buildAlternates(path: string) {
  const url = `${SITE_URL}${path}`
  return {
    canonical: url,
    languages: {
      "es-MX": url,
      "x-default": SITE_URL,
    },
  }
}
