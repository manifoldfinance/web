import React from 'react';
import {
  Box,
  Grid,
  Text,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Separator,
  darkTheme,
} from '@modulz/design-system';
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
          <MarketingCaption css={{ mb: '$1' }}>
            ETH, AVAX, and more
          </MarketingCaption>
          <Heading as="h2" size="3">
            MEV Returns for Validators
            <br />
            Stablecoin payments
          </Heading>
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
              Deposit FOLD/ETH. Earn Stablecoins.
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It takes a <em style={{ fontFamily: 'Georgia, serif' }}>lot</em>{' '}
              of time to develop and maintain a robust distributed computing
              platform. Building toward the next frontier in validator
              infrastructure requires not only knowledge but operations
              experience to be able to do it. Stake 80% ETH 20% FOLD earns like
              its 100% ETH.
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
              Lido and Rocketpool: meet OpenMEV
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              The Lido and Rocketpool protocols are the premier ethereum2
              staking pool providers. We provide hosting infrastructure under
              these pools to offer Ethereum2 validator staking services.
              Combined with OpenMEV, we are able to offer a high-performing,
              low-cost, and secure solution for Ethereum2 staking.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
