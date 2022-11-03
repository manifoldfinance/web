import { Box, Container, Grid, Heading, Link, Paragraph, Section, Separator, Text } from '@modulz/design-system';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';
import NextLink from 'next/link';
import React from 'react';

export const IntroSection = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Capital Pathfinder</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Connecting capital to the best opportunities
          </Heading>
          <NextLink href="https://notionforms.io/forms/dacf20c5-d93b-4552-8748-5deab183901f" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              Learn More
            </MarketingButton>
          </NextLink>
        </Box>

        <Grid columns={{ '@initial': 1, '@bp1': 2 }} gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}>
          <Box>
            <Text
              as="h3"
              size="6"
              css={{
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1.3,
                mb: '$2',
              }}
            >
              OpenMEV: MEV Profits for Everyone
            </Text>
            <Paragraph>
              OpenMEV enables protocols to not only protect their users it also maximizes returns by recapturing
              arbitrage profit back to the protocol.
            </Paragraph>
          </Box>

          <Box>
            <Text
              as="h3"
              size="6"
              css={{
                fontWeight: 500,
                letterSpacing: '-0.03em',
                lineHeight: 1.3,
                mb: '$2',
              }}
            >
              Spotlight: Sushiswap
            </Text>
            <Paragraph>
              Sushiswap recently launched its SushiGuard router to protect and incentivize the Sushi Protocol through
              additional profits by using OpenMEV.
            </Paragraph>
            <Text as="p" size="3" css={{ mt: '$3', lineHeight: '20px' }}>
              <NextLink href="https://docs.sushi.com/docs/Tutorials/howto-use-sushiguard" passHref>
                <Link variant="subtle">Read the tutorial</Link>
              </NextLink>
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
