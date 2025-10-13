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
}

module.exports = nextConfig
