import {
  Box,
  Card,
  Code,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Paragraph,
  Section,
  Separator,
  Text,
  theme,
} from '@modulz/design-system';

import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { CodeDemo } from '@components/CodeDemo';
import { Community } from '@components/Community';
import { FeaturesGrid } from '@components/FeaturesGrid';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import React from 'react';
import { StarFilledIcon } from '@modulz/radix-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';

//  extends React.HTMLAttributes<any>

const variantsCode = `
{
});`;

const variantsCodeHighlights = {
  one: '4-21',
  two: '23-29',
  three: '31-34',
};

const themingCode = `

function isSecureRPC() external view returns (bool) {
  return false;
}

AcknowledgeConnection {
string[] public ackMessages ;

function ack (string memory ackMsg)public
{
  ackMessages.push(ackMsg);
}

});`;

const themingCodeHighlights = {
  one: '3-20',
  two: '23-26',
  three: '31-48',
};

const tokensCode = `
const connectors = ({ chainId }: { chainId?: number | undefined }) => {
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: {
          1: "https://eth-mainnet.securerpc.com/v1/<apiKey>",
        },
      },
    }),
  ]
};
`;

const tokensCodeHighlights = {
  one: '2-7',
  two: '9-11',
};

const utilsCode = `
const connectors = ({ chainId }: { chainId?: number | undefined }) => {
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: {
          1: "https://eth-mainnet.securerpc.com/v1/<apiKey>",
        },
      },
    }),
  ]
};`;

const utilsCodeHighlights = {
  one: '1-14',
  two: '16-27',
  three: '29-31',
};

const demoCode3 = `
const connectors = ({ chainId }: { chainId?: number | undefined }) => {
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: {
          1: "https://eth-mainnet.securerpc.com/v1/<apiKey>",
        },
      },
    }),
  ]
};`;

const code3Highlights = {
  one: '1-23',
  two: '20',
};

const demoCode4 = `
const connectors = ({ chainId }: { chainId?: number | undefined }) => {
  return [
    new InjectedConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
        rpc: {
          1: "https://eth-mainnet.securerpc.com/v1/<apiKey>",
        },
      },
    }),
  ]
};;`;

