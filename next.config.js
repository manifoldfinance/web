const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins(
  [withTM, withOptimizedImages],
  {
  future: {
    webpack5: true,
  },
    // Next.js config
    poweredByHeader: false,
    async redirects() {
      return [
        {
          source: '/docs',
          destination: '/docs/introduction',
          permanent: true,
        },
      ];
    },
  },
);

// Don't delete this console log, useful to see the config in Vercel deployments
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
