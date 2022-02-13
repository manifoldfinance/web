const readingTime = require('reading-time');
const withPlugins = require('next-compose-plugins');
const withVideos = require('next-videos');
const withOptimizedImages = require('next-optimized-images');

const withTM = require('next-transpile-modules')(['@modulz/design-system']);

module.exports = withPlugins([withTM, withOptimizedImages, withVideos], {
  // Next.js config
  async redirects() {
    return [
      {
        source: '/docs',
        destination: '/docs/installation',
        permanent: true,
      },
    ];
  },
});
