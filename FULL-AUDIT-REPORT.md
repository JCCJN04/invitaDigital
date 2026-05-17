# SEO Full Audit — invitacionesdigitalesmty.com.mx
**Fecha:** 2026-05-17
**Plataforma:** Next.js 15 App Router / Vercel
**Tipo de negocio:** Service Area Business (SAB) — invitaciones digitales, Monterrey NL

---

## SEO Health Score: 62 / 100

| Categoría | Peso | Puntaje |
|---|---|---|
| Technical SEO | 22% | 74 |
| Content Quality / E-E-A-T | 23% | 61 |
| On-Page SEO | 20% | 68 |
| Schema / Structured Data | 10% | 58 |
| Performance (CWV) | 10% | ~70 (estimado) |
| AI Search / GEO | 10% | 68 |
| Local SEO | — | **44** ← mayor brecha |
| Images | 5% | 60 |

> **Local SEO (44/100) es el talón de Aquiles.** Sin Google Business Profile verificado ni citas en directorios, el sitio es invisible en búsquedas locales y Google Maps — donde se captura la mayoría de clics de intención local.

---

## Top 5 Issues Críticos

1. **Sin Google Business Profile verificado** → cero visibilidad en local pack y Google Maps
2. **Reviews fabricadas en JSON-LD schema** → riesgo de manual action de Google (supresión de rich results)
3. **Sitemap incluye 3 páginas noindex** → contradicción que desperdicia crawl budget
4. **Cero citas en directorios** → invisible para ChatGPT, Perplexity y búsquedas de IA
5. **Sin identidad de autor/equipo** → E-E-A-T crítico para servicio creativo de confianza

## Top 5 Quick Wins

1. **Eliminar `/terminos`, `/privacidad`, `/cookies` del sitemap** (5 min, impacto inmediato)
2. **Corregir GeoCoordinates de string a número** en schema (2 min)
3. **Agregar `availability` y `priceValidUntil` a ofertas** en schema (5 min)
4. **Corregir typo `"Lucia"` → `"Lucía"`** en schema (1 min)
5. **Agregar RSL 1.0 header al llms.txt** (2 min)

---

## 1. Technical SEO — 74/100

### CRITICAL

**Sitemap incluye páginas noindex**
`app/sitemap.ts` lista `/terminos`, `/privacidad`, `/cookies` — todas con `robots: { index: false }`.
Contradicción directa: sitemap dice "indexar", meta robots dice "no indexar".
Google resuelve a favor del noindex pero la contradicción señala negligencia técnica y desperdicia crawl budget.

```ts
// app/sitemap.ts — ELIMINAR estas 3 entradas:
{
  url: `${baseUrl}/terminos`,  // ← eliminar
  ...
},
{
  url: `${baseUrl}/privacidad`,  // ← eliminar
  ...
},
{
  url: `${baseUrl}/cookies`,  // ← eliminar
  ...
},
```

### HIGH

**`/boda-alma-mauricio` referenciado en `llms.txt` sin rewrite rule**
`public/llms.txt` líneas 121-122 listan `https://invitacionesdigitalesmty.com.mx/boda-alma-mauricio`
No existe rewrite en `vercel.json` ni `next.config.js` → probable 404.
`/paulaxv` está correctamente proxiado. `/boda-alma-mauricio` no.
Acción: agregar rewrite en `vercel.json` o eliminar URL de `llms.txt`.

### MEDIUM

| Issue | Archivo | Fix |
|---|---|---|
| CSP header ausente | `next.config.js` | Agregar Content-Security-Policy header |
| Sub-paths proxiados no están en sitemap ni bloqueados en robots | `vercel.json`, `app/sitemap.ts`, `app/robots.ts` | Decidir: indexar (agregar a sitemap) o bloquear (agregar Disallow) |
| `lastModified` en sitemap es fecha hardcoded del pasado (2025-05-14) | `app/sitemap.ts` | Cambiar a `new Date().toISOString()` |
| FAQ schema diverge del componente `faq-section.tsx` | `app/layout.tsx` | Sincronizar texto |
| `WhatsAppWidget` lazy import sin placeholder → riesgo de CLS | `app/page.tsx` | Agregar `loading` skeleton |

