# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm lint       # ESLint via next lint
pnpm start      # serve production build
```

> Use `pnpm` — a `package-lock.json` also exists but `pnpm-lock.yaml` is the authoritative lockfile.

## Environment variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 (format: `G-XXXXXXXXXX`) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | Facebook Pixel ID |
| `NEXT_PUBLIC_SITE_URL` | Canonical base URL |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number (international, no `+`) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email address |

## Architecture

Single-page marketing landing for **Invitaciones Digitales MTY** (Monterrey, MX digital invitation service). It is a Next.js 15 / React 19 App Router site deployed to Vercel.

### Page structure (`app/page.tsx`)

The home page renders these sections in order: `Header → Hero → Benefits → Gallery → Process → Testimonials → Pricing → FAQ → Contact → Footer + WhatsAppWidget (lazy)`. Each section is its own component file directly under `components/`.

### Key architectural decisions

- **`next.config.js` is the active config** — `next.config.mjs` is a leftover. The active config proxies `/citliyamed/*` → `citliyamed.vercel.app` and `/paulaxv/*` → `paula-sage.vercel.app`, serving client invitation sites as sub-paths of the main domain.
- **JSON-LD schemas live in `app/layout.tsx`** — five schemas are inlined (`LocalBusiness`, `Service`, `FAQPage`, `BreadcrumbList`, `WebSite`). When FAQ content in `components/faq-section.tsx` or pricing in `components/pricing-section.tsx` changes, the corresponding schema objects in `layout.tsx` must be kept in sync manually.
- **Analytics components** (`components/analytics/google-analytics.tsx`, `components/analytics/facebook-pixel.tsx`) read from `NEXT_PUBLIC_*` env vars and are injected in the layout body.
- **shadcn/ui** (new-york style, Tailwind CSS v4, `cssVariables: true`). Add new UI primitives with `pnpm dlx shadcn@latest add <component>`; they land in `components/ui/`.
- **Fonts**: `Playfair Display` (`--font-playfair`) + `Montserrat` (`--font-montserrat`) loaded via `next/font/google` in the layout.
- **`lib/blog-data.ts`** holds static blog/gallery data consumed by section components — there is no CMS or API.

### SEO agent skills

`.agent/skills/` contains custom Claude Code skill definitions for SEO workflows (audit, schema, sitemap, geo, content, etc.). These are project-specific skills, not general utilities.
