import { ExclamationIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';

import type { NextPage } from 'next';

const NotFound: NextPage = () => (
  <div className="container mx-auto h-full flex flex-col items-center justify-center">
    <Head>
      <title>404 Page Not Found</title>
    </Head>
    <div className="alert alert-error shadow-lg w-min">
      <ExclamationIcon className="h-6 md:h-8 w-6 md:w-8" />
      <span className="text-lg md:text-2xl font-bold whitespace-nowrap">404 Page Not Found</span>
    </div>
    <p className="text-sm md:text-base text-center my-10">
      <span className="inline-block">ページは削除または移動された可能性があります。</span>
      <span className="inline-block">リンクが間違っていないかお確かめください。</span>
    </p>
    <Link href="/" passHref>
      <button className="btn btn-primary text-base">トップへ戻る</button>
    </Link>
  </div>
);

export default NotFound;
