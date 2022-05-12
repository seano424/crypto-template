/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.onjuno.com', 'chart.googleapis.com'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
