export function Marquee() {
  const services = [
    "ОКЛЕЙКА ПЛЕНКОЙ",
    "РЕМОНТ КОЖИ",
    "ХИМЧИСТКА",
    "УДАЛЕНИЕ ВМЯТИН",
    "ШУМОИЗОЛЯЦИЯ",
    "ПОЛИРОВКА",
    "КЕРАМИКА",
  ]

  return (
    <div className="relative overflow-hidden border-y border-emerald-500/20 bg-black py-4">
      <div className="flex marquee-right whitespace-nowrap">
        {[...services, ...services, ...services].map((service, index) => (
          <span key={index} className="mx-8 text-xl font-bold text-white md:text-2xl">
            {service}
            <span className="mx-8 text-emerald-500">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}
