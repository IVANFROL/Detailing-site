"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hexagonal pattern background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l25.98 15v30L30 60 4.02 45V15z' fill='none' stroke='%2354E260' strokeWidth='1'/%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/person-detailing-blue-car-professional-automotive.jpg" alt="Car detailing" className="h-full w-full object-cover opacity-40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <h1 className="mb-8 text-center font-bold text-white">
          <span className="block text-5xl tracking-wider md:text-7xl">SLS</span>
          <span className="block text-3xl tracking-widest md:text-5xl text-[#54E260]">DETAILING STUDIO</span>
        </h1>
        <div className="mb-8 h-1 w-32 bg-gradient-to-r from-[#54E260] to-[#348B41]"></div>
        <p className="text-center text-lg text-gray-300 max-w-2xl mb-8">
          Профессиональный уход для вашего автомобиля
        </p>

        {/* Кнопки */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Button
            onClick={() => {
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="bg-gradient-to-r from-[#54E260] to-[#348B41] text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300 text-lg px-8 py-6 h-auto"
          >
            Записаться
          </Button>

          <Button
            variant="outline"
            onClick={() => window.open("tel:+79629099962", "_self")}
            className="border-[#54E260] text-[#54E260] hover:bg-[#54E260]/10 transition-all duration-300 text-lg px-8 py-6 h-auto gap-3"
          >
            <Phone className="h-5 w-5" />
            +7 (962) 909-99-62
          </Button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden">
            <nav className="flex items-center gap-4 md:gap-6 text-xs text-white/80 whitespace-nowrap marquee">
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                МОЙКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ПОЛИРОВКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ХИМЧИСТКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ЗАЩИТНЫЕ ПЛЕНКИ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ПОКРЫТИЯ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                УДАЛЕНИЕ ВМЯТИН
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                УСТРАНЕНИЕ ЗАПАХОВ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ОКЛЕЙКА ПЛЕНКОЙ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                РЕМОНТ КОЖИ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ШУМОИЗОЛЯЦИЯ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                КЕРАМИКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                АНТИГРАВИЙНАЯ ПЛЕНКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                МОЙКА ДВИГАТЕЛЯ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ПОЛИРОВКА ФАР
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ХИМЧИСТКА ДИСКОВ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                МОЙКА ПОДВЕСКИ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ДЕТЕЙЛИНГ МОЙКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ДЕТЕЙЛИНГ ХИМЧИСТКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ДЕТЕЙЛИНГ ПОЛИРОВКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ЗАЩИТА КОЖИ КЕРАМИКОЙ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ПОДЕТАЛЬНАЯ ПОЛИРОВКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                МОЙКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ПОЛИРОВКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ХИМЧИСТКА
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ЗАЩИТНЫЕ ПЛЕНКИ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                ПОКРЫТИЯ
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                УДАЛЕНИЕ ВМЯТИН
              </a>
              <span className="text-[#575757] flex-shrink-0">•</span>
              <a href="#" className="hover:text-[#54E260] transition-colors duration-300 whitespace-nowrap">
                УСТРАНЕНИЕ ЗАПАХОВ
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}
