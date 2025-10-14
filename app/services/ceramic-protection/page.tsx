import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function CeramicProtectionPage() {
  const serviceData = {
    title: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
    description: "Наша услуга защиты кожи керамическим покрытием - это современное решение для защиты кожаных элементов салона от загрязнений, износа и воздействия ультрафиолета. Керамическое покрытие создает невидимый защитный слой, который продлевает срок службы кожи и облегчает уход за ней.",
    benefits: [
      "Защита от загрязнений - керамическое покрытие отталкивает грязь и жидкости",
      "Защита от УФ-излучения - предотвращает выцветание и старение кожи",
      "Облегчение ухода - обработанная кожа легче очищается",
      "Долговечность - покрытие служит до 2-3 лет"
    ],
    process: "Процесс нанесения керамического покрытия начинается с тщательной очистки кожаных поверхностей. Затем специалисты наносят специальный керамический состав тонким слоем. После нанесения покрытие оставляют для полимеризации, а затем полируют для достижения идеального блеска.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены работе с керамическими покрытиями",
      "Качественные материалы - используем только сертифицированные керамические составы",
      "Тщательная подготовка - уделяем особое внимание очистке поверхности",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на защиту кожи керамикой у нас в SLS DETAILING и продлите срок службы кожаных элементов салона."
  }

  const priceData = {
    serviceName: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
    serviceDescription: "В услугу входит: очистка кожаных поверхностей, нанесение керамического покрытия, полировка. Стоимость может меняться в зависимости от площади обработки и выбранного материала.",
    priceClasses: [
      { class: "I класс*", price: "от 10 000 руб" },
      { class: "II класс*", price: "от 12 000 руб" },
      { class: "III класс*", price: "от 15 000 руб" },
      { class: "IV класс*", price: "от 20 000 руб" }
    ],
    additionalServices: [
      { name: "Защита передних сидений", price: "от 3 000 руб" },
      { name: "Защита задних сидений", price: "от 2 500 руб" },
      { name: "Защита рулевого колеса", price: "от 1 500 руб" },
      { name: "Защита подлокотников", price: "от 1 000 руб" },
      { name: "Защита дверных карт", price: "от 2 000 руб" },
      { name: "Защита центральной консоли", price: "от 1 500 руб" },
      { name: "Защита рычага КПП", price: "от 800 руб" },
      { name: "Защита ручки стояночного тормоза", price: "от 600 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/ceramic-protection.jpg"
            alt="Защита кожи керамикой"
            fill
            className="object-cover"
            priority
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
        </div>
        
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            SLS DETAILING
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 underline">
            ЗАЩИТА КОЖИ КЕРАМИКОЙ
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

      {/* Our Work */}
      <OurWork />

      {/* Reviews */}
      <Reviews />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
