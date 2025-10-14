import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function SuspensionWashPage() {
  const serviceData = {
    title: "МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ",
    description: "Наша услуга мойки подвески автомобиля - это профессиональная очистка всех элементов ходовой части от грязи, соли и других загрязнений. Тщательная мойка подвески не только улучшает внешний вид автомобиля, но и продлевает срок службы деталей ходовой части.",
    benefits: [
      "Продление срока службы - чистая подвеска служит значительно дольше",
      "Улучшение внешнего вида - чистая подвеска придает автомобилю ухоженный вид",
      "Предотвращение коррозии - удаление соли и грязи предотвращает ржавление металлических деталей",
      "Лучшая диагностика - чистая подвеска позволяет легче выявить неисправности"
    ],
    process: "Процесс мойки подвески начинается с поднятия автомобиля на подъемнике для доступа ко всем элементам ходовой части. Затем специалисты тщательно очищают все детали подвески с помощью специальных моющих средств и оборудования высокого давления. Особое внимание уделяется труднодоступным местам и стыкам деталей.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера знают все особенности различных типов подвесок",
      "Специальное оборудование - используем профессиональные подъемники и моечное оборудование",
      "Тщательность - уделяем внимание каждой детали подвески",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на мойку подвески у нас в SLS DETAILING и продлите срок службы ходовой части вашего автомобиля."
  }

  const priceData = {
    serviceName: "МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ",
    serviceDescription: "В услугу входит: поднятие автомобиля, мойка всех элементов подвески, очистка труднодоступных мест, сушка. Стоимость может меняться в зависимости от сложности доступа к элементам подвески.",
    priceClasses: [
      { class: "I класс*", price: "от 6 000 руб" },
      { class: "II класс*", price: "от 8 000 руб" },
      { class: "III класс*", price: "от 10 000 руб" },
      { class: "IV класс*", price: "от 12 000 руб" }
    ],
    additionalServices: [
      { name: "Мойка передней подвески", price: "от 3 000 руб" },
      { name: "Мойка задней подвески", price: "от 3 000 руб" },
      { name: "Мойка амортизаторов", price: "от 1 500 руб" },
      { name: "Мойка пружин", price: "от 1 000 руб" },
      { name: "Мойка рычагов", price: "от 2 000 руб" },
      { name: "Мойка стоек", price: "от 1 500 руб" },
      { name: "Мойка стабилизаторов", price: "от 1 000 руб" },
      { name: "Мойка сайлентблоков", price: "от 500 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/suspension-wash.jpeg"
            alt="Мойка подвески автомобиля"
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
            МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 6 000 рублей
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
