export function Clients() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">НАШИ КЛИЕНТЫ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        <div className="flex flex-wrap items-center justify-center gap-12 opacity-60 grayscale">
          {/* Placeholder for client logos */}
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex h-20 w-32 items-center justify-center rounded border border-[#575757] bg-white/5 hover:border-[#54E260] transition-colors duration-300">
              <span className="text-xs text-[#575757]">LOGO {i}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
