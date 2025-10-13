import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
// import { Analytics } from '@vercel/analytics/next' // Отключено, используем Яндекс.Метрику
import { FloatingButtons } from '@/components/floating-buttons'
import { ErrorHandler } from '@/components/error-handler'
import Script from 'next/script'
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
        {/* Яндекс.Метрика */}
        <Script 
          id="yandex-metrika" 
          strategy="afterInteractive"
          onError={(e) => {
            console.log('Yandex Metrika failed to load:', e);
          }}
        >
          {`
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=104622763', 'ym');

            ym(104622763, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", accurateTrackBounce:true, trackLinks:true});
          `}
        </Script>
        <noscript>
          <div><img src="https://mc.yandex.ru/watch/104622763" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div>
        </noscript>

        {/* Google Analytics (опционально) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" 
          strategy="afterInteractive"
          onError={(e) => {
            console.log('Google Analytics failed to load:', e);
          }}
        />
        <Script 
          id="google-analytics" 
          strategy="afterInteractive"
          onError={(e) => {
            console.log('Google Analytics script failed:', e);
          }}
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>

        {/* Структурированные данные Schema.org */}
        <Script 
          id="schema-org" 
          type="application/ld+json" 
          strategy="afterInteractive"
          onError={(e) => {
            console.log('Schema.org script failed:', e);
          }}
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "SLS DETAILING STUDIO",
            "description": "Профессиональная детейлинг студия в Москве",
            "url": "https://sls-detailing.ru",
            "telephone": "+7-962-909-99-62",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Московская область",
              "addressRegion": "МО",
              "addressCountry": "RU",
              "streetAddress": "городской округ Пушкинский, посёлок Челюскинский, 1-я Тракторная улица, 7"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "55.948219",
              "longitude": "37.810557"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
              ],
              "opens": "09:00",
              "closes": "21:00"
            },
            "priceRange": "₽₽₽",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5.0",
              "reviewCount": "36",
              "bestRating": "5",
              "worstRating": "1"
            },
            "image": "https://sls-detailing.ru/car.png",
            "sameAs": [
              "https://wa.me/79629099962",
              "https://t.me/+79629099962"
            ]
          })}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <ErrorHandler />
        {children}
        <FloatingButtons />
      </body>
    </html>
  )
}
