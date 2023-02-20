/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // async rewrites() {
  //   return [
  //     {
  //       source: process.env.SOURCE_PATH,
  //       destination: process.env.DESTINATION_URL
  //     },
  //   ]
  // },
  env: {
    // 맨 뒤에 슬러쉬(/) 빼야한다.
    // BACKEND_URL: "https://shoedb123.herokuapp.com"
    BACKEND_URL: "http://localhost:3001"
  }
}