# Agregar nueva invitación al dominio principal

Cada invitación vive en su propio repo/proyecto de Vercel y se sirve como subpath
del dominio `invitacionesdigitalesmty.com.mx/<nombre-invitacion>`.

---

## Paso 1 — Crear el proyecto de la invitación

1. Desarrollar la invitación en su propia carpeta, ej: `invitaciones/<nombre>/`
2. Asegurarse de que `vercel.json` tenga esta estructura:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/<nombre-invitacion>/:path*",
      "destination": "/:path*"
    },
    {
      "source": "/:path*",
      "destination": "/index.html"
    }
  ]
}
```

> Reemplaza `<nombre-invitacion>` con el slug del proyecto, ej: `xv-elisa`, `babyshower-liam`.

---

## Paso 2 — Usar URLs absolutas para imágenes

Las imágenes NO deben usar paths relativos (`foto1.jpeg`) porque cuando se sirven
bajo el proxy del dominio principal el browser las pide desde el dominio principal
y genera 404.

**Usar siempre URL absoluta de Vercel:**

```html
<!-- MAL -->
<img src="foto1.jpeg" />

<!-- BIEN -->
<img src="https://<nombre-invitacion>.vercel.app/foto1.jpeg" />
```

---

## Paso 3 — Crear el repo en GitHub y deployar en Vercel

1. Crear repo en GitHub, ej: `JCCJN04/<nombre-invitacion>`
2. Hacer push del proyecto
3. Conectar el repo en Vercel → se genera URL `https://<nombre-invitacion>.vercel.app`

---

## Paso 4 — Agregar rewrite en este proyecto (invitacionesdigitales)

Editar `vercel.json` de **este** proyecto y agregar al final del array `rewrites`:

```json
{
  "source": "/<nombre-invitacion>",
  "destination": "https://<nombre-invitacion>.vercel.app/"
},
{
  "source": "/<nombre-invitacion>/:path*",
  "destination": "https://<nombre-invitacion>.vercel.app/:path*"
}
```

---

## Paso 5 — Commitear y pushear

```bash
git add vercel.json
git commit -m "feat: add <nombre-invitacion> rewrite"
git push
```

Vercel redeploya automáticamente. En ~1 minuto el URL estará activo.

---

## Ejemplo real — xv-elisa

| Campo | Valor |
|---|---|
| Slug | `xv-elisa` |
| Repo | `github.com/JCCJN04/xv-elisa` |
| Vercel URL | `https://xv-elisa.vercel.app` |
| URL final | `https://www.invitacionesdigitalesmty.com.mx/xv-elisa` |
