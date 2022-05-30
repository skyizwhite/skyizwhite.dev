import { ExclamationIcon } from '@heroicons/react/outline';
import Head from 'next/head';
import Link from 'next/link';
import { Alert, Button } from 'react-daisyui';

import type { NextPage } from 'next';

const NotFound: NextPage = () => (
  <div className="container mx-auto h-full flex flex-col items-center justify-center">
    <Head>
      <title>404 Page Not Found</title>
    </Head>
    <Alert icon={<ExclamationIcon className="h-6 md:h-8 w-6 md:w-8" />} status="error" className="w-min">
      <span className="text-lg md:text-2xl font-bold whitespace-nowrap">404 Page Not Found</span>
    </Alert>
    <p className="text-sm md:text-base text-center my-10">
      <span className="inline-block">ページは削除または移動された可能性があります。</span>
      <span className="inline-block">リンクが間違っていないかお確かめください。</span>
    </p>
    <Link href="/" passHref>
      <Button color="primary" className="text-base">
        トップへ戻る
      </Button>
    </Link>
  </div>
);

export default NotFound;
