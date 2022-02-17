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

import { AccessibilitySection } from '@components/marketing/AccessibilitySection';
import { CodeDemo } from '@components/CodeDemo';
import { Community } from '@components/Community';
import { FeaturesGrid } from '@components/FeaturesGrid';
import { Header } from '@components/Header';
import { Hero } from '@components/Hero';
import React from 'react';
import { StarFilledIcon } from '@modulz/radix-icons';
import { TitleAndMetaTags } from '@components/TitleAndMetaTags';

//  extends React.HTMLAttributes<any>

const variantsCode = `const Button = styled('button', {
  // base styles

  variants: {
    color: {
      gray: {
        backgroundColor: 'gainsboro',
      },
      blue: {
        backgroundColor: 'dodgerblue',
      },
    },
    size: {
      md: {
        height: '25px',
      },
      lg: {
        height: '35px',
      }
    }
  },

  compoundVariants: [{
    color: 'blue',
    size: 'lg',
    css: {
      backgroundColor: 'purple',
    }
  }],

  defaultVariants: {
    color: 'gray',
    size: 'md',
  }
});`;

const variantsCodeHighlights = {
  one: '4-21',
  two: '23-29',
  three: '31-34',
};

const themingCode = `    /// @notice Initializes contract, setting up initial contract permissions
/// @param _version Version number of Dispatcher
/// @param _queryEngine Address of query engine contract
/// @param _roleManager Address allowed to manage contract roles
/// @param _lpManager Address allowed to manage LP whitelist
/// @param _withdrawer Address allowed to withdraw profit from contract
/// @param _trader Address allowed to make trades via this contract
/// @param _supplier Address allowed to send opportunities to this contract
/// @param _initialMaxLiquidity Initial max liquidity allowed in contract
/// @param _lpWhitelist List of addresses that are allowed to provide liquidity to this contract
constructor(
    uint8 _version,
    address _queryEngine,
    address _roleManager,
    address _lpManager,
    address _withdrawer,
    address _trader,
    address _supplier,
    uint256 _initialMaxLiquidity,
    address[] memory _lpWhitelist
) {
    version = _version;
    queryEngine = IQueryEngine(_queryEngine);
    _setupRole(MANAGE_LP_ROLE, _lpManager);
    _setRoleAdmin(WHITELISTED_LP_ROLE, MANAGE_LP_ROLE);
    _setupRole(WITHDRAW_ROLE, _withdrawer);
    _setupRole(TRADER_ROLE, _trader);
    _setupRole(APPROVER_ROLE, _supplier);
    _setupRole(APPROVER_ROLE, _withdrawer);
    _setupRole(DEFAULT_ADMIN_ROLE, _roleManager);
    MAX_LIQUIDITY = _initialMaxLiquidity;
    for(uint i; i < _lpWhitelist.length; i++) {
        _setupRole(WHITELISTED_LP_ROLE, _lpWhitelist[i]);
    }
}
});`;

const themingCodeHighlights = {
  one: '3-20',
  two: '23-26',
  three: '31-48',
};

const tokensCode = `SecureRPC {

  function isSecureRPC() external view returns (bool) {
    return false;
  }

AcknowledgeConnection {
	string[] public ackMessages ;

	function ack (string memory ackMsg)public
	{
		ackMessages.push(ackMsg);
	}
}`;

const tokensCodeHighlights = {
  one: '2-7',
  two: '9-11',
};

const utilsCode = `
function totalBankrollRequested() public view returns (uint256 amount) {
  address[] memory allDispatchers = dispatcherFactory.dispatchers();
      for(uint i = 0; i < allDispatchers.length; i++) {
    IDispatcher dispatcher = IDispatcher(allDispatchers[i]);
      if (dispatcher.isWhitelistedLP(address(this))) {
        amount = amount + bankrollRequested(dispatcher);
        }
    }
}

function submitAsk(uint256 price, uint256 volume)
       external
        auctionAtStage(States.Open)
       returns (bool)
{
   require(
       (totalTokenBalance[msg.sender] -
           unavailableTokenBalance[msg.sender]) >= volume,
       "Token balance is not enough!"
   );
   uint256 _finalpriceUint;
   string memory _finalpriceString;

   OrderStruct memory removeObject = sellList[sellHead];
   uint256 _price = removeObject.Price;
   address _sender = removeObject.Sender;
   uint256 _volume = removeObject.Volume;

   if (sellTail == sellHead) {
       sellHead = 0;
       sellTail = 0;

   );
});`;

const utilsCodeHighlights = {
  one: '1-14',
  two: '16-27',
  three: '29-31',
};

const demoCode3 = `const { theme } = createStitches({

  /**
   * @notice Total amount of bankroll requested by Executors
   * @return amount Total bankroll requested
   */
   function totalBankrollRequested() public view returns (uint256 amount) {
   address[] memory allDispatchers = dispatcherFactory.dispatchers();
   for(uint i = 0; i < allDispatchers.length; i++) {
       IDispatcher dispatcher = IDispatcher(allDispatchers[i]);
       if (dispatcher.isWhitelistedLP(address(this))) {
           amount = amount + bankrollRequested(dispatcher);
           }
       }
   }

   function provideETHBankroll(address dispatcher) external payable {
    require(amountAvailableToBankroll(tx.origin, dispatcher) >= msg.value, "amount exceeds max");
    bankrollProvidedETH[tx.origin][dispatcher] = bankrollProvidedETH[tx.origin][dispatcher].add(msg.value);
    amountDeposited[tx.origin] = amountDeposited[tx.origin].add(msg.value);
    totalAmountDeposited = totalAmountDeposited.add(msg.value);
    IDispatcher(dispatcher).provideETHLiquidity{value:msg.value}();
    emit BankrollProvided(dispatcher, msg.sender, tx.origin, msg.value);
   }
});`;

const code3Highlights = {
  one: '1-23',
  two: '20',
};

const demoCode4 = `const { theme } = createStitches({
  theme: {
    fonts: {},
    space: {},
    sizes: {},
    fontSizes: {},
    radii: {},
    zIndices: {},
  }
});`;

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
            'radial-gradient(circle at top left, $violet4, rgba(255, 255, 255, 0) 15%), radial-gradient(circle at 80% 20%, $cyan4, rgba(255, 255, 255, 0) 15%)',
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
                Bundle size (Core)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                6.1kb
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Bundle size (React)
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                6.3kb
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Runtime interpolations
              </Text>
              <Text size="8" css={{ fontWeight: 500 }}>
                Zero
              </Text>
            </Box>
            <Box>
              <Text variant="gray" css={{ lineHeight: '20px', mb: '$3' }}>
                Variants
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
                  EDEN NETWORK/FLASHBOTS/ETHERMINE
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
                Recapture arbitrage to your end users, seamlessly
              </Text>
              <Text size="4" css={{ lineHeight: '27px', '@bp2': { mb: '$6' } }}>
                MEV: Maximal Extracted Value Maximal Extracted Value With
                improved transparency of profit opportunities and a reduction in
                information asymmetry, we connect with the leading Block
                Production pools to ensure efficient transaction protection and
                value maximization.
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

      <AccessibilitySection />

      <Community />
    </Box>
  );
}
