export function Stats() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">О НАС</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        {/* Main car container with stats overlay */}
        <div className="relative mx-auto max-w-5xl h-[400px] md:h-[600px]">
          {/* Large car image as main background */}
          <img 
            src="/car.png" 
            alt="Car background" 
            className="w-full h-full object-contain object-center"
          />
          
          {/* Stats blocks positioned over the car */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl">
              {/* Mobile: single column, Desktop: 2x2 grid */}
              <div className="text-center group bg-black/80 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-[#54E260]/30">
                <div className="mb-2 text-4xl md:text-6xl font-bold text-[#54E260] group-hover:text-[#348B41] transition-colors duration-300">10</div>
                <div className="text-xs md:text-sm text-white">ЛЕТ НА РЫНКЕ</div>
              </div>

              <div className="text-center group bg-black/80 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-[#54E260]/30">
                <div className="mb-2 text-4xl md:text-6xl font-bold text-[#54E260] group-hover:text-[#348B41] transition-colors duration-300">5000+</div>
                <div className="text-xs md:text-sm text-white">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
              </div>

              <div className="text-center group bg-black/80 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-[#54E260]/30">
                <div className="mb-2 text-4xl md:text-6xl font-bold text-[#54E260] group-hover:text-[#348B41] transition-colors duration-300">20+</div>
                <div className="text-xs md:text-sm text-white">СОТРУДНИКОВ</div>
              </div>

              <div className="text-center group bg-black/80 backdrop-blur-sm rounded-lg p-3 md:p-6 border border-[#54E260]/30">
                <div className="mb-2 text-2xl md:text-4xl font-bold text-[#54E260] group-hover:text-[#348B41] transition-colors duration-300">Гарантия</div>
                <div className="text-xs md:text-sm text-white">НА ВСЕ ВИДЫ РАБОТ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
