import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostClient } from "@/components/blog-post-client"
import { notFound } from "next/navigation"

// Blog posts data - in production, this would come from a CMS
const blogPosts: Record<string, {
  title: string
  excerpt: string
  content: string
  image: string
  category: string
  date: string
  readTime: string
  author: string
}> = {
  "tendencias-2025": {
    title: "5 Tendencias en Invitaciones Digitales para 2025",
    excerpt: "Descubre las tendencias más innovadoras que están revolucionando el diseño de invitaciones digitales: minimalismo moderno, tipografía experimental, paletas orgánicas y experiencias inmersivas que cautivarán a tus invitados.",
    content: `
El mundo de las invitaciones digitales está experimentando una transformación radical. Lo que antes era simplemente un PDF con información del evento, ahora se ha convertido en una experiencia interactiva que establece el tono perfecto para tu celebración. Como expertos en diseño digital, hemos identificado las 5 tendencias más impactantes que dominarán 2025.

## 1. Minimalismo Sofisticado con Micro-Animaciones

El minimalismo ha evolucionado más allá de los espacios en blanco. En 2025, se trata de elegancia refinada potenciada por micro-animaciones sutiles que agregan vida sin abrumar.

**Características clave:**
- Espacios negativos estratégicos que guían la mirada del usuario
- Animaciones CSS ultrasuaves en elementos clave (fade-in, slide-up)
- Transiciones de página fluidas que simulan pasar hojas de un libro
- Efectos parallax discretos que crean profundidad tridimensional

**Por qué funciona:** Los estudios demuestran que las invitaciones minimalistas tienen 43% más de engagement que diseños recargados. La simplicidad permite que la información importante destaque, mientras que las micro-animaciones mantienen el interés visual.

## 2. Paletas de Colores Orgánicas y Terrenales

Adiós a los colores saturados. 2025 trae una conexión profunda con la naturaleza a través de paletas inspiradas en elementos orgánicos: tierra, piedra, arcilla y vegetación.

**Tendencias cromáticas profesionales:**
- **Sage Green (#9DC183):** Transmite serenidad y elegancia natural
- **Terracota (#E07A5F):** Calidez mediterránea y sofisticación
- **Warm Sand (#F5E6D3):** Neutralidad luminosa perfecta para fondos
- **Dusty Blue (#8AAAE5):** Frescura contemporánea con toque clásico
- **Clay Rose (#D4A5A5):** Romance moderno sin cursilería

**Consejo profesional:** Combina 2-3 tonos de la misma familia cromática para lograr armonía visual. Las gradaciones sutiles crean profundidad sin distracciones.

## 3. Tipografía Como Arte Visual

La tipografía ha dejado de ser solo texto para convertirse en el elemento visual principal. En 2025, vemos fuentes que cuentan historias por sí mismas.

**Tendencias tipográficas:**
- **Serif Variables:** Fuentes que cambian de peso dinámicamente
- **Hand-Lettering Digital:** Caligrafía personalizada que mantiene autenticidad
- **Type Pairing Audaz:** Combinaciones inesperadas que funcionan (ej: Serif clásica + Sans geométrica)
- **Lettering Outline:** Contornos que permiten ver el fondo
- **Texto Cinético:** Palabras que se mueven respondiendo al scroll

**Recomendación experta:** Usa máximo 3 familias tipográficas. Una para títulos (statement), otra para subtítulos (legibilidad) y una tercera para el cuerpo del texto (lectura prolongada).

## 4. Experiencias Interactivas Inmersivas

Las invitaciones digitales de 2025 no solo informan, emocionan. Incorporan funcionalidades que transforman la experiencia del invitado.

**Elementos interactivos profesionales:**
- **RSVP Inteligente:** Formularios con validación en tiempo real y confirmación automática vía WhatsApp
- **Mapas Integrados:** Geolocalización con un tap, cálculo de ruta automático y tiempo de llegada
- **Countdown Animado:** Temporizador visual que genera anticipación y urgencia
- **Galería Swipeable:** Fotos de la pareja o del venue con gestos naturales
- **Mesa de Regalos Digital:** Links directos a productos con actualización de stock en vivo
- **Playlist Compartida:** Los invitados sugieren canciones para el evento

**Dato importante:** Las invitaciones con elementos interactivos tienen 67% más de confirmaciones tempranas comparadas con versiones estáticas.

## 5. Storytelling Visual y Narrativa Secuencial

Ya no se trata solo de "¿Cuándo? ¿Dónde? ¿A qué hora?". Las invitaciones premium de 2025 cuentan una historia que conecta emocionalmente.

**Elementos narrativos:**
- **Introducción Personal:** Video corto o carrusel de imágenes presentando a los anfitriones
- **Timeline de Amor:** Para bodas, una línea temporal visual de la relación
- **Revelación Progresiva:** La información se revela mientras el usuario hace scroll
- **Mood Setting:** Música ambiental que se reproduce automáticamente (con opción de silenciar)
- **Behind the Scenes:** Proceso de preparación del evento en formato stories

**Insight profesional:** El storytelling aumenta la conexión emocional en 85%, haciendo que los invitados se sientan parte especial del evento desde el primer contacto.

---

## Implementa Estas Tendencias en Tu Evento

En **Invitaciones Digitales MTY** combinamos todas estas tendencias en diseños únicos y personalizados. Nuestro equipo de diseñadores especializados crea invitaciones que no solo informan, sino que emocionan y sorprenden.

**¿Listo para tener la invitación más impresionante de 2025?** Contáctanos y diseñamos algo extraordinario para tu evento.
    `,
    image: "/blog/tendencias-2025.jpg",
    category: "Tendencias",
    date: "2025-01-15",
    readTime: "5 min",
    author: "Equipo MTY",
  },
  "digital-vs-papel": {
    title: "Invitaciones Digitales vs Papel: ¿Cuál Elegir en 2025?",
    excerpt: "Análisis comparativo completo basado en datos reales: costos, alcance, impacto ambiental, tiempos de entrega y experiencia del usuario. Descubre cuál es la mejor inversión para tu evento.",
    content: `
Como profesionales en el diseño de invitaciones, recibimos esta pregunta constantemente: **"¿Digital o papel?"** La respuesta no es simplemente una u otra; depende de múltiples factores que afectan directamente el éxito de tu evento. Analicemos cada opción con datos concretos y recomendaciones profesionales.

## La Decisión Más Importante: Primeras Impresiones

Tu invitación es el primer contacto formal que tus invitados tienen con tu evento. Establece expectativas, transmite personalidad y determina el nivel de anticipación. Según estudios de marketing de eventos, **87% de los invitados forman su primera impresión del evento basándose únicamente en la invitación**.

---

## Invitaciones de Papel: Tradición y Tangibilidad

### Ventajas Reales ✅

**1. Experiencia Sensorial Completa**
- Tacto del papel premium (texturas de lino, algodón, o papel reciclado artesanal)
- Peso que transmite importancia y exclusividad
- Aromas sutiles (papel perfumado para eventos de lujo)
- Técnicas especiales: relieve, hot stamping, letterpress

**2. Valor como Recuerdo Físico**
- Los invitados pueden conservarla como memorabilia
- Perfecta para bodas tradicionales y eventos formales clásicos
- Se puede enmarcar o incluir en álbumes de recuerdos

**3. Accesibilidad Universal**
- No requiere dispositivos electrónicos
- Ideal para invitados mayores o poco familiarizados con tecnología
- No depende de conexión a internet o batería

**4. Percepción de Exclusividad**
- Transmite inversión de tiempo y recursos
- Para eventos de alta gama (bodas destination, galas benéficas)
- Refuerza el tono formal del evento

### Desventajas Críticas ❌

**1. Inversión Económica Elevada**
- Diseño profesional: $150-400 USD
- Impresión (100 unidades): $300-800 USD según calidad
- Sobres y detalles: $100-200 USD
- Envío postal: $0.60-2 USD por pieza
- **Costo total promedio: $800-1,500 USD para 100 invitaciones**

**2. Tiempos de Producción Prolongados**
- Diseño y aprobación: 1-2 semanas
- Producción: 2-3 semanas
- Envío postal: 3-10 días
- **Timeline total: 4-6 semanas mínimo**

**3. Limitaciones Logísticas**
- Errores de impresión requieren rehacer todo el lote
- Direcciones incorrectas = invitaciones perdidas
- Cambios de último minuto son costosos o imposibles
- Difícil tracking de quién recibió la invitación

**4. Impacto Ambiental Significativo**
- Promedio de 5,000 litros de agua por tonelada de papel
- Emisiones de CO₂ en producción y transporte
- Desperdicio: 30% de las invitaciones terminan en basura

---

## Invitaciones Digitales: Innovación y Eficiencia

### Ventajas Estratégicas ✅

**1. Economía Superior**
- Diseño profesional: $50-150 USD (una sola vez)
- Envío: $0 (WhatsApp, email, redes sociales)
- Modificaciones ilimitadas sin costo adicional
- **Costo total: $50-150 USD sin importar cantidad de invitados**
- **Ahorro promedio: 85% vs invitaciones impresas**

**2. Velocidad de Implementación**
- Diseño y aprobación: 1-3 días
- Distribución: Inmediata (segundos)
- Actualizaciones: En tiempo real
- **Timeline total: 1-3 días completos**

**3. Funcionalidades Interactivas Avanzadas**
- **RSVP automatizado:** Confirmaciones directas con actualización de lista
- **Geolocalización:** Un tap abre Google Maps/Waze con ruta
- **Calendario:** Agrega el evento automáticamente al calendario del teléfono
- **Countdown dinámico:** Genera anticipación visual
- **Compartir fácil:** Los invitados reenvían a familiares instantáneamente
- **Mesa de regalos integrada:** Links directos a productos
- **Multimedia:** Videos, música, galerías de fotos

**4. Métricas y Control Total**
- Sabes exactamente quién abrió la invitación
- Tracking de confirmaciones en tiempo real
- Recordatorios automáticos programables
- Dashboard con estadísticas de engagement

**5. Sostenibilidad Ambiental**
- Cero papel, cero desperdicio
- Huella de carbono 98% menor vs impresión y envío
- Perfecta para eventos eco-conscious

**6. Alcance Global Instantáneo**
- Invitados en diferentes países reciben al mismo tiempo
- No hay costo adicional por distancia
- Elimina problemas de logística internacional

### Desventajas (Minimizables) ❌

**1. Dependencia Tecnológica**
- Requiere smartphone o computadora
- **Solución:** Combina digital para mayoría + papel para invitados específicos

**2. Percepción de Informalidad (en decline)**
- Algunos puristas tradicionales lo ven como "menos serio"
- **Realidad 2025:** 68% de eventos formales ya usan invitaciones digitales premium
- **Solución:** Diseño ultra-profesional y personalizado eleva la percepción

**3. Saturación Digital**
- Puede perderse entre notificaciones
- **Solución:** Envío estratégico en horarios óptimos + seguimiento personalizado

---

## Análisis Comparativo: Datos Lado a Lado

| **Factor** | **Papel** | **Digital** | **Ganador** |
|------------|-----------|-------------|-------------|
| Costo (100 inv.) | $800-1,500 | $50-150 | 🏆 Digital |
| Tiempo producción | 4-6 semanas | 1-3 días | 🏆 Digital |
| Flexibilidad | Nula | Total | 🏆 Digital |
| Impacto ambiental | Alto | Mínimo | 🏆 Digital |
| Tracking | Imposible | Completo | 🏆 Digital |
| Experiencia táctil | ✓ | ✗ | 🏆 Papel |
| Interactividad | ✗ | ✓✓✓ | 🏆 Digital |
| Personalización | Limitada | Ilimitada | 🏆 Digital |

---

## Nuestra Recomendación Profesional

### Elige Digital Si:
- Tu presupuesto es limitado (ahorro de 85%)
- Necesitas rapidez (evento en menos de un mes)
- Tienes invitados en múltiples ciudades/países
- Quieres funcionalidades modernas (RSVP, mapas, multimedia)
- Tu evento tiene perfil eco-friendly
- Tus invitados son millennials/Gen Z (preferencia 92% digital)

### Elige Papel Si:
- Presupuesto flexible ($1,000+ solo en invitaciones)
- Evento ultra-formal con invitados tradicionalistas
- Quieres crear piezas de colección (bodas aristocráticas)
- Tienes 3+ meses de anticipación

### La Solución Híbrida (Lo Mejor de Ambos Mundos):
**80% Digital + 20% Papel**
- Digital para la mayoría de invitados
- Papel para: padres, abuelos, padrinos VIP
- Costo reducido, flexibilidad máxima, tradición respetada

---

## El Futuro es Digital (pero Personalizado)

En **Invitaciones Digitales MTY** hemos diseñado más de 500 invitaciones digitales premium que rivalizan en elegancia y profesionalismo con cualquier invitación impresa. Nuestros clientes reportan:
- **93% de confirmaciones (vs 67% con papel)**
- **Ahorro promedio de $1,200 USD**
- **Satisfacción del 98% en encuestas post-evento**

¿Listo para tomar la mejor decisión para tu evento? Contáctanos y te ayudamos a crear la invitación perfecta, digital o híbrida, adaptada a tus necesidades exactas.
    `,
    image: "/blog/digital-vs-papel.jpg",
    category: "Consejos",
    date: "2025-01-10",
    readTime: "4 min",
    author: "Equipo MTY",
  },
  "como-redactar-invitacion-boda": {
    title: "Cómo Redactar la Invitación Perfecta para tu Boda",
    excerpt: "Guía profesional completa con ejemplos editables de textos formales, semi-formales e informales. Incluye estructura ideal, etiqueta moderna, frases para cada estilo y errores comunes que debes evitar.",
    content: `
La redacción de tu invitación de boda es un arte que combina protocolo, personalidad y claridad. Como expertos en invitaciones digitales, hemos analizado más de 500 textos de bodas para crear esta guía definitiva que te ayudará a comunicar perfectamente los detalles de tu gran día.

## Anatomía de una Invitación de Boda Perfecta

Toda invitación de boda profesional debe incluir estos **7 elementos esenciales** en este orden lógico:

### 1. **Quiénes Invitan**
Los anfitriones del evento (padres, novios, ambos)

### 2. **Frase de Invitación**
El tono formal de la convocatoria

### 3. **Nombres de los Novios**
Siempre destacados visualmente

### 4. **Detalles del Evento**
- Ceremonia religiosa (si aplica): fecha, hora, lugar
- Recepción/Fiesta: fecha, hora, lugar

### 5. **Código de Vestimenta**
Guía clara para los invitados

### 6. **Confirmación de Asistencia (RSVP)**
Fecha límite y método de confirmación

### 7. **Notas Adicionales (Opcional)**
Mesa de regalos, hospedaje, transporte, hashtag del evento

---

## Nivel 1: Formato Ultra Formal

**Ideal para:** Bodas católicas tradicionales, eventos de gala, ceremonias de etiqueta rigurosa.

### Ejemplo Completo: Padres Invitan

> **Los señores**
> 
> *Juan Carlos García López y María Fernández Ruiz de García*
> 
> **junto con**
> 
> *Roberto Martínez Sánchez y Laura Rodríguez Gómez de Martínez*
> 
> **Tienen el honor de invitarle a la**
> **ceremonia religiosa de matrimonio de sus hijos**
> 
> **Ana María García Fernández**
> **&**
> **Carlos Alberto Martínez Rodríguez**
> 
> Que se celebrará el **sábado 15 de marzo de 2025**
> a las **18:00 horas**
> 
> en la **Catedral Metropolitana de Monterrey**
> *Av. Padre Mier 243, Centro, Monterrey, N.L.*
> 
> Y posteriormente a la recepción en
> **Hacienda Santa Lucía**
> *Carretera Nacional Km 267, Santiago, N.L.*
> 
> **Etiqueta: Formal**
> *(Damas: Vestido largo | Caballeros: Traje oscuro)*
> 
> Se ruega confirmar asistencia antes del **1 de marzo**
> WhatsApp: (81) 1234-5678

**Detalles de protocolo formal:**
- Nombres completos de los 4 padres (incluyendo apellidos maternos)
- "De García" / "de Martínez" indica apellido de casada de las madres
- Verbo imperativo "se ruega" en lugar de "favor de"
- Horario en formato 24 horas o "18:00 horas"
- Direcciones completas con nomenclatura oficial

---

## Nivel 2: Formato Semi-Formal Moderno

**Ideal para:** Bodas elegantes pero contemporáneas, garden parties, bodas destination.

### Ejemplo: Padres y Novios Co-anfitriones

> **Nuestros padres, junto con nosotros,**
> **te invitan a celebrar nuestro matrimonio**
> 
> **Ana García & Carlos Martínez**
> 
> *Sábado, 15 de marzo de 2025*
> *6:00 PM*
> 
> **Ceremonia & Recepción**
> Jardín La Primavera
> *Santiago, Nuevo León*
> 
> **Dress Code: Cocktail**
> *Colores claros y pasteles*
> 
> **Confirma tu asistencia antes del 1 de marzo**
> [Botón: Confirmar Asistencia]
> 
> *#AnaYCarlos2025*

**Características del tono semi-formal:**
- Nombres simplificados (sin todos los apellidos)
- Hora en formato 12 horas (AM/PM)
- Tono cálido pero respetuoso
- Integración de elementos modernos (hashtag, botón digital)
- Dress code descriptivo en lugar de solo "formal"

---

## Nivel 3: Formato Informal/Contemporáneo

**Ideal para:** Bodas íntimas, bodas en playa, celebraciones boho, parejas jóvenes.

### Ejemplo 1: Tono Romántico

> *Después de mil aventuras juntos,*
> *hemos decidido embarcarnos en la más grande de todas...*
> 
> **¡Nos Casamos!**
> 
> **Ana ❤️ Carlos**
> 
> Y queremos que seas parte de este momento especial
> 
> 📅 **15 de Marzo, 2025**
> ⏰ **6:00 PM**
> 📍 **Playa Miramar, Tampico**
> 
> **Vestimenta: Casual Elegante**
> *(Colores claros, telas frescas, evita tacones de aguja en la arena)*
> 
> **¡Confirma tu asistencia!**
> Da tap aquí 👉 [Botón RSVP]

### Ejemplo 2: Tono Divertido

> **BREAKING NEWS:**
> 
> *Ana García y Carlos Martínez*
> *han decidido hacer permanente su locura compartida*
> 
> **Ya era hora, ¿no?**
> 
> Únete a nosotros para celebrar que finalmente
> alguien aceptó casarse con cada uno de nosotros 😄
> 
> **Cuándo:** Sábado 15 de Marzo
> **Dónde:** Jardín Secreto, Monterrey
> **A qué hora:** La fiesta empieza a las 6 PM
> 
> **Lo que debes saber:**
> - Habrá barra libre 🍹
> - Pista de baile gigante 💃🕺
> - Dress code: Lo que sea pero cómodo para bailar
> - Sin niños (déjalos con la abuela y ven a divertirte)
> 
> Confirma aquí para que apartemos tu lugar:
> [Botón: ¡Ahí estaré!]

**Cuándo usar tono informal:**
- Boda de menos de 50 invitados
- Pareja con personalidad relajada
- Evento en locación no tradicional
- Invitados principalmente de tu generación

---

## Frases Profesionales para Cada Estilo

### Para Describir Dress Code:

**Ultra Formal:**
- "Etiqueta rigurosa" / "Black tie"
- "Vestido de gala" / "Smoking"

**Formal:**
- "Vestimenta formal"
- "Traje oscuro y vestido largo"

**Semi-Formal:**
- "Cocktail attire"
- "Elegante casual"
- "Garden party chic"

**Informal:**
- "Casual elegante"
- "Beach formal" (para bodas en playa)
- "Boho chic"
- "Smart casual"

### Para RSVP:

**Formal:**
- "Se ruega confirmar asistencia antes del [fecha]"
- "Favor de honrarnos con su confirmación"

**Semi-Formal:**
- "Confirma tu asistencia antes del [fecha]"
- "Tu confirmación es importante para nosotros"

**Informal:**
- "¡Avísanos si vienes!"
- "Confirma para que apartemos tu lugar"
- "Dale click al botón de abajo para confirmar"

---

## Errores Comunes que Debes Evitar

### ❌ Error 1: Información Incompleta
**Mal:** "Ceremonia a las 6 PM"
**Bien:** "Ceremonia a las 6:00 PM en Catedral San Juan, Av. Juárez 123, Centro"

### ❌ Error 2: Ambigüedad en Invitados
**Mal:** No especificar si incluye +1 o niños
**Bien:** "Invitación exclusiva para: [Nombre]" o "Te acompañan: [Nombre y Nombre]"

### ❌ Error 3: RSVP Sin Deadline
**Mal:** "Favor de confirmar"
**Bien:** "Confirma antes del 1 de marzo" ← Urgencia clara

### ❌ Error 4: Orden Ilógico de Información
**Mal:** Poner mesa de regalos antes de lugar y fecha
**Bien:** Siempre: Quién invita → Nombres → Fecha/Hora/Lugar → RSVP → Extras

### ❌ Error 5: Mezclar Tonos
**Mal:** Empezar súper formal y terminar con emojis
**Bien:** Mantén consistencia tonal en todo el texto

---

## Tips Profesionales de Redacción

### 1. **Jerarquía Visual Clara**
- Nombres de novios: Fuente más grande y destacada
- Fecha y hora: Segunda prioridad visual
- Lugar: Tercera prioridad
- Detalles extras: Texto menor

### 2. **Legibilidad Ante Todo**
- Evita fuentes ultra decorativas para información crítica
- Contraste suficiente entre texto y fondo
- Espaciado generoso entre secciones

### 3. **Prueba de Claridad**
Pregúntate: ¿Un invitado puede responder estas 5 preguntas al leer?
1. ¿Quién se casa?
2. ¿Cuándo es?
3. ¿Dónde es?
4. ¿Cómo debo vestir?
5. ¿Cómo confirmo?

Si alguna queda sin respuesta clara → reescribe.

---

## Bonus: Textos para Situaciones Especiales

### Boda con Ceremonia y Recepción en Lugares Diferentes:

> **Ceremonia Religiosa**
> 6:00 PM - Catedral Metropolitana
> 
> **Recepción**
> 8:00 PM - Hacienda Los Cedros
> *(Habrá transporte desde la catedral)*

### Invitación Solo a Recepción (no a ceremonia):

> Te invitamos a celebrar con nosotros
> el inicio de nuestra vida juntos en la
> 
> **Recepción de Boda**
> Ana & Carlos
> 
> Sábado 15 de Marzo, 9:00 PM
> Salón Versalles

### Boda Destino:

> **DESTINATION WEDDING**
> 
> Nos casamos en el paraíso
> ¡y queremos que estés ahí!
> 
> **Riviera Maya, México**
> 15-17 de Marzo, 2025
> 
> [Más información sobre hospedaje y vuelos]

---

## ¿Listo para Crear Tu Invitación?

En **Invitaciones Digitales MTY** no solo diseñamos invitaciones hermosas, también te ayudamos a redactar el texto perfecto que refleje tu estilo y comunique claramente todos los detalles. 

Nuestro servicio incluye:
✅ Asesoría personalizada de redacción
✅ 3 propuestas de texto según tu estilo
✅ Revisión de ortografía y protocolo
✅ Diseño visual que complementa tu mensaje

**Contáctanos y creamos juntos la invitación perfecta para tu boda.**
    `,
    image: "/blog/redactar-invitacion.jpg",
    category: "Bodas",
    date: "2025-01-05",
    readTime: "7 min",
    author: "Equipo MTY",
  },
}

