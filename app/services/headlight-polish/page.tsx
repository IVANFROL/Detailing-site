import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function HeadlightPolishPage() {
  const serviceData = {
    title: "ПОЛИРОВКА ФАР",
    description: "Фары автомобиля – это не просто источник света. Это глаза вашего верного железного коня, обеспечивающие безопасность на дороге в темное время суток и в сложных погодных условиях. К сожалению, фары подвержены постоянному воздействию негативных факторов окружающей среды: мелкий гравий, песок, насекомые, химические реагенты на дорогах – все это оставляет свой след в виде сколов, царапин и потертостей. В результате, фары мутнеют, теряют яркость и рассеивают свет, снижая видимость и создавая риск ДТП.",
    benefits: [
      "Защита от повреждений - Защитная пленка берет на себя все удары и царапины, предотвращая повреждение стекла или пластика фар",
      "Защита от ультрафиолета - Пленка защищает от воздействия ультрафиолета, предотвращая пожелтение и выцветание",
      "Сохранение яркости - Оклейка фар – это инвестиция в безопасность и эстетику вашего автомобиля",
      "Долговечность - Это способ сохранить яркость и прозрачность фар на долгие годы, обеспечив комфортное и безопасное вождение"
    ],
    process: "Чтобы избежать этих неприятностей и сохранить фары в первозданном виде, существует простое и эффективное решение – оклейка фар защитной пленкой. Эта процедура подразумевает нанесение на поверхность фар специальной полиуретановой пленкой, обладающей высокой прочностью и эластичностью.",
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

      {/* Our Work - Headlight Polish Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по полировке фар</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Image
                src="/pages yslugi/fari1.jpg"
                alt="Полировка фар - работа 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Полировка фар</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/fari2.jpg"
                alt="Полировка фар - работа 2"
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
