"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const workImages = ["/professional-car-detailing-wheel-polishing-red-bra.jpg", "/luxury-car-paint-correction-detailing.jpg", "/car-interior-detailing-leather-cleaning.jpg"]

export function OurWork() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % workImages.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + workImages.length) % workImages.length)
  }

  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">НАШИ РАБОТЫ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        {/* Category tabs */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 text-sm text-[#575757]">
          <button className="hover:text-[#54E260] transition-colors duration-300">ВСЕ</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ПОЛИРОВКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ХИМЧИСТКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ОКЛЕЙКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">КЕРАМИКА</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">РЕМОНТ</button>
          <button className="hover:text-[#54E260] transition-colors duration-300">ШУМОИЗОЛЯЦИЯ</button>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            <img
              src={workImages[currentIndex] || "/placeholder.svg"}
              alt="Our work"
              className="h-[500px] w-full object-cover"
            />
          </div>

          {/* Navigation buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-[#54E260] hover:bg-[#54E260] hover:text-black transition-all duration-300"
            onClick={prev}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-[#54E260] hover:bg-[#54E260] hover:text-black transition-all duration-300"
            onClick={next}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>

          {/* Dots indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {workImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentIndex ? "w-8 bg-[#54E260]" : "bg-[#575757]"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
