import {
  Box,
  Container,
  Flex,
  Grid,
  Link,
  Separator,
  Text,
} from '@modulz/design-system';

import { ExternalIcon } from './ExternalIcon';
import { ManifoldLogoIcon } from '@components/ManifoldLogoIcon';
import NextLink from 'next/link';
import React from 'react';

export const Footer = () => {
  return (
    <Box as="footer" css={{ py: '$9' }}>
      <Flex css={{ justifyContent: 'center', mb: '$9' }}></Flex>
      <Container size="3">
        <Grid
          css={{
            'gridTemplateColumns': 'repeat(1, 1fr)',
            'gap': '$6',
            '& ul': { listStyle: 'none', margin: '0', padding: '0' },
            '@bp2': {
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '$3',
            },
          }}
        >
          <Flex
            css={{
              'alignItems': 'center',
              '@bp2': {
                flexDirection: 'column',
                alignItems: 'start',
              },
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
                  Manifold Finance homepage
                </span>
                <ManifoldLogoIcon />
              </Box>
            </NextLink>
            <Text
              as="h6"
              size="2"
              css={{
                'lineHeight': '20px',
                'ml': '$4',
                'color': '$slate11',
                'pr': '$8',
                '@bp2': { mt: '$5', ml: '0' },
              }}
            >
              Copyright 2021 <br />
              <Link href="https://manifoldfinance.com">
                Commodity Stream, LLC
              </Link>
              .
            </Text>
          </Flex>
          <Box>
            <Text
              as="h6"
              size="3"
              css={{ fontWeight: 500, lineHeight: '20px' }}
            >
              Overview
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="https://docs.openmev.org" passHref>
                    <Link variant="subtle">OpenMEV</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="#" passHref>
                    <Link variant="subtle">FOLD Vault</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink
                    href="https://github.com/manifoldfinance/overview-docs/blob/master/README.md"
                    passHref
                  >
                    <Link variant="subtle">API</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink
                    href="https://github.com/manifoldfinance/overview-docs/blob/master/README.md"
                    passHref
                  >
                    <Link variant="subtle">FAQ</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text
              as="h6"
              size="3"
              css={{ fontWeight: 500, lineHeight: '20px' }}
            >
              Docs
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="https://securerpc.com" passHref>
                    <Link variant="subtle">SecureRPC</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="https://status.manifoldfinance.com/" passHref>
                    <Link variant="subtle">Network Status</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink
                    href="https://notionforms.io/forms/46b2a6bb-ac53-467c-ac3d-73623986c74f"
                    passHref
                  >
                    <Link variant="subtle">Partner Inquiry</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink
                    href="https://github.com/manifoldfinance/support"
                    passHref
                  >
                    <Link variant="subtle">Helpdesk</Link>
                  </NextLink>
                </Text>
              </li>
            </ul>
          </Box>
          <Box>
            <Text
              as="h6"
              size="3"
              css={{ fontWeight: 500, lineHeight: '20px' }}
            >
              Community
            </Text>
            <ul>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <NextLink href="https://forums.manifoldfinance.com" passHref>
                    <Link variant="subtle">Forums</Link>
                  </NextLink>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    variant="subtle"
                    href="https://github.com/manifoldfinance"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    GitHub
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    variant="subtle"
                    href="https://twitter.com/foldfinance"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Twitter
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
              <li>
                <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
                  <Link
                    variant="subtle"
                    href="https://t.me/manifoldfinance"
                    css={{ display: 'inline-flex', alignItems: 'center' }}
                  >
                    Telegram
                    <Flex as="span" css={{ ml: '$1', color: '$slate8' }}>
                      <ExternalIcon />
                    </Flex>
                  </Link>
                </Text>
              </li>
            </ul>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};
