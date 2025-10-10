export function Stats() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">О НАС</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        {/* Main car container with stats overlay */}
        <div className="relative mx-auto max-w-5xl min-h-[600px] md:min-h-[700px]">
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-radial from-[#54E260]/5 via-transparent to-transparent rounded-3xl"></div>
          
          {/* Car image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Glow effects */}
              <div className="absolute inset-0 bg-[#54E260]/5 blur-3xl rounded-full transform scale-90"></div>
              <div className="absolute inset-0 bg-[#54E260]/10 blur-2xl rounded-full transform scale-75 animate-pulse"></div>
              
              {/* Car image */}
              <img 
                src="/car.png" 
                alt="Car background" 
                className="w-full h-full object-contain object-center relative z-10 drop-shadow-[0_0_15px_rgba(84,226,96,0.2)]"
              />
            </div>
          </div>
          
          {/* Stats blocks positioned over the car */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl relative z-20">
              {/* Stats blocks with enhanced styling */}
              <div className="text-center group bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/80">
                <div className="mb-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#54E260] to-[#348B41] bg-clip-text text-transparent group-hover:from-[#348B41] group-hover:to-[#54E260] transition-all duration-500">10</div>
                <div className="text-sm md:text-base text-white/90">ЛЕТ НА РЫНКЕ</div>
              </div>

              <div className="text-center group bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/80">
                <div className="mb-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#54E260] to-[#348B41] bg-clip-text text-transparent group-hover:from-[#348B41] group-hover:to-[#54E260] transition-all duration-500">5000+</div>
                <div className="text-sm md:text-base text-white/90">ДОВОЛЬНЫХ КЛИЕНТОВ</div>
              </div>

              <div className="text-center group bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/80">
                <div className="mb-3 text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#54E260] to-[#348B41] bg-clip-text text-transparent group-hover:from-[#348B41] group-hover:to-[#54E260] transition-all duration-500">20+</div>
                <div className="text-sm md:text-base text-white/90">СОТРУДНИКОВ</div>
              </div>

              <div className="text-center group bg-black/70 backdrop-blur-md rounded-2xl p-6 border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-500 hover:transform hover:scale-105 hover:bg-black/80">
                <div className="mb-3 text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#54E260] to-[#348B41] bg-clip-text text-transparent group-hover:from-[#348B41] group-hover:to-[#54E260] transition-all duration-500">Гарантия</div>
                <div className="text-sm md:text-base text-white/90">НА ВСЕ ВИДЫ РАБОТ</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}