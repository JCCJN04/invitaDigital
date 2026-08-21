# Arquitectura: Proxies Multi-Evento y CSP

## Cómo funciona el sistema

El proyecto `invitacionesdigitales` es el **hub central** que proxifica cada evento
a su propio proyecto de Vercel bajo el mismo dominio.

```
invitacionesdigitalesmty.com.mx/carlayangel  ->  carla-y-angel-qcbv.vercel.app/carlayangel
invitacionesdigitalesmty.com.mx/citliyamed   ->  citliyamed.vercel.app/
invitacionesdigitalesmty.com.mx/paulaxv      ->  paula-sage.vercel.app/
```

Los rewrites se definen en **dos lugares** (mantenerlos sincronizados):

| Archivo | Rol |
|---------|-----|
| `next.config.js` → `async rewrites()` | Servidor Next.js local y Vercel |
| `vercel.json` → `rewrites` | Edge de Vercel |

---

## 🐛 Bug crítico — CSP bloqueando Supabase (Agosto 2026)

### Síntoma
- La URL directa del evento mostraba la personalización OK:
  `https://carla-y-angel-qcbv.vercel.app/carlayangel?guest=token` ✅
- La URL del hub NO mostraba el nombre del invitado, sin error visible en pantalla:
  `https://invitacionesdigitalesmty.com.mx/carlayangel?guest=token` ❌

### Causa raíz
El **Content Security Policy (CSP)** del hub (`next.config.js`) aplica a todas las
páginas, incluyendo las proxificadas. La directiva `connect-src` no incluía `*.supabase.co`,
por lo que el navegador bloqueaba silenciosamente el `fetch()` a Supabase.

```
# ANTES — bloqueaba Supabase
connect-src 'self' ... https://*.vercel.app

# DESPUES — permite Supabase
connect-src 'self' ... https://*.vercel.app https://*.supabase.co https://*.supabase.in
```

### Diagnóstico
DevTools → Console → buscar mensaje:
> `Refused to connect to 'https://[dominio]' because it violates Content Security Policy`

### Fix
`next.config.js` → `headers()` → `connect-src`
Commit: `59bb93b`

---

## Regla para futuros eventos

> **Si un evento proxificado hace llamadas a APIs externas, agregar ese dominio
> al `connect-src` del CSP en `next.config.js` del hub.**

### Dominios ya permitidos en `connect-src`
- `https://*.vercel.app` — assets y APIs de los eventos
- `https://*.supabase.co` — datos de invitados / RSVP
- `https://*.supabase.in` — dominio alternativo de Supabase
- `https://www.google-analytics.com` — analytics

---

## Variables de entorno

> Las variables `NEXT_PUBLIC_*` se hornean en el JS bundle en tiempo de BUILD.
> Si no están en Vercel al deployar, quedarán como `""` y las llamadas a APIs fallarán.

### Hub (`invitacionesdigitales`) — Vercel → Settings → Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Evento boda (`carla-y-angel-qcbv`) — Vercel → Settings → Environment Variables
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## Checklist para agregar un nuevo evento

1. Crear el proyecto del evento en Vercel con las env vars configuradas
2. Agregar el rewrite en `next.config.js` del hub (sección `async rewrites()`)
3. Agregar el mismo rewrite en `vercel.json` del hub
4. Si el evento usa APIs externas, agregar sus dominios al `connect-src` del CSP
5. Commit y push del hub → Vercel redeploya automáticamente

---

## Diagnóstico rápido

| Problema | Causa probable | Fix |
|----------|---------------|-----|
| Nombre de invitado no aparece en hub pero sí en URL directa | CSP `connect-src` faltante | Agregar dominio API al CSP en `next.config.js` |
| Nombre no aparece en ningún lado | Env vars no configuradas en Vercel del evento | Agregar vars y hacer Redeploy |
| 404 al visitar nuevo evento | Falta rewrite | Agregar en `next.config.js` Y `vercel.json` |

---

## Scripts en `/scripts`

| Script | Propósito |
|--------|-----------|
| `import_guests.py` | Importar invitados desde Excel a Supabase |
| `reconcile_guests.py` | Conciliar confirmaciones vs. lista de invitados |
| `sync_supabase.py` | Sincronización general con Supabase |
