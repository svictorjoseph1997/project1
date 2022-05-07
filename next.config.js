/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  eslint:  {
    ignoreDuringBuilds: true,
 },
 async redirects() {
  return [
    {
      source: '/hello-vercel',
      destination: 'https://vercel.com',
      permanent: true,
    },
  ]
 },
}


  
