import { MenuIcon } from '@heroicons/react/outline';
import Link from 'next/link';
import { Dropdown, Navbar } from 'react-daisyui';

import Container from 'components/Container';

import type { ReactNode } from 'react';

export type LayoutProps = {
  children: ReactNode;
};

const contents = [
  { href: '/about', title: 'about' },
  // { href: '/blog', title: 'blog' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className="h-full w-full flex flex-col bg-[url('/images/bg.webp')] bg-cover bg-center fixed overflow-scroll">
    <Navbar className="fixed bg-base-100 bg-opacity-70 border-b border-border-base-300 z-50">
      <Container>
        <Navbar.Start className="ml-2">
          <Link href="/" passHref>
            <a className="text-lg font-extrabold">skyizwhite</a>
          </Link>
        </Navbar.Start>
        <Navbar.End className="hidden sm:flex px-2 mx-2">
          {contents.map((content) => (
            <Link key={content.href} href={content.href} passHref>
              <a className="mx-4 hover:text-primary">{content.title}</a>
            </Link>
          ))}
        </Navbar.End>
        <Navbar.End className="flex sm:hidden">
          <Dropdown horizontal="center">
            <Dropdown.Toggle color="ghost">
              <MenuIcon className="w-5 h-5" />
            </Dropdown.Toggle>
            <Dropdown.Menu className="w-fit right-0 bg-white">
              {contents.map((content) => (
                <Link key={content.href} href={content.href} passHref>
                  <div>
                    <Dropdown.Item>{content.title}</Dropdown.Item>
                  </div>
                </Link>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.End>
      </Container>
    </Navbar>
    <div className="flex-1 mt-16">{children}</div>
    <div className="py-3 sm:py-6 w-100 flex items-center justify-center text-sm bg-base-100 bg-opacity-70 border-t border-base-300">
      <span>Copyright © 2022 skyizwhite</span>
    </div>
  </div>
);

export default Layout;
