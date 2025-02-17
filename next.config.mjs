/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compress: true,
  optimizeFonts: true,
  experimental: {
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/_next/static/(.*)", // Correct pattern for Next.js static files
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
