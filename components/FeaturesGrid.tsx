import { Box, Code, Container, Flex, Grid, Heading, Paragraph, Section, Text } from '@modulz/design-system';

export function FeaturesGrid() {
  return (
    <Section size={{ '@initial': '2', '@bp1': '3' }}>
      <Container size="2">
        <Heading size="3" css={{ ta: 'center', mb: '$2' }}>
          Features
        </Heading>
        <Paragraph size="2" css={{ ta: 'center', mb: '$8' }}>
          Protect your Protocol and your end users
        </Paragraph>

        <Grid
          css={{
            'gap': '$6',
            'gridTemplateColumns': '1fr',
            '@bp2': {
              gap: '$8',
              gridTemplateColumns: '1fr 1fr',
            },
          }}
        >
          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Bundled Transactions
            </Text>
            <Text as="p" size={{ '@initial': '4', '@bp2': '4' }} css={{ lineHeight: '27px', color: '$slate11' }}>
              Combine multiple transactions into a block transaction and the bundled transactions will be executed at
              the same time. Bundled txs maximize your earnings.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              No Charge on Failed Txs
            </Text>

            <Text as="p" size={{ '@initial': '4', '@bp2': '4' }} css={{ lineHeight: '27px', color: '$slate11' }}>
              Failed transactions will not be included in the packaged blocks and you will not have to pay for failed
              transactions.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Complete Privacy
            </Text>

            <Text as="p" size={{ '@initial': '4', '@bp2': '4' }} css={{ lineHeight: '27px', color: '$slate11' }}>
              From the time the transaction is initiated until the transaction is packaged and published on the
              blockchain, no one will know about your transaction information except yourself.
            </Text>
          </Box>

          <Box>
            <Text size="5" as="h4" css={{ lineHeight: 1, fontWeight: 500, mb: '$2' }}>
              Rejection and Error notifications
            </Text>

            <Text as="p" size={{ '@initial': '4', '@bp2': '4' }} css={{ lineHeight: '27px', color: '$slate11' }}>
              Transactions that get rejected or fail are populated back to the user. Transaction status is also
              queryable. Exception handling is built in to the protocol and configurable by the user.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}
