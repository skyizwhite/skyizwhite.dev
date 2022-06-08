import { ExclamationIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';
import { Alert, Button } from 'react-daisyui';

import Container from 'components/Container';
import ContentBox from 'components/ContentBox';
import NextLink from 'components/NextLink';

import type { NextPage } from 'next';

const NotFound: NextPage = () => (
  <Container className="h-full flex flex-col items-center justify-center">
    <NextSeo title="404 Page Not Found" />
    <ContentBox className="flex flex-col items-center justify-center">
      <Alert icon={<ExclamationIcon className="h-6 md:h-8 w-6 md:w-8" />} status="error" className="w-min shadow-lg">
        <span className="text-lg md:text-2xl font-bold whitespace-nowrap">404 Page Not Found</span>
      </Alert>
      <p className="text-xs sm:text-sm md:text-base text-center my-5 sm:my-10">
        <span className="block">ページは削除または移動された可能性があります。</span>
        <span className="block">リンクが間違っていないかお確かめください。</span>
      </p>
      <NextLink href="/">
        <Button color="primary" className="text-xs sm:text-sm md:text-base shadow-lg">
          トップへ戻る
        </Button>
      </NextLink>
    </ContentBox>
  </Container>
);

export default NotFound;