### LOW

| Issue | Archivo |
|---|---|
| `next.config.mjs` duplicado obsoleto (eliminar) | `next.config.mjs` |
| Facebook Pixel se dispara sin consent gate | `components/analytics/facebook-pixel.tsx` |
| `prueba.jpg` imagen placeholder en producción | `components/gallery-section.tsx` |
| `<button>` anidado dentro de `<a>` en HeroSection (HTML inválido) | `components/hero-section.tsx` |
| IndexNow no configurado (Bing/Yandex indexing rápido) | No implementado |
| Directiva `host` en robots.ts es solo Yandex, no Google/Bing | `app/robots.ts` |

### Positivos ✓

- robots.txt bien configurado, todos los AI crawlers explícitamente permitidos
- HTTPS + HSTS correctos
- Headers de seguridad completos (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS)
- Canonical correcto (`https://invitacionesdigitalesmty.com.mx`)
- hreflang `es-MX` + `x-default` correctos
- Next.js SSR → Google recibe HTML completo sin ejecutar JS
- Imágenes hero con `priority` prop → LCP optimizado

---

## 2. Content Quality / E-E-A-T — 61/100

### CRITICAL

**Cero identidad de autor o equipo**
No hay nombre de diseñador, foto, background, años de experiencia, ni "quiénes somos".
Para un servicio creativo de confianza donde el cliente paga $1,999–$3,499 MXN a un desconocido,
este es el gap de E-E-A-T más explotable vs cualquier competidor que sí se identifica.

**Contradicción en social proof**
Schema dice `reviewCount: 6`. Página dice "+150 eventos".
Miden cosas distintas, pero su proximidad crea confusión para sistemas de IA y quality raters.
Los 6 reviews en schema son hardcoded en el código — no provienen de plataforma verificada.

**Página única vs competidores multi-página**
Site solo ranquea para un conjunto de keywords simultáneamente.
Sin páginas dedicadas por evento (boda, XV años, bautizo), no puede capturar queries específicas.
Este es un techo estructural, no un problema de pulir contenido.

### HIGH

| Issue | Fix |
|---|---|
| Handle de Instagram inconsistente: `@invitacionesdigitalesmty.co` en llms.txt vs `@invitacionesdigitalesmty` en layout.tsx | Verificar handle real, corregir el incorrecto |
| Gallery sin contenido descriptivo (3 items con nombres de diseño, sin evento/ubicación) | Cambiar a formato: "Boda en San Pedro · Diseño Golden Geo" |
| "Ventajas sobre invitaciones impresas" solo en llms.txt, no en página visible | Mover a sección Benefits o nueva sección |
| Contact form no envía email — redirige a WhatsApp aunque solicita email | Corregir UX o aclarar que la respuesta es vía WhatsApp |

### MEDIUM

| Issue | Fix |
|---|---|
| No hay GBP embed ni link a Google Maps | Agregar "Ver en Google Maps" o mapa de área de servicio |
| FAQ respuesta de precios es párrafo de 180 palabras sin saltos | Dividir en párrafos o lista |
| "Primera comunión" y "despedidas de soltera" ausentes de página visible | Agregar a lista de eventos en FAQ o Benefits |
| Sin año de fundación ni historia del negocio | Agregar "Desde [año], +150 eventos en Monterrey" |

### Positivos ✓

- Español natural, legible, sin marcadores de AI bulk
- Keywords locales bien distribuidas sin keyword stuffing
- FAQ respuesta de precios es la sección más detallada y útil
- Secciones bien estructuradas (headings, listas, accordions)
- Proceso numerado de 4 pasos claro

---

## 3. Schema / Structured Data — 58/100

