import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { OurWork } from '@/components/our-work'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function VinylWrappingPage() {
  const serviceData = {
    title: "ОКЛЕЙКА КУЗОВА ВИНИЛОМ",
    description: "Наша услуга оклейки кузова винилом - это идеальное решение для тех, кто хочет кардинально изменить внешний вид своего автомобиля. Мы используем только качественные виниловые пленки премиум-класса, которые обеспечивают надежную защиту лакокрасочного покрытия и придают автомобилю стильный, современный вид.",
    benefits: [
      "Сохранение оригинального покрытия - виниловая пленка защищает заводскую краску от царапин, сколов и воздействия ультрафиолета",
      "Экономия времени и средств - оклейка винилом значительно дешевле и быстрее полной перекраски автомобиля",
      "Качество и долговечность - профессиональная оклейка прослужит 5-7 лет при правильном уходе",
      "Возможность снятия - пленку можно снять в любой момент, вернув автомобилю первоначальный вид"
    ],
    process: "Процесс оклейки начинается с тщательной подготовки поверхности - мойки, обезжиривания и удаления всех загрязнений. Затем специалисты снимают точные размеры и вырезают пленку по шаблону. Оклейка выполняется с использованием профессионального инструмента и специальных растворов, обеспечивающих идеальное прилегание пленки без пузырей и складок.",
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
