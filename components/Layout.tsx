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
  // { href: '/blog', title: 'blog' },
];

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  return (
    <div className="h-full flex flex-col">
      <Navbar className="fixed bg-base-100 bg-opacity-70 border-b border-border-base-300 z-50">
        <Container>
          <Navbar.Start className="ml-2">
            <NextLink href="/">
              <span className="text-lg font-extrabold">skyizwhite</span>
            </NextLink>
          </Navbar.Start>
          <Navbar.End className="hidden sm:flex px-2 mx-2">
            {contents.map((content) => (
              <NextLink key={content.href} href={content.href} className="mx-4 hover:text-primary">
                {content.title}
              </NextLink>
            ))}
          </Navbar.End>
          <Navbar.End className="flex sm:hidden">
            <Dropdown horizontal="center">
              <Dropdown.Toggle color="ghost">
                <MenuIcon className="w-5 h-5" />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-fit right-0 bg-white">
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
      <div className="py-3 sm:py-6 w-100 flex items-center justify-center text-sm bg-base-100 bg-opacity-70 border-t border-base-300">
        <span>Copyright © 2022 skyizwhite</span>
      </div>
    </div>
  );
};

export default Layout;
