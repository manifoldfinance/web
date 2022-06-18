/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://manifoldfinance.com',
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  generateRobotsTxt: true,
  exclude: ['/login', '/dashboard', '/dapp'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://manifoldfinance.com/server-sitemap.xml', // <==== Server Side Sitemap
    ],
  },
  // Default transformation function
  transform: async (config, path) => {
    return {
      loc: path, // => this will be exported as http(s)://<config.siteUrl>/<path>
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: config.alternateRefs ?? [],
    };
  },
  additionalPaths: async (config) => [await config.transform(config, '/docs')],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'test-bot',
        allow: ['/bot', '/blog'],
      },
      {
        userAgent: 'black-listed-bot',
        disallow: ['/', '/.'],
      },
    ],
    additionalSitemaps: [],
  },
};
