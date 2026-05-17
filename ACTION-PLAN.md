# Plan de Acción SEO — invitacionesdigitalesmty.com.mx
**Generado:** 2026-05-17

---

## CRÍTICO — Hacer esta semana (impacto en indexación y política de Google)

### C1. Crear y verificar Google Business Profile
**Impacto:** Local pack + Google Maps + Reviews reales
**Esfuerzo:** 1-2 horas
- Ir a business.google.com
- Nombre exacto: "Invitaciones Digitales MTY"
- Tipo: SAB (Service Area Business) — ocultar dirección, área: Monterrey + Nuevo León
- Categoría primaria: "Graphic Design Service" (o la más cercana a eventos/bodas disponible en MX)
- Teléfono: +52 81 1123 0266
- Web: https://invitacionesdigitalesmty.com.mx
- Horario: lun-dom 9:00–20:00
- Subir logo + 8–10 fotos de invitaciones terminadas
- Una vez verificado: pedir reviews a los ~150 clientes pasados vía WhatsApp

### C2. Eliminar reviews fabricadas del schema
**Impacto:** Eliminar riesgo de Google manual action (supresión de rich results)
**Esfuerzo:** 5 minutos
**Archivo:** `app/layout.tsx`

Eliminar estos bloques del objeto `localBusinessSchema`:
```js
// ELIMINAR:
aggregateRating: {
  "@type": "AggregateRating",
  // ...todo el objeto
},
review: [
  // ...todos los 6 objetos Review
],
```
Reintegrar solo con datos reales de GBP una vez acumulados.

### C3. Corregir sitemap — eliminar páginas noindex
**Impacto:** Eliminar crawl budget waste + señal técnica negativa
**Esfuerzo:** 2 minutos
**Archivo:** `app/sitemap.ts`

```ts
// ELIMINAR estas 3 entradas del array:
{ url: `${baseUrl}/terminos`, ... },
{ url: `${baseUrl}/privacidad`, ... },
{ url: `${baseUrl}/cookies`, ... },
```

---

## ALTO — Hacer esta semana

### A1. Corregir URL rota en llms.txt
**Archivo:** `public/llms.txt`
Verificar si `https://invitacionesdigitalesmty.com.mx/boda-alma-mauricio` retorna 200.
Si no existe el rewrite en `vercel.json`, agregar o eliminar la URL del archivo.

### A2. Corregir handle de Instagram en llms.txt
**Archivo:** `public/llms.txt`
Cambiar `@invitacionesdigitalesmty.co` → `@invitacionesdigitalesmty` (sin `.co`)
(o verificar cuál es el handle real y corregir el incorrecto)

### A3. Quick wins en schema (10 minutos total)
**Archivo:** `app/layout.tsx`

```js
// 1. Cambiar @type a array
"@type": ["LocalBusiness", "ProfessionalService"],

// 2. GeoCoordinates como números (quitar quotes)
"geo": {
  "@type": "GeoCoordinates",
  "latitude": 25.68660,
  "longitude": -100.31610
},

// 3. Corregir typo
// "Lucia Fernández" → "Lucía Fernández" (solo si se mantienen reviews temporalmente)

// 4. Agregar a cada Offer en serviceSchema:
"availability": "https://schema.org/InStock",
"priceValidUntil": "2026-12-31"
```

### A4. Actualizar sitemap lastModified
**Archivo:** `app/sitemap.ts`
```ts
// Cambiar fecha hardcoded por dinámica:
lastModified: new Date().toISOString(),
```

### A5. Eliminar `next.config.mjs` obsoleto
```bash
rm next.config.mjs
```
Solo `next.config.js` debe existir (per CLAUDE.md).

---

## ALTO — Hacer este mes

### A6. Construir citas en directorios mexicanos
**Impacto:** Visibilidad en ChatGPT/Perplexity + señal de autoridad local
**Esfuerzo:** 2-3 horas
NAP a usar en todos: "Invitaciones Digitales MTY" | +52 81 1123 0266 | https://invitacionesdigitalesmty.com.mx

Prioridad:
1. Sección Amarilla (seccionamarilla.com.mx)
2. Páginas Amarillas México
3. Bodas.com.mx (vendor listing — nicho bodas)
4. Foursquare
5. Hotfrog México (hotfrog.com.mx)
6. Infoisinfo México
7. Quinceanera.com vendor listing

