import { ExclamationIcon } from '@heroicons/react/outline';
import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Alert, Button } from 'react-daisyui';

import type { MotionProps } from 'framer-motion';
import type { NextPage } from 'next';

const revealMotion = (delay: number): Pick<MotionProps, 'initial' | 'animate' | 'transition'> => ({
  initial: { opacity: 0, y: '50px' },
  animate: { opacity: 1, y: 0 },
  transition: {
    duration: 0.5,
    delay,
  },
});

const NotFound: NextPage = () => (
  <div className="container mx-auto h-full flex flex-col items-center justify-center">
    <NextSeo title="404 Page Not Found" />
    <motion.div {...revealMotion(0)}>
      <Alert icon={<ExclamationIcon className="h-6 md:h-8 w-6 md:w-8" />} status="error" className="w-min shadow-lg">
        <span className="text-lg md:text-2xl font-bold whitespace-nowrap">404 Page Not Found</span>
      </Alert>
    </motion.div>
    <motion.div {...revealMotion(1)} className="flex flex-col items-center justify-center">
      <p className="text-sm md:text-base text-center my-10">
        <span className="block">ページは削除または移動された可能性があります。</span>
        <span className="block">リンクが間違っていないかお確かめください。</span>
      </p>
      <Link href="/" passHref>
        <Button color="primary" className="text-base shadow-lg">
          トップへ戻る
        </Button>
      </Link>
    </motion.div>
  </div>
);

export default NotFound;
