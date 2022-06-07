import { MenuIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';
import { Dropdown, Navbar } from 'react-daisyui';

import Container from 'components/Container';
import NextLink from 'components/NextLink';

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

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col">
      <Navbar className="fixed bg-base-100 border-b border-border-base-300">
        <Container>
          <Navbar.Start>
            <NextLink href="/">
              <span className="text-lg font-extrabold">skyizwhite</span>
            </NextLink>
          </Navbar.Start>
          <Navbar.End className="px-2 mx-2 hidden sm:flex">
            {contents.map((content) => (
              <NextLink key={content.href} href={content.href} className="mx-4 hover:text-primary">
                {content.title}
              </NextLink>
            ))}
          </Navbar.End>
          <Navbar.End className="flex sm:hidden ">
            <Dropdown horizontal="center">
              <Dropdown.Toggle color="ghost">
                <MenuIcon className="w-5 h-5" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-52 right-0 bg-white">
                {contents.map((content) => (
                  <Dropdown.Item
                    key={content.href}
                    href={content.href}
                    onClick={(e) => {
                      e.preventDefault();
                      void router.push(content.href);
                    }}
                  >
                    {content.title}
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.End>
        </Container>
      </Navbar>
      <div className="flex-1 mt-16">{children}</div>
      <div className="py-6 w-100 flex items-center justify-center border-t border-base-300">
        <span>Copyright © 2022 skyizwhite</span>
      </div>
    </div>
  );
};

export default Layout;
