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
import { StatsSection } from '@components/marketing/StatsSection';
import { AdoptionSection } from '@components/marketing/AdoptionSection';
import { IntroSection } from '@components/marketing/IntroSection';
//import { CodeDemo } from '@components/CodeDemo';
import { Community } from '@components/Community';
import { FeaturesGrid } from '@components/FeaturesGrid';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import React from 'react';
//import { StarFilledIcon } from '@modulz/radix-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';
import { BenefitsSection } from '@components/marketing/BenefitsSection';

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
import "@openmev/src/Sync.sol";

address internal _syncAddress;
function doMethod() external payable {
  address to;
  bytes memory data;
  address tokenAddress;
  uint256 tokenAmount;
  ISync(_syncAddress).invoke(to, data, tokenAddress, tokenAmount);
}
`;

const tokensCodeHighlights = {
  one: '2-7',
  two: '9-11',
};

const utilsCode = `
interface IERC3156FlashLender {

  /**
   * @dev The amount of currency available to be lent.
   * @param token The loan currency.
   * @return The amount of %token% that can be borrowed.
   */
  function maxFlashLoan(
      address token
  ) external view returns (uint256);

  function flashFee(
      address token,
      uint256 amount
  ) external view returns (uint256);

  function flashLoan(
      IERC3156FlashBorrower receiver,
      address token,
      uint256 amount,
      bytes calldata data
  ) external returns (bool);
}
`;

const utilsCodeHighlights = {
  one: '1-14',
  two: '16-27',
  three: '29-31',
};

const demoCode3 = `
import "@openmev/src/Sync.sol";

address internal _syncAddress;
function doMethod() external payable {
  address to;
  bytes memory data;
  address tokenAddress;
  uint256 tokenAmount;
  ISync(_syncAddress).invoke(to, data, tokenAddress, tokenAmount);
}
`;

const code3Highlights = {
  one: '1-23',
  two: '20',
};

const demoCode4 = `
import "@openmev/src/Sync.sol";

address internal _syncAddress;
function doMethod() external payable {
  address to;
  bytes memory data;
  address tokenAddress;
  uint256 tokenAmount;
  ISync(_syncAddress).invoke(to, data, tokenAddress, tokenAmount);
}
`;

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
          'top': 0,
          'right': 0,
          'bottom': 0,
          'left': 0,
          'position': 'absolute',
          'zIndex': '-1',
          'background':
            'radial-gradient(circle at top left, $slate4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $sage4, rgba(255, 255, 255, 0) 15%)',
          '@bp2': {
            background:
              'radial-gradient(circle at 15% 50%, $grey4, rgba(255, 255, 255, 0) 25%), radial-gradient(circle at 85% 30%, $sage4, rgba(255, 255, 255, 0) 25%)',
          },
        }}
      />
      <Header />
      <Hero />

      <IntroSection />

      <Flex css={{ justifyContent: 'center' }}>
        <Separator size="2" />
      </Flex>

      {/** comment  */}
      <Box css={{ overflow: 'hidden' }}>
        <BenefitsSection />
        <StatsSection />
      </Box>

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
              'gap': '$6',
              'ai': 'center',
              'gridTemplateColumns': 'repeat(1, minmax(0, 1fr))',
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
                  Supports: Flashbots, Eden Network, Ethermine
                </Code>
              </Box>
              <Text
                size="8"
                css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}
              >
                Recapture MEV back to your end users, seamlessly
              </Text>
              <Text
                size="4"
                css={{ 'lineHeight': '27px', '@bp2': { mb: '$6' } }}
              >
                Protection from arbitrage to trade optimization. Privacy,
                throughput, uptime, and unique features like Account Abstraction
                support makes SecureRPC more than an ordinary web3 provider -
                its a web3 enabler.
              </Text>
              <Box
                css={{
                  'display': 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setTokensCodeActiveHighlight('two')}
                  variant={tokensActiveHighlight === 'two' ? 'active' : 'ghost'}
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    OpenMEV enabled APY
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Validator rewards also include additional MEV rewards not
                    available to the public mempool through our OpenMEV
                    strategy.
                  </Text>
                </Card>
              </Box>
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
                  Seamless slashing, volatility and uptime hedge
                </Code>
              </Box>
              <Text
                size="8"
                css={{ fontWeight: 500, lineHeight: '40px', mb: '$4' }}
              >
                Block Optionality makes slashing risk nearly zero.
              </Text>
              <Text
                size="4"
                css={{ 'lineHeight': '27px', '@bp2': { mb: '$6' } }}
              >
                Block Optionality means a portion of all blocks produced by
                Manifold are auctioned off as a forward deliverable contract to
                end-users like MEV Searchers, Traders, Institutions, etc.
              </Text>
              <Box
                css={{
                  'display': 'none',
                  '@bp2': {
                    display: 'block',
                    mx: '-$3',
                  },
                }}
              >
                <Card
                  as="button"
                  onMouseDown={() => setUtilsCodeActiveHighlight('two')}
                  variant={
                    utilsCodeActiveHighlight === 'two' ? 'active' : 'ghost'
                  }
                  css={{ p: '$3', mb: '$2', width: '100%' }}
                >
                  <Text css={{ fontWeight: 500, lineHeight: '22px', mb: '$1' }}>
                    Blockspace Futures provide additional hedge
                  </Text>
                  <Text variant="gray" css={{ lineHeight: '22px' }}>
                    Blockspace futures reduce operational risks and provide an
                    additional source of profits. Combined with exclusive MEV
                    profits and hedging slashing risk means higher APY's with
                    reduced risk and exposure.
                  </Text>
                </Card>
              </Box>
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

      <AdoptionSection />

      <Community />
    </Box>
  );
}
