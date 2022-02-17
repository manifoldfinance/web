import {
  Box,
  Container,
  Grid,
  Heading,
  Paragraph,
  Section,
  Separator,
  Text,
} from '@modulz/design-system';

import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingButton } from './MarketingButton';
import { MarketingCaption } from './MarketingCaption';
import NextLink from 'next/link';
import React from 'react';

export const AdoptionSection = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>d</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Adoption made easy
          </Heading>
          <NextLink href="/docs/primitives" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              Go to docs
            </MarketingButton>
          </NextLink>
        </Box>

        <Grid
          columns={{ '@initial': 1, '@bp1': 2 }}
          gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}
        >
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
              Incremental adoption
            </Text>
            <Paragraph>
              Start off with simple MEV protection via RPC connection, then
              expand to using strategies like Gas Rebating or your own
              Incentives Programme.
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
              Protocol driven optimization
            </Text>
            <Paragraph>
              Use recaptured MEV to optimize protocol incentives and drive gains
              to your most important metrics like TVL.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
