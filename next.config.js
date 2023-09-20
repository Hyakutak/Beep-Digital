/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'files.stripe.com',
    ]
  },
  pageExtensions: [
    'page.tsx',
    'api.ts',
    'api.tsx'
  ]
}

module.exports = nextConfig
