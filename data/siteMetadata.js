/**
 * @exports {siteMetadata}
 * @param {string} title
 * @param {string} description
 * @param {string} keywords
 * @param {string} author
 * @param {string} siteUrl
 * @param {string} image
 * @param {string} twitter
 * @param {string} email
 */
const siteMetadata = {
  title: 'Manifold Finance',
  author: 'Ty Coon',
  headerTitle: 'Manifold Finance',
  description: 'Connect to a world of DeFi',
  language: 'en-us',
  siteUrl: 'https://manifoldfinance.com',
  siteRepo: 'https://github.com/manifoldfinance/web',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/twitter-card.png',
  email: 'janitor@manifoldfinance.com',
  github: 'https://github.com/manifoldfinance',
  twitter: 'https://twitter.com/foldfinance',
  locale: 'en-US',
  analytics: {
    plausibleDataDomain: '',
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
}

module.exports = siteMetadata
