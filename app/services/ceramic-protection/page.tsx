import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function CeramicProtectionPage() {
  const serviceData = {
    title: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
    description: "Принцип действия керамической защиты заключается в создании молекулярной связи с поверхностью кожи. Наночастицы керамики проникают в поры материала, заполняя микротрещины и образуя гладкую и ровную поверхность. Это не только улучшает внешний вид кожи, но и значительно облегчает процесс очистки. Грязь, пыль и другие загрязнения легко удаляются с обработанной поверхности, не оставляя следов и не повреждая структуру кожи.",
    benefits: [
      "Долговечная защита - Долговечная защита от ультрафиолета, влаги и грязи",
      "Предотвращение износа - Предотвращение выцветания, растрескивания и преждевременного износа",
      "Улучшение внешнего вида - Улучшение внешнего вида кожи, придание ей гладкости и мягкости",
      "Облегчение ухода - Облегчение процесса очистки и ухода за кожей, сохранение первозданного вида интерьера автомобиля на долгие годы"
    ],
    process: "Профессиональная керамическая защита кожи включает в себя тщательную очистку поверхности, нанесение специального керамического состава и его полимеризацию. Наночастицы керамики создают молекулярную связь с материалом, обеспечивая максимальную защиту и долговечность покрытия.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены работе с керамическими покрытиями",
      "Качественные материалы - используем только сертифицированные керамические составы",
      "Тщательная подготовка - уделяем особое внимание очистке поверхности",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на защиту кожи керамикой у нас в SLS DETAILING и продлите срок службы кожаных элементов салона."
  }

  const priceData = {
    serviceName: "ЗАЩИТА КОЖИ КЕРАМИКОЙ",
    serviceDescription: "В услугу входит: очистка кожаных поверхностей, нанесение керамического покрытия, полировка. Стоимость может меняться в зависимости от площади обработки и выбранного материала.",
    priceClasses: [
      { class: "I класс*", price: "от 10 000 руб" },
      { class: "II класс*", price: "от 12 000 руб" },
      { class: "III класс*", price: "от 15 000 руб" },
      { class: "IV класс*", price: "от 20 000 руб" }
    ],
    additionalServices: [
      { name: "Защита передних сидений", price: "от 3 000 руб" },
      { name: "Защита задних сидений", price: "от 2 500 руб" },
      { name: "Защита рулевого колеса", price: "от 1 500 руб" },
      { name: "Защита подлокотников", price: "от 1 000 руб" },
      { name: "Защита дверных карт", price: "от 2 000 руб" },
      { name: "Защита центральной консоли", price: "от 1 500 руб" },
      { name: "Защита рычага КПП", price: "от 800 руб" },
      { name: "Защита ручки стояночного тормоза", price: "от 600 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/ceramic-protection.jpg"
            alt="Защита кожи керамикой"
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
            ЗАЩИТА КОЖИ КЕРАМИКОЙ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 10 000 рублей
          </div>
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails {...serviceData} />

      {/* Price Section */}
      <PriceSection {...priceData} />

      {/* Our Work - Ceramic Protection Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по керамической защите кожи</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Image
                src="/pages yslugi/keramika1.jpg"
                alt="Керамическая защита кожи - работа 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Керамическая защита</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/keramika2.jpg"
                alt="Керамическая защита кожи - работа 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Результат защиты</span>
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
