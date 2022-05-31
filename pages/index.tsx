import { HandIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import { Alert } from 'react-daisyui';

import { TopSeoProps } from 'lib/seo';

import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="flex items-center justify-center w-full h-full">
    <NextSeo {...TopSeoProps} />
    <motion.div initial={{ opacity: 0, y: '50px' }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Alert icon={<HandIcon className="h-5 w-5" />} status="info" className="w-min">
        <span className="font-bold whitespace-nowrap">Hello World</span>
      </Alert>
    </motion.div>
  </div>
);

export default Home;
