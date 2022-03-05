/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: process.env.SOURCE_PATH,
        destination: process.env.DESTINATION_URL
      },
    ]
  },
  env: {
    BACKEND_URL: "http://localhost:3001"
    // BACKEND_URL: "https://shoedb123.herokuapp.com"
  }
}