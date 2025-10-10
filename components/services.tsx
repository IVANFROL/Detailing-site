import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "ДЕТЕЙЛИНГ МОЙКА",
    price: "5 000 ₽",
    description: "Мойка кузова в три фазы с очисткой от битума, металлических вкраплений, колесных дисков. Уборка салона",
    image: "/yellow-luxury-car-polishing-detailing.jpg",
  },
  {
    title: "ХИМЧИСТКА САЛОНА",
    price: "10 000 ₽",
    description: "Химчистка салона автомобиля любой сложности",
    image: "/car-interior-cleaning-leather-seats.jpg",
  },
  {
    title: "ДЕТЕЙЛИНГ ХИМЧИСТКА",
    price: "20 000 ₽",
    description: "Полная химчистка салона автомобиля с детальной обработкой",
    image: "/car-interior-cleaning-leather-seats.jpg",
  },
  {
    title: "ДЕТЕЙЛИНГ ПОЛИРОВКА",
    price: "20 000 ₽",
    description: "Полная полировка кузова автомобиля с устранением царапин и притертостей",
    image: "/yellow-luxury-car-polishing-detailing.jpg",
  },
  {
    title: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
    price: "15 000 ₽",
    description: "Защитное керамическое покрытие для кожаных элементов салона",
    image: "/leather-car-seat-repair-restoration.jpg",
  },
  {
    title: "МОЙКА ДВИГАТЕЛЯ",
    price: "3 000 ₽",
    description: "Безопасная мойка мотора с диэлектрическим составом",
    image: "/car-engine-cleaning.jpg",
  },
  {
    title: "ПОЛИРОВКА ФАР",
    price: "6 000 ₽",
    description: "Полировка фар (перед и зад) для восстановления прозрачности",
    image: "/car-headlight-polishing.jpg",
  },
  {
    title: "УДАЛЕНИЕ ВМЯТИН",
    price: "от 2 500 ₽",
    description: "Удаление вмятин без покраски методом PDR",
    image: "/paintless-dent-removal-car-body.jpg",
  },
]

export function Services() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-right">
          <h2 className="text-4xl font-bold text-white md:text-5xl">УСЛУГИ</h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] ml-auto"></div>
          <p className="mt-4 text-lg text-[#575757]">
            Предлагаем вам широкий спектр услуг
            <br />
            по защите и уходу за вашим автомобилем
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
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
                <button className="flex items-center gap-2 text-[#54E260] transition-colors hover:text-[#348B41]">
                  <span className="text-sm font-semibold">Записаться</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button size="lg" className="bg-gradient-to-r from-[#54E260] to-[#348B41] px-12 py-6 text-lg font-semibold text-black hover:from-[#348B41] hover:to-[#54E260] transition-all duration-300">
            ПРЕДВАРИТЕЛЬНАЯ ЗАПИСЬ
          </Button>
        </div>
      </div>
    </section>
  )
}
