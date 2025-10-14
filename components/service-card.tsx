"use client"

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface ServiceCardProps {
  id: string
  title: string
  price: string
  description: string
  image: string
  imageAlt: string
}

export function ServiceCard({ id, title, price, description, image, imageAlt }: ServiceCardProps) {
  return (
    <div className="group relative h-80 overflow-hidden rounded-lg border border-[#54E260]/20 hover:border-[#54E260]/40 transition-all duration-300">
      <img
        src={image || "/placeholder.svg"}
        alt={imageAlt}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-lg font-bold text-[#54E260] whitespace-nowrap">{price}</span>
        </div>
        <p className="mb-4 text-sm text-[#575757]">{description}</p>
        <Link 
          href={`/services/${id}`}
          className="flex items-center gap-2 text-[#54E260] transition-colors hover:text-[#348B41]"
        >
          <span className="text-sm font-semibold">Подробнее</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
