const beforeAfterImages = [
  {
    before: "/dirty-car-interior-beige-leather-seat-before-clean.jpg",
    after: "/clean-car-interior-beige-leather-seat-after-detail.jpg",
  },
  {
    before: "/car-ceiling-headliner-dirty-stained-before.jpg",
    after: "/car-ceiling-headliner-clean-white-after-detailing.jpg",
  },
  {
    before: "/dirty-black-car-exterior-before-detailing.jpg",
    after: "/placeholder.svg?height=400&width=600",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
  },
  {
    before: "/placeholder.svg?height=400&width=600",
    after: "/placeholder.svg?height=400&width=600",
  },
]

export function BeforeAfter() {
  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">ДО/ПОСЛЕ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {beforeAfterImages.map((item, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg">
              <div className="grid grid-cols-2">
                <div className="relative">
                  <img src={item.before || "/placeholder.svg"} alt="Before" className="h-64 w-full object-cover" />
                  <div className="absolute bottom-2 left-2 rounded bg-[#575757] px-3 py-1 text-xs font-semibold text-white">
                    ДО
                  </div>
                </div>
                <div className="relative">
                  <img src={item.after || "/placeholder.svg"} alt="After" className="h-64 w-full object-cover" />
                  <div className="absolute bottom-2 right-2 rounded bg-[#54E260] px-3 py-1 text-xs font-semibold text-black">
                    ПОСЛЕ
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
