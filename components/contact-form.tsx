"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    date: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Redirect to WhatsApp with form data
    const whatsappMessage = `¡Hola! Me gustaría cotizar una invitación digital:

👤 Nombre: ${formData.name}
📧 Email: ${formData.email}
📱 Teléfono: ${formData.phone}
🎉 Tipo de evento: ${formData.eventType}
📅 Fecha del evento: ${formData.date}
📝 Mensaje: ${formData.message}`

    const whatsappUrl = `https://wa.me/528111230266?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, "_blank")

    setIsSuccess(true)
    setIsSubmitting(false)

    // Reset form
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        date: "",
        message: "",
      })
      setIsSuccess(false)
    }, 3000)
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Mensaje Enviado!</h3>
        <p className="text-gray-600">Te redirigimos a WhatsApp para continuar la conversación...</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
          </label>
          <Input
            id="name"
            type="text"
            required
            placeholder="María González"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <Input
            id="email"
            type="email"
            required
            placeholder="maria@ejemplo.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Teléfono / WhatsApp *
          </label>
          <Input
            id="phone"
            type="tel"
            required
            placeholder="81 1234 5678"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full"
          />
        </div>

        {/* Event Type */}
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de evento *
          </label>
          <Select required value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona un tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="boda">Boda</SelectItem>
              <SelectItem value="xv">XV Años</SelectItem>
              <SelectItem value="baby-shower">Baby Shower</SelectItem>
              <SelectItem value="cumpleanos">Cumpleaños</SelectItem>
              <SelectItem value="corporativo">Evento Corporativo</SelectItem>
              <SelectItem value="otro">Otro</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Event Date */}
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
          Fecha del evento (aproximada)
        </label>
        <Input
          id="date"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          className="w-full"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Cuéntanos sobre tu evento
        </label>
        <Textarea
          id="message"
          rows={4}
          placeholder="Describe tu visión: colores favoritos, estilo, ideas especiales..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#1e3a8a] hover:bg-[#1e40af] hover:shadow-lg hover:shadow-[#1e3a8a]/50 text-white py-6 rounded-lg font-semibold text-lg transition-all duration-300"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            Enviando...
          </span>
        ) : (
          <span className="flex items-center justify-center gap-2">
            <Send className="w-5 h-5" />
            Enviar Cotización por WhatsApp
          </span>
        )}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Al enviar este formulario, te redirigiremos a WhatsApp para continuar la conversación de forma personalizada.
      </p>
    </form>
  )
}
