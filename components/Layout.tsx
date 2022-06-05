import { Navbar, Button, Divider } from 'react-daisyui';

import Container from 'components/Container';
import NextLink from 'components/NextLink';

import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

const contents = [
  { href: '/about', title: 'About' },
  { href: '/skills', title: 'Skills' },
  { href: '/works', title: 'Works' },
  { href: '/blog', title: 'Blog' },
  { href: '/contact', title: 'Contact' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="h-screen flex flex-col">
    <Navbar className="bg-neutral">
      <Container>
        <Navbar.Start>
          <NextLink href="/">
            <span className="text-lg font-bold">skyizwhite</span>
          </NextLink>
        </Navbar.Start>
        <Navbar.End className="px-2 mx-2 hidden sm:flex">
          {contents.map((content) => (
            <NextLink key={content.href} href={content.href}>
              <Button size="sm">{content.title}</Button>
            </NextLink>
          ))}
        </Navbar.End>
      </Container>
    </Navbar>
    <div className="flex-1">{children}</div>
    <Divider />
    <div className="mb-6 w-100 flex items-center justify-center">
      <span>Copyright © 2022 skyizwhite</span>
    </div>
  </div>
);

export default Layout;
