import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function InteriorCleaningPage() {
  const serviceData = {
    title: "ПРОФЕССИОНАЛЬНАЯ ХИМЧИСТКА САЛОНА",
    description: "Забота о чистоте и свежести салона автомобиля – это не только вопрос эстетики, но и важный аспект поддержания здоровья водителя и пассажиров. Пыль, грязь, остатки пищи, шерсть домашних животных – все это создает благоприятную среду для размножения бактерий и аллергенов, которые могут негативно влиять на самочувствие и вызывать неприятные запахи. Профессиональная химчистка салона – это комплексная процедура, направленная на глубокую очистку всех поверхностей и материалов, обеспечивающая безупречную чистоту и свежесть.",
    benefits: [
      "Тщательная уборка - Первым этапом профессиональной химчистки является тщательная уборка салона пылесосом. Особое внимание уделяется труднодоступным местам, таким как щели между сиденьями, вентиляционные отверстия и карманы дверей",
      "Локальная обработка - Затем проводится локальная обработка наиболее загрязненных участков с использованием специальных чистящих средств, удаляющих пятна от кофе, чая, масла и других трудновыводимых загрязнений",
      "Глубокая чистка - Следующим этапом является глубокая чистка сидений, обшивки дверей и потолка с использованием экстракторного оборудования. Специальный раствор под давлением распыляется на поверхность, а затем немедленно всасывается вместе с грязью",
      "Защитная обработка - Завершающим этапом является обработка пластиковых и кожаных элементов салона защитными составами, которые предотвращают выцветание и растрескивание под воздействием ультрафиолетового излучения"
    ],
    process: "После химчистки салон автомобиля становится не только чистым, но и приобретает свежий и ухоженный вид, создавая приятную атмосферу комфорта и уюта. Этот метод позволяет эффективно удалить загрязнения даже из глубоких слоев материала, не повреждая его структуру.",
    whyChooseUs: [
      "Опыт и профессионализм - наши специалисты обучены современным методам химчистки и имеют многолетний опыт работы",
      "Специальное оборудование - используем только профессиональные экстракторы и пылесосы",
      "Качественные средства - работаем с проверенными, безопасными чистящими средствами",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на химчистку салона у нас в SLS DETAILING и верните своему автомобилю свежесть и чистоту."
  }

  const priceData = {
    serviceName: "ХИМЧИСТКА САЛОНА",
    serviceDescription: "В услугу входит: мойка кузова, детейлинг-химчистка салона, пропитка кожи, сидений и подлокотников кондиционером Koch. Стоимость может меняться в зависимости от загрязнения автомобиля.",
    priceClasses: [
      { class: "I класс*", price: "от 15 000 руб" },
      { class: "II класс*", price: "от 15 000 руб" },
      { class: "III класс*", price: "от 20 000 руб" },
      { class: "IV класс*", price: "от 25 000 руб" }
    ],
    additionalServices: [
      { name: "Химчистка рулевого колеса", price: "от 1 500 руб" },
      { name: "Химчистка переднего сиденья", price: "от 2 000 руб" },
      { name: "Химчистка заднего сиденья", price: "от 3 000 руб" },
      { name: "Химчистка пола 1/4", price: "от 2 000 руб" },
      { name: "Химчистка потолка", price: "от 4 000 руб" },
      { name: "Химчистка дверной карты", price: "от 1 500 руб" },
      { name: "Химчистка багажного отделения", price: "от 3 000 руб" },
      { name: "Химчистка торпеды", price: "от 3 000 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/interior-cleaning.jpeg"
            alt="Химчистка салона"
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
            ХИМЧИСТКА САЛОНА
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 15 000 рублей
          </div>
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails {...serviceData} />

      {/* Price Section */}
      <PriceSection {...priceData} />

      {/* Our Work - Interior Cleaning Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по химчистке салона</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Image
                src="/pages yslugi/ximchistka1.png"
                alt="Химчистка салона - работа 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Химчистка салона</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/ximchistka2.png"
                alt="Химчистка салона - работа 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Результат химчистки</span>
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
