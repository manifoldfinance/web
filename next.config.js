const readingTime = require('reading-time');
const withOptimizedImages = require('next-optimized-images');
const withTM = require('next-transpile-modules')(['@modulz/design-system']);
const defaultTheme = require('tailwindcss/defaultTheme')
const { screens } = defaultTheme
/* require('v8-compile-cache-lib').install(); // faster builds */

const date = new Date();
const GIT_COMMIT_SHA_SHORT = typeof process.env.GIT_COMMIT_SHA === 'string' && process.env.GIT_COMMIT_SHA.substring(0, 8);


// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  reactStrictMode: true,
  optimizeImages: true,
  optimizeCss: true,
  env: {
    /**
     * @const GITHUB_DISPATCH_TOKEN
     */
    // GITHUB_DISPATCH_TOKEN: process.env.GITHUB_DISPATCH_TOKEN,
    /**
    * @env VERCEL
    * @see {@link https://vercel.com/docs/environment-variables#system-environment-variables}
    */
    VERCEL: process.env.VERCEL,
    VERCEL_ENV: process.env.VERCEL_ENV,
    VERCEL_URL: process.env.VERCEL_URL,
    CI: process.env.CI,
  },
 publicRuntimeConfig: {
    breakpoints: screens,
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

module.exports = withTM(withOptimizedImages(nextConfig))

// Don't delete this console log, useful to see the config in Vercel deployments
console.log('process.env.VERCEL_GIT_COMMIT_SHA: ', process.env.VERCEL_GIT_COMMIT_SHA);
console.log('process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: ', process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
//console.log('process.env.GIT_COMMIT_SHA: ', process.env.GIT_COMMIT_SHA);
console.log('next.config.js', JSON.stringify(module.exports, null, 2));