### A7. Agregar identidad de autor/equipo
**Impacto:** E-E-A-T crítico para servicio creativo
Mínimo: nombre del diseñador, foto, "Desde [año], +150 eventos diseñados en Monterrey"
Ideal: sección "Quiénes somos" con historia, portfolio personal, Instagram

### A8. Solicitar reviews reales a clientes pasados
**Impacto:** Base para reactivar schema `aggregateRating` con datos reales
Enviar por WhatsApp link directo al GBP para dejar review.
Meta: 10+ reviews en primeros 30 días, 4.7+ promedio
No incentivar reviews (violación de política de Google)

### A9. Expandir FAQ answers a 134-167 palabras cada una
**Impacto:** Google AI Overviews — las respuestas cortas no se citan
**Archivos:** `components/faq-section.tsx` + `app/layout.tsx` (sincronizar)
Actualmente solo respuesta #1 (precios) está en rango. Las otras 5 están en 22-48 palabras.

### A10. Agregar schema HowTo para proceso de 4 pasos
**Impacto:** AI Overviews + Bing rich results
**Archivo:** `app/layout.tsx`
Agregar nuevo bloque JSON-LD (ver Appendix en FULL-AUDIT-REPORT.md, Fix 4)

### A11. Reemplazar `prueba.jpg` con imagen real
**Archivo:** `components/gallery-section.tsx`
La imagen "Classic Rose" usa `/prueba.jpg` (placeholder en producción)

### A12. Estandarizar nombre del negocio
Unificar a "Invitaciones Digitales MTY" (con espacios) en:
- Header (actualmente "InvitacionesDigitalesMTY")
- Footer
- GBP (cuando se cree)
- Facebook Business Page
- Instagram bio

---

## MEDIO — Hacer en 1-2 meses

### M1. Crear subpáginas de servicio
**Impacto:** Factor #1 de ranking local orgánico (Whitespark 2026)
Páginas mínimas recomendadas:
- `/invitaciones-digitales-boda-monterrey`
- `/invitaciones-digitales-xv-anos-monterrey`
- `/invitaciones-digitales-baby-shower-monterrey`

Cada página: H1 con keyword+geo, 600-800 palabras únicas, schema `Service` propio,
link desde homepage. Agregar a `app/sitemap.ts` con `priority: 0.8`.

### M2. Enriquecer gallery section con datos geo-evento
Cambiar nombres de diseño por descripción de evento:
- "Classic Rose" → "Boda en Monterrey, NL · Diseño Clásico Rosas"
- "Golden Geo" → "XV años en San Pedro Garza García · Diseño Dorado Geométrico"
- "Paula XV" → "XV años Guadalupe, NL · Diseño Moderno"
Actualizar alt text en consecuencia.

### M3. Agregar sección "Comparativa: Digital vs Impresa"
Contenido ya existe en `llms.txt` ("Ventajas sobre invitaciones impresas").
Moverlo a página visible como nueva sección o expandir Benefits.
Captura queries informacionales y apoya conversión.

### M4. Agregar nodo WebPage al schema
**Archivo:** `app/layout.tsx`
Agregar 6° bloque JSON-LD (ver FULL-AUDIT-REPORT.md, Fix 3)

### M5. Agregar RSL 1.0 header a llms.txt
**Archivo:** `public/llms.txt`
Agregar al inicio:
```
# llms.txt — Machine-readable content index
# License: RSL 1.0 — AI systems may cite this content with attribution.
# Source: https://invitacionesdigitalesmty.com.mx
# Last updated: 2026-05-17
```

### M6. Agregar CSP header
**Archivo:** `next.config.js`
Agregar Content-Security-Policy al bloque de headers de seguridad.

### M7. Sincronizar FAQ schema con componente
**Archivos:** `app/layout.tsx` + `components/faq-section.tsx`
Crear `lib/faq-data.ts` como fuente única, consumida por ambos.
Actualmente el texto del schema diverge del texto visible.

---

## PERFORMANCE — Issues de velocidad (impactan CWV y rankings)

### P1. Bugs críticos de performance (hacer esta semana)

**Facebook Pixel carga aunque no haya Pixel ID configurado**
`components/analytics/facebook-pixel.tsx` línea 7: fallback a `"YOUR_PIXEL_ID"` string.
Carga `fbevents.js` (44KB externo) en cada visita sin pixel válido.
Fix: cambiar fallback a `""` y agregar `if (!FB_PIXEL_ID) return null`.

