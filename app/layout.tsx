import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import { FloatingButtons } from '@/components/floating-buttons'
import './globals.css'

export const metadata: Metadata = {
  title: 'SLS DETAILING STUDIO | Профессиональный уход за вашим автомобилем',
  description: 'Детейлинг студия в Москве. Полировка, химчистка, защитные пленки, керамика, удаление вмятин и другие услуги по уходу за автомобилем.',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <FloatingButtons />
        <Analytics />
      </body>
    </html>
  )
}
