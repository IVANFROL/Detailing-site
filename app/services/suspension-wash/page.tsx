import Image from 'next/image'
import { ServiceDetails } from '@/components/service-details'
import { PriceSection } from '@/components/price-section'
import { Reviews } from '@/components/reviews'
import { ContactForm } from '@/components/contact-form'
import { ContactSection } from '@/components/contact-section'

export default function SuspensionWashPage() {
  const serviceData = {
    title: "МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ",
    description: "Регулярная мойка подвески – это не просто эстетическая процедура, а важная профилактическая мера, направленная на предотвращение коррозии и продление срока службы ее элементов. Удаление грязи, соли и других агрессивных веществ, которые скапливаются на деталях подвески, позволяет избежать разрушительного воздействия ржавчины, которая способна в короткие сроки вывести из строя даже самые надежные элементы.",
    benefits: [
      "Предотвращение коррозии - Своевременная мойка позволяет избежать разрушительного воздействия ржавчины, которая способна в короткие сроки вывести из строя даже самые надежные элементы",
      "Сохранение эластичности - Своевременная мойка позволяет сохранить эластичность резиновых элементов, предотвратить заклинивание шарниров и обеспечить плавную и комфортную работу подвески",
      "Безопасность движения - Тщательно очищая подвеску, вы обеспечиваете не только ее долговечность, но и безопасность движения",
      "Стабильное управление - Ухоженная подвеска – это залог стабильного управления, предсказуемого поведения автомобиля на дороге и, как следствие, вашей уверенности за рулем"
    ],
    process: "Поэтому не стоит пренебрегать этой простой, но эффективной процедурой, которая поможет вам сохранить ваш автомобиль в отличном состоянии на долгие годы. Профессиональная мойка подвески включает в себя тщательную очистку всех элементов ходовой части с использованием специальных моющих средств и оборудования высокого давления.",
    whyChooseUs: [
      "Опыт и профессионализм - наши мастера знают все особенности различных типов подвесок",
      "Специальное оборудование - используем профессиональные подъемники и моечное оборудование",
      "Тщательность - уделяем внимание каждой детали подвески",
      "Гарантия качества - предоставляем гарантию на все выполненные работы"
    ],
    callToAction: "Оставьте заявку на мойку подвески у нас в SLS DETAILING и продлите срок службы ходовой части вашего автомобиля."
  }

  const priceData = {
    serviceName: "МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ",
    serviceDescription: "В услугу входит: поднятие автомобиля, мойка всех элементов подвески, очистка труднодоступных мест, сушка. Стоимость может меняться в зависимости от сложности доступа к элементам подвески.",
    priceClasses: [
      { class: "I класс*", price: "от 6 000 руб" },
      { class: "II класс*", price: "от 8 000 руб" },
      { class: "III класс*", price: "от 10 000 руб" },
      { class: "IV класс*", price: "от 12 000 руб" }
    ],
    additionalServices: [
      { name: "Мойка передней подвески", price: "от 3 000 руб" },
      { name: "Мойка задней подвески", price: "от 3 000 руб" },
      { name: "Мойка амортизаторов", price: "от 1 500 руб" },
      { name: "Мойка пружин", price: "от 1 000 руб" },
      { name: "Мойка рычагов", price: "от 2 000 руб" },
      { name: "Мойка стоек", price: "от 1 500 руб" },
      { name: "Мойка стабилизаторов", price: "от 1 000 руб" },
      { name: "Мойка сайлентблоков", price: "от 500 руб" }
    ]
  }

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/yslugi/suspension-wash.jpeg"
            alt="Мойка подвески автомобиля"
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
            МОЙКА ПОДВЕСКИ АВТОМОБИЛЯ
          </h2>
          <div className="bg-white text-black px-6 py-3 rounded-full inline-block font-semibold text-xl">
            от 6 000 рублей
          </div>
        </div>
      </section>

      {/* Service Details */}
      <ServiceDetails {...serviceData} />

      {/* Price Section */}
      <PriceSection {...priceData} />

      {/* Our Work - Suspension Wash Gallery */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">НАШИ РАБОТЫ</h2>
            <p className="text-xl text-gray-300">Примеры работ по мойке подвески</p>
          </div>
          
          <div className="relative group">
            <Image
              src="/pages yslugi/moikapodveski.jpg"
              alt="Мойка подвески - профессиональная работа"
              width={1200}
              height={600}
              className="w-full h-[500px] object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
              <span className="text-white text-xl font-semibold">Профессиональная мойка подвески</span>
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
