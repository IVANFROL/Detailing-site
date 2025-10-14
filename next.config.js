/** @type {import('next').NextConfig} */
const nextConfig = {
  // Настройки для статических файлов
  async rewrites() {
    return [
      {
        source: '/favicon.svg',
        destination: '/favicon.svg',
      },
    ]
  },
  // Настройки для изображений
  images: {
    domains: ['localhost'],
  },
  // Обработка ошибок для внешних ресурсов
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  // Отключение Vercel Analytics
  // experimental.instrumentationHook больше не нужен в Next.js 15
}

module.exports = nextConfig
