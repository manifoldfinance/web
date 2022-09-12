import { Box, Container, Grid, Heading, Paragraph, Section, Separator, Text } from '@modulz/design-system';

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
          <MarketingCaption css={{ mb: '$1' }}>
            Continuously optimize fees and incentives in your protocol
          </MarketingCaption>
          <Heading as="h2" size="3" css={{ mb: '$4' }}>
            Resist the tempting abstractions and false prophets: the only prophet that brings more profits to your protocol.
          </Heading>
          <NextLink href="https://notionforms.io/forms/dacf20c5-d93b-4552-8748-5deab183901f" passHref>
            <MarketingButton as="a" icon={ArrowRightIcon}>
              Get started today
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
              Confidence in incentives
            </Text>
            <Paragraph>
              Ensure your earned surplus is being allocated optimally to maximize returns for Stakeholders and LPs.
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
              Use recaptured MEV to optimize protocol incentives and drive gains to your most important metrics. Always
              incentive aligned to protocol. 
              
              * Except provided in situatations where players are sufficiently patient, there exists a Nash Equilibrium where collision may arise.
             
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
