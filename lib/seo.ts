import pathToUrl from 'utils/pathToUrl';

import type { DefaultSeoProps, NextSeoProps } from 'next-seo';

export const defaultSeoProps: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: pathToUrl('/'),
    site_name: 'skyizwhite.dev',
    images: [
      {
        url: pathToUrl('/images/og.webp'),
        width: 1200,
        height: 630,
        alt: 'skyizwhite',
        type: 'image/webp',
      },
    ],
  },
  twitter: {
    site: process.env.twitterSite,
    cardType: 'summary',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: pathToUrl('/favicon.ico'),
    },
  ],
  additionalMetaTags: [
    {
      property: 'og:image',
      content: pathToUrl('/images/og-twitter.webp'),
    },
  ],
};

export const HomeSeoProps: NextSeoProps = (() => {
  const title = 'skyizwhite.dev';
  const description =
    'pakuのポートフォリオサイトです。自己紹介やこれまでの経歴、ブログ等のオリジナルコンテンツを発信しています。';

  return {
    title,
    description,
    openGraph: { title, description, url: pathToUrl('/') },
  };
})();
