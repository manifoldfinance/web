import { styled } from '@modulz/design-system';

export const HomepageButton = styled('button', {
  appearance: 'none',
  border: '0',
  outline: 'none',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  backgroundColor: 'transparent',
  fontFamily: '$untitled',
  borderRadius: '9999px',
  lineHeight: 1,
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',
  fontSize: '$3',
  height: '$6',
  px: '$3',
  transition: 'background-color 75ms ease',

  variants: {
    color: {
      gray: {
        color: '$slate11',
        '&:hover': {
          backgroundColor: '$slate5',
        },
        '&:focus': {
          boxShadow: '0 0 0 1px $colors$slate8, inset 0 0 0 1px $colors$slate8',
        },
      },

      indigo: {
        backgroundColor: '$indigo4',
        color: '$indigo11',
        '&:hover': {
          backgroundColor: '$indigo5',
        },
        '&:active': {
          backgroundColor: '$indigo6',
        },
        '&:focus': {
          boxShadow:
            '0 0 0 1px $colors$indigo8, inset 0 0 0 1px $colors$indigo8',
        },
      },
    },
  },

  defaultVariants: {
    color: 'gray',
  },
});
