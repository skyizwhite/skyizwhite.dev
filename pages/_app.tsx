import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import NextNProgress from 'nextjs-progressbar';
import Div100vh from 'react-div-100vh';

import Layout from 'components/Layout';
import { defaultSeoProps } from 'lib/seo';
import 'styles/globals.css';
import pathToUrl from 'utils/pathToUrl';

import type { AppProps } from 'next/app';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const canonicalUrl = pathToUrl(router.asPath);

  return (
    <Div100vh>
      <NextNProgress color="#65c3c7" />
      <Layout>
        <DefaultSeo canonical={canonicalUrl} {...defaultSeoProps} />
        <Component {...pageProps} />
      </Layout>
    </Div100vh>
  );
};

export default MyApp;
