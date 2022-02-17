import {
  ArrowRightIcon,
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
} from '@modulz/radix-icons';
import {
  Box,
  Code,
  Container,
  Flex,
  Grid,
  Heading,
  IconButton,
  Paragraph,
  Section,
  Text,
  Tooltip,
  theme,
} from '@modulz/design-system';

import { HomepageButton } from '@components/HomepageButton';
import NextLink from 'next/link';
import React from 'react';
import copy from 'copy-to-clipboard';

export function Hero() {
  const [hasCopied, setHasCopied] = React.useState(false);

  return (
    <Section
      size={{
        '@initial': '2',
        '@bp1': '3',
      }}
      css={{
        pt: '$3',
        '@bp2': {
          pt: '$6',
        },
      }}
    >
      <Container size="3">
        <Heading
          size="4"
          css={{
            mb: '$3',
            '@bp1': {
              pr: 100,
            },
            '@bp2': {
              ta: 'left',
              px: 180,
            },
            '@bp3': {
              px: 200,
            },
          }}
        >
          Maximal <br />
          Extractable Opportunities
        </Heading>
        <Paragraph
          size="2"
          css={{
            mb: '$6',
            '@bp2': {
              mx: 230,
              ta: 'left',
              mb: '$7',
            },
          }}
        >
          Manifold enables capital to capitalize on opportunity in decentralized
          financial markets.
        </Paragraph>
        <Flex css={{ '@bp2': { jc: 'center', my: '$7' } }}>
          <NextLink href="/docs" passHref>
            <HomepageButton as="a" color="violet" css={{ mr: '$3' }}>
              Documentation
              <Box css={{ ml: '$1' }}>
                <ArrowRightIcon />
              </Box>
            </HomepageButton>
          </NextLink>
          <HomepageButton
            as="a"
            href="https://github.com/manifoldfinance"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
            <Box css={{ ml: '$1' }}>
              <ExternalLinkIcon />
            </Box>
          </HomepageButton>
        </Flex>
      </Container>

      <Container size="3">
        <Grid
          css={{
            gap: '$6',
            gridTemplateColumns: '1fr',
            '@bp1': {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr',
            },
            '@bp2': {
              gap: '$7',
              gridTemplateColumns: '1fr 1fr 1fr 1fr',
            },
          }}
        >
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 10.8333L14.1667 0.833328L4.91669 14.1667H13L10.8334 24.1667L20.0834 10.8333H12Z"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.15"
                  d="M12 10.8333L14.1667 0.833328L4.91669 14.1667H13L10.8334 24.1667L20.0834 10.8333H12Z"
                  fill={theme.colors.violet11.computedValue}
                />
              </svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Performant
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              Zero-configuration for end users: works without having to change
              any settings
            </Text>
          </Box>
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8333 3.5H21.5H23.1667M21.5 1.83334V5.16667"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.8333 11.8333H21.5H23.1667M21.5 10.1667V13.5"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.5 3.5H13.1667H14.8333M13.1667 1.83334V5.16667"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  x="1.34436"
                  y="21.7846"
                  width="23.25"
                  height="2.60442"
                  transform="rotate(-45 1.34436 21.7846)"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <rect
                  opacity="0.1"
                  x="2.22824"
                  y="21.7846"
                  width="22"
                  height="1.35442"
                  transform="rotate(-45 2.22824 21.7846)"
                  fill={theme.colors.violet11.computedValue}
                />
                <rect
                  opacity="0.15"
                  x="2.22824"
                  y="21.7846"
                  width="15.8968"
                  height="1.35442"
                  transform="rotate(-45 2.22824 21.7846)"
                  fill={theme.colors.violet11.computedValue}
                />
                <rect
                  x="1.34436"
                  y="21.7846"
                  width="17.1468"
                  height="2.60442"
                  transform="rotate(-45 1.34436 21.7846)"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Aggregation
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              Aggregated transactions are routed directly to endpoints like{' '}
              <Code>Flashbots</Code>, <Code>Eden Network</Code>, etc.
            </Text>
          </Box>
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.572 21.68L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.68C5.428 21.68 8 21.75 12.5 21.75C17 21.75 19.572 21.68 19.572 21.68Z"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.1"
                  d="M19.572 21.18L19.94 2.83C19.94 2.83 18 2.25 12.5 2.25C7 2.25 5.06 2.83 5.06 2.83L5.428 21.18C5.428 21.18 8 21.75 12.5 21.75C17 21.75 19.572 21.18 19.572 21.18Z"
                  fill={theme.colors.violet11.computedValue}
                />
                <path
                  opacity="0.15"
                  d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z"
                  fill={theme.colors.violet11.computedValue}
                />
                <path
                  d="M12.5 21.75C17 21.75 19.572 21.43 19.572 21.43L19.6458 17.5C19.6458 17.5 17.5 18 12.5 18C7.50001 18 5.3542 17.5 5.3542 17.5L5.428 21.43C5.428 21.43 8.00001 21.75 12.5 21.75Z"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1.34 20.94C1.34 20.94 4.44 21.8 12.5 21.8C20.56 21.8 23.66 20.94 23.66 20.94"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.67"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Incentives
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              End users can get rebated their transaction cost or Protocol can
              direct funds to expand incentive programs.
            </Text>
          </Box>
          <Box>
            <Flex
              css={{
                ai: 'center',
                jc: 'center',
                width: '$7',
                height: '$7',
                borderRadius: '$round',
                backgroundColor: '$violet5',
                color: '$violet10',
                mb: '$4',
              }}
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.19074 3.12218C8.53437 3.15491 8.83946 2.90287 8.87218 2.55925C8.90491 2.21563 8.65288 1.91054 8.30926 1.87781L8.19074 3.12218ZM0.495758 11.9172C0.173891 12.0419 0.0140532 12.4039 0.13875 12.7258C0.263448 13.0476 0.62546 13.2075 0.947327 13.0828L0.495758 11.9172ZM8.30926 1.87781C6.10262 1.66765 4.69533 1.96705 3.94984 2.91423C3.58454 3.37835 3.43906 3.92848 3.38581 4.46734C3.33307 5.00093 3.36629 5.58109 3.40414 6.13626C3.48315 7.29507 3.5787 8.39541 3.24981 9.39439C2.94162 10.3305 2.23022 11.2452 0.495758 11.9172L0.947327 13.0828C2.97709 12.2964 3.99512 11.1278 4.43712 9.78528C4.85842 8.50562 4.72493 7.132 4.65125 6.05123C4.61275 5.48661 4.58871 5.00557 4.62975 4.59027C4.67027 4.18023 4.7696 3.89377 4.93209 3.68733C5.24217 3.29336 6.02238 2.91567 8.19074 3.12218L8.30926 1.87781Z"
                  fill={theme.colors.violet11.computedValue}
                />
                <path
                  d="M8.19074 21.8778C8.53437 21.8451 8.83946 22.0971 8.87218 22.4407C8.90491 22.7844 8.65288 23.0895 8.30926 23.1222L8.19074 21.8778ZM0.495758 13.0828C0.173891 12.9581 0.0140532 12.5961 0.13875 12.2742C0.263448 11.9524 0.62546 11.7925 0.947327 11.9172L0.495758 13.0828ZM8.30926 23.1222C6.10262 23.3323 4.69533 23.033 3.94984 22.0858C3.58454 21.6216 3.43906 21.0715 3.38581 20.5327C3.33307 19.9991 3.36629 19.4189 3.40414 18.8637C3.48315 17.7049 3.5787 16.6046 3.24981 15.6056C2.94162 14.6695 2.23022 13.7548 0.495758 13.0828L0.947327 11.9172C2.97709 12.7036 3.99512 13.8722 4.43712 15.2147C4.85842 16.4944 4.72493 17.868 4.65125 18.9488C4.61275 19.5134 4.58871 19.9944 4.62975 20.4097C4.67027 20.8198 4.7696 21.1062 4.93209 21.3127C5.24217 21.7066 6.02238 22.0843 8.19074 21.8778L8.30926 23.1222Z"
                  fill={theme.colors.violet11.computedValue}
                />
                <path
                  d="M16.8093 3.12218C16.4656 3.15491 16.1605 2.90287 16.1278 2.55925C16.0951 2.21563 16.3471 1.91054 16.6907 1.87781L16.8093 3.12218ZM24.5042 11.9172C24.8261 12.0419 24.9859 12.4039 24.8612 12.7258C24.7366 13.0476 24.3745 13.2075 24.0527 13.0828L24.5042 11.9172ZM16.6907 1.87781C18.8974 1.66765 20.3047 1.96705 21.0502 2.91423C21.4155 3.37835 21.5609 3.92848 21.6142 4.46734C21.6669 5.00093 21.6337 5.58109 21.5959 6.13626C21.5169 7.29507 21.4213 8.39541 21.7502 9.39439C22.0584 10.3305 22.7698 11.2452 24.5042 11.9172L24.0527 13.0828C22.0229 12.2964 21.0049 11.1278 20.5629 9.78528C20.1416 8.50562 20.2751 7.132 20.3488 6.05123C20.3872 5.48661 20.4113 5.00557 20.3703 4.59027C20.3297 4.18023 20.2304 3.89377 20.0679 3.68733C19.7578 3.29336 18.9776 2.91567 16.8093 3.12218L16.6907 1.87781Z"
                  fill={theme.colors.violet11.computedValue}
                />
                <path
                  d="M16.8093 21.8778C16.4656 21.8451 16.1605 22.0971 16.1278 22.4407C16.0951 22.7844 16.3471 23.0895 16.6907 23.1222L16.8093 21.8778ZM24.5042 13.0828C24.8261 12.9581 24.9859 12.5961 24.8612 12.2742C24.7366 11.9524 24.3745 11.7925 24.0527 11.9172L24.5042 13.0828ZM16.6907 23.1222C18.8974 23.3323 20.3047 23.033 21.0502 22.0858C21.4155 21.6216 21.5609 21.0715 21.6142 20.5327C21.6669 19.9991 21.6337 19.4189 21.5959 18.8637C21.5169 17.7049 21.4213 16.6046 21.7502 15.6056C22.0584 14.6695 22.7698 13.7548 24.5042 13.0828L24.0527 11.9172C22.0229 12.7036 21.0049 13.8722 20.5629 15.2147C20.1416 16.4944 20.2751 17.868 20.3488 18.9488C20.3872 19.5134 20.4113 19.9944 20.3703 20.4097C20.3297 20.8198 20.2304 21.1062 20.0679 21.3127C19.7578 21.7066 18.9776 22.0843 16.8093 21.8778L16.6907 23.1222Z"
                  fill={theme.colors.violet11.computedValue}
                />
                <path
                  d="M12.5 11.84V17.0833M12.5 11.84L8.1 9.97M12.5 11.84L16.9 9.97M12.5 17.0833L8.1 15.03V9.97M12.5 17.0833L16.9 15.03V9.97M8.1 9.97L12.5 7.91666L16.9 9.97"
                  stroke={theme.colors.violet11.computedValue}
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  opacity="0.15"
                  d="M12.5 17.0833L8.1 15.03V9.97L12.5 7.91666L16.9 9.97V15.03L12.5 17.0833Z"
                  fill={theme.colors.violet11.computedValue}
                />
              </svg>
            </Flex>
            <Heading as="h4" css={{ mb: '$2' }}>
              Seamless
            </Heading>
            <Text
              as="p"
              size={{
                '@initial': '4',
                '@bp1': '3',
              }}
              variant="gray"
              css={{
                lineHeight: '25px',
              }}
            >
              Protection from MEV to trade optimization, SecureRPC is more than
              an ordinary web3 provider - its a web3 enabler.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
}