### HIGH — Riesgo de Manual Action

**Reviews 5/5 fabricadas en JSON-LD**
Los 6 objetos `Review` en `localBusinessSchema` (María González, Ana Rodríguez, Carlos Mendoza,
Sandra Castillo, Roberto Salinas, Lucía Fernández) están hardcodeados en `app/layout.tsx`.
No provienen de Google Maps, Trustpilot ni ninguna plataforma verificable.
`aggregateRating: 5.0` con varianza cero en 6 reviews es el perfil que más frecuentemente
activa el Google Fake Reviews manual action (desde septiembre 2022).

**Acción requerida:** Eliminar el bloque `aggregateRating` y el array `review` del schema.
Un `LocalBusiness` sin rating es 100% válido y sin riesgo. Reintegrar solo cuando existan
reviews reales en GBP u otra plataforma verificada.

```js
// En app/layout.tsx, ELIMINAR de localBusinessSchema:
// aggregateRating: { ... },
// review: [ ... ],
```

### MEDIUM

| Issue | Fix | Archivo |
|---|---|---|
| FAQ schema text diverge de `faq-section.tsx` | Sincronizar o crear `faq-data.ts` compartido | `app/layout.tsx`, `components/faq-section.tsx` |
| `@type` debería incluir `ProfessionalService` | Cambiar a `"@type": ["LocalBusiness", "ProfessionalService"]` | `app/layout.tsx` |
| Falta nodo `WebPage` | Agregar 6° bloque JSON-LD (ver Fix 3 en Appendix) | `app/layout.tsx` |
| GeoCoordinates como strings en lugar de números | `"latitude": 25.68660, "longitude": -100.31610` (sin quotes) | `app/layout.tsx` |
| `itemReviewed` ausente en cada Review; typo "Lucia" | Agregar `itemReviewed` + corregir a "Lucía" | `app/layout.tsx` |

### LOW

| Issue | Fix |
|---|---|
| Offers sin `availability` ni `priceValidUntil` | Agregar `"availability": "InStock", "priceValidUntil": "2026-12-31"` |
| BreadcrumbList con 1 item — sin valor en SERPs | Eliminar hasta tener subpáginas; expandir entonces |
| FAQPage en sitio comercial no genera rich results en Google (desde ago 2023) | INFO: mantener para valor en IA/Bing |
| `Service.areaServed` solo dice "Monterrey" — no coincide con `LocalBusiness` | Igualar a: Ciudad + Nuevo León + México |

### Positivos ✓

- 5 schemas presentes, JSON-LD, todos con `@context: https://schema.org`
- `LocalBusiness` completo: address, geo, hours, phone, email, priceRange, sameAs
- `Service` con OfferCatalog y 3 planes con precios en MXN
- `WebSite` con `inLanguage: es-MX` y publisher linkado por `@id`
- Cross-references via `@id` correctos entre schemas
- `provider` en Service schema usa patrón `@id` correcto

---

## 4. Local SEO — 44/100 ⚠️

**Esta es la dimensión más crítica para aparecer en búsquedas locales.**

### CRITICAL

**Sin Google Business Profile verificado**
Evidencia de ausencia: no hay Maps embed, no hay place ID, no hay link "Ver en Google Maps",
no hay widget de reviews de Google, no hay GBP URL en `sameAs`.
Sin GBP: cero apariciones en local pack (las 3 fichas en Google Maps), 
cero apariciones en Google Maps searches, invisibilidad total en búsquedas con intención local.
GBP es el factor #1 de ranking local (Whitespark 2026).

**Acción:** Crear y verificar en business.google.com inmediatamente.
- Nombre: "Invitaciones Digitales MTY"
- Categoría primaria: "Graphic Design Service" o categoría de eventos más cercana en MX
- Tipo: SAB (ocultar dirección física, definir área de servicio: Monterrey + NL)
- Teléfono: +52 81 1123 0266
- Sitio: https://invitacionesdigitalesmty.com.mx
- Horario: 9AM–8PM, lunes a domingo

