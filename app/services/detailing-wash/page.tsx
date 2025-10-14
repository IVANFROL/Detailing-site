import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function DetailingWashPage() {
  const serviceData = {
    title: "ДЕТЕЙЛИНГ МОЙКА",
    description: "Наша услуга детейлинг мойки - это профессиональная многоэтапная очистка автомобиля с использованием специальных средств и оборудования. Мы выполняем тщательную мойку кузова в три фазы, очистку от битума и металлических вкраплений, мойку колесных дисков и уборку салона.",
    benefits: [
      "Многоэтапная очистка - используем трехфазную технологию мойки",
      "Удаление стойких загрязнений - эффективно очищаем от битума и металлических вкраплений",
      "Комплексный подход - моем кузов, диски и убираем салон",
      "Качественные средства - используем профессиональную автохимию"
    ],
    process: "Процесс детейлинг мойки начинается с предварительной мойки кузова для удаления основной грязи. Затем наносится специальный шампунь и выполняется основная мойка. После этого удаляются битумные пятна и металлические вкрапления. Завершается процесс мойкой колесных дисков и уборкой салона.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены современным методам детейлинг мойки",
      "Специальное оборудование - используем профессиональные моечные установки",
      "Качественные средства - работаем с проверенной автохимией",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на детейлинг мойку у нас в SLS DETAILING и верните автомобилю первозданную чистоту."
  }

  const priceData = {
    serviceName: "ДЕТЕЙЛИНГ МОЙКА",
    serviceDescription: "В услугу входит: предварительная мойка, основная мойка кузова, удаление битума и металлических вкраплений, мойка колесных дисков, уборка салона. Стоимость может меняться в зависимости от загрязнения автомобиля.",
    priceClasses: [
      { class: "I класс*", price: "от 5 000 руб" },
      { class: "II класс*", price: "от 6 000 руб" },
      { class: "III класс*", price: "от 7 000 руб" },
      { class: "IV класс*", price: "от 9 000 руб" }
    ],
    additionalServices: [
      { name: "Мойка кузова", price: "от 2 000 руб" },
      { name: "Мойка колесных дисков", price: "от 1 000 руб" },
      { name: "Удаление битума", price: "от 1 500 руб" },
      { name: "Удаление металлических вкраплений", price: "от 1 000 руб" },
      { name: "Уборка салона", price: "от 1 500 руб" },
      { name: "Мойка моторного отсека", price: "от 2 000 руб" },
      { name: "Мойка багажника", price: "от 800 руб" },
      { name: "Мойка дверей", price: "от 600 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/detailing-wash.jpeg"
            alt="Детейлинг мойка"
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
            ДЕТЕЙЛИНГ МОЙКА
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 5 000 рублей
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
