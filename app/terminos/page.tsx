import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Términos y Condiciones | InvitacionesDigitalesmty",
  description:
    "Términos y condiciones de servicio de InvitacionesDigitalesmty para diseño de invitaciones digitales en Monterrey.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6258FF] hover:text-[#4b3fcc] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-4">
            Términos y Condiciones de Servicio
          </h1>
          <p className="text-gray-600 mb-12">Última actualización: Noviembre 2, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">1. Aceptación de los Términos</h2>
              <p className="text-gray-600 leading-relaxed">
                Al acceder y utilizar los servicios de InvitacionesDigitalesmty (en adelante, "el Servicio"), aceptas
                estar sujeto a estos Términos y Condiciones. Si no estás de acuerdo con alguna parte de estos términos,
                no debes utilizar nuestro Servicio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">2. Descripción del Servicio</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                InvitacionesDigitalesmty ofrece servicios de diseño de invitaciones digitales personalizadas para
                eventos como bodas, XV años, baby showers, cumpleaños y eventos corporativos. Nuestros servicios
                incluyen:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Diseño artesanal personalizado según tus especificaciones.</li>
                <li>Entrega de invitación digital en formato de enlace web optimizado.</li>
                <li>Revisiones según el plan contratado.</li>
                <li>Soporte técnico y asesoría durante el proceso de diseño.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">3. Planes y Precios</h2>
              <div className="bg-[#f9f8ff] rounded-lg p-6 border border-[#ece9ff] mb-4">
                <h3 className="font-semibold text-gray-900 mb-3">Planes Disponibles:</h3>
                <ul className="space-y-3 text-gray-600">
                  <li>
                    <strong>Plan Básico ($799 MXN):</strong> Hasta 8 fotos, máximo 2 ligas, hasta 2 revisiones, QR
                    básico.
                  </li>
                  <li>
                    <strong>Plan Premium ($999 MXN):</strong> Hasta 16 fotos, hasta 5 ligas, 4 revisiones, diseño 100%
                    personalizado, animaciones incluidas, QR personalizado, hasta 1 canción.
                  </li>
                  <li>
                    <strong>Plan Deluxe ($1799 MXN):</strong> Hasta 40 fotos, ligas ilimitadas, 8 revisiones, hasta 3
                    canciones.
                  </li>
                </ul>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Los precios están sujetos a cambios sin previo aviso. El precio aplicable será el vigente al momento de
                tu compra. Todos los precios están en pesos mexicanos (MXN).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">4. Proceso de Pedido</h2>
              <ol className="list-decimal pl-6 text-gray-600 space-y-2">
                <li>El cliente solicita una cotización a través de WhatsApp, formulario web o contacto directo.</li>
                <li>Se confirma el plan, precio y requisitos del diseño.</li>
                <li>El cliente proporciona toda la información necesaria (fotos, textos, fechas, etc.).</li>
                <li>Se realiza el pago del 50% como anticipo para comenzar el diseño.</li>
                <li>Entregamos el primer boceto en un plazo de 24-48 horas.</li>
                <li>
                  El cliente revisa y solicita cambios según las revisiones incluidas en su plan.
                </li>
                <li>Una vez aprobado el diseño final, se realiza el pago del 50% restante.</li>
                <li>Se entrega la invitación digital completa y funcional.</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">5. Métodos de Pago</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Aceptamos los siguientes métodos de pago:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Transferencia bancaria (SPEI)</li>
                <li>Depósito en efectivo</li>
                <li>Tarjetas de crédito/débito (a través de plataformas seguras)</li>
                <li>PayPal (sujeto a disponibilidad)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">6. Política de Revisiones</h2>
              <p className="text-gray-600 leading-relaxed">
                Las revisiones incluidas en tu plan te permiten solicitar cambios en el diseño. Una "revisión" se define
                como un conjunto de cambios solicitados en una sola comunicación. Cambios adicionales fuera del número
                de revisiones incluidas tendrán un costo extra de $200 MXN por revisión adicional.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Las revisiones deben solicitarse dentro de los 7 días posteriores a la entrega del diseño inicial.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">7. Política de Reembolsos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                <strong>Garantía de Satisfacción 100%:</strong> Si no quedas completamente satisfecho con tu invitación
                antes de la entrega final, te devolvemos tu anticipo. Esta garantía aplica bajo las siguientes
                condiciones:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>La solicitud de reembolso debe realizarse antes del diseño final aprobado.</li>
                <li>El cliente debe haber proporcionado toda la información necesaria de manera oportuna.</li>
                <li>No aplica si el evento ya ocurrió o si la invitación ya fue compartida con invitados.</li>
                <li>No se reembolsa el pago completo después de la aprobación final del diseño.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">8. Política de Cancelación</h2>
              <p className="text-gray-600 leading-relaxed">
                El cliente puede cancelar su pedido en cualquier momento. Si la cancelación ocurre:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>
                  <strong>Antes de iniciar el diseño:</strong> Reembolso del 100% del anticipo.
                </li>
                <li>
                  <strong>Después de entregar el primer boceto:</strong> Reembolso del 50% del anticipo.
                </li>
                <li>
                  <strong>Después de la aprobación final:</strong> No hay reembolso.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">9. Propiedad Intelectual</h2>
              <p className="text-gray-600 leading-relaxed">
                Una vez completado el pago total, el cliente obtiene los derechos de uso de la invitación digital
                creada exclusivamente para su evento. InvitacionesDigitalesmty retiene los derechos de autor del diseño
                y puede utilizar el trabajo en su portafolio con fines promocionales, salvo que el cliente solicite lo
                contrario por escrito.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                El cliente no puede revender, redistribuir o reclamar autoría del diseño.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">10. Responsabilidades del Cliente</h2>
              <p className="text-gray-600 leading-relaxed mb-4">El cliente se compromete a:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Proporcionar información precisa y completa para el diseño.</li>
                <li>Entregar fotos y materiales en formatos de buena calidad.</li>
                <li>Revisar los diseños de manera oportuna y comunicar cambios claramente.</li>
                <li>
                  Verificar que toda la información (fechas, horarios, ubicaciones) sea correcta antes de la aprobación
                  final.
                </li>
                <li>No utilizar contenido con derechos de autor de terceros sin autorización.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">11. Limitación de Responsabilidad</h2>
              <p className="text-gray-600 leading-relaxed">
                InvitacionesDigitalesmty no se hace responsable de:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-4">
                <li>Errores en la información proporcionada por el cliente (fechas, nombres, ubicaciones, etc.).</li>
                <li>
                  Problemas técnicos fuera de nuestro control (fallas de internet, servidores, dispositivos del
                  usuario).
                </li>
                <li>Uso indebido de la invitación digital por parte del cliente o terceros.</li>
                <li>Daños indirectos o consecuenciales derivados del uso del Servicio.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">
                12. Modificaciones a los Términos
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios
                serán efectivos inmediatamente después de su publicación en nuestro sitio web. Es tu responsabilidad
                revisar periódicamente estos términos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">13. Ley Aplicable</h2>
              <p className="text-gray-600 leading-relaxed">
                Estos Términos y Condiciones se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa
                se resolverá en los tribunales competentes de Monterrey, Nuevo León.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">14. Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tienes preguntas sobre estos Términos y Condiciones, contáctanos:
              </p>
              <div className="mt-4 p-6 bg-[#f9f8ff] rounded-lg border border-[#ece9ff]">
                <p className="text-gray-700">
                  <strong>InvitacionesDigitalesmty</strong>
                  <br />
                  WhatsApp: +52 81 1123 0266
                  <br />
                  Instagram: @invitacionesdigitalesmty.co
                  <br />
                  Ubicación: Monterrey, Nuevo León, México
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
