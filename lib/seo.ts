import pathToUrl from 'utils/pathToUrl';

import type { DefaultSeoProps, NextSeoProps } from 'next-seo';

export const defaultSeoProps: DefaultSeoProps = {
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: pathToUrl('/'),
    site_name: 'skyizwhite',
    images: [
      {
        url: pathToUrl('/skyizwhite.webp'),
        width: 500,
        height: 500,
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
};

export const TopSeoProps: NextSeoProps = (() => {
  const title = 'skyizwhite';
  const description =
    'pakuのポートフォリオサイトです。自己紹介やこれまでの経歴、ブログ等のオリジナルコンテンツを発信しています。';

  return {
    title,
    description,
    openGraph: { title, description, url: pathToUrl('/') },
  };
})();
