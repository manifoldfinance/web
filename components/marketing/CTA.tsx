import React from 'react';
import NextLink from 'next/link';
import { Box, Grid, Text, Container, Heading, Paragraph, Section, Separator } from '@modulz/design-system';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { MarketingCaption } from './MarketingCaption';
import { MarketingButton } from './MarketingButton';

export const AdoptionSection = () => {
  return (
    <Section>
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>The Merge is almost here!</MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Ethereum's Proof of Stake upgrade is on schedule
          </Heading>
          <NextLink href="https://kb.manifoldfinance.com" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              Go to docs
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
              Incremental adoption
            </Text>
            <Paragraph>
              Each component is its own independently versioned package, so new components can be added alongside your
              existing code.
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
              Detailed docs and TypeScript support
            </Text>
            <Paragraph>
              New SDK launching in October 2022
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
