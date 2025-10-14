interface PriceSectionProps {
  serviceName: string
  serviceDescription: string
  priceClasses: Array<{
    class: string
    price: string
  }>
  additionalServices?: Array<{
    name: string
    price: string
  }>
}

export function PriceSection({ 
  serviceName, 
  serviceDescription, 
  priceClasses, 
  additionalServices 
}: PriceSectionProps) {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-4xl font-bold text-white md:text-5xl">
          ПРАЙС
        </h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>
        
        <h3 className="mb-6 text-center text-2xl font-bold text-white underline">
          {serviceName}
        </h3>
        
        <p className="mb-8 text-center text-gray-300 max-w-4xl mx-auto">
          {serviceDescription}
        </p>

        {/* Основные классы услуг */}
        <div className="mb-12 overflow-hidden rounded-lg">
          <div className="bg-zinc-800">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {priceClasses.map((priceClass, index) => (
                <div key={index} className="p-4 text-center border-r border-zinc-700 last:border-r-0">
                  <div className="text-white font-semibold text-sm mb-2">
                    {priceClass.class}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
              {priceClasses.map((priceClass, index) => (
                <div key={index} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                  <div className="text-gray-800 font-semibold">
                    {priceClass.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Дополнительные услуги */}
        {additionalServices && additionalServices.length > 0 && (
          <div className="overflow-hidden rounded-lg">
            <div className="bg-zinc-800 p-4">
              <h4 className="text-white font-semibold text-lg">{serviceName} ДЕТАЛЕЙ</h4>
            </div>
            <div className="bg-white">
              {additionalServices.map((service, index) => (
                <div 
                  key={index} 
                  className={`p-4 flex justify-between items-center ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                  }`}
                >
                  <span className="text-gray-800">{service.name}</span>
                  <span className="text-gray-800 font-semibold">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
