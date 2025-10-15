interface ServiceDetailsProps {
  title: string
  description: string
  benefits: string[]
  process: string
  whyChooseUs: string[]
  callToAction: string
}

// Функция для правильного склонения названий услуг
function getServiceNameInGenitive(serviceTitle: string): string {
  const title = serviceTitle.toLowerCase()
  
  if (title.includes('полировка')) return 'полировку'
  if (title.includes('жидкое стекло')) return 'нанесение жидкого стекла'
  if (title.includes('мойка двигателя')) return 'мойку двигателя'
  if (title.includes('химчистка')) return 'химчистку'
  if (title.includes('керамик')) return 'керамическую защиту'
  if (title.includes('антидождь')) return 'нанесение антидождя'
  if (title.includes('трехфазная мойка')) return 'трехфазную мойку'
  if (title.includes('твердый воск')) return 'нанесение твердого воска'
  if (title.includes('винил')) return 'виниловую оклейку'
  if (title.includes('полиуретан')) return 'оклейку полиуретаном'
  if (title.includes('полировка фар')) return 'полировку фар'
  if (title.includes('мойка подвески')) return 'мойку подвески'
  
  return title
}

// Функция для получения краткого названия услуги
function getServiceShortName(serviceTitle: string): string {
  const title = serviceTitle.toLowerCase()
  
  if (title.includes('полировка') && !title.includes('фар')) return 'полировку'
  if (title.includes('жидкое стекло')) return 'жидкое стекло'
  if (title.includes('мойка двигателя')) return 'мойку двигателя'
  if (title.includes('химчистка')) return 'химчистку'
  if (title.includes('керамик')) return 'керамическую защиту'
  if (title.includes('антидождь')) return 'антидождь'
  if (title.includes('трехфазная мойка')) return 'трехфазную мойку'
  if (title.includes('твердый воск')) return 'твердый воск'
  if (title.includes('винил')) return 'винил'
  if (title.includes('полиуретан')) return 'полиуретан'
  if (title.includes('полировка фар')) return 'полировку фар'
  if (title.includes('мойка подвески')) return 'мойку подвески'
  
  return title
}

export function ServiceDetails({
  title,
  description,
  benefits,
  process,
  whyChooseUs,
  callToAction
}: ServiceDetailsProps) {
  return (
    <section className="bg-zinc-900 px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-8 text-center text-4xl font-bold text-white md:text-5xl">
          {title}
        </h2>
        
        <div className="mb-12 space-y-6 text-gray-300">
          <p className="text-lg leading-relaxed">
            {description}
          </p>
        </div>

        {/* Преимущества */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Почему выбирают {getServiceShortName(title)}?
          </h3>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-400 rounded-full flex items-center justify-center mr-4 mt-1">
                  <span className="text-black font-bold text-sm">✓</span>
                </div>
                <p className="text-gray-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Как это работает */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Как это работает?
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {process}
          </p>
        </div>

        {/* Почему выбирают нас */}
        <div className="mb-12">
          <h3 className="mb-6 text-2xl font-bold text-white">
            Почему стоит доверить {getServiceNameInGenitive(title)} специалистам SLS DETAILING?
          </h3>
          <div className="space-y-4">
            {whyChooseUs.map((reason, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0 w-2 h-2 bg-green-400 rounded-full mr-4 mt-3"></div>
                <p className="text-gray-300">{reason}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Призыв к действию */}
        <div className="text-center">
          <p className="text-gray-300 mb-6">
            {callToAction}
          </p>
        </div>
      </div>
    </section>
  )
}
