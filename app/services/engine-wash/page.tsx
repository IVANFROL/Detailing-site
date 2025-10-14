import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function EngineWashPage() {
  const serviceData = {
    title: "МОЙКА ДВИГАТЕЛЯ",
    description: "Наша услуга мойки двигателя - это безопасная и эффективная очистка моторного отсека от грязи, масла и других загрязнений. Мы используем специальные диэлектрические составы и профессиональное оборудование, которое обеспечивает качественную очистку без риска повреждения электронных компонентов.",
    benefits: [
      "Безопасность - используем диэлектрические составы, безопасные для электроники",
      "Эффективная очистка - удаляем масляные пятна, грязь и налет",
      "Защита от коррозии - предотвращаем ржавление металлических деталей",
      "Улучшение внешнего вида - моторный отсек выглядит как новый"
    ],
    process: "Процесс мойки двигателя начинается с тщательной подготовки - укрытия чувствительных электронных компонентов. Затем наносится специальный диэлектрический очиститель, который растворяет загрязнения. После этого выполняется аккуратная мойка с помощью низкого давления и мягких щеток. Завершается процесс сушкой и нанесением защитных составов.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера знают все особенности различных типов двигателей",
      "Специальные составы - используем только диэлектрические очистители",
      "Защита электроники - тщательно укрываем все чувствительные компоненты",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на мойку двигателя у нас в SLS DETAILING и верните моторному отсеку чистоту и привлекательность."
  }

  const priceData = {
    serviceName: "МОЙКА ДВИГАТЕЛЯ",
    serviceDescription: "В услугу входит: подготовка моторного отсека, нанесение очистителя, мойка, сушка, нанесение защитных составов. Стоимость может меняться в зависимости от сложности доступа к моторному отсеку.",
    priceClasses: [
      { class: "I класс*", price: "от 3 000 руб" },
      { class: "II класс*", price: "от 3 500 руб" },
      { class: "III класс*", price: "от 4 000 руб" },
      { class: "IV класс*", price: "от 5 000 руб" }
    ],
    additionalServices: [
      { name: "Мойка блока цилиндров", price: "от 1 000 руб" },
      { name: "Мойка головки блока", price: "от 800 руб" },
      { name: "Мойка впускного коллектора", price: "от 600 руб" },
      { name: "Мойка выпускного коллектора", price: "от 500 руб" },
      { name: "Мойка радиатора", price: "от 400 руб" },
      { name: "Мойка генератора", price: "от 300 руб" },
      { name: "Мойка стартера", price: "от 300 руб" },
      { name: "Мойка аккумулятора", price: "от 200 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/engine-wash.jpeg"
            alt="Мойка двигателя"
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
            МОЙКА ДВИГАТЕЛЯ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 3 000 рублей
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
