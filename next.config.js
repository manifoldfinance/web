const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins([withTM, withOptimizedImages], {
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
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: '/:path*/index.html',
        },
      ],
    };
  },
  async headeres() {
    return [
      {
        source: '/*',
        headers: [{ key: 'Web-Build', value: process.env.VERCEL_GIT_COMMIT_SHA }],
      },
    ];
  },
});

// Don't delete this console log, useful to see the config in Vercel deployments
console.log('process.env.VERCEL_GIT_COMMIT_SHA: ', process.env.VERCEL_GIT_COMMIT_SHA);
console.log('process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: ', process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
//console.log('process.env.GIT_COMMIT_SHA: ', process.env.GIT_COMMIT_SHA);
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