**Cero citas en directorios**
El negocio solo existe en Instagram y una Facebook Business Page no verificada.
Sin citas estructuradas en directorios, es invisible para ChatGPT/Perplexity/búsquedas de IA
y débil para local pack de Google.

Directorios prioritarios para Monterrey/México:
1. Google Business Profile (crítico, ver arriba)
2. Sección Amarilla México (seccionamarilla.com.mx)
3. Páginas Amarillas México
4. Facebook Business Page (verificar que esté activa y completa)
5. Bodas.com.mx (nicho bodas — muy relevante)
6. Foursquare
7. Hotfrog México
8. Infoisinfo.com.mx
9. Quinceanera.com vendor listing

### HIGH

**Sin subpáginas de servicio**
"Invitaciones digitales boda Monterrey" y "invitaciones XV años Monterrey" son queries separadas
que requieren páginas dedicadas para rankear competitivamente.
El techo actual de una sola página bloquea el crecimiento de keywords.

Páginas mínimas recomendadas:
- `/invitaciones-digitales-boda-monterrey`
- `/invitaciones-digitales-xv-anos-monterrey`
- `/invitaciones-digitales-baby-shower-monterrey`

**Inconsistencia en nombre del negocio**
Schema y título usan "Invitaciones Digitales MTY" (con espacios).
Header, footer, y social usan "InvitacionesDigitalesMTY" (sin espacios).
El nombre en GBP debe coincidir exactamente con todas las citas.
Estandarizar a: **"Invitaciones Digitales MTY"** en todos lados.

### Positivos ✓

- Título H1 y meta title con keyword local exacta
- "Monterrey" aparece en H1, hero, H2 de benefits, testimonios, meta
- NAP consistente en número de teléfono (todas las fuentes coinciden)
- Schema `areaServed` cubre Ciudad + Estado + País
- Testimonios referencian San Pedro, Apodaca, Guadalupe, Santa Catarina

---

## 5. GEO / AI Search Readiness — 68/100

### Positivos ✓

- Todos los AI crawlers explícitamente permitidos en robots.ts (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.)
- `llms.txt` presente y bien estructurado en `public/llms.txt`
- `<link rel="alternate" type="text/plain" href="/llms.txt">` en `<head>`
- Precios específicos en MXN citables por IA
- Tiempo de entrega (24-48 hrs) es dato concreto citable
- FAQPage schema con 6 preguntas (valor para Bing y AI Overviews)
- Next.js SSR → AI crawlers reciben HTML completo

### Issues

**Solo 1 de 6 FAQ answers en rango citable (134-167 palabras)**
Solo la primera respuesta (precios) está en el rango óptimo para Google AI Overviews.
Las otras 5 están en 22-48 palabras — demasiado cortas para ser citadas como respuesta independiente.

**Sin brand mentions en plataformas externas**
ChatGPT y Perplexity citan fuentes con corroboración de terceros.
YouTube tiene correlación de 0.737 con apariciones en AI citations.
Sin YouTube, sin Reddit, sin menciones en blogs — la IA no puede corroborar la marca.

**Sin schema HowTo para el proceso de 4 pasos**
El `process-section.tsx` ya tiene la estructura perfecta.
HowTo es uno de los schemas más extraídos para AI Overviews.

**Handle de Instagram incorrecto en llms.txt**
`public/llms.txt` línea ~115: `@invitacionesdigitalesmty.co` (con `.co` extra)
`app/layout.tsx`: `@invitacionesdigitalesmty` (correcto)
AI systems pueden recuperar información de contacto incorrecta.

### Recomendaciones por impacto

