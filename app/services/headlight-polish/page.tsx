import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function HeadlightPolishPage() {
  const serviceData = {
    title: "ПОЛИРОВКА ФАР",
    description: "Наша услуга полировки фар - это профессиональное восстановление прозрачности и блеска автомобильных фар. Мы используем современные технологии и качественные материалы для устранения помутнения, царапин и желтизны, возвращая фарам первоначальную прозрачность и эффективность освещения.",
    benefits: [
      "Восстановление прозрачности - устраняем помутнение и желтизну фар",
      "Улучшение освещения - восстанавливаем эффективность работы фар",
      "Устранение царапин - полируем мелкие царапины и потертости",
      "Защита от дальнейшего помутнения - наносим защитное покрытие"
    ],
    process: "Процесс полировки фар начинается с тщательной мойки и обезжиривания поверхности. Затем специалисты оценивают состояние пластика и подбирают подходящую технологию полировки. Используются специальные пасты и полировальные круги для восстановления прозрачности. Завершается процесс нанесением защитного покрытия.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера знают все особенности полировки различных типов фар",
      "Специальное оборудование - используем профессиональные полировальные машины",
      "Качественные материалы - работаем с проверенными полировальными пастами",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на полировку фар у нас в SLS DETAILING и восстановите эффективность освещения вашего автомобиля."
  }

  const priceData = {
    serviceName: "ПОЛИРОВКА ФАР",
    serviceDescription: "В услугу входит: мойка фар, оценка состояния, полировка, нанесение защитного покрытия. Стоимость может меняться в зависимости от состояния фар и объема работ.",
    priceClasses: [
      { class: "I класс*", price: "от 2 000 руб" },
      { class: "II класс*", price: "от 2 500 руб" },
      { class: "III класс*", price: "от 3 000 руб" },
      { class: "IV класс*", price: "от 4 000 руб" }
    ],
    additionalServices: [
      { name: "Полировка передних фар", price: "от 1 000 руб" },
      { name: "Полировка задних фар", price: "от 800 руб" },
      { name: "Полировка противотуманных фар", price: "от 600 руб" },
      { name: "Полировка поворотников", price: "от 400 руб" },
      { name: "Полировка габаритных огней", price: "от 300 руб" },
      { name: "Полировка стоп-сигналов", price: "от 500 руб" },
      { name: "Полировка дневных ходовых огней", price: "от 700 руб" },
      { name: "Полировка дополнительных фар", price: "от 1 200 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/headlight-polish.jpeg"
            alt="Полировка фар"
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
            ПОЛИРОВКА ФАР
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 2 000 рублей
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
