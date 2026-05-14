import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Política de cookies de Invitaciones Digitales MTY.",
  robots: { index: false, follow: false },
}

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfb] py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-3xl">
        <Link href="/" className="text-sm text-[#d4a373] hover:underline mb-8 inline-block">← Regresar</Link>
        <h1 className="font-serif text-4xl font-bold text-[#1c1917] mb-8">Política de Cookies</h1>
        <div className="prose prose-stone max-w-none text-[#4a4a4a] space-y-6 font-serif">
          <p className="text-sm text-[#d4a373]">Última actualización: mayo 2025</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">¿Qué son las cookies?</h2>
          <p>Las cookies son pequeños archivos de texto que los sitios web guardan en tu dispositivo para mejorar la experiencia de navegación.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">Cookies que usamos</h2>
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[#f3eee8]">
                <th className="text-left py-2 font-semibold text-[#1c1917]">Cookie</th>
                <th className="text-left py-2 font-semibold text-[#1c1917]">Propósito</th>
                <th className="text-left py-2 font-semibold text-[#1c1917]">Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#f3eee8]">
                <td className="py-2">_ga, _ga_*</td>
                <td className="py-2">Google Analytics 4 — analítica anónima</td>
                <td className="py-2">2 años</td>
              </tr>
              <tr className="border-b border-[#f3eee8]">
                <td className="py-2">_fbp</td>
                <td className="py-2">Meta Pixel — medición publicitaria</td>
                <td className="py-2">3 meses</td>
              </tr>
              <tr className="border-b border-[#f3eee8]">
                <td className="py-2">va_*</td>
                <td className="py-2">Vercel Analytics — rendimiento de la página</td>
                <td className="py-2">Sesión</td>
              </tr>
            </tbody>
          </table>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">Cómo desactivar las cookies</h2>
          <p>Puedes bloquear o eliminar cookies desde la configuración de tu navegador. Ten en cuenta que desactivar algunas cookies puede afectar la funcionalidad del sitio. Para más información visita <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-[#d4a373] hover:underline">aboutcookies.org</a>.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">Contacto</h2>
          <p>Dudas: <a href="mailto:contacto@invitacionesdigitalesmty.com.mx" className="text-[#d4a373] hover:underline">contacto@invitacionesdigitalesmty.com.mx</a>. Ver también nuestra <Link href="/privacidad" className="text-[#d4a373] hover:underline">Política de Privacidad</Link>.</p>
        </div>
      </div>
    </main>
  )
}
