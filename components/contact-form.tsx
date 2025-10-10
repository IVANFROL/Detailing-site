"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState, useEffect } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [source, setSource] = useState("Общая заявка")
  const [service, setService] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null)

  // Слушаем события для установки источника заявки
  useEffect(() => {
    const handleSetSource = (event: CustomEvent) => {
      setSource(event.detail.source || "Общая заявка")
      setService(event.detail.service || "")
    }

    window.addEventListener('setFormSource' as any, handleSetSource)
    return () => window.removeEventListener('setFormSource' as any, handleSetSource)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const response = await fetch('/api/send-telegram', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source,
          service,
        }),
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus({ type: 'success', message: 'Спасибо! Ваша заявка успешно отправлена. Мы свяжемся с вами в ближайшее время.' })
        setFormData({ name: "", phone: "", email: "", message: "" })
        setSource("Общая заявка")
        setService("")
      } else {
        setSubmitStatus({ type: 'error', message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.' })
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Произошла ошибка при отправке. Пожалуйста, попробуйте позже.' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact-form" className="relative px-4 py-20">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/fon.jpg"
          alt="Background"
          className="h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">ФОРМА ОБРАТНОЙ СВЯЗИ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        {source !== "Общая заявка" && (
          <div className="mb-6 rounded-lg bg-[#54E260]/10 border border-[#54E260]/30 p-4">
            <p className="text-center text-white">
              {service ? (
                <>Вы выбрали услугу: <span className="font-bold text-[#54E260]">{service}</span></>
              ) : (
                <>Источник: <span className="font-bold text-[#54E260]">{source}</span></>
              )}
            </p>
          </div>
        )}

        {submitStatus && (
          <div className={`mb-6 rounded-lg p-4 ${
            submitStatus.type === 'success' 
              ? 'bg-[#54E260]/20 border border-[#54E260]/50 text-[#54E260]' 
              : 'bg-red-500/20 border border-red-500/50 text-red-400'
          }`}>
            <p className="text-center font-semibold">{submitStatus.message}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Ваше имя"
            required
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            className="h-14 border-[#575757] bg-white/10 text-white placeholder:text-[#575757] focus:border-[#54E260] focus:ring-[#54E260]"
          />
          <Input
            type="tel"
            placeholder="Ваш телефон"
            required
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="h-14 border-[#575757] bg-white/10 text-white placeholder:text-[#575757] focus:border-[#54E260] focus:ring-[#54E260]"
          />
          <Input
            type="email"
            placeholder="Ваш email (необязательно)"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="h-14 border-[#575757] bg-white/10 text-white placeholder:text-[#575757] focus:border-[#54E260] focus:ring-[#54E260]"
          />
          <textarea
            placeholder="Сообщение (необязательно)"
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({...formData, message: e.target.value})}
            className="w-full rounded-md border border-[#575757] bg-white/10 px-4 py-3 text-white placeholder:text-[#575757] focus:outline-none focus:ring-2 focus:ring-[#54E260] focus:border-[#54E260]"
          />
          <Button
            type="submit"
            disabled={isSubmitting}
            size="lg"
            className="w-full bg-gradient-to-r from-[#54E260] to-[#348B41] py-6 text-lg font-semibold text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? "ОТПРАВКА..." : "ОТПРАВИТЬ"}
          </Button>
        </form>
      </div>
    </section>
  )
}
