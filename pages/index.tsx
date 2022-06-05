import { NextSeo } from 'next-seo';

import Container from 'components/Container';
import { HomeSeoProps } from 'lib/seo';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <Container>
    <NextSeo {...HomeSeoProps} />
    <p>何も分からん</p>
  </Container>
);

export default Home;
