import { HandIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';

import { TopSeoProps } from 'lib/seo';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex items-center justify-center w-full h-full">
    <NextSeo {...TopSeoProps} />
    <div className="alert alert-info shadow-lg w-min">
      <HandIcon className="h-5 w-5" />
      <span className="font-bold whitespace-nowrap">Hello World</span>
    </div>
  </div>
);

export default Home;
