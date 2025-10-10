export function OurWork() {

  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">НАШИ РАБОТЫ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        {/* Category tabs */}
        {/* <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-[#575757]">
          <button className="hover:text-[#54E260] transition-colors duration-300">ВСЕ</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ПОЛИРОВКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ХИМЧИСТКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ОКЛЕЙКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">КЕРАМИКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">РЕМОНТ</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ШУМОИЗОЛЯЦИЯ</button>
        </div> */}

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <video
              src="/video1.MP4"
              autoPlay
              loop
              muted
              playsInline
              className="h-[500px] w-full object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  )
}
