/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

{
  "redirects": [
    { 
      "source": "/hello-vercel",
      "destination": "https:vercel.com", 
      "permanent": false
    }
  ]
}