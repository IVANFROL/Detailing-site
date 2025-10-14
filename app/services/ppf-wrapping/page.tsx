import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function PPFWrappingPage() {
  const serviceData = {
    title: "ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ",
    description: "Наша услуга оклейки кузова полиуретановой пленкой - это современное решение для защиты лакокрасочного покрытия от сколов, царапин и воздействия внешних факторов. Полиуретановая пленка обеспечивает максимальную защиту при сохранении внешнего вида автомобиля.",
    benefits: [
      "Максимальная защита - полиуретановая пленка защищает от сколов, царапин и воздействия дорожной грязи",
      "Прозрачность - пленка практически незаметна и не изменяет внешний вид автомобиля",
      "Долговечность - срок службы полиуретановой пленки составляет 5-10 лет",
      "Самовосстановление - пленка имеет способность к самовосстановлению мелких царапин"
    ],
    process: "Процесс оклейки полиуретановой пленкой начинается с тщательной подготовки поверхности. Затем специалисты наносят специальный активатор и аккуратно прикладывают пленку, используя профессиональные инструменты для удаления пузырей воздуха. Пленка наносится с соблюдением температурного режима и влажности.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены работе с полиуретановыми пленками",
      "Качественные материалы - используем только сертифицированные полиуретановые пленки",
      "Точная нарезка - каждый элемент вырезается индивидуально по шаблону автомобиля",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на оклейку полиуретановой пленкой у нас в SLS DETAILING и защитите свой автомобиль на долгие годы."
  }

  const priceData = {
    serviceName: "ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ",
    serviceDescription: "В услугу входит: подготовка поверхности, оклейка кузова полиуретановой пленкой, обработка стыков, финальная полировка. Стоимость может меняться в зависимости от сложности работ и выбранного материала.",
    priceClasses: [
      { class: "I класс*", price: "от 75 000 руб" },
      { class: "II класс*", price: "от 90 000 руб" },
      { class: "III класс*", price: "от 110 000 руб" },
      { class: "IV класс*", price: "от 140 000 руб" }
    ],
    additionalServices: [
      { name: "Оклейка капота", price: "от 8 000 руб" },
      { name: "Оклейка крыши", price: "от 6 000 руб" },
      { name: "Оклейка дверей", price: "от 4 000 руб" },
      { name: "Оклейка багажника", price: "от 5 000 руб" },
      { name: "Оклейка бамперов", price: "от 3 000 руб" },
      { name: "Оклейка зеркал", price: "от 1 000 руб" },
      { name: "Оклейка молдингов", price: "от 1 500 руб" },
      { name: "Оклейка спойлеров", price: "от 2 500 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/ppf-wrap.jpeg"
            alt="Оклейка кузова полиуретаном"
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
            ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 75 000 рублей
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
