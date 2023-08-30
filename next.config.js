/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  reactStrictMode: false,
  images: {
    domains: ['localhost', 'muscoservicenevoruite.ru']
  },
  env: {
    APP_URL: 'https://muscoservicenevoruite.ru',
    APP_ENV: 'dev',
    APP_SERVER_URL: 'http://localhost:8080',
  },
  swcMinify: true
}

module.exports = nextConfig
