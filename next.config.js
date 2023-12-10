// @ts-check
/**
 * @type {import('next').NextConfig}
 */
const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

//const date = new Date();
//const NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA = typeof process.env.GIT_COMMIT_SHA === 'string' && process.env.GIT_COMMIT_SHA.substring(0, 8);


 module.exports = withPlugins([withTM, withOptimizedImages], {
   future: {
     webpack5: true,
   },
   // Next.js config
   poweredByHeader: false,
   reactStrictMode: true,
   productionBrowserSourceMaps: false,
 /*  async redirects() {
     return [
       {
         source: '/docs',
         destination: 'https://kb.manifoldfinance.com',
         permanent: true,
       },
     ];
   },
*/
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
/*   async headers() {
     return [
       {
        source: '/(.*)',
        headers: [{ key: 'Web-Build', value: process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA }],
       },
     ];
   },
*/
 });


 // Don't delete this console log, useful to see the config in Vercel deployments
 console.log('next.config.js', JSON.stringify(module.exports, null, 2));

 //console.log('process.env.VERCEL_GIT_COMMIT_SHA: ', process.env.VERCEL_GIT_COMMIT_SHA);
 console.log('process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA: ', process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA);
