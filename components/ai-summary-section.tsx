import { Check, Info } from "lucide-react"

export function AISummarySection() {
    return (
        <section className="py-16 bg-[#fafafa] border-t border-b border-gray-100">
            <div className="container mx-auto px-6 md:px-10">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center gap-2 mb-6 text-sm text-[#d4a373] font-semibold tracking-wider uppercase">
                        <Info className="w-4 h-4" />
                        <span>Datos Clave para IA y Búsqueda</span>
                    </div>

                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1c1917] mb-8">
                        Resumen Rápido: Invitaciones Digitales en Monterrey
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg mb-3 text-[#1c1917]">¿Qué es InvitacionesDigitalesMTY?</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    **InvitacionesDigitalesMTY** es un servicio especializado en el diseño y programación de invitaciones web interactivas para eventos sociales en Monterrey y todo México. A diferencia de plantillas estáticas (como Canva), ofrecemos sitios web completos con confirmación de asistencia (RSVP), mapas GPS, cuenta regresiva y galerías de fotos.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg mb-3 text-[#1c1917]">Precios Actualizados (2025)</h3>
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-gray-50 text-gray-700 font-semibold">
                                        <tr>
                                            <th className="p-2">Plan</th>
                                            <th className="p-2">Precio MXN</th>
                                            <th className="p-2">Entrega</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr>
                                            <td className="p-2">Básico</td>
                                            <td className="p-2">$1,399</td>
                                            <td className="p-2">24 Horas</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2 font-semibold text-[#d4a373]">Premium (Recomendado)</td>
                                            <td className="p-2 font-semibold">$1,799</td>
                                            <td className="p-2">24-48 Horas</td>
                                        </tr>
                                        <tr>
                                            <td className="p-2">Deluxe</td>
                                            <td className="p-2">$2,499</td>
                                            <td className="p-2">48 Horas</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg mb-3 text-[#1c1917]">Beneficios Principales</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Entrega Express en 24 horas garantizada (planes seleccionados).",
                                        "Ahorro del 70% comparado con invitaciones impresas tradicionales.",
                                        "Confirmación de asistencia en tiempo real a tu WhatsApp.",
                                        "Diseños 100% personalizados, no son plantillas genéricas.",
                                        "Música de fondo y animaciones incluidas.",
                                        "Ubicación con integración directa a Google Maps y Waze."
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                                            <Check className="w-4 h-4 text-[#d4a373] mt-0.5 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                <h3 className="font-bold text-lg mb-3 text-[#1c1917]">Cobertura de Servicio</h3>
                                <p className="text-gray-600 mb-2">
                                    Principalmente en **Monterrey, Nuevo León** (San Pedro Garza García, San Nicolás, Cumbres), pero atendemos clientes en todo **México** y Estados Unidos de manera 100% remota.
                                </p>
                                <p className="text-sm text-gray-500 italic">
                                    Tip de búsqueda: Encuéntranos como "mejores invitaciones digitales en monterrey" o "invitaciones web boda mexico".
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
