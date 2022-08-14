const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);
const date = new Date();
const GIT_COMMIT_SHA_SHORT = typeof process.env.GIT_COMMIT_SHA === 'string' && process.env.GIT_COMMIT_SHA.substring(0, 8);

module.exports = withPlugins([withTM, withOptimizedImages], {
  future: {
    webpack5: true,
  },
  // Next.js config
  poweredByHeader: false,
  env: {
    /**
     * @summary API Key Env Variables
     */
    // GITHUB_DISPATCH_TOKEN: process.env.GITHUB_DISPATCH_TOKEN,
    SENTRY_DSN: process.env.SENTRY_DSN,
    NEXT_PUBLIC_SENTRY_DSN: process.env.SENTRY_DSN, // Sentry DSN must be provided to the browser for error reporting to work there
    /**
    * @const VERCEL_
    * @see {@link https://vercel.com/docs/environment-variables#system-environment-variables}
    */
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    CI: process.env.CI,
  },
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
        source: '/(.*)',
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