export default function Home() {
  const [variantsCodeActiveHighlight, setVariantsCodeActiveHighlight] =
    React.useState('one');
  const [themingCodeActiveHighlight, setThemingCodeActiveHighlight] =
    React.useState('one');
  const [utilsCodeActiveHighlight, setUtilsCodeActiveHighlight] =
    React.useState('one');
  const [tokensActiveHighlight, setTokensCodeActiveHighlight] =
    React.useState('one');

  return (
    <Box>
      <TitleAndMetaTags title="Manifold Finance - Connect to better opportunities" />
      <Box
        css={{
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          position: 'absolute',
          zIndex: '-1',
          background:
            'radial-gradient(circle at top left, $cyan4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $violet4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $cyan4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />
      <Header />
      <Hero />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="3">
          <Heading
            as="h3"
            size="3"
            css={{ fontWeight: 500, ta: 'center', mb: '$8' }}
          >
            Stats at a glance
          </Heading>
          <Grid
            css={{
              ai: 'center',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '$7',
              '@bp2': {
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '$9',
              },
            }}
          >
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (Sushi)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                9.1
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (Total)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                9.3
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundles Rejected
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                3.4%
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Staking Payouts
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                ∞
              </Text>
            </Box>
          </Grid>
        </Container>
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <Section size={{ '@initial': '2', '@bp1': '3' }}>
        <Container size="3">
          <Grid
            css={{
              gap: '$6',
              ai: 'center',
              gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
              '@bp2': { gridTemplateColumns: 'repeat(2, 1fr)', gap: '$9' },
            }}
          >
            <Box>
              <Box css={{ mb: '$5' }}>
                <Code
                  css={{
                    mb: '$5',
                    fontFamily: '$mono',
                    fontSize: '$4',
                    backgroundColor: '$yellow4',
                    color: '$yellow11',
                  }}
                >
                  Supports: Flashbots, Eden Network, Ethermine + more
                </Code>
              </Box>
              <Text
                size="8"
                css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}
              >
                Recapture MEV back to your end users, seamlessly
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                Protection from arbitrage to trade optimization. Privacy,
                throughput, uptime, and unique features like Account Abstraction
                support makes SecureRPC more than an ordinary web3 provider -
                its a web3 enabler.
              </Text>
              <Box
                css={{
                  display: 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setTokensCodeActiveHighlight('one')}
                  variant={tokensActiveHighlight === 'one' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Smart error reporting
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Rejections and errors automatically populated back to the
                    user.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setTokensCodeActiveHighlight('two')}
                  variant={tokensActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Account abstraction support
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Offer transaction parallelism through our API for
                    interacting with accounts.
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="yellow"
                mode="interactive"
                line={tokensCodeHighlights[tokensActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={tokensCode}
              />
            </Box>

            <Box>
              <Box css={{ mb: '$5' }}>
                <Code
                  css={{
                    mb: '$5',
                    fontFamily: '$mono',
                    fontSize: '$4',
                    backgroundColor: '$blue4',
                    color: '$blue11',
                  }}
                >
                  Flashbots, Eden Network and Ethermine
                </Code>
              </Box>
              <Text
                size="8"
                css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}
              >
                Rewards for community; Incentives for capital
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                Continuously optimize fees and incentives in your protocol to
                grow metrics important for your protocol. We also monitor
                external transactions and grow organic volume in your LP pools
                by providing additional incentives.
              </Text>
              <Box
                css={{
                  display: 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('one')}
                  variant={
                    utilsCodeActiveHighlight === 'one' ? 'active' : 'ghost'
                  }
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Gas Pricing API
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Researched and proven in production to be the most accurate.
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('two')}
                  variant={
                    utilsCodeActiveHighlight === 'two' ? 'active' : 'ghost'
                  }
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Auction access twice daily
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Call market opens twice daily for block producers to bid on
                  </Text>
                </Card>
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('three')}
                  variant={
                    utilsCodeActiveHighlight === 'three' ? 'active' : 'ghost'
                  }
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    On chain protocol payments
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Withdraw weekly, or borrow against current holdings
                  </Text>
                </Card>
              </Box>
            </Box>
            <Box>
              <CodeDemo
                language="jsx"
                variant="blue"
                mode="interactive"
                line={utilsCodeHighlights[utilsCodeActiveHighlight]}
                css={{
                  maxHeight: 700,
                }}
                value={utilsCode}
              />
            </Box>
          </Grid>
        </Container>

        {/* <Container size="3">
          <Grid
            css={{
              gap: '$9',
              ai: 'center',
                '@initial': { gridTemplateColumns: 'repeat(1, minmax(0, 1fr))' },
                '@bp2': { gridTemplateColumns: 'repeat(3, 1fr)' },
            }}
          >
            <Box>
              <Heading>Conditions</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeDemo
                  language="jsx"
                  variant="light"
                  css={{
                    maxHeight: 700,
                  }}
                  value={demoCode4}
                />
              </Box>
            </Box>
            <Box>
              <Heading>Override styles</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeDemo
                  language="jsx"
                  variant="light"
                  css={{
                    maxHeight: 700,
                  }}
                  value={demoCode4}
                />
              </Box>
            </Box>
            <Box>
              <Heading>Override styles</Heading>
              <Paragraph>
                Stitches avoids unnecessary prop interpolations at runtime, making it significantly
                more performant than other styling libraries.
              </Paragraph>
              <Box>
                <CodeDemo
                  language="jsx"
                  variant="light"
                  css={{
                    maxHeight: 700,
                  }}
                  value={demoCode4}
                />
              </Box>
            </Box>
          </Grid>
        </Container> */}
      </Section>

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <FeaturesGrid />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      <AdoptionSection />

      <Community />
    </Box>
  );
}
