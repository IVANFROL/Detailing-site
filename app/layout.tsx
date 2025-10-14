import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
// import { Analytics } from '@vercel/analytics/next' // Отключено, используем Яндекс.Метрику
import { FloatingButtons } from '@/components/floating-buttons'
import { ErrorHandler } from '@/components/error-handler'
import { Analytics } from '@/components/analytics'
import './globals.css'

export const metadata: Metadata = {
  title: 'SLS DETAILING STUDIO | Детейлинг в Москве - Профессиональный уход за автомобилем',
  description: 'Детейлинг студия SLS в Москве ⭐ Полировка кузова ⭐ Химчистка салона ⭐ Защитные пленки ⭐ Керамика ⭐ Оклейка винилом ⭐ Удаление вмятин без покраски ⭐ 5.0 рейтинг на Яндексе ⭐ 36 отзывов ☎️ +7 (962) 909-99-62',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  keywords: 'детейлинг москва, полировка кузова, химчистка салона, защитные пленки, керамическое покрытие, оклейка винилом, детейлинг мойка, удаление вмятин, антигравийная пленка, детейлинг студия, автодетейлинг, детейлинг центр',
  authors: [{ name: 'SLS DETAILING STUDIO' }],
  creator: 'SLS DETAILING STUDIO',
  publisher: 'SLS DETAILING STUDIO',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: 'https://sls-detailing.ru',
    siteName: 'SLS DETAILING STUDIO',
    title: 'SLS DETAILING STUDIO | Детейлинг в Москве',
    description: 'Профессиональный детейлинг автомобилей в Москве. Полировка, химчистка, защитные пленки, керамика. Рейтинг 5.0 на Яндексе.',
    images: [
      {
        url: 'https://sls-detailing.ru/car.png',
        width: 1200,
        height: 630,
        alt: 'SLS DETAILING STUDIO',
      },
    ],
  },
  verification: {
    yandex: 'yandex-verification-code', // Замените на ваш код верификации
    google: 'google-verification-code', // Замените на ваш код верификации
  },
  alternates: {
    canonical: 'https://sls-detailing.ru',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <Analytics />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorHandler />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
