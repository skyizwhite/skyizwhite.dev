import { HandIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';

import Motion from 'lib/react-daisyui-with-framer-motion';
import { TopSeoProps } from 'lib/seo';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex items-center justify-center w-full h-full">
    <NextSeo {...TopSeoProps} />
    <Motion.Alert
      initial={{ opacity: 0, y: '100px' }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 3, type: 'spring' }}
      icon={<HandIcon className="h-5 w-5" />}
      status="info"
      className="w-min"
    >
      <span className="font-bold whitespace-nowrap">Hello World</span>
    </Motion.Alert>
  </div>
);

export default Home;
