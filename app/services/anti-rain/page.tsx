import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function AntiRainPage() {
  const serviceData = {
    title: "АНТИДОЖДЬ",
    description: "Преимущества антидождя выходят далеко за рамки простой защиты от воды. Обработанное стекло меньше пачкается, на нем реже образуются наледь и снег, а насекомые и грязь легко удаляются при мойке. Это значит, что вы тратите меньше времени и усилий на поддержание чистоты стекол, что особенно актуально в длительных поездках.",
    benefits: [
      "Защита от воды - Гидрофобное покрытие отталкивает воду со стекол, обеспечивая лучшую видимость и безопасность вождения в любых погодных условиях",
      "Легкость очистки - Обработанное стекло меньше пачкается, а насекомые и грязь легко удаляются при мойке",
      "Защита от наледи - На обработанном стекле реже образуются наледь и снег, что особенно важно в зимний период",
      "Экономия времени - Вы тратите меньше времени и усилий на поддержание чистоты стекол, что особенно актуально в длительных поездках"
    ],
    process: "Однако, не стоит забывать, что эффективность антидождя напрямую зависит от качества нанесения. Профессиональная обработка гарантирует равномерное покрытие и максимальную долговечность. Наши специалисты тщательно подготавливают поверхность стекла, удаляя загрязнения и обезжиривая ее, после чего наносят антидождь в строгом соответствии с инструкцией производителя.",
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

      {/* Our Work - Anti-Rain Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по нанесению антидождя</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Image
                src="/pages yslugi/antirain1.jpg"
                alt="Нанесение антидождя - работа 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Нанесение антидождя</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/antirain2.jpg"
                alt="Нанесение антидождя - работа 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Результат обработки</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Contact Form */}
      <ContactForm />

      {/* Contact Section */}
      <ContactSection />
    </div>
  )
}
