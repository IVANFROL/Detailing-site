"use client"

import { useEffect, useRef, useState } from "react"

export function OurWork() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isClient && videoRef.current) {
      // Пытаемся воспроизвести видео с небольшой задержкой
      const timer = setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(error => {
            console.log("Автовоспроизведение не удалось:", error)
          })
        }
      }, 100)

      return () => clearTimeout(timer)
    }
  }, [isClient])

  return (
    <section className="bg-black px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-4xl font-bold text-white md:text-5xl">НАШИ РАБОТЫ</h2>
        <div className="mb-8 h-1 w-24 bg-gradient-to-r from-[#54E260] to-[#348B41] mx-auto"></div>

        <div className="relative">
          <div className="overflow-hidden rounded-lg">
            {isClient ? (
              <video
                ref={videoRef}
                src="/video1.MP4"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                className="h-[500px] w-full object-cover"
              />
            ) : (
              <div className="h-[500px] w-full bg-zinc-900 flex items-center justify-center">
                <div className="text-white text-lg">Загрузка...</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}