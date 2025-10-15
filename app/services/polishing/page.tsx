import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function PolishingPage() {
  const serviceData = {
    title: "ДЕТЕЙЛИНГ ПОЛИРОВКА",
    description: "Блеск и сияние автомобиля – это не только предмет гордости владельца, но и показатель ухоженности, внимательного отношения к своему имуществу. Однако, под воздействием агрессивной внешней среды, ультрафиолета, дорожной химии и механических повреждений, лакокрасочное покрытие автомобиля неизбежно теряет свою первозданную красоту. Здесь на помощь приходит полировка кузова – процедура, способная вернуть автомобилю былой лоск и защитить его от дальнейших повреждений.",
    benefits: [
      "Восстановление эстетики и блеска - С течением времени на кузове появляются мелкие царапины, потертости и голограммы, которые тускнят цвет и ухудшают внешний вид. Полировка удаляет верхний поврежденный слой лака, выравнивая поверхность и возвращая ей зеркальный блеск.",
      "Защита от коррозии - Микротрещины и сколы на лакокрасочном покрытии открывают путь для проникновения влаги и агрессивных веществ, что может привести к образованию ржавчины. Полировка заполняет эти микродефекты, создавая защитный барьер.",
      "Подготовка к нанесению защитных покрытий - Полировка является важным этапом перед нанесением различных защитных покрытий, таких как керамика или жидкое стекло. Она обеспечивает идеальную адгезию и долговечность защитного слоя.",
      "Увеличение рыночной стоимости - Ухоженный автомобиль всегда ценится выше на вторичном рынке. Полировка кузова позволяет поддерживать автомобиль в отличном состоянии, что положительно сказывается на его стоимости при продаже."
    ],
    process: "В заключение, полировка кузова – это не просто косметическая процедура, а комплекс мер, направленных на поддержание эстетики, защиту от коррозии и продление срока службы автомобиля. Регулярное проведение полировки позволит сохранить автомобиль в идеальном состоянии и наслаждаться его безупречным видом долгие годы.",
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

      {/* Our Work - Polishing Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по полировке кузова</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Image
                src="/pages yslugi/polirovka1.jpg"
                alt="Полировка кузова - работа 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Полировка кузова</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/polirovka2.jpg"
                alt="Полировка кузова - работа 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Результат полировки</span>
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
