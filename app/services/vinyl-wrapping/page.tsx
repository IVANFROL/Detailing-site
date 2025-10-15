import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function VinylWrappingPage() {
  const serviceData = {
    title: "ОКЛЕЙКА КУЗОВА ВИНИЛОМ",
    description: "Если вы хотите изменить цвет авто, то винил вам поможет. Но это далеко не единственное его преимущество. Виниловая пленка – это не просто способ преобразить внешний вид вашего автомобиля, это еще и надежная защита для его лакокрасочного покрытия. Представьте себе, как на кузове машины ежедневно оседают мельчайшие частицы пыли и грязи, как летит из-под колес гравий, как безжалостно палит солнце – все это медленно, но верно разрушает лак. Винил же берет на себя этот удар, предохраняя оригинальное покрытие от царапин, сколов и выцветания.",
    benefits: [
      "Безграничные возможности кастомизации - Вы можете выбрать любой оттенок из огромной палитры, нанести интересный рисунок или текстуру, создать уникальный дизайн, который подчеркнет вашу индивидуальность",
      "Демократичная цена - Матовый, глянцевый, металлик, хамелеон – вариантов масса, и все они доступны по цене гораздо более демократичной, чем полная покраска автомобиля",
      "Легкое удаление - Винил легко удаляется, не оставляя следов. Это значит, что в любой момент вы можете вернуть автомобилю первоначальный вид или же снова изменить его облик",
      "Защита и сохранение ценности - Это возможность выразить себя, сделать свой автомобиль уникальным и при этом не переживать за сохранность его лакокрасочного покрытия"
    ],
    process: "Таким образом, виниловая пленка – это не только стильное и современное решение, но и практичный способ защитить свой автомобиль и сохранить его ценность. Это возможность выразить себя, сделать свой автомобиль уникальным и при этом не переживать за сохранность его лакокрасочного покрытия.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера обучены современным техникам оклейки и имеют многолетний опыт работы со всеми марками автомобилей",
      "Индивидуальный подход - мы тщательно изучаем особенности вашего автомобиля и предлагаем оптимальный вариант оклейки",
      "Гарантия качества - мы уверены в результатах своей работы и предоставляем гарантию на все выполненные услуги",
      "Использование премиальных материалов - работаем только с проверенными брендами виниловых пленок"
    ],
    callToAction: "Оставьте заявку на оклейку кузова винилом у нас в SLS DETAILING и придайте своему автомобилю неповторимый стиль без лишних затрат."
  }

  const priceData = {
    serviceName: "ОКЛЕЙКА КУЗОВА ВИНИЛОМ",
    serviceDescription: "В услугу входит: подготовка поверхности, оклейка кузова виниловой пленкой, обработка стыков, финальная полировка. Стоимость может меняться в зависимости от сложности работ и выбранного материала.",
    priceClasses: [
      { class: "I класс*", price: "от 150 000 руб" },
      { class: "II класс*", price: "от 180 000 руб" },
      { class: "III класс*", price: "от 220 000 руб" },
      { class: "IV класс*", price: "от 280 000 руб" }
    ],
    additionalServices: [
      { name: "Оклейка капота", price: "от 15 000 руб" },
      { name: "Оклейка крыши", price: "от 12 000 руб" },
      { name: "Оклейка дверей", price: "от 8 000 руб" },
      { name: "Оклейка багажника", price: "от 10 000 руб" },
      { name: "Оклейка бамперов", price: "от 6 000 руб" },
      { name: "Оклейка зеркал", price: "от 2 000 руб" },
      { name: "Оклейка молдингов", price: "от 3 000 руб" },
      { name: "Оклейка спойлеров", price: "от 5 000 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/vinyl-wrap.jpeg"
            alt="Оклейка кузова винилом"
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
            ОКЛЕЙКА КУЗОВА ВИНИЛОМ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 150 000 рублей
          </div>
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails {...serviceData} />

      {/* Price Section */}
      <PriceSection {...priceData} />

      {/* Our Work - Vinyl Wrapping Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по оклейке винилом</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group">
              <Image
                src="/pages yslugi/vinil1.jpg"
                alt="Оклейка винилом - работа 1"
                width={300}
                height={200}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                <span className="text-white text-sm font-semibold">Виниловая оклейка</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/vinil2.jpg"
                alt="Оклейка винилом - работа 2"
                width={300}
                height={200}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                <span className="text-white text-sm font-semibold">Кастомизация</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/vinil3.jpg"
                alt="Оклейка винилом - работа 3"
                width={300}
                height={200}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                <span className="text-white text-sm font-semibold">Защита ЛКП</span>
              </div>
            </div>
            
            <div className="relative group">
              <Image
                src="/pages yslugi/vinil4.jpg"
                alt="Оклейка винилом - работа 4"
                width={300}
                height={200}
                className="w-full h-64 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 rounded-b-lg">
                <span className="text-white text-sm font-semibold">Уникальный дизайн</span>
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
