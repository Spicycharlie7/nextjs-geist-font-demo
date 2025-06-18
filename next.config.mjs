/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  // Improve build output
  output: 'standalone',
  // Enable React strict mode for better development
  reactStrictMode: true,
  // Improve performance with SWC minification
  swcMinify: true,
  // Configure redirects
  async redirects() {
    return [
      {
        source: '/creators',
        destination: '/explore',
        permanent: true,
      },
    ]
  },
  // Configure headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
