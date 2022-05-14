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
import { violet, blackA } from '@radix-ui/colors';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import { styled } from '@stitches/react';

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',
  width: 45,
  height: 45,
  borderRadius: '100%',
  backgroundColor: blackA.blackA3,
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
});

export const Avatar = StyledAvatar;
export const AvatarImage = StyledImage;

export const PartnerSection = () => {
  return (
    <Section
      css={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Incentive aligned partnerships</MarketingCaption>

          <Heading as="h2" size="3">
            Sushiswap
            <br />
            Captures arbitrage back to its users
          </Heading>
        </Box>

        {/**
        <Avatar>
  <AvatarImage
    src="https://raw.githubusercontent.com/sushiswap/art/master/sushi/logo-64x64.png"
    alt="Sushi"
  />
</Avatar>
 */}
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
              OpenMEV enables Sushiswap to capture MEV back
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              The SushiSwap integration provides a service that realizes profit by transaction batching for the purposes
              of arbitrage by controlling transaction ordering. OpenMEV provides a credibly neutral platform that
              enables aggregation of transactions (batching) for the purposes of extracting MEV profits and returning
              them back to the traders.
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
              Rebate Gas costs to users + Incentivize Liquidity
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              The Lido and Rocketpool protocols are the premier ethereum2 staking pool providers. We provide hosting
              infrastructure under these pools to offer Ethereum2 validator staking services. Combined with OpenMEV, we
              are able to offer a high-performing, low-cost, and secure solution for Ethereum2 staking.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
