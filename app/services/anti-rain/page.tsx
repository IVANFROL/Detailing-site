import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function AntiRainPage() {
  const serviceData = {
    title: "АНТИДОЖДЬ",
    description: "Наша услуга нанесения антидождевого покрытия - это современное решение для улучшения видимости в дождливую погоду. Гидрофобное покрытие отталкивает воду со стекол, обеспечивая лучшую видимость и безопасность вождения в любых погодных условиях.",
    benefits: [
      "Улучшение видимости - вода скатывается со стекол, не задерживаясь",
      "Безопасность - лучшая видимость в дождливую погоду",
      "Удобство - меньше необходимости использовать дворники",
      "Долговечность - покрытие служит до 6 месяцев"
    ],
    process: "Процесс нанесения антидождевого покрытия начинается с тщательной очистки стекол от загрязнений и обезжиривания. Затем специалисты наносят специальный гидрофобный состав тонким слоем. После нанесения покрытие оставляют для полимеризации, а затем полируют для достижения максимального эффекта.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены работе с гидрофобными покрытиями",
      "Качественные материалы - используем только проверенные антидождевые составы",
      "Тщательная подготовка - уделяем особое внимание очистке стекол",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на нанесение антидождевого покрытия у нас в SLS DETAILING и улучшите безопасность вождения в дождливую погоду."
  }

  const priceData = {
    serviceName: "АНТИДОЖДЬ",
    serviceDescription: "В услугу входит: очистка стекол, обезжиривание, нанесение гидрофобного покрытия, полировка. Стоимость может меняться в зависимости от количества обрабатываемых стекол.",
    priceClasses: [
      { class: "I класс*", price: "от 1 500 руб" },
      { class: "II класс*", price: "от 2 000 руб" },
      { class: "III класс*", price: "от 2 500 руб" },
      { class: "IV класс*", price: "от 3 000 руб" }
    ],
    additionalServices: [
      { name: "Нанесение на лобовое стекло", price: "от 800 руб" },
      { name: "Нанесение на боковые стекла", price: "от 400 руб" },
      { name: "Нанесение на заднее стекло", price: "от 600 руб" },
      { name: "Нанесение на зеркала", price: "от 300 руб" },
      { name: "Нанесение на фары", price: "от 500 руб" },
      { name: "Нанесение на задние фонари", price: "от 400 руб" },
      { name: "Нанесение на противотуманные фары", price: "от 300 руб" },
      { name: "Нанесение на поворотники", price: "от 200 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/anti-rain.jpeg"
            alt="Антидождь"
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
            АНТИДОЖДЬ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 1 500 рублей
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
