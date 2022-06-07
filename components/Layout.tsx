import { Navbar } from 'react-daisyui';

import Container from 'components/Container';
import NextImage from 'components/NextImage';
import NextLink from 'components/NextLink';
import logo from 'public/images/logo.webp';

import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

const contents = [
  { href: '/about', title: 'about' },
  { href: '/skills', title: 'skills' },
  { href: '/works', title: 'works' },
  { href: '/blog', title: 'blog' },
  { href: '/contact', title: 'contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="h-screen flex flex-col">
    <Navbar className="fixed bg-base-100 border-b border-border-base-300">
      <Container>
        <Navbar.Start>
          <NextLink href="/">
            <NextImage src={logo} alt="skyizwhite" />
          </NextLink>
        </Navbar.Start>
        <Navbar.End className="px-2 mx-2 hidden sm:flex">
          {contents.map((content) => (
            <NextLink key={content.href} href={content.href} className="mx-4 hover:text-primary">
              {content.title}
            </NextLink>
          ))}
        </Navbar.End>
      </Container>
    </Navbar>
    <div className="flex-1 mt-16">{children}</div>
    <div className="py-6 w-100 flex items-center justify-center border-t border-base-300">
      <span>Copyright © 2022 skyizwhite</span>
    </div>
  </div>
);

export default Layout;
