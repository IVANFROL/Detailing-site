"use client"

import { CheckCircle, Phone, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Иконка успеха */}
        <div className="mb-8">
          <CheckCircle className="w-24 h-24 text-[#54E260] mx-auto" />
        </div>

        {/* Заголовок */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Спасибо за заявку!
        </h1>

        {/* Подзаголовок */}
        <p className="text-xl text-[#575757] mb-8">
          Мы получили вашу заявку и свяжемся с вами в ближайшее время
        </p>

        {/* Детали */}
        <div className="bg-zinc-900 rounded-2xl p-8 mb-8 border border-[#54E260]/20">
          <h2 className="text-2xl font-semibold text-white mb-6">
            Что дальше?
          </h2>
          
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#54E260]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#54E260] font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Обработка заявки</h3>
                <p className="text-[#575757] text-sm">Наш менеджер обработает вашу заявку в течение 15 минут</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#54E260]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#54E260] font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Связь с вами</h3>
                <p className="text-[#575757] text-sm">Мы позвоним вам для уточнения деталей и записи на удобное время</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-8 h-8 bg-[#54E260]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-[#54E260] font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Подготовка к визиту</h3>
                <p className="text-[#575757] text-sm">Подготовим все необходимое для качественного выполнения работ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Контактная информация */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-zinc-900 p-6 rounded-xl border border-[#54E260]/20">
            <Phone className="w-6 h-6 text-[#54E260] mx-auto mb-3" />
            <h3 className="text-white font-medium mb-2">Телефон</h3>
            <p className="text-[#575757] mb-3">+7 (962) 909-99-62</p>
            <Button
              onClick={() => window.open("tel:+79629099962", "_self")}
              className="w-full bg-[#54E260] text-black hover:bg-[#348B41]"
            >
              Позвонить
            </Button>
          </div>

          <div className="bg-zinc-900 p-6 rounded-xl border border-[#54E260]/20">
            <MapPin className="w-6 h-6 text-[#54E260] mx-auto mb-3" />
            <h3 className="text-white font-medium mb-2">Адрес</h3>
            <p className="text-[#575757] mb-3 text-sm">Московская область, городской округ Пушкинский, посёлок Челюскинский, 1-я Тракторная улица, 7</p>
            <Button
              variant="outline"
              onClick={() => window.open("https://yandex.ru/maps/?ll=37.810557%2C55.948219&mode=routes&rtext=~ymapsbm1%3A%2F%2Forg%3Foid%3D162666416237&rtt=mt&z=17", "_blank")}
              className="w-full border-[#54E260] text-[#54E260] hover:bg-[#54E260]/10"
            >
              Построить маршрут
            </Button>
          </div>
        </div>

        {/* Мессенджеры */}
        <div className="mb-8">
          <h3 className="text-white font-medium mb-4">Или напишите нам в мессенджерах:</h3>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => window.open("https://wa.me/79629099962", "_blank")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
            <Button
              onClick={() => window.open("https://t.me/+79629099962", "_blank")}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Telegram
            </Button>
          </div>
        </div>

        {/* Кнопки действий */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <Button className="bg-gradient-to-r from-[#54E260] to-[#348B41] text-black hover:from-[#348B41] hover:to-[#54E260] px-8 py-3">
              Вернуться на главную
            </Button>
          </Link>
          
          <Link href="/#services">
            <Button variant="outline" className="border-[#54E260] text-[#54E260] hover:bg-[#54E260]/10 px-8 py-3">
              Посмотреть услуги
            </Button>
          </Link>
        </div>

        {/* Дополнительная информация */}
        <div className="mt-12 pt-8 border-t border-zinc-800">
          <div className="flex items-center justify-center gap-2 text-[#575757] text-sm mb-4">
            <Clock className="w-4 h-4" />
            <span>Режим работы: Пн-Вс 09:00 - 21:00</span>
          </div>
          <p className="text-[#575757]/60 text-xs">
            SLS DETAILING STUDIO - Профессиональный детейлинг автомобилей в Москве
          </p>
        </div>
      </div>
    </div>
  )
}
