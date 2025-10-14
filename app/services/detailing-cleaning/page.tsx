import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function DetailingCleaningPage() {
  const serviceData = {
    title: "ДЕТЕЙЛИНГ ХИМЧИСТКА",
    description: "Наша услуга детейлинг химчистки - это комплексная профессиональная очистка салона автомобиля с использованием специальных средств и оборудования. Мы выполняем глубокую очистку всех поверхностей салона, устраняя даже самые стойкие загрязнения и неприятные запахи.",
    benefits: [
      "Комплексная очистка - обрабатываем все поверхности салона",
      "Устранение стойких загрязнений - удаляем даже самые сложные пятна",
      "Борьба с запахами - полностью устраняем неприятные запахи",
      "Защита материалов - используем средства, безопасные для всех типов обивки"
    ],
    process: "Процесс детейлинг химчистки начинается с тщательной пылесоски всех поверхностей. Затем специалисты наносят специальные чистящие средства, которые расщепляют загрязнения. После этого выполняется экстракция грязи с помощью профессионального оборудования. Завершается процесс нанесением защитных и кондиционирующих средств.",
    whyChooseUs: [
      "Опыт и профессионализм - наши специалисты обучены современным методам детейлинг химчистки",
      "Специальное оборудование - используем профессиональные экстракторы и пылесосы",
      "Качественные средства - работаем с проверенными, безопасными чистящими средствами",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на детейлинг химчистку у нас в SLS DETAILING и верните салону автомобиля первозданную чистоту."
  }

  const priceData = {
    serviceName: "ДЕТЕЙЛИНГ ХИМЧИСТКА",
    serviceDescription: "В услугу входит: полная пылесоска, нанесение чистящих средств, экстракция загрязнений, нанесение защитных составов. Стоимость может меняться в зависимости от загрязнения салона.",
    priceClasses: [
      { class: "I класс*", price: "от 20 000 руб" },
      { class: "II класс*", price: "от 25 000 руб" },
      { class: "III класс*", price: "от 30 000 руб" },
      { class: "IV класс*", price: "от 40 000 руб" }
    ],
    additionalServices: [
      { name: "Химчистка сидений", price: "от 5 000 руб" },
      { name: "Химчистка ковров", price: "от 3 000 руб" },
      { name: "Химчистка потолка", price: "от 4 000 руб" },
      { name: "Химчистка дверей", price: "от 2 000 руб" },
      { name: "Химчистка багажника", price: "от 3 000 руб" },
      { name: "Химчистка торпеды", price: "от 3 000 руб" },
      { name: "Химчистка рулевого колеса", price: "от 1 500 руб" },
      { name: "Химчистка педалей", price: "от 1 000 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/detailing-cleaning.jpeg"
            alt="Детейлинг химчистка"
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
            ДЕТЕЙЛИНГ ХИМЧИСТКА
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 20 000 рублей
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
