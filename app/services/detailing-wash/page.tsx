import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function DetailingWashPage() {
  const serviceData = {
    title: "ТРЕХФАЗНАЯ МОЙКА",
    description: "Трехфазная мойка – это не просто очистка кузова от грязи, а комплексный подход, направленный на достижение безупречного результата, сохранение блеска и защиту лакокрасочного покрытия. Это искусство, где каждая фаза играет свою роль в создании идеального образа вашего автомобиля.",
    benefits: [
      "Первая фаза - Предварительная бесконтактная мойка удаляет с поверхности кузова основную массу загрязнений: пыль, песок, грязь. Используются специальные шампуни с активной пеной, которые, обволакивая частицы грязи, бережно отделяют их от поверхности, не повреждая лакокрасочное покрытие",
      "Вторая фаза - Ручная мойка с использованием мягкой губки или варежки и деликатного автошампуня. Этот этап позволяет удалить оставшиеся загрязнения, которые не смогла удалить бесконтактная мойка, а также тщательно очистить труднодоступные места",
      "Третья фаза - Нанесение защитного покрытия, такого как воск или полимер. Этот этап придает кузову блеск, создает водоотталкивающий эффект и защищает лакокрасочное покрытие от воздействия ультрафиолетовых лучей",
      "Профессиональный результат - Результат – не только чистый, но и защищенный автомобиль, сияющий как новый"
    ],
    process: "Мастера, владеющие техникой правильной мойки, избегают образования царапин и потертостей на лакокрасочном покрытии. Каждая фаза выполняется с использованием профессионального оборудования и качественных средств, обеспечивая максимальную эффективность и безопасность для вашего автомобиля.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены современным методам детейлинг мойки",
      "Специальное оборудование - используем профессиональные моечные установки",
      "Качественные средства - работаем с проверенной автохимией",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на трехфазную мойку у нас в SLS DETAILING и верните автомобилю первозданную чистоту."
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

      {/* Our Work - Three-Phase Wash Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по трехфазной мойке</p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative group max-w-4xl">
              <Image
                src="/pages yslugi/trimoi1.jpg"
                alt="Трехфазная мойка - профессиональная работа"
                width={1200}
                height={600}
                className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                <span className="text-white text-xl font-semibold">Профессиональная трехфазная мойка</span>
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
