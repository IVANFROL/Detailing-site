import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function EngineWashPage() {
  const serviceData = {
    title: "МОЙКА ДВИГАТЕЛЯ",
    description: "Мойка двигателя – крайне важная часть ухода за автомобилем, зачастую недооцененная многими автовладельцами. Двигатель, сердце любого транспортного средства, подвергается постоянному воздействию высоких температур, вибраций и загрязнений. Со временем, на его поверхности скапливаются слои пыли, масла, технических жидкостей и дорожной грязи, создавая не только эстетически неприглядный вид, но и реальные проблемы для работы и долговечности мотора.",
    benefits: [
      "Предотвращение перегрева - Загрязнения, покрывающие двигатель, действуют подобно теплоизолятору, препятствуя нормальному отводу тепла. Это может привести к перегреву, снижению эффективности работы, повышенному расходу топлива и, в конечном итоге, к серьезным поломкам",
      "Защита деталей - Загрязнения также могут оказывать разрушительное воздействие на резиновые и пластиковые детали, ускоряя их износ и разрушение",
      "Раннее выявление проблем - Скопившаяся грязь часто скрывает течи и неисправности, которые при своевременном обнаружении можно было бы устранить с минимальными затратами",
      "Надежность и долговечность - Чистый двигатель – это не только гарантия его надежной и долговечной работы, но и вклад в безопасность и комфорт вождения"
    ],
    process: "Профессиональная мойка двигателя, выполненная с использованием специализированных средств и технологий, позволяет эффективно и безопасно удалить загрязнения, восстановить теплопроводность и выявить потенциальные проблемы. Поэтому, включение мойки двигателя в регулярный технический осмотр вашего автомобиля – разумное и ответственное решение.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера знают все особенности различных типов двигателей",
      "Специальные составы - используем только диэлектрические очистители",
      "Защита электроники - тщательно укрываем все чувствительные компоненты",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на мойку двигателя у нас в SLS DETAILING и верните моторному отсеку чистоту и привлекательность."
  }

  const priceData = {
    serviceName: "МОЙКА ДВИГАТЕЛЯ",
    serviceDescription: "В услугу входит: подготовка моторного отсека, нанесение очистителя, мойка, сушка, нанесение защитных составов. Стоимость может меняться в зависимости от сложности доступа к моторному отсеку.",
    priceClasses: [
      { class: "I класс*", price: "от 3 000 руб" },
      { class: "II класс*", price: "от 3 500 руб" },
      { class: "III класс*", price: "от 4 000 руб" },
      { class: "IV класс*", price: "от 5 000 руб" }
    ],
    additionalServices: [
      { name: "Мойка блока цилиндров", price: "от 1 000 руб" },
      { name: "Мойка головки блока", price: "от 800 руб" },
      { name: "Мойка впускного коллектора", price: "от 600 руб" },
      { name: "Мойка выпускного коллектора", price: "от 500 руб" },
      { name: "Мойка радиатора", price: "от 400 руб" },
      { name: "Мойка генератора", price: "от 300 руб" },
      { name: "Мойка стартера", price: "от 300 руб" },
      { name: "Мойка аккумулятора", price: "от 200 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/engine-wash.jpeg"
            alt="Мойка двигателя"
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
            МОЙКА ДВИГАТЕЛЯ
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

      {/* Our Work - Engine Wash Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по мойке двигателя</p>
          </div>
          
          <div className="relative group">
            <Image
              src="/pages yslugi/moikadvigately.jpg"
              alt="Мойка двигателя - профессиональная работа"
              width={1200}
              height={400}
              className="w-full h-96 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <span className="text-white text-xl font-semibold">Профессиональная мойка двигателя</span>
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
