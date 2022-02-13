import React from 'react';
import { Text, Box, Heading, Link, styled } from '@modulz/design-system';
import { ScrollArea } from '@components/ScrollArea';

const QuickNavUl = styled('ul', {
  listStyleType: 'none',
  p: 0,
  m: 0,
});

const QuickNavLink = styled(Link, {
  color: '$slate11',
  display: 'inline-flex',
  my: '$1',

  '[data-level="2"] ~ [data-level="3"] &': {
    marginLeft: '$5',
  },
});

const QuickNavText = styled(Text, {
  color: 'inherit',
  lineHeight: '20px',
});

export function QuickNav() {
  const [headings, setHeadings] = React.useState<HTMLHeadingElement[]>([]);

  React.useEffect(() => {
    const headingElements: HTMLHeadingElement[] = Array.from(
      document.querySelectorAll('[data-heading]'),
    );

    setHeadings(headingElements);
  }, []);

  // Function to determine the Heading Level based on `nodeName` (H2, H3, etc)
  const getLevel = (nodeName) => {
    return Number(nodeName.replace('H', ''));
  };

  return (
    <ScrollArea>
      <Box
        as="nav"
        aria-labelledby="site-quick-nav-heading"
        css={{
          padding: '$5',
          py: 68,
          display: headings.length === 0 ? 'none' : 'block',
        }}
      >
        <Heading size="1" css={{ mb: '$3' }} id="site-quick-nav-heading">
          Quick nav
        </Heading>
        <QuickNavUl>
          {headings.map(({ id, nodeName, innerText }) => {
            return (
              <Box as="li" key={id} data-level={getLevel(nodeName)}>
                <QuickNavLink variant="subtle" href={`#${id}`}>
                  <QuickNavText size="2">{innerText}</QuickNavText>
                </QuickNavLink>
              </Box>
            );
          })}
        </QuickNavUl>
      </Box>
    </ScrollArea>
  );
}
