import {
  DesignSystemProvider,
  darkTheme,
  globalCss,
} from '@modulz/design-system';

import { AppProps } from 'next/app';
import { DocsPage } from '@components/DocsPage';
import { Footer } from '@components/Footer';
import React from 'react';
import { ThemeProvider } from 'next-themes';
import { useAnalytics } from '@lib/analytics';
import { useRouter } from 'next/router';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  body: {
    margin: 0,
    color: '$hiContrast',
    backgroundColor: '$loContrast',
    fontFamily: '$untitled',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    '.dark-theme &': {
      backgroundColor: '$grey5',
    },
  },

  html: {
    overflowX: 'hidden',
  },

  svg: {
    display: 'block',
    verticalAlign: 'middle',
  },

  'pre, code': { margin: 0, fontFamily: '$mono' },

  '::selection': {
    backgroundColor: '$violetA5',
    color: '$violet12',
  },

  '#__next': {
    position: 'relative',
    zIndex: 0,
  },

  'h1, h2, h3, h4, h5': { fontWeight: 500 },
});

function App({ Component, pageProps }: AppProps) {
  globalStyles();

  const router = useRouter();

  useAnalytics();

  const isDocs = router.pathname.includes('/docs');

  return (
    <DesignSystemProvider>
      <ThemeProvider
        disableTransitionOnChange
        attribute="class"
        value={{ light: 'light-theme', dark: darkTheme.className }}
        defaultTheme="light"
      >
        {isDocs ? (
          <DocsPage>
            <Component {...pageProps} />
          </DocsPage>
        ) : (
          <Component {...pageProps} />
        )}
        {!isDocs && <Footer />}
      </ThemeProvider>
    </DesignSystemProvider>
  );
}

export default App;