| Prioridad | Acción | Esfuerzo | Plataforma objetivo |
|---|---|---|---|
| 1 | Expandir 5 FAQ answers a 134-167 palabras | Bajo | Google AI Overviews |
| 2 | Agregar schema HowTo para proceso de 4 pasos | Bajo | AI Overviews, Bing |
| 3 | Crear canal de YouTube con video walkthrough de invitación | Medio | ChatGPT, Perplexity, todos |
| 4 | Publicar 3-5 blog posts con queries long-tail | Alto | Todas las plataformas |
| 5 | Agregar RSL 1.0 header a llms.txt | Mínimo | AI training pipelines |

---

## 6. Images — 60/100

| Issue | Severidad |
|---|---|
| `prueba.jpg` en production en gallery-section (nombre placeholder) | MEDIUM |
| "Classic Rose" gallery card linkea a `invitacionesemmaypau.vercel.app` (dominio externo) | MEDIUM |
| Alt text en gallery cards usa nombres de diseño, no evento/ubicación | LOW |
| No hay `ImageObject` schema para las imágenes de portfolio | LOW |

### Positivos ✓

- Hero images usan `next/image` con `priority` prop (LCP optimizado)
- OG image presente con dimensiones correctas (1200×630)
- `max-image-preview: large` en robots meta
- Formatos AVIF/WebP habilitados en `next.config.js`
- Gallery images tienen dimensiones explícitas (sin CLS)

---

## Appendix: Schema Fixes Listos para Implementar

### Fix 1 — Cambios en `localBusinessSchema` (`app/layout.tsx`)

```js
// Cambiar @type
"@type": ["LocalBusiness", "ProfessionalService"],

// Cambiar geo a números
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 25.68660,
  "longitude": -100.31610
},

// ELIMINAR completo:
// "aggregateRating": { ... },
// "review": [ ... ],

// Si se mantienen reviews en futuro, agregar en cada Review:
"itemReviewed": {
  "@type": "LocalBusiness",
  "@id": "https://invitacionesdigitalesmty.com.mx#localbusiness"
}

// Corregir typo en última review:
// "Lucia Fernández" → "Lucía Fernández"
```

### Fix 2 — Ofertas en `serviceSchema`

```js
// Agregar en cada objeto Offer:
"availability": "https://schema.org/InStock",
"priceValidUntil": "2026-12-31"
```

### Fix 3 — Nuevo bloque WebPage

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://invitacionesdigitalesmty.com.mx#webpage",
  "url": "https://invitacionesdigitalesmty.com.mx",
  "name": "Invitaciones Digitales en Monterrey | Bodas, XV Años y Eventos",
  "isPartOf": { "@id": "https://invitacionesdigitalesmty.com.mx#website" },
  "about": { "@id": "https://invitacionesdigitalesmty.com.mx#localbusiness" },
  "inLanguage": "es-MX",
  "dateModified": "2026-05-17"
}
```

### Fix 4 — Nuevo bloque HowTo

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Cómo pedir tu invitación digital en Monterrey",
  "description": "Proceso de 4 pasos para obtener tu invitación digital personalizada.",
  "totalTime": "PT48H",
  "estimatedCost": {
    "@type": "MonetaryAmount",
    "currency": "MXN",
    "value": "1999"
  },
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "Cuéntanos tu sueño",
      "text": "Comparte los detalles de tu evento: fecha, nombres, tema y estilo deseado."
    },
    {
      "@type": "HowToStep",
      "position": 2,
      "name": "Diseñamos tu invitación",
      "text": "Creamos un diseño personalizado con tus colores, fotos y música favorita."
    },
    {
      "@type": "HowToStep",
      "position": 3,
      "name": "Revisiones y aprobación",
      "text": "Recibes el diseño y solicitas cambios hasta que quede perfecto."
    },
    {
      "@type": "HowToStep",
      "position": 4,
      "name": "Comparte y celebra",
      "text": "Obtienes tu link personalizado listo para compartir por WhatsApp con todos tus invitados."
    }
  ]
}
```

---

*Reporte generado: 2026-05-17 | Agentes: Technical SEO, Content/E-E-A-T, Schema, Local SEO, GEO/AI*
