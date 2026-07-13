/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    const csp = [
      "default-src 'self'",
      // Next.js hydration + GA/FB/Vercel + invitation CDNs (Tailwind, cloudflare, esm.sh, tally)
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.instagram.com https://va.vercel-scripts.com https://*.vercel.app https://tally.so https://cdn.tailwindcss.com https://cdnjs.cloudflare.com https://esm.sh",
      // Tailwind inline styles + Google Fonts + proxied invitations + cloudflare CDN
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.vercel.app https://cdn.tailwindcss.com https://cdnjs.cloudflare.com",
      // Google Fonts files + proxied invitations
      "font-src 'self' https://fonts.gstatic.com https://*.vercel.app https://cdnjs.cloudflare.com",
      // Images: own domain + Instagram CDN + Facebook + Google + proxied invitations + texture CDN
      "img-src 'self' data: blob: https://www.instagram.com https://*.cdninstagram.com https://www.facebook.com https://www.google-analytics.com https://www.googletagmanager.com https://*.vercel.app https://www.transparenttextures.com",
      // Instagram embed + Facebook + proxied invitations + Tally RSVP + Google Maps
      "frame-src https://www.instagram.com https://www.facebook.com https://*.vercel.app https://tally.so https://maps.google.com",
      // Analytics beacons + proxied invitations
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://vitals.vercel-insights.com https://va.vercel-scripts.com https://connect.facebook.net https://*.vercel.app",
      // Instagram video in embed + proxied invitations
      "media-src 'self' https://www.instagram.com https://*.cdninstagram.com https://*.vercel.app",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "upgrade-insecure-requests",
    ].join('; ')

    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
    ]
  },
};
