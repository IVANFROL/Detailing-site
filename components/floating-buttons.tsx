"use client"

import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function FloatingButtons() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
      {/* WhatsApp кнопка */}
      <Button
        size="icon"
        className="bg-[#54E260] hover:bg-[#348B41] text-white rounded-full w-16 h-16 shadow-xl"
        onClick={() => {
          // Скролл к форме
          document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
        }}
        title="Написать в WhatsApp"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      
      {/* Кнопка звонка */}
      <Button
        size="icon"
        className="bg-[#54E260] hover:bg-[#348B41] text-white rounded-full w-16 h-16 shadow-xl"
        onClick={() => window.open("tel:+79629099962", "_self")}
        title="Позвонить"
      >
        <Phone className="h-7 w-7" />
      </Button>
    </div>
  )
}
