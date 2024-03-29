import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';

type TitleAndMetaTagsProps = {
  url?: string;
  pathname?: string;
  title?: string;
  description?: string;
  poster?: string;
};

export function TitleAndMetaTags({
  url = 'https://manifoldfinance.com',
  pathname,
  title = 'Manifold Finance',
  description = 'Manifold Finance connects you to decentralized finance opportunities.',
  poster,
}: TitleAndMetaTagsProps) {
  const router = useRouter();

  const image = poster ? `${url}/${poster}` : `${url}/social.png`;
  const path = pathname || router.pathname;

  return (
    <Head>
     <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>{title}</title>

      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="description" content={description} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌀</text></svg>"
      />

      <meta property="og:url" content={`${url}${path}`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:site" content="@foldfinance" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
}
