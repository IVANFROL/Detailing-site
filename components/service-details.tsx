interface ServiceDetailsProps {
  title: string
  description: string
  benefits: string[]
  process: string
  whyChooseUs: string[]
  callToAction: string
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
            Почему выбирают {title.toLowerCase()}?
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
            Почему стоит доверить {title.toLowerCase()} специалистам SLS DETAILING?
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
