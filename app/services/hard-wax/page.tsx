import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function HardWaxPage() {
  const serviceData = {
    title: "ТВЕРДЫЙ ВОСК",
    description: "Наша услуга нанесения твердого воска - это классический способ защиты лакокрасочного покрытия автомобиля. Твердый воск создает надежный защитный слой, который придает автомобилю глубокий блеск и защищает от воздействия внешних факторов.",
    benefits: [
      "Глубокий блеск - твердый воск придает автомобилю насыщенный, глубокий блеск",
      "Надежная защита - создает прочный защитный слой от воды, грязи и УФ-излучения",
      "Легкость нанесения - простая технология нанесения обеспечивает равномерное покрытие",
      "Доступная цена - один из самых экономичных способов защиты лакокрасочного покрытия"
    ],
    process: "Процесс нанесения твердого воска начинается с тщательной мойки и обезжиривания кузова. Затем специалисты наносят воск тонким слоем на всю поверхность автомобиля. После нанесения воск оставляют для высыхания, а затем тщательно полируют до получения идеального блеска.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера имеют многолетний опыт работы с различными типами восков",
      "Качественные материалы - используем только проверенные бренды твердого воска",
      "Тщательная подготовка - уделяем особое внимание подготовке поверхности",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на нанесение твердого воска у нас в SLS DETAILING и защитите свой автомобиль проверенным способом."
  }

  const priceData = {
    serviceName: "ТВЕРДЫЙ ВОСК",
    serviceDescription: "В услугу входит: мойка кузова, подготовка поверхности, нанесение твердого воска, полировка. Стоимость может меняться в зависимости от выбранного материала и сложности работ.",
    priceClasses: [
      { class: "I класс*", price: "от 3 000 руб" },
      { class: "II класс*", price: "от 4 000 руб" },
      { class: "III класс*", price: "от 5 000 руб" },
      { class: "IV класс*", price: "от 7 000 руб" }
    ],
    additionalServices: [
      { name: "Нанесение на капот", price: "от 500 руб" },
      { name: "Нанесение на крышу", price: "от 400 руб" },
      { name: "Нанесение на двери", price: "от 300 руб" },
      { name: "Нанесение на багажник", price: "от 400 руб" },
      { name: "Нанесение на бамперы", price: "от 200 руб" },
      { name: "Нанесение на фары", price: "от 100 руб" },
      { name: "Нанесение на молдинги", price: "от 50 руб" },
      { name: "Нанесение на зеркала", price: "от 30 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/hard-wax.jpeg"
            alt="Твердый воск"
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
            ТВЕРДЫЙ ВОСК
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