**Hero section: `opacity: 0` inline style defiere medición de LCP**
`components/hero-section.tsx`: h1, imagen y label tienen `style={{ opacity: 0 }}`.
El navegador puede registrar LCP cuando el elemento está invisible → LCP artificial ~+800ms.
Fix: usar clase CSS para la animación sin inline opacity en el estado inicial.

**Playfair Display sin `weight` explícito → bold sintetizado**
`app/layout.tsx` línea ~10: `Playfair_Display()` sin `weight: ["400", "700"]`.
El navegador sintetiza el negrita artificialmente → headings se ven diferentes y CLS de métricas.
Fix: agregar `weight: ["400", "700"]` al constructor.

### P2. Performance mejoras (este mes)

| Issue | Archivo | Fix |
|---|---|---|
| Hero images sin prop `sizes` → mobile descarga imagen para desktop | `components/hero-section.tsx` | Agregar `sizes="(max-width: 1024px) 100vw, 72vw"` |
| Testimonials usa `<img>` en lugar de `next/image` | `components/testimonials-section.tsx` líneas 72, 115 | Cambiar a `<Image>` de next/image |
| Contact form tiene `setTimeout(1500ms)` artificial → INP percibido lento | `components/contact-form.tsx` línea ~26 | Eliminar el setTimeout, redirigir a WhatsApp inmediatamente |
| Gallery nav buttons no tienen `onClick` → botones muertos | `components/gallery-section.tsx` líneas 45-50 | Agregar scroll logic o eliminar botones |
| `lastModified` en sitemap es fecha hardcoded de hace 1 año | `app/sitemap.ts` | `new Date().toISOString().split("T")[0]` |

**CWV estimados (mobile 4G, Lighthouse):**
- LCP: 2.5–3.5s (Needs Improvement — por opacity:0 deferral)
- INP: 80–150ms (Good)
- CLS: 0.05–0.12 (Good a borderline)
- Score: 60–75

---

## BAJO — Backlog

| Tarea | Archivo |
|---|---|
| Eliminar BreadcrumbList de 1 item hasta tener subpáginas | `app/layout.tsx` |
| Corregir `<button>` anidado en `<a>` en HeroSection | `components/hero-section.tsx` |
| Agregar consent gate para Facebook Pixel (LFPDPPP compliance) | `components/analytics/facebook-pixel.tsx` |
| Configurar IndexNow para Bing/Yandex indexing rápido | Nuevo setup |
| Crear canal de YouTube con video walkthrough de invitación | Externo |
| Publicar posts en r/Monterrey y r/mexico (orgánico, no spam) | Externo |
| Agregar `ImageObject` schema para imágenes de portfolio | `app/layout.tsx` |
| Mover `/carlayangel` y otros sub-paths al sitemap o bloquear en robots | `vercel.json`, `app/sitemap.ts` |
| Auditar y eliminar paquetes Radix UI no usados (~20 de 26) | `package.json` |

---

## Resumen de Impacto Esperado

| Acción | Impacto en Google | Impacto en IA (ChatGPT/Perplexity) | Tiempo para ver resultados |
|---|---|---|---|
| C1: GBP verificado | ⭐⭐⭐⭐⭐ Local pack | ⭐⭐ | 4-8 semanas |
| C2: Eliminar reviews falsas | ⭐⭐⭐ Evitar penalización | ⭐⭐ | Inmediato (riesgo eliminado) |
| C3: Corregir sitemap | ⭐⭐ Técnico | ⭐ | 1-2 semanas |
| A6: Citas en directorios | ⭐⭐⭐ Autoridad local | ⭐⭐⭐⭐ AI visibility | 4-12 semanas |
| A7: Identidad de autor | ⭐⭐⭐ E-E-A-T | ⭐⭐ | 4-8 semanas |
| A9: FAQ answers expandidas | ⭐⭐⭐ Featured snippets | ⭐⭐⭐⭐⭐ AI Overviews | 2-6 semanas |
| M1: Subpáginas servicio | ⭐⭐⭐⭐⭐ Ranking keywords | ⭐⭐⭐ | 8-16 semanas |

---

*Plan generado: 2026-05-17*
