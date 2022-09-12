import React from 'react';
import { Box, Grid, Text, Container, Flex, Heading, Paragraph, Section, darkTheme } from '@modulz/design-system';
import { MarketingCaption } from './MarketingCaption';

export const BenefitsSection = () => {
  return (
    <Section
      css={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>ETH, AVAX, and more</MarketingCaption>
          <Heading as="h2" size="3">
            MEV Returns for Validators
            <br />
          </Heading>
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
              FOLD v2 Markets soon
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              Why stake when you can <em style={{ fontFamily: 'Georgia, serif' }}>lend</em>? FOLD v2 will replace the existing
              staking protocol, with an enhanced lending market making your FOLD holdings productive assets through our vault platform.
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
              Liquid Staking
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              Lido is the premier Ethereum staking pool provider. We provide MEV Boost
              infrastructure under offer for their validator staking services. Combined with OpenMEV, we
              are able to offer a high-performing, low-cost, and secure solution for Ethereum Validators.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
