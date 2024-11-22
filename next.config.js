/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // This is important for GitHub Pages deployment
  basePath: process.env.NODE_ENV === 'production' ? '/My_Portfolio' : '',
}

module.exports = nextConfig

