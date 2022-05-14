import { Box, Flex, Heading, Link, Text } from '@modulz/design-system';

import { ManifoldLogoIcon } from '@components/ManifoldLogoIcon';
import NextLink from 'next/link';
//import { ThemeToggle } from '@components/ThemeToggle';

export function Header() {
  return (
    <Flex
      as="header"
      css={{
        py: '$4',
        px: '$4',
        jc: 'space-between',
        position: 'relative',
        zIndex: '1',
      }}
    >
      <NextLink href="/" passHref>
        <Box
          as="a"
          css={{
            'color': '$hiContrast',
            'display': 'inline-flex',
            '&:focus': {
              boxShadow: 'none',
            },
          }}
        >
          <span
            style={{
              position: 'absolute',
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: 'hidden',
              clip: 'rect(0, 0, 0, 0)',
              whiteSpace: 'nowrap',
              border: 0,
            }}
          >
            Manifold Finance - Connect to DeFi Opportunities
          </span>
          <ManifoldLogoIcon />
        </Box>
      </NextLink>
      <Flex as="nav" css={{ ai: 'center' }}>
        <NextLink href="https://staking.manifoldfinance.com" passHref>
          <Link variant="subtle" css={{ 'mr': '$5', '@bp2': { mr: '$7' } }}>
            <Text>Staking </Text>
          </Link>
        </NextLink>
        <NextLink href="https://manifoldfinance.com/docs" passHref>
          <Link variant="subtle" css={{ 'mr': '$5', '@bp2': { mr: '$7' } }}>
            <Text>Resources </Text>
          </Link>
        </NextLink>

        <NextLink href="/blog" passHref>
          <Link variant="subtle" css={{ 'mr': '$5', '@bp2': { mr: '$7' } }}>
            <Text>Blog</Text>
          </Link>
        </NextLink>
        <Link
          href="https://forums.manifoldfinance.com/"
          variant="subtle"
          css={{
            'mr': '$5',
            'display': 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$7' },
          }}
        >
          <Text>Governance</Text>
        </Link>
        <Link
          href="https://github.com/manifoldfinance"
          variant="subtle"
          css={{
            'mr': '$5',
            'display': 'none',
            '@bp1': { display: 'block' },
            '@bp2': { mr: '$7' },
          }}
        >
          <Text>GitHub</Text>
        </Link>
        <Link href="https://t.me/manifoldfinance" variant="subtle" css={{ 'mr': '$5', '@bp2': { mr: '$7' } }}>
          <Text>Telegram</Text>
        </Link>
      </Flex>
    </Flex>
  );
}
