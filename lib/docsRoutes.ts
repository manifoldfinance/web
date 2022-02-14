export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/intro' },
      { title: 'Platform and Integrations', slug: 'docs/platform' },
      { title: 'Comparison and Features', slug: 'docs/openmev/table' },
      { title: 'Use cases', slug: 'docs/examples' },
      { title: 'API', slug: 'docs/api' },
      { title: 'Frequently asked questions', slug: 'docs/faq' },
      { title: 'Support and Governance', slug: 'docs/help' },
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      { title: 'Overview', slug: 'docs/' },
      { title: 'Protocols', slug: 'docs/' },
      { title: 'Frontend', slug: 'docs/' },
      { title: 'Searchers', slug: 'docs/' },
      { title: 'Traders', slug: 'docs/trader' },
      { title: 'Block Producers', slug: 'docs/' },
      { title: 'Gas Pricing API ', slug: 'docs/json-rpc' },
    ],
  },

  {
    label: 'OpenMEV',
    pages: [
      { title: 'Installation', slug: 'docs/openmev/developers-overview' },
      { title: 'Ethers Provider', slug: 'docs/openmev/ethers-provider' },
      {
        title: 'Safe Send React Wallet',
        slug: 'docs/openmev/safe-send-wallet',
      },
      { title: 'Searchers', slug: 'docs/' },
      { title: 'Block Producers', slug: 'docs/' },
      { title: 'Supported RPC Methods', slug: 'docs/openmev-rpc-ref' },
    ],
  },

  {
    label: 'Manifold Protocol',
    pages: [
      { title: 'Overview', slug: 'docs/manifold/overview' },
      { title: 'Protocol', slug: 'docs/manifold/protocol' },
      { title: 'Bonding', slug: 'docs/manifold/bonding' },
      { title: 'Parameters', slug: 'docs/manifold/pid' },
      { title: 'Bundle Pool', slug: 'docs/manifold/bundle-pool' },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
