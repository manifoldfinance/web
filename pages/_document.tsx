import NextDocument, { Head, Html, Main, NextScript } from 'next/document';
import { gtagUrl, renderSnippet } from '@lib/metrics';
import Div100vh from 'react-div-100vh';
import React from 'react';
import { getCssText, reset } from '../stitches.config';

/**
 * Get the css and reset the internal css representation.
 * This is very *IMPORTANT* to do as the server might handle multiple requests
 * and we don't want to have the css accumulated from previous requests
 */
const getCssAndReset = () => {
  const css = getCssText();
  reset();
  return css;
};

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Div100vh>
          <Head>
            <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssAndReset() }} />
            <link
              rel="preload"
              href="/fonts/UntitledSansWeb-Regular.woff"
              as="font"
              type="font/woff"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/UntitledSansWeb-Regular.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/UntitledSansWeb-Medium.woff"
              as="font"
              type="font/woff"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/UntitledSansWeb-Medium.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/soehne-mono-web-buch.woff"
              as="font"
              type="font/woff"
              crossOrigin="anonymous"
            />
            <link
              rel="preload"
              href="/fonts/soehne-mono-web-buch.woff2"
              as="font"
              type="font/woff2"
              crossOrigin="anonymous"
            />
            <style
              dangerouslySetInnerHTML={{
                __html: `
@font-face {
  font-family: 'Untitled Sans';
  font-weight: 400;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Regular.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Regular.woff) format('woff');
}

@font-face {
  font-family: 'Untitled Sans';
  font-weight: 500;
  font-display: swap;
  src: url(/fonts/UntitledSansWeb-Medium.woff2) format('woff2'), url(/fonts/UntitledSansWeb-Medium.woff) format('woff');
}

@font-face {
  font-family: 'Söhne Mono';
  font-weight: normal;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/soehne-mono-web-buch.woff2') format('woff2'), url('/fonts/soehne-mono-web-buch.woff') format('woff');
}
`,
              }}
            />
            <script async src={gtagUrl} />
            <script dangerouslySetInnerHTML={{ __html: renderSnippet() }} />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Div100vh>
      </Html>
    );
  }
}
