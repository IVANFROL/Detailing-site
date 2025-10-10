"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const categories = [
  { id: "all", name: "Все" },
  { id: "films", name: "Защитные пленки" },
  { id: "polish", name: "Полировка" },
  { id: "cleaning", name: "Химчистка" },
  { id: "coating", name: "Покрытия" },
  { id: "odor", name: "Устранение запахов" },
]

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  const allServices = [
    // 1. КУЗОВ - ОКЛЕЙКА (самые дорогие 150k, 75k)
    {
      title: "ОКЛЕЙКА КУЗОВА ВИНИЛОМ",
      price: "от 150 000 ₽",
      description: "Полная оклейка кузова виниловой пленкой",
      image: "/yslugi/ОКЛЕЙКА КУЗОВА ВИНИЛОМ.jpeg",
      category: "films",
    },
    {
      title: "ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ",
      price: "от 75 000 ₽",
      description: "Полная оклейка кузова защитной полиуретановой пленкой",
      image: "/yslugi/ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ.jpeg",
      category: "films",
    },
    
    // 2. КУЗОВ - ПОЛИРОВКА (20k, 10k, 2.5k)
    {
      title: "ДЕТЕЙЛИНГ ПОЛИРОВКА",
      price: "от 20 000 ₽",
      description: "Полная полировка кузова автомобиля с устранением царапин и притертостей",
      image: "/yslugi/ДЕТЕЙЛИНГ ПОЛИРОВКА.jpeg",
      category: "polish",
    },
    {
      title: "ПОЛИРОВКА КУЗОВА АВТОМОБИЛЯ",
      price: "от 10 000 ₽",
      description: "Полировка кузова для восстановления блеска",
      image: "/yslugi/ПОЛИРОВКА КУЗОВА АВТОМОБИЛЯ.jpeg",
      category: "polish",
    },
    {
      title: "ПОДЕТАЛЬНАЯ ПОЛИРОВКА",
      price: "от 2 500 ₽",
      description: "Локальная полировка отдельных элементов кузова",
      image: "/yslugi/ПОДЕТАЛЬНАЯ ПОЛИРОВКА.jpeg",
      category: "polish",
    },
    
    // 3. КУЗОВ - ПОКРЫТИЯ (15k, 12k, 6k)
    {
      title: "КЕРАМИЧЕСКОЕ ПОКРЫТИЕ",
      price: "от 15 000 ₽",
      description: "Нанесение керамического защитного покрытия",
      image: "/yslugi/КЕРАМИЧЕСКОЕ ПОКРЫТИЕ.jpeg",
      category: "coating",
    },
    {
      title: "ЖИДКОЕ СТЕКЛО",
      price: "от 12 000 ₽",
      description: "Защитное покрытие жидким стеклом",
      image: "/yslugi/ЖИДКОЕ СТЕКЛО.jpeg",
      category: "coating",
    },
    {
      title: "ТВЕРДЫЙ ВОСК",
      price: "от 6 000 ₽",
      description: "Защитное покрытие твердым воском",
      image: "/yslugi/ТВЕРДЫЙ ВОСК.jpeg",
      category: "coating",
    },
    
    // 4. КУЗОВ - ОСТАЛЬНОЕ (6k, 6k, 6k, 5k, 4k, 3k)
    {
      title: "ЗАЩИТА ФАР (ПОЛИУРЕТАН)",
      price: "от 6 000 ₽",
      description: "Защита фар полиуретановой пленкой",
      image: "/yslugi/ЗАЩИТА ФАР (ПОЛИУРЕТАН).jpeg",
      category: "films",
    },
    {
      title: "ПОЛИРОВКА ФАР",
      price: "от 6 000 ₽",
      description: "Полировка фар (перед и зад) для восстановления прозрачности",
      image: "/yslugi/ПОЛИРОВКА ФАР.jpeg",
      category: "polish",
    },
    {
      title: "ДЕТЕЙЛИНГ МОЙКА ДВИГАТЕЛЯ (ДВС) С КОНСЕРВАЦИЕЙ",
      price: "от 6 000 ₽",
      description: "Комплексная мойка двигателя с защитной консервацией",
      image: "/yslugi/Детейлинг мойка двигателя (ДВС) с консервацией.jpeg",
      category: "cleaning",
    },
    {
      title: "ДЕТЕЙЛИНГ МОЙКА",
      price: "от 5 000 ₽",
      description: "Мойка кузова в три фазы с очисткой от битума, металлических вкраплений, колесных дисков. Уборка салона",
      image: "/yslugi/ДЕТЕЙЛИНГ МОЙКА.jpeg",
      category: "cleaning",
    },
    {
      title: "МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ",
      price: "от 4 000 ₽",
      description: "Тщательная мойка подвески автомобиля",
      image: "yslugi/МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ.jpeg",
      category: "cleaning",
    },
    {
      title: "МОЙКА ДВИГАТЕЛЯ",
      price: "от 3 000 ₽",
      description: "Безопасная Мойка мотора с диэлектрическим составом.",
      image: "/yslugi/МОЙКА ДВИГАТЕЛЯ.jpeg",
      category: "cleaning",
    },
    
    // 5. САЛОН - ХИМЧИСТКА (20k, 15k, 10k, 2k)
    {
      title: "ДЕТЕЙЛИНГ ХИМЧИСТКА",
      price: "от 20 000 ₽",
      description: "Полная химчистка салона автомобиля с детальной обработкой",
      image: "/yslugi/ДЕТЕЙЛИНГ ХИМЧИСТКА.jpeg",
      category: "cleaning",
    },
    {
      title: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
      price: "от 15 000 ₽",
      description: "Защитное керамическое покрытие для кожаных элементов салона",
      image: "/leather-car-seat-repair-restoration.jpg",
      category: "coating",
    },
    {
      title: "ХИМЧИСТКА САЛОНА",
      price: "от 10 000 ₽",
      description: "Химчистка салона автомобиля любой сложности",
      image: "/yslugi/ХИМЧИСТКА САЛОНА.jpeg",
      category: "cleaning",
    },
    {
      title: "ХИМЧИСТКА (ЛОКАЛЬНАЯ)",
      price: "от 2 000 ₽",
      description: "Локальная химчистка отдельных элементов салона",
      image: "/yslugi/ХИМЧИСТКА (ЛОКАЛЬНАЯ).jpeg",
      category: "cleaning",
    },
    
    // 6. САЛОН - УСТРАНЕНИЕ ЗАПАХОВ (2k)
    {
      title: "ОЗОНАЦИЯ",
      price: "от 2 000 ₽",
      description: "Устранение запахов озонированием салона",
      image: "/yslugi/ОЗОНАЦИЯ.jpeg",
      category: "odor",
    },
    
    // 7. МЕЛОЧИ (2.5k, 2.5k, 1k)
    {
      title: "УДАЛЕНИЕ ВМЯТИН",
      price: "от 2 500 ₽",
      description: "Удаление вмятин без покраски методом PDR",
      image: "/paintless-dent-removal-car-body.jpg",
      category: "all",
    },
    {
      title: "АНТИДОЖДЬ",
      price: "от 2 500 ₽",
      description: "Нанесение гидрофобного покрытия на стекла",
      image: "/yslugi/АНТИДОЖДЬ.jpeg",
      category: "coating",
    },
    {
      title: "ХИМЧИСТКА ДИСКОВ",
      price: "от 1 000 ₽",
      description: "Профессиональная химчистка колесных дисков",
      image: "/yslugi/ХИМЧИСТКА ДИСКОВ.jpeg",
      category: "cleaning",
    },
  ]

  const filteredServices = selectedCategory === "all" 
    ? allServices 
    : allServices.filter(service => service.category === selectedCategory)

  const totalPages = Math.ceil(filteredServices.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentServices = filteredServices.slice(startIndex, endIndex)

  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl">УСЛУГИ</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>
          <p className="mt-4 text-lg text-[#575757]">
            Предлагаем вам широкий спектр услуг
            <br />
            по защите и уходу за вашим автомобилем
          </p>
        </div>

        {/* Каталог фильтров */}
        <div className="mb-8">
          <h3 className="mb-4 text-2xl font-bold text-white text-center">Каталог</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id)
                  setCurrentPage(1)
                }}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#54E260] to-[#348B41] text-black"
                    : "bg-zinc-900 text-white border border-[#54E260]/20 hover:border-[#54E260]/40"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentServices.map((service, index) => (
            <div key={index} className="group relative h-80 overflow-hidden rounded-lg border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-300">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <span className="text-lg font-bold text-[#54E260] whitespace-nowrap">{service.price}</span>
                </div>
                <p className="mb-4 text-sm text-[#575757]">{service.description}</p>
                <button 
                  onClick={() => {
                    window.dispatchEvent(new CustomEvent('setFormSource', { 
                      detail: { source: 'Запись на услугу', service: service.title } 
                    }))
                    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="flex items-center gap-2 text-[#54E260] transition-colors hover:text-[#348B41]"
                >
                  <span className="text-sm font-semibold">Записаться</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                currentPage === 1
                  ? "border-[#575757]/20 text-[#575757]/50 cursor-not-allowed"
                  : "border-[#54E260]/40 text-white hover:bg-[#54E260]/20"
              } transition-all duration-300`}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`flex h-12 w-12 items-center justify-center rounded-full font-bold transition-all duration-300 ${
                    currentPage === i + 1
                      ? "bg-gradient-to-r from-[#54E260] to-[#348B41] text-black"
                      : "bg-zinc-900 text-white border border-[#54E260]/20 hover:border-[#54E260]/40"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`flex h-12 w-12 items-center justify-center rounded-full border ${
                currentPage === totalPages
                  ? "border-[#575757]/20 text-[#575757]/50 cursor-not-allowed"
                  : "border-[#54E260]/40 text-white hover:bg-[#54E260]/20"
              } transition-all duration-300`}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <Button 
            onClick={() => {
              window.dispatchEvent(new CustomEvent('setFormSource', { 
                detail: { source: 'Предварительная запись' } 
              }))
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
            }}
            size="lg" 
            className="bg-gradient-to-r from-[#54E260] to-[#348B41] px-12 py-6 text-lg font-semibold text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300"
          >
            ПРЕДВАРИТЕЛЬНАЯ ЗАПИСЬ
          </Button>
        </div>
      </div>
    </section>
  )
}