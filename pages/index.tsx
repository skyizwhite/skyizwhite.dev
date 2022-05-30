import { HandIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';
import { Alert } from 'react-daisyui';

import { TopSeoProps } from 'lib/seo';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex items-center justify-center w-full h-full">
    <NextSeo {...TopSeoProps} />
    <Alert icon={<HandIcon className="h-5 w-5" />} status="info" className="w-min">
      <span className="font-bold whitespace-nowrap">Hello World</span>
    </Alert>
  </div>
);

export default Home;
