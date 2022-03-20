/**
 *
 *
 *
 */

import { Box, Paragraph, Text } from '@modulz/design-system';
import { getAllFrontmatter, getMdxBySlug } from '@lib/mdx';

import type { Frontmatter } from 'types/frontmatter';
import { QuickNav } from '@components/QuickNav';
import React from 'react';
import { RemoveScroll } from 'react-remove-scroll';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { components } from '@components/MDXComponents';
import { getMDXComponent } from 'mdx-bundler/client';

type Doc = {
  frontmatter: Frontmatter;
  code: any;
};

export default function Doc({ frontmatter, code }: Doc) {
  const Component = React.useMemo(() => getMDXComponent(code), [code]);

  return (
    <>
      <TitleAndMetaTags title={`${frontmatter.title} — Manifold Finance`} />

      <Text
        as="h1"
        size="8"
        css={{ fontWeight: 500, mb: '$2', lineHeight: '40px' }}
      >
        {frontmatter.title}
      </Text>

      <Paragraph size="2" css={{ mt: '$2', mb: '$7' }}>
        {frontmatter.description}
      </Paragraph>

      <Component components={components as any} />

      <Box
        as="aside"
        // Components that hide the scrollbar (like Dialog) add padding to
        // account for the scrollbar gap to avoid layout jank. This does not
        // work for position: fixed elements. Since we use react-remove-scroll
        // under the hood for those primitives, we can add this helper class
        // provided by that lib to deal with that for the QuickNav.
        // https://github.com/radix-ui/website/issues/64
        // https://github.com/theKashey/react-remove-scroll#positionfixed-elements
        className={RemoveScroll.classNames.zeroRight}
        css={{
          'display': 'none',
          '@bp3': {
            display: 'block',
            width: 250,
            flexShrink: 0,
            zIndex: 1,
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
          },
        }}
      >
        <QuickNav key={frontmatter.slug} />
      </Box>
    </>
  );
}

export async function getStaticPaths() {
  const frontmatters = getAllFrontmatter('docs');

  return {
    paths: frontmatters.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { frontmatter, code } = await getMdxBySlug('docs', context.params.slug);

  return {
    props: {
      frontmatter,
      code,
    },
  };
}
