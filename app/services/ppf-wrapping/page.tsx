import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function PPFWrappingPage() {
  const serviceData = {
    title: "ОКЛЕЙКА КУЗОВА ПОЛИУРЕТАНОМ",
    description: "Полиуретановая пленка бывает не только прозрачная, но и цветная. Глянцевая и матовая. Это открывает безграничные возможности для дизайнерских решений, позволяя не просто защитить поверхность, но и придать ей уникальный внешний вид. Цветная пленка может имитировать различные материалы, например, карбон или шлифованный металл, либо просто добавить яркий акцент, соответствующий корпоративному стилю или личным предпочтениям.",
    benefits: [
      "Глянцевый эффект - Глянцевая пленка создает эффект мокрого блеска, делая цвет более насыщенным и глубоким. Она идеально подходит для автомобилей и других объектов, где важен визуальный эффект премиальности",
      "Матовая элегантность - Матовая пленка, наоборот, приглушает блеск, создавая элегантный и сдержанный вид. Она хорошо скрывает мелкие дефекты поверхности и не бликует на солнце",
      "Дизайнерские решения - Цветная пленка может имитировать различные материалы, например, карбон или шлифованный металл, либо просто добавить яркий акцент",
      "Универсальность - Выбор между глянцевой и матовой, цветной или прозрачной полиуретановой пленкой зависит от конкретных задач и желаемого эффекта"
    ],
    process: "В любом случае, полиуретановая пленка – это надежная защита и возможность преобразить любой объект. Важно учитывать условия эксплуатации, требования к внешнему виду и бюджет. Профессиональная оклейка полиуретановой пленкой включает в себя тщательную подготовку поверхности, точную нарезку по шаблону и аккуратное нанесение с соблюдением всех технологических требований.",
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

      {/* Our Work - PPF Wrapping Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по оклейке полиуретановой пленкой</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group">
              <Image
                src="/pages yslugi/polyurethanefilm1.jpg"
                alt="Оклейка полиуретановой пленкой - работа 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Полиуретановая пленка</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/polyurethanefilm2.jpg"
                alt="Оклейка полиуретановой пленкой - работа 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-lg">
                <span className="text-white text-lg font-semibold">Результат оклейки</span>
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
