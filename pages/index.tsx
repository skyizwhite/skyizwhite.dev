import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

import Container from 'components/Container';
import { TopSeoProps } from 'lib/seo';

import type { NextPage } from 'next';

const Top: NextPage = () => (
  <Container className="h-full flex flex-col items-center justify-center">
    <NextSeo {...TopSeoProps} />
    <h1 className="text-5xl md:text-8xl text-primary-100 font-extrabold tracking-wide">
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="block"
      >
        Hi there,
      </motion.span>
      <motion.span
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="block"
      >
        I&apos;m paku.
      </motion.span>
    </h1>
  </Container>
);

export default Top;
