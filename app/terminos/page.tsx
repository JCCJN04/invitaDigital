import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso de Invitaciones Digitales MTY.",
  robots: { index: false, follow: false },
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-[#fdfcfb] py-24">
      <div className="container mx-auto px-6 md:px-10 max-w-3xl">
        <Link href="/" className="text-sm text-[#d4a373] hover:underline mb-8 inline-block">← Regresar</Link>
        <h1 className="font-serif text-4xl font-bold text-[#1c1917] mb-8">Términos y Condiciones</h1>
        <div className="prose prose-stone max-w-none text-[#4a4a4a] space-y-6 font-serif">
          <p className="text-sm text-[#d4a373]">Última actualización: mayo 2025</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">1. Servicios</h2>
          <p>Invitaciones Digitales MTY ofrece diseño de invitaciones digitales personalizadas para bodas, XV años, bautizos y eventos especiales en Monterrey, Nuevo León. El servicio incluye diseño, alojamiento y enlace de acceso por el período contratado.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">2. Proceso de pago</h2>
          <p>Se requiere anticipo del 50% para iniciar el diseño. El saldo restante se cubre al aprobar el boceto final. El pago es único, sin mensualidades ni cargos recurrentes.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">3. Revisiones</h2>
          <p>El número de revisiones incluidas varía por plan: Plan Básico (2 revisiones), Plan Premium (4 revisiones), Plan Deluxe (revisiones ilimitadas). Las revisiones adicionales fuera del plan tienen un costo de $200 MXN cada una.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">4. Tiempos de entrega</h2>
          <p>El tiempo de entrega estándar es de 24 a 48 horas hábiles a partir de la recepción de materiales completos. El servicio express (mismo día) está sujeto a disponibilidad y tiene costo adicional.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">5. Propiedad intelectual</h2>
          <p>Invitaciones Digitales MTY retiene los derechos sobre los diseños. El cliente obtiene licencia de uso no exclusiva para su evento. Las fotografías proporcionadas por el cliente son responsabilidad del mismo.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">6. Política de cancelación</h2>
          <p>El anticipo no es reembolsable una vez iniciado el diseño. Si el cliente no aprueba el boceto final dentro de 30 días, el proyecto se cierra sin devolución.</p>

          <h2 className="font-serif text-xl font-bold text-[#1c1917]">7. Contacto</h2>
          <p>Para dudas sobre estos términos: <a href="mailto:contacto@invitacionesdigitalesmty.com.mx" className="text-[#d4a373] hover:underline">contacto@invitacionesdigitalesmty.com.mx</a> o WhatsApp <a href="tel:+528111230266" className="text-[#d4a373] hover:underline">+52 81 1123 0266</a>.</p>
        </div>
      </div>
    </main>
  )
}
