import { ThankYouPage } from "@/components/thank-you-page"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Спасибо за заявку! | SLS DETAILING STUDIO - Детейлинг в Москве',
  description: 'Спасибо за обращение в SLS DETAILING STUDIO! Мы получили вашу заявку и свяжемся с вами в ближайшее время. Профессиональный детейлинг автомобилей в Москве.',
  keywords: 'спасибо заявка, детейлинг москва, полировка кузова, химчистка салона, защитные пленки, керамическое покрытие, оклейка винилом',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://sls-detailing.ru/thank-you',
    siteName: 'SLS DETAILING STUDIO',
    title: 'Спасибо за заявку! | SLS DETAILING STUDIO',
    description: 'Спасибо за обращение в SLS DETAILING STUDIO! Мы получили вашу заявку и свяжемся с вами в ближайшее время.',
    images: [
      {
        url: 'https://sls-detailing.ru/car.png',
        width: 1200,
        height: 630,
        alt: 'SLS DETAILING STUDIO - Спасибо за заявку',
      },
    ],
  },
  alternates: {
    canonical: 'https://sls-detailing.ru/thank-you',
  },
}

export default function ThankYou() {
  return <ThankYouPage />
}
