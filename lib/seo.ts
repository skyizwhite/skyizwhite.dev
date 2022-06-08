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
        url: pathToUrl('/images/ogp.webp'),
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
      content: pathToUrl('/images/ogp-twitter.webp'),
    },
  ],
};

export const TopSeoProps: NextSeoProps = (() => {
  const title = 'skyizwhite';
  const description = 'pakuのポートフォリオサイトです。自己紹介や成果物、ブログ等のオリジナルコンテンツを発信しています。';

  return {
    title,
    description,
    openGraph: { title, description, url: pathToUrl('/') },
  };
})();

export const AboutSeoProps: NextSeoProps = (() => {
  const title = 'About - skyizwhite';
  const description = 'pakuの自己紹介ページです。経歴や資格、スキルなどを公開しています。';

  return { title, description, openGraph: { title, description, url: pathToUrl('/about') } };
})();
