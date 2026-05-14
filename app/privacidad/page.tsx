import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Invitaciones Digitales MTY.",
  robots: { index: false, follow: false },
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfb] py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-3xl">
        <Link href="/" className="text-sm text-[#d4a373] hover:underline mb-8 inline-block">← Regresar</Link>
        <h1 className="font-serif text-4xl font-bold text-[#1c1917] mb-8">Política de Privacidad</h1>
        <div className="prose prose-stone max-w-none text-[#4a4a4a] space-y-6 font-serif">
          <p className="text-sm text-[#d4a373]">Última actualización: mayo 2025</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">1. Datos que recopilamos</h2>
          <p>Recopilamos únicamente los datos que el cliente proporciona voluntariamente para el diseño de su invitación: nombre, tipo de evento, fecha, lugar, fotos e información de contacto (teléfono / WhatsApp). No vendemos ni compartimos datos con terceros.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">2. Uso de los datos</h2>
          <p>Los datos se utilizan exclusivamente para crear y entregar la invitación digital contratada y para comunicación relacionada con el pedido. Las fotografías se eliminan de nuestros sistemas 90 días después de la entrega del proyecto.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">3. Cookies y analítica</h2>
          <p>Este sitio utiliza Google Analytics 4 para medir tráfico de forma anónima y Meta Pixel para medir efectividad publicitaria. Puedes desactivar estas tecnologías desde la configuración de tu navegador. Ver también nuestra <Link href="/cookies" className="text-[#d4a373] hover:underline">Política de Cookies</Link>.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">4. Derechos del titular</h2>
          <p>Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), tienes derecho de acceso, rectificación, cancelación y oposición (derechos ARCO) sobre tus datos. Ejerce tus derechos escribiendo a: <a href="mailto:contacto@invitacionesdigitalesmty.com.mx" className="text-[#d4a373] hover:underline">contacto@invitacionesdigitalesmty.com.mx</a>.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">5. Seguridad</h2>
          <p>Implementamos medidas técnicas y organizativas para proteger tus datos contra acceso no autorizado. La comunicación con este sitio está protegida mediante HTTPS/TLS.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">6. Contacto</h2>
          <p>Para cualquier duda sobre privacidad: <a href="mailto:contacto@invitacionesdigitalesmty.com.mx" className="text-[#d4a373] hover:underline">contacto@invitacionesdigitalesmty.com.mx</a>.</p>
        </div>
      </div>
    </main>
  )
}
