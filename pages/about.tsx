import { AcademicCapIcon, BadgeCheckIcon, BriefcaseIcon, IdentificationIcon, ThumbUpIcon } from '@heroicons/react/outline';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import { Breadcrumbs } from 'react-daisyui';

import Container from 'components/Container';
import ContentBox from 'components/ContentBox';
import NextImage from 'components/NextImage';
import { AboutSeoProps } from 'lib/seo';
import me from 'public/images/me.webp';

import type { NextPage } from 'next';

const About: NextPage = () => (
  <Container className="p-4">
    <NextSeo {...AboutSeoProps} />
    <Breadcrumbs className="mb-2 sm:mb-4">
      <Link href="/" passHref>
        <Breadcrumbs.Item>top</Breadcrumbs.Item>
      </Link>
      <Breadcrumbs.Item>about</Breadcrumbs.Item>
    </Breadcrumbs>
    <h1 className="my-2 sm:my-4 text-3xl sm:text-5xl font-bold">About</h1>
    <div className="p-4 sm:p-8 flex items-center justify-center">
      <NextImage src={me} alt="paku" className="w-1/3 rounded-3xl overflow-hidden shadow" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <ContentBox className="shadow">
        <div className="flex items-center">
          <IdentificationIcon className="w-5 h-5 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-xl sm:text-3xl font-bold">Profile</h2>
        </div>
        <ol className="text-sm ml-7 mt-2 sm:mt-4 list-disc">
          <li>he/him</li>
          <li>茨城出身・在住</li>
          <li>ラーメンとサブカルチャーを愛するオタクです</li>
          <li>
            GitHub:{' '}
            <a className="link link-primary" href="https://github.com/skyizwhite">
              @skyizwhite
            </a>
          </li>
        </ol>
      </ContentBox>
      <ContentBox className="shadow">
        <div className="flex items-center">
          <AcademicCapIcon className="w-5 h-5 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-xl sm:text-3xl font-bold">Education</h2>
        </div>
        <ol className="text-sm ml-7 mt-2 sm:mt-4 list-disc">
          <li>
            <span className="block">2015/04 - 2020/03</span>
            <span className="block">小山工業高等専門学校 電気電子創造工学科</span>
          </li>
          <li>
            <span className="block">2021/04 - now</span>
            <span className="block">筑波大学 情報学群 情報メディア創成学類</span>
          </li>
        </ol>
      </ContentBox>
      <ContentBox className="shadow">
        <div className="flex items-center">
          <BriefcaseIcon className="w-5 h-5 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-xl sm:text-3xl font-bold">Career</h2>
        </div>
        <ol className="text-sm ml-7 mt-2 sm:mt-4 list-disc">
          <li>
            <span className="block">2021/05 - now</span>
            <span className="block">Enigol Inc. - フロントエンドエンジニア（アルバイト）</span>
          </li>
        </ol>
      </ContentBox>
      <ContentBox className="shadow">
        <div className="flex items-center">
          <BadgeCheckIcon className="w-5 h-5 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-xl sm:text-3xl font-bold">Qualification</h2>
        </div>
        <ol className="text-sm ml-7 mt-2 sm:mt-4 list-disc">
          <li>基本情報技術者（FE）</li>
        </ol>
      </ContentBox>
      <ContentBox className="shadow">
        <div className="flex items-center">
          <ThumbUpIcon className="w-5 h-5 sm:w-8 sm:h-8 mr-2" />
          <h2 className="text-xl sm:text-3xl font-bold">Skills</h2>
        </div>
        <ol className="text-sm ml-7 mt-2 sm:mt-4 list-disc">
          <li>HTML/CSS (Sass, Bootstrap, Tailwind CSS, daisyUI)</li>
          <li>JavaScript/TypeScript (React, Recoil, Next.js, Vue, Nuxt.js)</li>
          <li>Common Lisp</li>
        </ol>
      </ContentBox>
    </div>
  </Container>
);

export default About;
