import { Check } from "lucide-react"

const pricingData = [
  {
    category: "МОЙКА",
    services: [
      { name: "Детейлинг мойка", price: "5 000 ₽" },
      { name: "Мойка двигателя", price: "3 000 ₽" },
      { name: "Детейлинг мойка двигателя (ДВС) с консервацией", price: "6 000 ₽" },
      { name: "Мойка подвески автомобиля", price: "4 000 ₽" },
      { name: "Химчистка дисков", price: "1 000 ₽" },
    ],
  },
  {
    category: "ХИМЧИСТКА",
    services: [
      { name: "Химчистка (локальная)", price: "2 000 ₽" },
      { name: "Химчистка салона автомобиля", price: "10 000 ₽" },
      { name: "Детейлинг химчистка салона автомобиля", price: "20 000 ₽" },
    ],
  },
  {
    category: "ПОЛИРОВКА",
    services: [
      { name: "Подетальная полировка (локальная)", price: "2 500 ₽" },
      { name: "Полировка фар (перед и зад)", price: "6 000 ₽" },
      { name: "Детейлинг полировка кузова автомобиля", price: "20 000 ₽" },
      { name: "Полировка кузова автомобиля", price: "10 000 ₽" },
    ],
  },
  {
    category: "ЗАЩИТНЫЕ ПЛЕНКИ",
    services: [
      { name: "Защита фар (полиуретан)", price: "6 000 ₽" },
      { name: "Оклейка кузова полиуретаном", price: "75 000 ₽" },
      { name: "Оклейка кузова винилом", price: "150 000 ₽" },
    ],
  },
  {
    category: "ПОКРЫТИЯ",
    services: [
      { name: "Защита кожи керамикой", price: "15 000 ₽" },
      { name: "Антидождь", price: "2 500 ₽" },
      { name: "Твердый воск", price: "6 000 ₽" },
      { name: "Жидкое стекло", price: "12 000 ₽" },
      { name: "Керамическое покрытие", price: "15 000 ₽" },
    ],
  },
  {
    category: "ДОПОЛНИТЕЛЬНО",
    services: [
      { name: "Удаление вмятин без покраски", price: "от 2 500 ₽" },
      { name: "Озонация (устранение запахов)", price: "2 000 ₽" },
    ],
  },
]

export function Pricing() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">ЦЕНЫ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>
        <p className="mb-12 text-center text-lg text-[#575757]">
          Стоимость услуг зависит от сложности работы и состояния автомобиля
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingData.map((category, index) => (
            <div
              key={index}
              className="rounded-lg border border-[#54E260]/20 hover:border-[#54E260]/40 bg-gradient-to-b from-zinc-900 to-black p-6 transition-all duration-300"
            >
              <h3 className="mb-6 text-xl font-bold text-[#54E260]">{category.category}</h3>
              <div className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="flex items-start gap-3">
                    <Check className="mt-1 h-5 w-5 flex-shrink-0 text-[#54E260]" />
                    <div className="flex-1">
                      <p className="text-sm text-[#575757]">{service.name}</p>
                      <p className="mt-1 font-semibold text-white whitespace-nowrap">{service.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-[#575757]">
            * Точная стоимость определяется после осмотра автомобиля. Цены указаны для автомобилей класса B-C.
          </p>
        </div>
      </div>
    </section>
  )
}
