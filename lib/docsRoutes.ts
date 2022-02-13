export const docsRoutes = [
  {
    label: 'Overview',
    pages: [
      { title: 'Introduction', slug: 'docs/#' },
      { title: 'Use cases', slug: 'docs/#' },
      { title: 'API', slug: 'docs/#' },
      { title: 'Frequently asked questions', slug: 'docs/#' },
      { title: 'Forums', slug: 'docs/#' },
      { title: 'Support', slug: 'docs/#' },
    ],
  },

  {
    label: 'Getting Started',
    pages: [
      { title: 'Installation', slug: 'docs/#' },
      { title: 'Protocols', slug: 'docs/#' },
      { title: 'Frontend', slug: 'docs/#' },
      { title: 'Searchers', slug: 'docs/#' },
      { title: 'Traders', slug: 'docs/#' },
      { title: 'Block Producers', slug: 'docs/#' },
      { title: 'Framework agnostic API', slug: 'docs/#' },
    ],
  },

  {
    label: 'Manifold Protocol',
    pages: [
      { title: 'Overview', slug: 'docs/#' },
      { title: 'Bonding', slug: 'docs/#' },
      { title: 'Gauges', slug: 'docs/#' },
      { title: 'Parameters', slug: 'docs/#' },
      { title: 'Treasury', slug: 'docs/#' },
    ],
  },
];

export const allDocsRoutes = docsRoutes.reduce((acc, curr) => {
  acc = [...acc, ...curr.pages];
  return acc;
}, []);
