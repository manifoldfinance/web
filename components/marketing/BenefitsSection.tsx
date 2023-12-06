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
          <MarketingCaption css={{ mb: '$1' }}>+30,000 ETH Staked</MarketingCaption>
          <Heading as="h2" size="3">
            MEV Protocol
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
              mevETH LST
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              mevETH is a liquid staking protocol that focuses on improving MEV extraction to increase rewards for its
              validator set. We provide infrastructure under offer for their validator staking services.
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
              Vault Liquid Staking
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              mevETH utilizes the ERC4626 Vault contract to provide a liquid staking solution for ETH. This allows users
              to stake their ETH and receive rewards through a non-rebasing ERC4626 Vault.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
