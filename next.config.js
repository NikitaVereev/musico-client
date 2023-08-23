/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    domains: ['localhost']
  },
  env: {
    APP_URL: 'https://muscoservicenevoruite.ru',
    APP_ENV: 'development',
    APP_SERVER_URL: 'http://localhost:8080',
  },
  swcMinify: true
}

module.exports = nextConfig
