/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://skyizwhite.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: 'Yahoo Pipes 1.0', disallow: '/' },
      { userAgent: '008', disallow: '/' },
      { userAgent: 'voltron', disallow: '/' },
      { userAgent: 'Bytespider', disallow: '/' },
      { userAgent: 'Livelapbot', disallow: '/' },
      { userAgent: 'ia_archiver', disallow: '/' },
    ],
  },
};
