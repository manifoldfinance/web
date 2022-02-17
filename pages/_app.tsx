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
  // Commenting out while we fix flashing issues
  // '@font-face': [
  //   {
  //     fontFamily: 'Untitled Sans',
  //     fontWeight: '400',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/s/UntitledSansWeb-Regular.woff2) format("woff2"), url(/fonts/UntitledSansWeb-Regular.woff) format("woff")',
  //   },
  //   {
  //     fontFamily: 'Untitled Sans',
  //     fontWeight: '500',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/UntitledSansWeb-Medium.woff2) format("woff2"), url(/fonts/UntitledSansWeb-Medium.woff) format("woff")',
  //   },
  //   {
  //     fontFamily: 'Söhne Mono',
  //     fontWeight: 'normal',
  //     fontStyle: 'normal',
  //     fontDisplay: 'swap',
  //     src:
  //       'url(/fonts/soehne-mono-web-buch.woff2) format("woff2"), url(/fonts/soehne-mono-web-buch.woff) format("woff")',
  //   },
  // ],

  html: {
    overflowX: 'hidden',
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
      backgroundColor: '$mauve1',
    },
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
        defaultTheme="dark"
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
