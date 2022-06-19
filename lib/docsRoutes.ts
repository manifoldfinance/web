/** @exports docsRoutes */
export const docsRoutes = [
  /**
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/introduction' },
      { title: 'Platform and Integrations', slug: 'docs/platform' },
      { title: 'Comparison and Features', slug: 'docs/table' },
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
 */
  {
    label: 'SecureRPC',
    pages: [
      { title: 'Supported RPC Methods', slug: 'docs/securerpc' },
      { title: 'Developers Overview', slug: 'docs/developers-overview' },
      { title: 'Ethers Provider', slug: 'docs/ethers-provider' },
      { title: 'Installation', slug: 'docs/installation' },
    ],
  },
  {
    label: 'SecureRPC API',
    pages: [
      { title: 'eth_call.mdx', slug: 'docs/securerpc/api/post/eth_call' },
      { title: 'eth_estimateGas.mdx', slug: 'docs/securerpc/api/post/eth_estimateGas' },
      { title: 'eth_sendRawTransaction.mdx', slug: 'docs/securerpc/api/post/eth_sendRawTransaction' },
    ],
  },
  /*
  {
    label: 'Manifold Protocol',
    pages: [
      { title: 'Overview', slug: 'docs/manifold/overview' },
      { title: 'Protocol', slug: 'docs/manifold/protocol' },
    ],
  },
  */
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
