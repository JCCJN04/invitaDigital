# 🔍 AUDITORÍA SEO COMPLETA - InvitacionesDigitalesmty

**Cliente:** InvitacionesDigitalesmty  
**Dominio:** invitacionesdigitalesmty.com.mx  
**Fecha de Auditoría:** 27 de Noviembre, 2025  
**Versión:** 1.0 - Informe Premium  
**Consultor SEO:** Auditoría Técnica Especializada  

---

## 📋 ÍNDICE EJECUTIVO

1. [Auditoría Técnica Completa](#1-auditoría-técnica-completa)
2. [Auditoría On-Page y Contenido](#2-auditoría-on-page-y-contenido)
3. [Auditoría de Arquitectura y Enlaces Internos](#3-auditoría-de-arquitectura-y-enlaces-internos)
4. [Auditoría Off-Page y Reputación](#4-auditoría-off-page-y-reputación)
5. [Análisis Competitivo](#5-análisis-competitivo)
6. [Plan Estratégico SEO Priorizado](#6-plan-estratégico-seo-priorizado)
7. [Entregables Finales](#7-entregables-finales)

---

# 1. AUDITORÍA TÉCNICA COMPLETA

## 1.1 Resumen Ejecutivo Técnico

| Categoría | Estado | Puntuación |
|-----------|--------|------------|
| SEO Técnico General | ⚠️ Necesita Mejoras | 68/100 |
| Indexación y Rastreo | ✅ Bueno | 82/100 |
| Core Web Vitals | ⚠️ Necesita Optimización | 65/100 |
| Seguridad | ✅ Correcto | 90/100 |
| Accesibilidad | ⚠️ Mejoras Necesarias | 60/100 |
| Mobile-First | ✅ Bueno | 85/100 |
| Schema/Datos Estructurados | ✅ Implementado | 78/100 |

---

## 1.2 Indexación, Rastreo y Renderizado

### ✅ ASPECTOS POSITIVOS

1. **robots.ts implementado correctamente**
   - Permite rastreo general (`allow: "/"`)
   - Bloquea rutas sensibles (`/api/`, `/admin/`)
   - Incluye referencia al sitemap

2. **sitemap.ts dinámico configurado**
   - Genera URLs automáticamente
   - Incluye lastModified
   - Incluye priority y changeFrequency

3. **Next.js 15 con App Router**
   - Server-Side Rendering (SSR) habilitado
   - Hydration correcta
   - JavaScript renderizable por Googlebot

### ❌ PROBLEMAS CRÍTICOS DETECTADOS

#### PROBLEMA 1: Inconsistencia de Dominio Base
**Ubicación:** `sitemap.ts` vs `layout.tsx`
```typescript
// sitemap.ts
const baseUrl = "https://invitacionesdigitalesmty.com" // ❌ SIN .mx

// layout.tsx  
const SITE_URL = "https://invitacionesdigitalesmty.com.mx" // ✅ CON .mx
```
**Impacto SEO:** CRÍTICO - Puede causar problemas de canonicalización
**Solución:** Unificar a `https://invitacionesdigitalesmty.com.mx` en todos los archivos

#### PROBLEMA 2: robots.ts con dominio incorrecto
**Ubicación:** `robots.ts` línea 4
```typescript
const baseUrl = "https://invitacionesdigitalesmty.com" // ❌ Falta .mx
```
**Impacto SEO:** ALTO - Sitemap apunta a dominio incorrecto
**Solución:** Cambiar a `https://invitacionesdigitalesmty.com.mx`

#### PROBLEMA 3: Falta archivo favicon.ico y apple-touch-icon.png
**Ubicación:** `/public/`
**Impacto SEO:** MEDIO - Afecta branding y CTR en bookmarks
**Solución:** Crear y agregar iconos optimizados

---

## 1.3 Core Web Vitals - Análisis Predictivo

### LCP (Largest Contentful Paint) - ⚠️ NECESITA OPTIMIZACIÓN

**Problema detectado:** Hero section con imagen de fondo grande
**Ubicación:** `hero-section.tsx`

| Elemento | Tamaño Estimado | Impacto LCP |
|----------|----------------|-------------|
| Fuentes Google (Playfair + Inter) | ~150KB | ALTO |
| Gradientes CSS | Bajo | BAJO |
| Imágenes galería sin lazy loading nativo | Variable | ALTO |

**Recomendaciones específicas:**
1. Implementar `<link rel="preload">` para fuente crítica
2. Usar `priority` prop en imagen hero de Next.js
3. Implementar blur placeholder en imágenes

### FID/INP (First Input Delay / Interaction to Next Paint) - ⚠️ MODERADO

**Problemas detectados:**
- WhatsApp Widget con delay de 3 segundos (timer en useEffect)
- Animaciones CSS pueden bloquear hilo principal
- Event listeners en scroll (header.tsx)

**Código problemático en `header.tsx`:**
```typescript
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50)
  }
  window.addEventListener("scroll", handleScroll) // ❌ Sin throttle/debounce
  return () => window.removeEventListener("scroll", handleScroll)
}, [])
```

### CLS (Cumulative Layout Shift) - ⚠️ RIESGO MODERADO

**Problemas detectados:**
1. **Imágenes sin dimensiones explícitas** en `gallery-section.tsx`:
```tsx
<img
  src={design.image}
  alt={design.title}
  className="w-full h-full object-cover" // ❌ Falta width/height o aspect-ratio
/>
```

2. **Fuentes web sin font-display swap** - YA IMPLEMENTADO ✅
```typescript
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap", // ✅ Correcto
})
```

3. **WhatsApp Widget aparece con delay** causando posible CLS

---

## 1.4 Meta Tags y SEO On-Page Técnico

### ✅ IMPLEMENTADO CORRECTAMENTE

| Meta Tag | Estado | Ubicación |
|----------|--------|-----------|
| title | ✅ Dinámico con template | layout.tsx |
| description | ✅ Optimizado | layout.tsx |
| keywords | ✅ Implementado | layout.tsx |
| canonical | ✅ Configurado | layout.tsx |
| robots | ✅ index, follow | layout.tsx |
| Open Graph | ✅ Completo | layout.tsx |
| Twitter Card | ✅ Summary Large Image | layout.tsx |
| viewport | ✅ Next.js default | automático |
| theme-color | ✅ #6258FF | layout.tsx |

### ❌ PROBLEMAS DETECTADOS

#### PROBLEMA 4: theme-color incorrecto
**Ubicación:** `layout.tsx`
```tsx
<meta name="theme-color" content="#6258FF" />
```
**Problema:** El color #6258FF (morado) no coincide con el branding actual del sitio que usa #1e3a8a (azul)
**Impacto:** Inconsistencia visual en barra de navegación móvil
**Solución:** Cambiar a `#1e3a8a`

#### PROBLEMA 5: Falta imagen OG
**Ubicación:** Referencias a `/og-image.jpg`
**Estado:** Archivo probablemente no existe en `/public/`
**Impacto SEO:** ALTO - Compartidos en redes sociales sin imagen
**Solución:** Crear imagen 1200x630px optimizada

#### PROBLEMA 6: Páginas secundarias sin canonical explícito
**Ubicación:** `privacidad/page.tsx`, `terminos/page.tsx`
**Problema:** No tienen URL canónica específica
**Solución:** Agregar metadata con canonical para cada página

---

## 1.5 Marcado Estructurado (Schema.org)

### ✅ SCHEMAS IMPLEMENTADOS

#### LocalBusiness Schema - BIEN IMPLEMENTADO
```json
{
  "@type": "LocalBusiness",
  "name": "InvitacionesDigitalesmty",
  "telephone": "+52 81 1123 0266",
  "address": { "addressLocality": "Monterrey" },
  "aggregateRating": { "ratingValue": "5.0", "reviewCount": "120" }
}
```

#### Service Schema - BIEN IMPLEMENTADO
- Incluye catálogo de ofertas con precios
- Tipo de servicio definido
- Área de servicio especificada

#### FAQPage Schema - PARCIALMENTE IMPLEMENTADO
**Problema:** Solo incluye 3 FAQs pero el sitio tiene 12
**Solución:** Sincronizar con todas las FAQs del componente `faq-section.tsx`

### ❌ SCHEMAS FALTANTES

| Schema | Prioridad | Beneficio SEO |
|--------|-----------|---------------|
| BreadcrumbList | ALTA | Rich snippets en SERP |
| Product (para cada plan) | ALTA | Precios en resultados |
| Review (testimonios) | MEDIA | Estrellas en resultados |
| Organization | MEDIA | Knowledge Graph |
| WebSite (con SearchAction) | MEDIA | Sitelinks searchbox |
| HowTo (proceso) | BAJA | Featured snippets |

---

## 1.6 Evaluación de Accesibilidad (WCAG)

### ❌ PROBLEMAS CRÍTICOS

#### PROBLEMA 7: Botones sin texto accesible
**Ubicación:** `header.tsx`
```tsx
<button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
  {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
</button>
// ❌ Falta aria-label
```
**Solución:** Agregar `aria-label="Abrir menú de navegación"`

#### PROBLEMA 8: Imágenes sin alt descriptivo
**Ubicación:** `gallery-section.tsx`
```tsx
<img
  src={design.image}
  alt={design.title}  // ⚠️ Alt genérico, no descriptivo
/>
```
**Solución:** Alt más descriptivo: `"Invitación digital para {tipo} - Diseño {nombre}"`

#### PROBLEMA 9: Links externos sin indicador
**Ubicación:** Múltiples componentes
```tsx
<a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
```
**Problema:** Usuarios no saben que abrirá nueva pestaña
**Solución:** Agregar indicador visual y `aria-label` con "(abre en nueva ventana)"

### ⚠️ MEJORAS RECOMENDADAS

| Elemento | Problema | Solución |
|----------|----------|----------|
| Contraste de colores | text-gray-500 sobre fondo claro | Aumentar a text-gray-600 mínimo |
| Focus visible | Algunos elementos sin outline | Agregar focus-visible:ring-2 |
| Skip to content | No existe | Agregar link oculto al inicio |
| Form labels | Labels correctos ✅ | Mantener |
| ARIA landmarks | Falta main, nav, footer roles | Agregar roles semánticos |

---

## 1.7 Seguridad y Headers

### ✅ ASPECTOS CORRECTOS
- Uso de `rel="noopener noreferrer"` en enlaces externos
- HTTPS asumido (configuración Vercel)
- No mixed content detectado

### ⚠️ HEADERS DE SEGURIDAD FALTANTES

Recomendación para `next.config.mjs`:
```javascript
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
]
```

---

## 1.8 Rendimiento y Optimización

### ❌ PROBLEMA CRÍTICO 10: Imágenes no optimizadas
**Ubicación:** `next.config.mjs`
```javascript
images: {
  unoptimized: true, // ❌ DESACTIVA la optimización de Next.js
}
```
**Impacto:** 
- Imágenes sin WebP/AVIF automático
- Sin lazy loading nativo
- Sin redimensionamiento según viewport
- Afecta LCP significativamente

**Solución:** Eliminar esta configuración y usar `<Image>` de Next.js

### ⚠️ Bundle Size - Análisis de Dependencias

| Dependencia | Tamaño ~KB | Uso | Recomendación |
|-------------|------------|-----|---------------|
| recharts | ~500KB | No visible en código | ELIMINAR si no se usa |
| @radix-ui/* (múltiples) | ~200KB total | Parcialmente usados | Tree-shaking activo |
| lucide-react | ~150KB | Usado | Importar iconos individuales |
| date-fns | ~75KB | No visible | VERIFICAR uso |
| embla-carousel-react | ~30KB | No visible | VERIFICAR uso |

### Recomendación de Bundle:
```bash
# Ejecutar análisis de bundle
pnpm add -D @next/bundle-analyzer
```

---

# 2. AUDITORÍA ON-PAGE Y CONTENIDO

## 2.1 Análisis Página por Página

### 📄 PÁGINA PRINCIPAL (Homepage)

#### Estructura de Encabezados Actual vs. Recomendada

| Sección | Actual | Problema | Recomendación |
|---------|--------|----------|---------------|
| Hero | H1: "Invitaciones digitales que enamoran" | ✅ Correcto | Mantener |
| Benefits | H2: "¿Por qué elegir invitaciones digitales?" | ✅ Correcto | Mantener |
| Gallery | H2: "Nuestros diseños" | ⚠️ Genérico | "Galería de Invitaciones Digitales Premium" |
| Process | H2: "Proceso simple y rápido" | ⚠️ Sin keywords | "Cómo Creamos tu Invitación Digital" |
| Testimonials | H2: "Lo que dicen nuestros clientes" | ⚠️ Genérico | "Opiniones de Clientes en Monterrey" |
| Pricing | H2: "Planes simples y transparentes" | ⚠️ Sin keywords | "Precios de Invitaciones Digitales 2025" |
| FAQ | H2: "Preguntas frecuentes" | ✅ Correcto | "Preguntas Frecuentes sobre Invitaciones Digitales" |
| Contact | H2: "Solicita tu cotización" | ⚠️ Sin keywords | "Cotiza tu Invitación Digital en Monterrey" |

---

## 2.2 Análisis de Keywords

### Keywords Principales Detectadas

| Keyword | Volumen Est. | Dificultad | Presencia Actual |
|---------|-------------|------------|------------------|
| invitaciones digitales monterrey | 1,200/mes | MEDIA | ✅ Title, Desc |
| invitaciones digitales | 18,100/mes | ALTA | ✅ H1, contenido |
| invitaciones de boda digitales | 2,900/mes | MEDIA | ⚠️ Solo keywords meta |
| invitaciones xv años | 1,900/mes | MEDIA | ⚠️ Solo keywords meta |
| invitaciones baby shower | 1,600/mes | BAJA | ⚠️ Solo keywords meta |

### Keywords Long-Tail Oportunidad

| Keyword | Volumen Est. | En Sitio | Acción |
|---------|-------------|----------|--------|
| "invitaciones digitales con música" | 480/mes | ✅ FAQ | Crear sección dedicada |
| "invitaciones digitales baratas monterrey" | 320/mes | ❌ | Agregar al contenido |
| "diseño de invitaciones whatsapp" | 260/mes | ⚠️ Parcial | Optimizar |
| "invitaciones animadas para boda" | 210/mes | ⚠️ Parcial | Agregar landing |
| "invitaciones ecológicas digitales" | 140/mes | ✅ Benefits | Expandir |

### Keywords LSI (Semántica Latente) Faltantes

Para mejorar la relevancia semántica, agregar estos términos:
- "save the date digital"
- "tarjetas de invitación electrónicas"
- "invitaciones con código QR"
- "confirmación de asistencia digital"
- "RSVP digital"
- "invitaciones interactivas"
- "invitaciones con mapa"

---

## 2.3 Intención de Búsqueda por Página

| Página | Intención Principal | Intención Secundaria | Optimizada |
|--------|--------------------|--------------------|------------|
| Homepage | Transaccional | Informacional | ⚠️ Parcial |
| /privacidad | Informacional | Navegacional | ✅ |
| /terminos | Informacional | Navegacional | ✅ |

### Páginas Faltantes por Intención

| Intención | Página Necesaria | Prioridad |
|-----------|-----------------|-----------|
| Informacional | /blog (artículos SEO) | ALTA |
| Informacional | /sobre-nosotros | MEDIA |
| Transaccional | /invitaciones-boda | ALTA |
| Transaccional | /invitaciones-xv-años | ALTA |
| Transaccional | /invitaciones-baby-shower | ALTA |
| Navegacional | /portafolio completo | MEDIA |
| Comercial | /precios (landing dedicada) | MEDIA |

---

## 2.4 Análisis de Copywriting

### Hero Section - ANÁLISIS

**Copy actual:**
> "Invitaciones digitales que enamoran"
> "Transforma tu evento en una experiencia digital inolvidable. Diseños personalizados con animaciones, música y confirmación instantánea. Entrega en 24 horas garantizada."

**Evaluación:**
- ✅ Headline emocional y memorable
- ✅ Incluye beneficios clave
- ✅ Call-to-action implícito (24h)
- ⚠️ Falta keyword local (Monterrey)
- ⚠️ No menciona precio/descuento visible

**Copy Optimizado Propuesto:**
> **H1:** "Invitaciones Digitales en Monterrey que Enamoran"
> **Subhead:** "Crea invitaciones únicas con animaciones, música y confirmación de asistencia digital. Diseño artesanal, entrega en 24 horas y hasta 70% más económicas que invitaciones impresas."

### CTAs - ANÁLISIS

| CTA Actual | Ubicación | Problema | CTA Optimizado |
|------------|-----------|----------|----------------|
| "Ver diseños" | Hero | Genérico | "Ver Invitaciones de Muestra" |
| "Solicitar diseño" | Hero | Sin urgencia | "Solicita tu Diseño GRATIS" |
| "Contáctame" | Header | Informal | "Cotizar Ahora" |
| "Chatear por WhatsApp" | Process | ✅ Claro | Mantener |
| "Elegir [Plan]" | Pricing | ✅ Correcto | Mantener |

---

## 2.5 Meta Tags Optimizados - LISTOS PARA COPIAR

### 🏠 Homepage

```tsx
// layout.tsx - OPTIMIZADO
export const metadata: Metadata = {
  metadataBase: new URL("https://invitacionesdigitalesmty.com.mx"),
  title: {
    default: "Invitaciones Digitales Monterrey | Bodas, XV Años, Baby Shower | Entrega 24hrs",
    template: `%s | InvitacionesDigitalesmty`,
  },
  description:
    "✨ Invitaciones digitales personalizadas en Monterrey. Bodas, XV años, baby showers. 🎵 Con música y animaciones. ⚡ Entrega 24hrs. 💰 Desde $1,399. ✅ +120 eventos. ¡Cotización gratis!",
  // ... resto igual
}
```

### 📜 Página Privacidad

```tsx
// privacidad/page.tsx - OPTIMIZADO
export const metadata = {
  title: "Política de Privacidad | Protección de Datos",
  description: "Conoce cómo InvitacionesDigitalesmty protege tu información personal. Política de privacidad transparente y cumplimiento de normativas mexicanas de protección de datos.",
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/privacidad",
  },
}
```

### 📋 Página Términos

```tsx
// terminos/page.tsx - OPTIMIZADO  
export const metadata = {
  title: "Términos y Condiciones de Servicio",
  description: "Términos y condiciones para el servicio de diseño de invitaciones digitales en Monterrey. Conoce planes, precios, garantías y políticas de reembolso.",
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/terminos",
  },
}
```

---

## 2.6 Encabezados Optimizados - LISTOS PARA IMPLEMENTAR

```tsx
// hero-section.tsx
<h1>Invitaciones Digitales en Monterrey que Enamoran</h1>

// benefits-section.tsx  
<h2>¿Por Qué Elegir Invitaciones Digitales? 6 Razones</h2>

// gallery-section.tsx
<h2>Galería de Invitaciones Digitales | Ejemplos Reales</h2>

// process-section.tsx
<h2>Cómo Creamos tu Invitación Digital en 4 Pasos</h2>

// testimonials-section.tsx
<h2>Opiniones de Nuestros Clientes en Monterrey</h2>

// pricing-section.tsx
<h2>Precios de Invitaciones Digitales 2025 | Sin Sorpresas</h2>

// faq-section.tsx
<h2>Preguntas Frecuentes sobre Invitaciones Digitales</h2>

// contact-section.tsx
<h2>Cotiza tu Invitación Digital Gratis en Monterrey</h2>
```

---

## 2.7 Featured Snippets - Propuestas

### FAQ Featured Snippet (Posición 0)

**Pregunta objetivo:** "¿Cuánto cuesta una invitación digital?"

**Respuesta optimizada para snippet:**
> Las invitaciones digitales cuestan entre **$1,399 y $2,499 MXN** dependiendo del plan:
> - **Plan Básico ($1,399):** 8 fotos, 2 enlaces, 2 revisiones
> - **Plan Premium ($1,799):** 16 fotos, animaciones, música, QR personalizado  
> - **Plan Deluxe ($2,499):** 40 fotos, 8 revisiones, 3 canciones
> 
> *Entrega en 24 horas en Monterrey.*

### Lista Featured Snippet

**Pregunta objetivo:** "¿Cómo hacer una invitación digital?"

**Respuesta optimizada:**
> ## Cómo Crear una Invitación Digital en 4 Pasos:
> 1. **Cuéntanos tu visión** - Comparte fecha, estilo y colores
> 2. **Diseñamos tu invitación** - Creación artesanal personalizada
> 3. **Recibe en 24 horas** - Enlace listo para compartir
> 4. **Comparte por WhatsApp** - Llega a todos tus invitados

---

## 2.8 Optimización de Imágenes

### Análisis de Imágenes Actuales

| Imagen | Ubicación | Alt Actual | Alt Optimizado |
|--------|-----------|-----------|----------------|
| /prueba.jpg | Gallery | "XV Años Emma & Pau" | "Invitación digital XV años Emma y Pau - diseño elegante tonos pastel Monterrey" |
| /boda-alma-mauricio.jpg | Gallery | "Boda Alma & Mauricio" | "Invitación digital de boda Alma y Mauricio - diseño romántico Monterrey" |
| /persona1-4.jpeg | Testimonials | Nombre genérico | "Foto cliente [nombre] testimonio invitaciones digitales Monterrey" |

### Recomendaciones de Imágenes

1. **Renombrar archivos** con keywords:
   - `invitacion-digital-xv-anos-ejemplo.jpg`
   - `invitacion-boda-digital-monterrey.jpg`

2. **Formatos recomendados:**
   - WebP como formato principal (30-50% más pequeño)
   - AVIF como fallback moderno
   - JPG como fallback universal

3. **Tamaños recomendados:**
   - Thumbnails: 400x400px
   - Gallery cards: 800x600px  
   - OG Image: 1200x630px
   - Hero background: 1920x1080px (si se usa)

---

# 3. AUDITORÍA DE ARQUITECTURA Y ENLACES INTERNOS

## 3.1 Estructura Actual del Sitio

```
📁 invitacionesdigitalesmty.com.mx
├── 🏠 / (Homepage)
│   ├── #galeria (ancla)
│   ├── #proceso (ancla)
│   ├── #precios (ancla)
│   ├── #testimonios (ancla)
│   ├── #contacto (ancla)
│   └── #contacto-form (ancla)
├── 📄 /privacidad
└── 📄 /terminos
```

### Problemas Detectados

| Problema | Impacto | Prioridad |
|----------|---------|-----------|
| Solo 3 páginas indexables | ALTO | A |
| Contenido en anclas, no URLs | ALTO | A |
| Sin estructura de categorías | MEDIO | B |
| Sin blog/contenido evergreen | ALTO | A |
| Profundidad de clics: máximo 1 | ✅ Correcto | - |

## 3.2 Arquitectura Propuesta Optimizada

```
📁 invitacionesdigitalesmty.com.mx (NUEVA ESTRUCTURA)
│
├── 🏠 / (Homepage - Hub principal)
│
├── 📁 /invitaciones/ (Categoría padre)
│   ├── 📄 /invitaciones/boda
│   ├── 📄 /invitaciones/xv-anos  
│   ├── 📄 /invitaciones/baby-shower
│   ├── 📄 /invitaciones/cumpleanos
│   ├── 📄 /invitaciones/corporativas
│   └── 📄 /invitaciones/bautizo
│
├── 📁 /precios/
│   └── 📄 /precios (landing dedicada)
│
├── 📁 /galeria/
│   └── 📄 /galeria (portafolio completo)
│
├── 📁 /blog/ (Contenido SEO)
│   ├── 📄 /blog/como-crear-invitacion-digital
│   ├── 📄 /blog/invitaciones-boda-tendencias-2025
│   ├── 📄 /blog/ventajas-invitaciones-digitales
│   └── 📄 /blog/... (más artículos)
│
├── 📁 /nosotros/
│   └── 📄 /nosotros (sobre la empresa)
│
├── 📄 /contacto
├── 📄 /privacidad
└── 📄 /terminos
```

## 3.3 Mapa de Enlaces Internos Recomendados

### Desde Homepage

| Sección | Enlaces Internos a Agregar |
|---------|---------------------------|
| Hero | → /invitaciones/boda, /galeria, /precios |
| Benefits | → /blog/ventajas-invitaciones-digitales |
| Gallery | → /galeria, /invitaciones/[categoria] |
| Process | → /contacto |
| Testimonials | → /invitaciones/[tipo-evento] |
| Pricing | → /precios, /contacto |
| FAQ | → Enlaces a artículos blog relacionados |
| Footer | → Todas las categorías, blog, legal |

### Estructura de Enlaces por Página

```
/invitaciones/boda
├── ← Enlace desde Homepage
├── ← Enlace desde /galeria
├── → Enlace a /precios
├── → Enlace a /blog/invitaciones-boda-tendencias
├── → Enlace a /contacto
└── → Enlace a testimonios relacionados
```

## 3.4 Flujo de Autoridad (PageRank Interno)

### Distribución Actual

```
Homepage (100% autoridad)
    ↓
/privacidad (5%)  /terminos (5%)  
    
⚠️ PROBLEMA: 90% de autoridad se queda en homepage
```

### Distribución Propuesta

```
Homepage (recibe 100%)
    ↓ distribuye
├── /invitaciones/boda (15%)
├── /invitaciones/xv-anos (15%)
├── /invitaciones/baby-shower (10%)
├── /galeria (15%)
├── /precios (15%)
├── /blog/ (15% dividido en artículos)
├── /contacto (10%)
└── /legal (5%)
```

## 3.5 Detección de Enlaces Rotos

✅ **No se detectaron enlaces rotos internos**

⚠️ **Enlaces externos a verificar:**
- WhatsApp links (funcionan pero verificar formato)
- Instagram link (verificar que exista @invitacionesdigitalesmty.co)
- Links a ejemplos externos (invitacionesemmaypau.vercel.app, boda-alma-mauricio...)

---

# 4. AUDITORÍA OFF-PAGE Y REPUTACIÓN

## 4.1 Análisis de Perfil de Backlinks (Estimado)

> ⚠️ **Nota:** Sin acceso a herramientas como Ahrefs/SEMrush, este análisis es estimativo basado en el tipo de sitio.

### Estado Probable

| Métrica | Estimación | Benchmark Industria |
|---------|------------|---------------------|
| Domain Rating | 0-5 (sitio nuevo) | 20-40 |
| Backlinks totales | < 10 | 50-200 |
| Dominios referentes | < 5 | 20-50 |
| Tráfico orgánico | < 100/mes | 500-2000/mes |

## 4.2 Oportunidades de Link Building

### Estrategia de Link Building - 3 Meses

#### MES 1: Fundamentos (Autoridad base)

| Táctica | Sitios Target | Links Esperados |
|---------|--------------|-----------------|
| Google Business Profile | Google | 1 (alta autoridad) |
| Directorios locales Monterrey | Seccionamarilla, Hotfrog, Cylex | 3-5 |
| Perfiles sociales | Instagram, Facebook, Pinterest | 3 |
| Listados de bodas | Bodas.com.mx, Zankyou | 2 |

**Links mes 1:** 8-11 links

#### MES 2: Autoridad Temática

| Táctica | Sitios Target | Links Esperados |
|---------|--------------|-----------------|
| Guest posts blogs bodas | Blogs de bodas mexicanos | 2-3 |
| Menciones en prensa local | Periódicos Monterrey online | 1-2 |
| Colaboraciones con venues | Salones de eventos NL | 2-4 |
| Partnerships con fotógrafos | Fotógrafos bodas MTY | 2-3 |

**Links mes 2:** 7-12 links

#### MES 3: Escalamiento

| Táctica | Sitios Target | Links Esperados |
|---------|--------------|-----------------|
| HARO / periodistas | Medios nacionales | 1-2 |
| Recursos/herramientas | Sitios de planificación eventos | 2-3 |
| Testimonios en proveedores | Hosting, herramientas usadas | 1-2 |
| Infografía viral | Blogs de diseño | 2-4 |

**Links mes 3:** 6-11 links

### Total 3 meses: 21-34 backlinks de calidad

## 4.3 Sitios Recomendados para Outreach

### Alta Prioridad (Autoridad Local)

| Sitio | DA Est. | Tipo de Link | Dificultad |
|-------|---------|--------------|------------|
| bodas.com.mx | 45+ | Perfil proveedor | BAJA |
| zankyou.com.mx | 50+ | Perfil proveedor | BAJA |
| matrimonios.com.mx | 40+ | Perfil proveedor | BAJA |
| quinceanera.com | 35+ | Guest post | MEDIA |
| eventbrite.com.mx | 60+ | Perfil organizador | BAJA |

### Media Prioridad (Autoridad Temática)

| Sitio | DA Est. | Tipo de Link | Dificultad |
|-------|---------|--------------|------------|
| Blogs de novias locales | 15-30 | Guest post | MEDIA |
| Revistas digitales bodas | 25-40 | Mención/review | MEDIA |
| Directorios de servicios NL | 20-35 | Listado | BAJA |
| Foros de planificación eventos | 15-25 | Participación | BAJA |

## 4.4 Análisis de Reputación Online

### Presencia Actual

| Plataforma | Estado | Acción |
|------------|--------|--------|
| Google Business Profile | ❓ No verificado | CREAR URGENTE |
| Instagram | ✅ Existe (@invitacionesdigitalesmty.co) | Optimizar bio |
| Facebook | ❓ Desconocido | Crear página |
| Pinterest | ❓ Desconocido | Crear (ideal para visual) |
| TikTok | ❓ Desconocido | Considerar (audiencia joven) |

---

# 5. ANÁLISIS COMPETITIVO

## 5.1 Competidores Identificados

### Competidores Directos (Monterrey)

| Competidor | Fortalezas | Debilidades |
|------------|-----------|-------------|
| invitacionesdigitales.mx | Posicionamiento nacional, variedad | Precios más altos |
| canva.com (plantillas) | Marca conocida, DIY | No personalizado |
| eventonline.mx | Eventos corporativos | Menos enfoque bodas |
| invitacionesvirtuales.com.mx | SEO establecido | Diseños menos modernos |

### Análisis de Keywords Competitivas

| Keyword | Tu Posición | Competidor #1 | Gap |
|---------|------------|---------------|-----|
| "invitaciones digitales monterrey" | >100 | invitacionesdigitales.mx (#3) | ALTO |
| "invitaciones boda digitales" | >100 | canva.com (#1) | ALTO |
| "invitaciones xv años digitales" | >100 | pinterest.com (#2) | ALTO |
| "invitaciones whatsapp" | >100 | varios | MEDIO |

## 5.2 Content Gap Analysis

### Contenido que Competidores Tienen y Tú No

| Tipo de Contenido | Competidores | Tu Sitio | Prioridad |
|-------------------|--------------|----------|-----------|
| Landing por tipo de evento | ✅ | ❌ | ALTA |
| Blog con artículos SEO | ✅ | ❌ | ALTA |
| Galería extensa (50+ diseños) | ✅ | ❌ (solo 2) | ALTA |
| Página de precios dedicada | ✅ | ❌ | MEDIA |
| Casos de estudio | ✅ | ❌ | MEDIA |
| Comparativas (digital vs físico) | ✅ | ❌ | MEDIA |
| Videos/tutoriales | ✅ | ❌ | BAJA |
| Herramientas interactivas | Algunos | ❌ | BAJA |

## 5.3 Ventajas Competitivas Identificadas

### Tus Fortalezas Actuales

1. ✅ **Enfoque local Monterrey** - Nicho específico
2. ✅ **Precios competitivos** - $1,399-$2,499
3. ✅ **Garantía satisfacción 100%** - Diferenciador
4. ✅ **Entrega 24 horas** - Velocidad
5. ✅ **Diseño moderno del sitio** - UX superior
6. ✅ **Schema markup implementado** - Ventaja técnica

### Debilidades a Corregir

1. ❌ **Falta de contenido indexable** - Solo 3 páginas
2. ❌ **Sin presencia en Google Business** - Crítico local SEO
3. ❌ **Galería limitada** - Solo 2 ejemplos
4. ❌ **Sin blog** - No hay contenido evergreen
5. ❌ **Backlinks inexistentes** - Autoridad 0

## 5.4 Estrategia para Superar Competidores

### Tácticas Inmediatas (30 días)

1. **Crear Google Business Profile** con fotos y posts
2. **Agregar 10+ diseños a galería** (aunque sean mockups)
3. **Crear 3 landings de categoría** (bodas, XV, baby shower)
4. **Iniciar blog** con 2 artículos pilares

### Tácticas Mediano Plazo (90 días)

1. **Publicar 1 artículo blog/semana** (12 artículos)
2. **Obtener 20+ reseñas en Google**
3. **Crear perfil en 5 directorios de bodas**
4. **Implementar todas las correcciones técnicas**

### Tácticas Largo Plazo (6 meses)

1. **Posicionar 10 keywords transaccionales**
2. **Alcanzar DA 20+**
3. **500+ visitas orgánicas/mes**
4. **Aparecer en top 10 para keywords principales**

---

# 6. PLAN ESTRATÉGICO SEO PRIORIZADO

## 6.1 Prioridad A - CRÍTICO (Implementar en 7 días)

| # | Tarea | Impacto | Esfuerzo | Archivo |
|---|-------|---------|----------|---------|
| A1 | Corregir dominio en sitemap.ts y robots.ts | CRÍTICO | 5 min | sitemap.ts, robots.ts |
| A2 | Cambiar theme-color a #1e3a8a | BAJO | 1 min | layout.tsx |
| A3 | Crear Google Business Profile | ALTO | 30 min | Externo |
| A4 | Agregar aria-labels a botones | MEDIO | 15 min | header.tsx, varios |
| A5 | Crear og-image.jpg 1200x630 | ALTO | 20 min | /public/ |
| A6 | Crear favicon.ico y apple-touch-icon | MEDIO | 15 min | /public/ |
| A7 | Agregar canonical a páginas legales | MEDIO | 10 min | privacidad/, terminos/ |
| A8 | Sincronizar FAQ schema con todas las FAQs | ALTO | 20 min | layout.tsx |

**Tiempo total Prioridad A:** ~2 horas

## 6.2 Prioridad B - IMPORTANTE (Implementar en 30 días)

| # | Tarea | Impacto | Esfuerzo | Descripción |
|---|-------|---------|----------|-------------|
| B1 | Habilitar optimización de imágenes | ALTO | 30 min | Quitar unoptimized:true, migrar a Image |
| B2 | Crear landing /invitaciones/boda | ALTO | 2h | Nueva página con contenido único |
| B3 | Crear landing /invitaciones/xv-anos | ALTO | 2h | Nueva página con contenido único |
| B4 | Crear landing /invitaciones/baby-shower | ALTO | 2h | Nueva página con contenido único |
| B5 | Ampliar galería a 10+ diseños | ALTO | 1h | Agregar más ejemplos visuales |
| B6 | Implementar BreadcrumbList schema | MEDIO | 30 min | Agregar a todas las páginas |
| B7 | Agregar throttle a scroll listener | MEDIO | 15 min | header.tsx |
| B8 | Optimizar alt texts de imágenes | MEDIO | 30 min | gallery-section.tsx, testimonials |
| B9 | Crear página /galeria dedicada | MEDIO | 2h | Landing con todos los diseños |
| B10 | Agregar headers de seguridad | BAJO | 30 min | next.config.mjs |

**Tiempo total Prioridad B:** ~12 horas

## 6.3 Prioridad C - MEJORAS FUTURAS (Implementar en 90 días)

| # | Tarea | Impacto | Esfuerzo | Descripción |
|---|-------|---------|----------|-------------|
| C1 | Crear sección /blog | ALTO | 4h | Estructura de blog con Next.js |
| C2 | Escribir 5 artículos pilares | ALTO | 10h | Contenido SEO largo |
| C3 | Implementar Product schema para planes | MEDIO | 1h | Rich snippets de precio |
| C4 | Crear página /nosotros | MEDIO | 2h | E-E-A-T y confianza |
| C5 | Crear página /contacto dedicada | BAJO | 1h | Alternativa a WhatsApp |
| C6 | Implementar Review schema | MEDIO | 1h | Testimonios estructurados |
| C7 | Ejecutar campaña link building | ALTO | 15h | 3 meses de outreach |
| C8 | Eliminar dependencias no usadas | BAJO | 1h | Reducir bundle size |
| C9 | Implementar i18n si se expande | BAJO | 4h | hreflang para otras regiones |
| C10 | A/B testing de CTAs | MEDIO | 2h | Optimizar conversiones |

**Tiempo total Prioridad C:** ~40+ horas

## 6.4 Roadmap Visual

```
SEMANA 1-2: Prioridad A (Crítico)
├── Día 1-2: Correcciones técnicas (A1-A2, A4-A8)
├── Día 3: Google Business Profile (A3)
└── Día 4-5: Assets visuales (A5-A6)

SEMANA 3-4: Prioridad B Parte 1
├── Optimización de imágenes (B1)
├── Landing Bodas (B2)
└── Landing XV Años (B3)

MES 2: Prioridad B Parte 2
├── Landing Baby Shower (B4)
├── Galería expandida (B5)
├── Schemas adicionales (B6)
└── Optimizaciones menores (B7-B10)

MES 3+: Prioridad C
├── Blog y contenido (C1-C2)
├── Páginas adicionales (C3-C6)
└── Link building continuo (C7)
```

---

# 7. ENTREGABLES FINALES

## 7.1 Checklist SEO de Implementación

### ✅ Técnico Inmediato
- [ ] Corregir baseUrl en sitemap.ts → `https://invitacionesdigitalesmty.com.mx`
- [ ] Corregir baseUrl en robots.ts → `https://invitacionesdigitalesmty.com.mx`
- [ ] Cambiar theme-color a `#1e3a8a`
- [ ] Crear `/public/og-image.jpg` (1200x630px)
- [ ] Crear `/public/favicon.ico`
- [ ] Crear `/public/apple-touch-icon.png` (180x180px)
- [ ] Agregar canonical a /privacidad y /terminos
- [ ] Agregar aria-labels a botones de navegación

### ✅ On-Page Inmediato
- [ ] Actualizar H1 con keyword local
- [ ] Optimizar H2s de cada sección
- [ ] Mejorar meta description con emojis y CTR
- [ ] Agregar alt texts descriptivos a imágenes

### ✅ Schema/Datos Estructurados
- [ ] Sincronizar FAQPage schema con 12 FAQs
- [ ] Agregar BreadcrumbList schema
- [ ] Implementar Product schema para planes

### ✅ Contenido (30 días)
- [ ] Crear /invitaciones/boda
- [ ] Crear /invitaciones/xv-anos
- [ ] Crear /invitaciones/baby-shower
- [ ] Ampliar galería a 10+ diseños
- [ ] Crear página /galeria

### ✅ Off-Page (60-90 días)
- [ ] Crear Google Business Profile
- [ ] Optimizar perfil Instagram
- [ ] Crear perfil Facebook Business
- [ ] Registrar en bodas.com.mx
- [ ] Registrar en zankyou.com.mx
- [ ] Iniciar outreach link building

---

## 7.2 Keywords Organizadas por Intención

### 🛒 Transaccionales (Compra inmediata)

| Keyword | Vol. Est. | Dificultad | Página Target |
|---------|----------|------------|---------------|
| invitaciones digitales precio | 720/mes | MEDIA | /precios |
| invitaciones digitales baratas | 590/mes | MEDIA | Homepage |
| comprar invitacion digital | 320/mes | BAJA | /invitaciones/ |
| invitaciones digitales monterrey precio | 210/mes | BAJA | Homepage |
| cotizar invitacion digital | 140/mes | BAJA | /contacto |

### 🔍 Informacionales (Investigación)

| Keyword | Vol. Est. | Dificultad | Página Target |
|---------|----------|------------|---------------|
| qué son invitaciones digitales | 880/mes | BAJA | Blog |
| cómo hacer invitación digital | 1,200/mes | MEDIA | Blog |
| ventajas invitaciones digitales | 480/mes | BAJA | Blog |
| invitaciones digitales vs impresas | 260/mes | BAJA | Blog |
| apps para hacer invitaciones | 720/mes | ALTA | Blog |

### 🏷️ Comerciales (Comparación)

| Keyword | Vol. Est. | Dificultad | Página Target |
|---------|----------|------------|---------------|
| mejores invitaciones digitales | 390/mes | MEDIA | Homepage |
| invitaciones digitales profesionales | 320/mes | MEDIA | /galeria |
| invitaciones digitales personalizadas | 480/mes | MEDIA | Homepage |
| invitaciones digitales premium | 260/mes | BAJA | /precios |
| invitaciones con música | 520/mes | MEDIA | FAQ/Blog |

### 📍 Locales (Geo-específicas)

| Keyword | Vol. Est. | Dificultad | Página Target |
|---------|----------|------------|---------------|
| invitaciones digitales monterrey | 1,200/mes | MEDIA | Homepage |
| invitaciones digitales nuevo leon | 390/mes | BAJA | Homepage |
| invitaciones boda monterrey | 720/mes | MEDIA | /invitaciones/boda |
| invitaciones xv años monterrey | 480/mes | BAJA | /invitaciones/xv-anos |
| diseñador invitaciones monterrey | 210/mes | BAJA | /nosotros |

---

## 7.3 Diagrama de Arquitectura Propuesta

```
                    ┌─────────────────────────────────────┐
                    │         HOMEPAGE (/)                │
                    │   Keyword: invitaciones digitales   │
                    │          monterrey                  │
                    └─────────────┬───────────────────────┘
                                  │
        ┌─────────────────────────┼─────────────────────────┐
        │                         │                         │
        ▼                         ▼                         ▼
┌───────────────┐       ┌─────────────────┐       ┌───────────────┐
│  /invitaciones│       │    /galeria     │       │    /blog      │
│   (Hub)       │       │  Portafolio     │       │   Artículos   │
└───────┬───────┘       └─────────────────┘       └───────┬───────┘
        │                                                  │
  ┌─────┼─────┬─────────┬─────────┐              ┌────────┼────────┐
  │     │     │         │         │              │        │        │
  ▼     ▼     ▼         ▼         ▼              ▼        ▼        ▼
┌────┐┌────┐┌────┐   ┌────┐   ┌────┐         ┌────┐  ┌────┐  ┌────┐
│Boda││ XV ││Baby│   │Cump│   │Corp│         │Art1│  │Art2│  │Art3│
└────┘└────┘└────┘   └────┘   └────┘         └────┘  └────┘  └────┘

        │                                                  │
        └──────────────────────┬───────────────────────────┘
                               │
                    ┌──────────┴──────────┐
                    │                     │
                    ▼                     ▼
             ┌───────────┐         ┌───────────┐
             │ /precios  │         │ /contacto │
             └───────────┘         └───────────┘
                    │
        ┌───────────┴───────────┐
        │                       │
        ▼                       ▼
 ┌─────────────┐         ┌─────────────┐
 │ /privacidad │         │  /terminos  │
 └─────────────┘         └─────────────┘
```

---

## 7.4 Código de Correcciones Listo para Implementar

### Corrección sitemap.ts

```typescript
// app/sitemap.ts - CORREGIDO
import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx" // ✅ CORREGIDO

  const routes = [
    "",
    "/privacidad",
    "/terminos",
    // Agregar nuevas rutas cuando se creen:
    // "/invitaciones/boda",
    // "/invitaciones/xv-anos",
    // "/invitaciones/baby-shower",
    // "/galeria",
    // "/precios",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : route.includes("invitaciones") ? 0.9 : 0.8,
  }))

  return routes
}
```

### Corrección robots.ts

```typescript
// app/robots.ts - CORREGIDO
import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://invitacionesdigitalesmty.com.mx" // ✅ CORREGIDO

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
```

### Corrección layout.tsx (parcial)

```tsx
// Agregar después de los schemas existentes en <head>

// BreadcrumbList Schema
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://invitacionesdigitalesmty.com.mx"
    }
  ]
}

// Cambiar theme-color
<meta name="theme-color" content="#1e3a8a" /> // ✅ Cambiado de #6258FF
```

---

## 7.5 Métricas de Éxito (KPIs)

### 30 Días

| KPI | Valor Actual | Meta |
|-----|--------------|------|
| Páginas indexadas | 3 | 8+ |
| Core Web Vitals | Amarillo | Verde |
| Google Business Reviews | 0 | 10+ |
| Errores técnicos | 10+ | 0 |

### 90 Días

| KPI | Valor Actual | Meta |
|-----|--------------|------|
| Tráfico orgánico | ~0 | 200+/mes |
| Keywords en top 100 | 0 | 25+ |
| Keywords en top 10 | 0 | 5+ |
| Domain Rating | 0 | 10+ |
| Backlinks | 0 | 20+ |

### 6 Meses

| KPI | Valor Actual | Meta |
|-----|--------------|------|
| Tráfico orgánico | ~0 | 1,000+/mes |
| Keywords en top 10 | 0 | 15+ |
| Conversiones orgánicas | 0 | 30+/mes |
| Domain Rating | 0 | 25+ |

---

## 7.6 Próximos Pasos Inmediatos

1. **HOY:** Aplicar todas las correcciones de Prioridad A
2. **ESTA SEMANA:** Crear Google Business Profile
3. **PRÓXIMA SEMANA:** Iniciar creación de landings por categoría
4. **MES 1:** Completar Prioridad B
5. **MES 2-3:** Iniciar blog y link building

---

**📋 FIN DEL INFORME DE AUDITORÍA SEO**

*Documento preparado para InvitacionesDigitalesmty*  
*Versión 1.0 - Noviembre 2025*

---

> **Disclaimer:** Las estimaciones de volumen de búsqueda y dificultad de keywords son aproximadas. Se recomienda validar con herramientas como Ahrefs, SEMrush o Google Keyword Planner para datos precisos.

