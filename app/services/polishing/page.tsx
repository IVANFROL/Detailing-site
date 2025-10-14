import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function PolishingPage() {
  const serviceData = {
    title: "ДЕТЕЙЛИНГ ПОЛИРОВКА",
    description: "Наша услуга полировки кузова автомобиля - это профессиональное восстановление лакокрасочного покрытия, которое возвращает автомобилю первоначальный блеск и защищает от дальнейших повреждений. Мы используем современное оборудование и качественные материалы для достижения идеального результата.",
    benefits: [
      "Устранение царапин и притертостей - профессиональная полировка эффективно удаляет мелкие царапины, потертости и следы от моек",
      "Восстановление блеска - возвращает лакокрасочному покрытию первоначальный глянец и глубину цвета",
      "Защита от коррозии - полировка создает защитный слой, препятствующий окислению металла",
      "Повышение стоимости автомобиля - качественная полировка значительно увеличивает привлекательность автомобиля при продаже"
    ],
    process: "Процесс полировки начинается с тщательной мойки и обезжиривания кузова. Затем специалисты оценивают состояние лакокрасочного покрытия и подбирают подходящие абразивные материалы. Полировка выполняется в несколько этапов с использованием профессиональных полировальных машин и специальных паст разной степени абразивности.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера имеют многолетний опыт работы с различными типами лакокрасочных покрытий",
      "Современное оборудование - используем только профессиональные полировальные машины и качественные материалы",
      "Индивидуальный подход - для каждого автомобиля подбираем оптимальную технологию полировки",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на полировку кузова у нас в SLS DETAILING и верните своему автомобилю первозданный блеск и привлекательность."
  }

  const priceData = {
    serviceName: "ДЕТЕЙЛИНГ ПОЛИРОВКА",
    serviceDescription: "В услугу входит: мойка кузова, оценка состояния ЛКП, полировка кузова, нанесение защитного покрытия. Стоимость может меняться в зависимости от состояния автомобиля и объема работ.",
    priceClasses: [
      { class: "I класс*", price: "от 20 000 руб" },
      { class: "II класс*", price: "от 25 000 руб" },
      { class: "III класс*", price: "от 30 000 руб" },
      { class: "IV класс*", price: "от 40 000 руб" }
    ],
    additionalServices: [
      { name: "Полировка капота", price: "от 3 000 руб" },
      { name: "Полировка крыши", price: "от 2 500 руб" },
      { name: "Полировка дверей", price: "от 2 000 руб" },
      { name: "Полировка багажника", price: "от 2 500 руб" },
      { name: "Полировка бамперов", price: "от 1 500 руб" },
      { name: "Полировка фар", price: "от 1 000 руб" },
      { name: "Полировка молдингов", price: "от 500 руб" },
      { name: "Полировка зеркал", price: "от 300 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/detailing-polish.jpeg"
            alt="Детейлинг полировка"
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
            ДЕТЕЙЛИНГ ПОЛИРОВКА
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
