import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Política de Privacidad | InvitacionesDigitalesmty",
  description: "Política de privacidad y manejo de datos personales de InvitacionesDigitalesmty en Monterrey, NL. Conoce cómo protegemos tu información.",
  alternates: {
    canonical: "https://invitacionesdigitalesmty.com.mx/privacidad",
  },
}

export default function PrivacyPage() {
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

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#111033] mb-4">Política de Privacidad</h1>
          <p className="text-gray-600 mb-12">Última actualización: Noviembre 2, 2025</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">1. Introducción</h2>
              <p className="text-gray-600 leading-relaxed">
                En InvitacionesDigitalesmty, valoramos y respetamos tu privacidad. Esta Política de Privacidad explica
                cómo recopilamos, usamos, divulgamos y protegemos tu información personal cuando utilizas nuestros
                servicios de diseño de invitaciones digitales.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">2. Información que Recopilamos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Recopilamos la siguiente información:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Información de contacto:</strong> Nombre, correo electrónico, número de teléfono/WhatsApp.
                </li>
                <li>
                  <strong>Información del evento:</strong> Tipo de evento, fecha, ubicación, preferencias de diseño.
                </li>
                <li>
                  <strong>Contenido proporcionado:</strong> Fotografías, textos, música y otros elementos que nos
                  proporciones para tu invitación.
                </li>
                <li>
                  <strong>Información de pago:</strong> Datos necesarios para procesar transacciones (procesados de
                  forma segura a través de terceros).
                </li>
                <li>
                  <strong>Datos de navegación:</strong> Información sobre tu dispositivo, dirección IP, navegador y
                  patrones de uso del sitio web.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">3. Cómo Usamos tu Información</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Utilizamos tu información para:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Diseñar y entregar tu invitación digital personalizada.</li>
                <li>Comunicarnos contigo sobre tu pedido y brindar soporte al cliente.</li>
                <li>Procesar pagos y prevenir fraudes.</li>
                <li>Mejorar nuestros servicios y experiencia de usuario.</li>
                <li>Enviarte actualizaciones sobre nuevos diseños y promociones (con tu consentimiento).</li>
                <li>Cumplir con obligaciones legales y resolver disputas.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">4. Compartir tu Información</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                No vendemos tu información personal. Podemos compartir tu información con:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>
                  <strong>Proveedores de servicios:</strong> Empresas que nos ayudan con hosting, procesamiento de
                  pagos y herramientas de comunicación (ej. WhatsApp Business).
                </li>
                <li>
                  <strong>Requisitos legales:</strong> Cuando sea necesario para cumplir con la ley o proteger nuestros
                  derechos.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">5. Seguridad de Datos</h2>
              <p className="text-gray-600 leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra
                acceso no autorizado, pérdida o alteración. Sin embargo, ningún método de transmisión por internet es
                100% seguro.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">6. Tus Derechos</h2>
              <p className="text-gray-600 leading-relaxed mb-4">Tienes derecho a:</p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>Acceder a tu información personal que tenemos.</li>
                <li>Solicitar la corrección de información inexacta.</li>
                <li>Solicitar la eliminación de tu información (sujeto a obligaciones legales).</li>
                <li>Oponerte al procesamiento de tu información.</li>
                <li>Retirar tu consentimiento en cualquier momento.</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4">
                Para ejercer estos derechos, contáctanos al +52 81 1123 0266 o a través de nuestro WhatsApp.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">7. Cookies</h2>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web. Puedes
                configurar tu navegador para rechazar cookies, pero esto puede afectar algunas funcionalidades.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">8. Retención de Datos</h2>
              <p className="text-gray-600 leading-relaxed">
                Conservamos tu información personal durante el tiempo necesario para cumplir con los propósitos
                descritos en esta política, a menos que la ley requiera un período de retención más largo.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">
                9. Cambios a esta Política de Privacidad
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Te notificaremos sobre cambios
                significativos publicando la nueva política en nuestro sitio web y actualizando la fecha de "Última
                actualización".
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-serif font-bold text-[#111033] mb-4">10. Contacto</h2>
              <p className="text-gray-600 leading-relaxed">
                Si tienes preguntas sobre esta Política de Privacidad, contáctanos:
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