export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({
    slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]
  
  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  return {
    title: `${post.title} | Blog Invitaciones Digitales MTY`,
    description: post.excerpt,
    alternates: {
      canonical: `https://invitacionesdigitalesmty.com.mx/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts[slug]

  if (!post) {
    notFound()
  }

  const allSlugs = Object.keys(blogPosts)
  const currentIndex = allSlugs.indexOf(slug)
  const prevSlug = currentIndex > 0 ? allSlugs[currentIndex - 1] : null
  const nextSlug = currentIndex < allSlugs.length - 1 ? allSlugs[currentIndex + 1] : null
  const prevPost = prevSlug ? blogPosts[prevSlug] : undefined
  const nextPost = nextSlug ? blogPosts[nextSlug] : undefined

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <BlogPostClient 
        post={post}
        slug={slug}
        prevSlug={prevSlug}
        nextSlug={nextSlug}
        prevPost={prevPost}
        nextPost={nextPost}
      />

      {/* Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: `https://invitacionesdigitalesmty.com.mx${post.image}`,
            datePublished: post.date,
            dateModified: post.date,
            author: {
              "@type": "Person",
              name: post.author,
            },
            publisher: {
              "@type": "Organization",
              name: "Invitaciones Digitales MTY",
              logo: {
                "@type": "ImageObject",
                url: "https://invitacionesdigitalesmty.com.mx/logo.png"
              }
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://invitacionesdigitalesmty.com.mx/blog/${slug}`
            }
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: "https://invitacionesdigitalesmty.com.mx" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://invitacionesdigitalesmty.com.mx/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://invitacionesdigitalesmty.com.mx/blog/${slug}` },
            ],
          }),
        }}
      />

      <Footer />
    </main>
  )
}
