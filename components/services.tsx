"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useRef } from "react"
import { ServiceCard } from "@/components/service-card"

const categories = [
  { id: "all", name: "Все" },
  { id: "films", name: "Защитные пленки" },
  { id: "polish", name: "Полировка" },
  { id: "cleaning", name: "Химчистка" },
  { id: "coating", name: "Покрытия" },
  // { id: "odor", name: "Устранение запахов" },
]

export function Services() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const servicesRef = useRef<HTMLElement>(null)
  const itemsPerPage = 9

  const allServices = [
    // 1. КУЗОВ - ОКЛЕЙКА (самые дорогие 150k, 75k)
    {
      id: "vinyl-wrapping",
      title: "ОКЛЕЙКА КУЗОВА ВИНИЛОМ",
      price: "от 150 000 ₽",
      description: "Полная оклейка кузова виниловой пленкой",
      image: "/yslugi/vinyl-wrap.jpeg",
      category: "films",
    },
    {
      id: "ppf-wrapping",
      title: "ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ",
      price: "от 75 000 ₽",
      description: "Полная оклейка кузова защитной полиуретановой пленкой",
      image: "/yslugi/ppf-wrap.jpeg",
      category: "films",
    },
    
    // 2. КУЗОВ - ПОЛИРОВКА (20k)
    {
      id: "polishing",
      title: "ДЕТЕЙЛИНГ ПОЛИРОВКА",
      price: "от 20 000 ₽",
      description: "Полная полировка кузова автомобиля с устранением царапин и притертостей",
      image: "/yslugi/detailing-polish.jpeg", // Новое фото
      category: "polish",
    },
    
    // 3. КУЗОВ - ПОКРЫТИЯ (10k, 3k)
    {
      id: "liquid-glass",
      title: "ЖИДКОЕ СТЕКЛО",
      price: "от 10 000 ₽", // Обновлена цена
      description: "Защитное покрытие жидким стеклом",
      image: "/yslugi/liquid-glass.jpeg",
      category: "coating",
    },
    {
      id: "hard-wax",
      title: "ТВЕРДЫЙ ВОСК",
      price: "от 3 000 ₽", // Обновлена цена
      description: "Защитное покрытие твердым воском",
      image: "/yslugi/hard-wax.jpeg",
      category: "coating",
    },
    
    // 4. КУЗОВ - ОСТАЛЬНОЕ (6k, 2k, 3k)
    {
      id: "suspension-wash",
      title: "МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ",
      price: "от 6 000 ₽", // Обновлена цена
      description: "Тщательная мойка подвески автомобиля",
      image: "/yslugi/suspension-wash.jpeg",
      category: "cleaning",
    },
    {
      id: "headlight-polish",
      title: "ПОЛИРОВКА ФАР",
      price: "от 2 000 ₽", // Обновлена цена
      description: "Полировка фар (перед и зад) для восстановления прозрачности",
      image: "/yslugi/headlight-polish.jpeg",
      category: "polish",
    },
    {
      id: "engine-wash",
      title: "МОЙКА ДВИГАТЕЛЯ",
      price: "от 3 000 ₽",
      description: "Безопасная Мойка мотора с диэлектрическим составом.",
      image: "/yslugi/engine-wash.jpeg", // Новое фото
      category: "cleaning",
    },
    
    // 5. САЛОН - ХИМЧИСТКА (20k, 10k)
    {
      id: "detailing-cleaning",
      title: "ДЕТЕЙЛИНГ ХИМЧИСТКА",
      price: "от 20 000 ₽",
      description: "Полная химчистка салона автомобиля с детальной обработкой",
      image: "/yslugi/detailing-cleaning.jpeg", // Новое фото
      category: "cleaning",
    },
    {
      id: "ceramic-protection",
      title: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
      price: "от 10 000 ₽", // Обновлена цена
      description: "Защитное керамическое покрытие для кожаных элементов салона",
      image: "/yslugi/ceramic-protection.jpg", // Новое фото
      category: "coating",
    },
    {
      id: "interior-cleaning",
      title: "ХИМЧИСТКА САЛОНА",
      price: "от 10 000 ₽",
      description: "Химчистка салона автомобиля любой сложности",
      image: "/yslugi/interior-cleaning.jpeg",
      category: "cleaning",
    },
    
    // 6. МЕЛОЧИ (1.5k)
    {
      id: "anti-rain",
      title: "АНТИДОЖДЬ",
      price: "от 1 500 ₽", // Обновлена цена
      description: "Нанесение гидрофобного покрытия на стекла",
      image: "/yslugi/anti-rain.jpeg",
      category: "coating",
    },
    
    // Возвращаем ДЕТЕЙЛИНГ МОЙКУ
    {
      id: "detailing-wash",
      title: "ДЕТЕЙЛИНГ МОЙКА",
      price: "от 5 000 ₽",
      description: "Мойка кузова в три фазы с очисткой от битума, металлических вкраплений, колесных дисков. Уборка салона",
      image: "/yslugi/detailing-wash.jpeg",
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
    <section ref={servicesRef} className="bg-black px-4 py-20">
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

        <div className="min-h-[800px] md:min-h-[600px]">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {currentServices.map((service, index) => (
              <ServiceCard
                key={index}
                id={service.id}
                title={service.title}
                price={service.price}
                description={service.description}
                image={service.image || "/placeholder.svg"}
                imageAlt={service.title}
              />
            ))}
          </div>
        </div>

        {/* Пагинация */}
        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentPage(prev => Math.max(prev - 1, 1))
                servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
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
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setCurrentPage(i + 1)
                    servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                  }}
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
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
                servicesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }}
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