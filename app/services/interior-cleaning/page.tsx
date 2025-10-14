import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function InteriorCleaningPage() {
  const serviceData = {
    title: "ХИМЧИСТКА САЛОНА",
    description: "Наша услуга химчистки салона автомобиля - это идеальное решение для тех, кто ценит чистоту и комфорт в своем автомобиле. Мы используем специальные средства и оборудование, которые позволяют эффективно устранить любые загрязнения, пятна и неприятные запахи с сидений, ковров и других поверхностей в салоне.",
    benefits: [
      "Полное удаление загрязнений - специальные средства эффективно устраняют даже самые стойкие пятна и загрязнения",
      "Устранение неприятных запахов - профессиональная химчистка полностью избавляет от запахов табака, еды и других источников",
      "Продление срока службы - качественная химчистка продлевает жизнь обивки и поверхностей салона",
      "Гипоаллергенность - используем только безопасные, гипоаллергенные средства"
    ],
    process: "Процесс химчистки начинается с тщательной пылесоски всех поверхностей салона. Затем специалисты наносят специальные чистящие средства, которые расщепляют загрязнения. После этого выполняется экстракция грязи с помощью профессионального оборудования. Завершается процесс нанесением защитных и кондиционирующих средств.",
    whyChooseUs: [
      "Опыт и профессионализм - наши специалисты обучены современным методам химчистки и имеют многолетний опыт работы",
      "Специальное оборудование - используем только профессиональные экстракторы и пылесосы",
      "Качественные средства - работаем с проверенными, безопасными чистящими средствами",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на химчистку салона у нас в SLS DETAILING и верните своему автомобилю свежесть и чистоту."
  }

  const priceData = {
    serviceName: "ХИМЧИСТКА САЛОНА",
    serviceDescription: "В услугу входит: мойка кузова, детейлинг-химчистка салона, пропитка кожи, сидений и подлокотников кондиционером Koch. Стоимость может меняться в зависимости от загрязнения автомобиля.",
    priceClasses: [
      { class: "I класс*", price: "от 15 000 руб" },
      { class: "II класс*", price: "от 15 000 руб" },
      { class: "III класс*", price: "от 20 000 руб" },
      { class: "IV класс*", price: "от 25 000 руб" }
    ],
    additionalServices: [
      { name: "Химчистка рулевого колеса", price: "от 1 500 руб" },
      { name: "Химчистка переднего сиденья", price: "от 2 000 руб" },
      { name: "Химчистка заднего сиденья", price: "от 3 000 руб" },
      { name: "Химчистка пола 1/4", price: "от 2 000 руб" },
      { name: "Химчистка потолка", price: "от 4 000 руб" },
      { name: "Химчистка дверной карты", price: "от 1 500 руб" },
      { name: "Химчистка багажного отделения", price: "от 3 000 руб" },
      { name: "Химчистка торпеды", price: "от 3 000 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/interior-cleaning.jpeg"
            alt="Химчистка салона"
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
            ХИМЧИСТКА САЛОНА
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 15 000 рублей
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
