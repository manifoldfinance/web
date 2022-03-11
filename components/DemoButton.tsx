import { styled } from '@modulz/design-system';

export const StyledButton = styled('button', {
  appearance: 'none',
  border: '0',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',

  fontFamily: '$untitled',
  borderRadius: '9999px',
  lineHeight: 1,
  fontWeight: 500,
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  userSelect: 'none',

  outline: 'none',

  variants: {
    color: {
      gray: {
        backgroundColor: '$slate5',
        color: '$hiContrast',
        '&:hover': {
          backgroundColor: '$slate7',
        },
      },

      indigo: {
        backgroundColor: '$indigo10',
        color: 'white',
        '&:hover': {
          backgroundColor: '$indigo11',
        },
      },
    },

    outlined: {
      true: {
        $$shadowColor: 'transparent',
        boxShadow: '0 0 0 1px $$shadowColor',
        backgroundColor: 'transparent',
      },
    },

    size: {
      small: {
        fontSize: '$2',
        height: '$5',
        px: '$2',
      },
      large: {
        fontSize: '$3',
        height: '$6',
        px: '$3',
      },
    },
  },

  compoundVariants: [
    {
      color: 'gray',
      outlined: true,
      css: {
        $$shadowColor: '$colors$slate7',
      },
    },
    {
      color: 'indigo',
      outlined: true,
      css: {
        $$shadowColor: '$colors$indigo11',
        color: '$indigo11',
        '&:hover': {
          color: 'white',
        },
      },
    },
  ],

  defaultVariants: {
    color: 'gray',
    size: 'large',
  },
});

export const DemoButton = (props) => (
  <StyledButton children="Button" {...props} />
);
