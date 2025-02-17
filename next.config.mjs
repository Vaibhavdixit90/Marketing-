/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Helps detect performance issues
  swcMinify: true, // Minifies JavaScript and CSS
  compress: true, // Uses gzip compression for faster page loads

  images: {
    unoptimized: true, // Use unoptimized images for static export
  },
  optimizeFonts: true, // Optimize font loading
  experimental: {
    scrollRestoration: true, // Reduces layout shift (CLS)
  },
};

export default nextConfig;
