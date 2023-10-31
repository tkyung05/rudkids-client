/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
      'k.kakaocdn.net',
      'rudkids-image.s3.ap-northeast-2.amazonaws.com',
      'lh3.googleusercontent.com',
    ],
  },
  reactStrictMode: false,
  swcMinify: true,
  experimental: {
    fontLoaders: [{ loader: '@next/font/google', options: { subsets: ['latin'] } }],
  },
  compiler: {
    styledComponents: true,
  },
  icon: {
    path: '/favicon.ico',
    sizes: [16],
  },
};
