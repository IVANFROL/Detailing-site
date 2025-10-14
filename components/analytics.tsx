"use client"

import Script from 'next/script'

export function Analytics() {
  return (
    <>
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
    </>
  )
}
