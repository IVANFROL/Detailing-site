"use client"

import { MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-white mb-4">
          Контакты и как нас найти
        </h2>
        
        <p className="text-center text-[#575757] mb-12">
          Мы находимся в Московской области, городской округ Пушкинский
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Карта */}
          <div className="relative rounded-2xl overflow-hidden h-[400px] shadow-lg">
            <iframe 
              src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa30b4cbf58c8c53a0c9b4ccbd4e6a640484f9bba6b5ff79842e5cfa7597036a1&amp;source=constructor"
              width="100%" 
              height="100%" 
              frameBorder="0"
              className="border-0"
            ></iframe>
            <a 
              href="https://yandex.ru/maps/?ll=37.810557,55.948219&z=17"
              target="_blank"
              className="absolute bottom-4 left-4 bg-white py-2 px-4 rounded-lg shadow-md text-sm font-medium text-[#1F1235] hover:bg-[#54E260] hover:text-black transition-colors"
            >
              Открыть в Яндекс Картах
            </a>
          </div>

          {/* Информация */}
          <div className="space-y-8">
            {/* Адрес */}
            <div className="bg-zinc-900 p-6 rounded-2xl border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/50 rounded-full">
                  <MapPin className="w-6 h-6 text-[#54E260]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white mb-1">
                    Адрес студии
                  </h3>
                  <p className="text-[#575757] mb-2">
                    Московская область, городской округ Пушкинский, посёлок Челюскинский, 1-я Тракторная улица, 7
                  </p>
                  <p className="text-[#575757]/60 text-sm">
                    Удобная парковка рядом
                  </p>
                  <Button 
                    variant="outline"
                    className="mt-4 border-[#54E260] text-[#54E260] hover:bg-[#54E260]/10"
                    onClick={() => window.open("https://yandex.ru/maps/?ll=37.810557,55.948219&z=17", "_blank")}
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Построить маршрут
                  </Button>
                </div>
              </div>
            </div>

            {/* Телефон */}
            <div className="bg-zinc-900 p-6 rounded-2xl border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/50 rounded-full">
                  <Phone className="w-6 h-6 text-[#54E260]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white mb-1">
                    Телефон для записи
                  </h3>
                  <p className="text-[#575757] mb-4">
                    +7 (962) 909-99-62
                  </p>
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {
                        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                      }}
                      className="bg-gradient-to-r from-[#54E260] to-[#348B41] text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300"
                    >
                      Записаться
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => window.open("tel:+79629099962", "_self")}
                      className="border-[#54E260] text-[#54E260] hover:bg-[#54E260]/10"
                    >
                      Позвонить
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Режим работы */}
            <div className="bg-zinc-900 p-6 rounded-2xl border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-black/50 rounded-full">
                  <Clock className="w-6 h-6 text-[#54E260]" />
                </div>
                <div>
                  <h3 className="font-medium text-lg text-white mb-1">
                    Режим работы
                  </h3>
                  <p className="text-[#575757] mb-1">
                    Понедельник - Воскресенье
                  </p>
                  <p className="text-[#54E260] font-medium mb-1">
                    09:00 - 21:00
                  </p>
                  <p className="text-[#575757]/60 text-sm">
                    Работаем без выходных
                  </p>
                </div>
              </div>
            </div>

            {/* Мессенджеры */}
            <div className="grid grid-cols-2 gap-4">
              <Button
                className="w-full bg-gradient-to-r from-[#54E260] to-[#348B41] text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300"
                onClick={() => window.open("https://wa.me/79629099962", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
              <Button
                className="w-full bg-gradient-to-r from-[#54E260] to-[#348B41] text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300"
                onClick={() => window.open("https://t.me/+79629099962", "_blank")}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Telegram
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
