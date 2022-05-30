/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    baseUrl: (() => {
      switch(process.env.VERCEL_ENV) {
        case 'production':
          return 'https://skyizwhite.dev';
        case 'preview':
          return `https://${ process.env.VERCEL_URL }`
        default:
          return 'http://localhost:3000';
      }
    })(),
    twitterSite:'@skyizwhite',
  },
};

module.exports = nextConfig;
