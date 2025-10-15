import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function LiquidGlassPage() {
  const serviceData = {
    title: "ЖИДКОЕ СТЕКЛО",
    description: "Наша услуга нанесения жидкого стекла - это современная технология защиты лакокрасочного покрытия автомобиля. Жидкое стекло создает невидимый защитный слой, который обеспечивает длительную защиту от воздействия внешних факторов и придает автомобилю невероятный блеск.",
    benefits: [
      "Долговременная защита - жидкое стекло обеспечивает защиту лакокрасочного покрытия на срок до 2-3 лет",
      "Невероятный блеск - придает автомобилю зеркальный блеск и глубину цвета",
      "Легкость ухода - обработанная поверхность легко моется и меньше загрязняется",
      "Защита от УФ-излучения - предотвращает выцветание краски под воздействием солнечных лучей"
    ],
    process: "Процесс нанесения жидкого стекла начинается с тщательной подготовки поверхности - мойки, обезжиривания и полировки кузова. Затем специалисты наносят жидкое стекло в несколько слоев с соблюдением строгих температурных и влажностных условий. Каждый слой тщательно выравнивается и полируется для достижения идеального результата.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены работе с жидким стеклом и имеют многолетний опыт",
      "Качественные материалы - используем только проверенные бренды жидкого стекла",
      "Соблюдение технологии - строго следуем всем требованиям производителя",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на нанесение жидкого стекла у нас в SLS DETAILING и защитите свой автомобиль на долгие годы."
  }

  const priceData = {
    serviceName: "ЖИДКОЕ СТЕКЛО",
    serviceDescription: "В услугу входит: подготовка поверхности, нанесение жидкого стекла, полировка, финальная обработка. Стоимость может меняться в зависимости от выбранного материала и сложности работ.",
    priceClasses: [
      { class: "I класс*", price: "от 10 000 руб" },
      { class: "II класс*", price: "от 15 000 руб" },
      { class: "III класс*", price: "от 20 000 руб" },
      { class: "IV класс*", price: "от 30 000 руб" }
    ],
    additionalServices: [
      { name: "Нанесение на капот", price: "от 2 000 руб" },
      { name: "Нанесение на крышу", price: "от 1 500 руб" },
      { name: "Нанесение на двери", price: "от 1 000 руб" },
      { name: "Нанесение на багажник", price: "от 1 500 руб" },
      { name: "Нанесение на бамперы", price: "от 800 руб" },
      { name: "Нанесение на фары", price: "от 500 руб" },
      { name: "Нанесение на молдинги", price: "от 300 руб" },
      { name: "Нанесение на зеркала", price: "от 200 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/liquid-glass.jpeg"
            alt="Жидкое стекло"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-30"></div> */}
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SLS DETAILING
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">
            ЖИДКОЕ СТЕКЛО
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 10 000 рублей
          </div>
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails {...serviceData} />

      {/* Price Section */}
      <PriceSection {...priceData} />

      {/* Our Work - Liquid Glass Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по нанесению жидкого стекла</p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group w-full">
              <Image
                src="/pages yslugi/djitkoesteklo1.jpg"
                alt="Нанесение жидкого стекла - профессиональная работа"
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <span className="text-white text-xl font-semibold">Профессиональное нанесение жидкого стекла</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
