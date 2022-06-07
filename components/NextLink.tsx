import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { PropsWithChildren, AnchorHTMLAttributes } from 'react';

export type NextLinkProps = PropsWithChildren<LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>;

const NextLink: React.FC<NextLinkProps> = ({
  children,
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  locale,
  ...anchorProps
}) => (
  <Link {...{ href, as, replace, scroll, shallow, prefetch, locale }}>
    <a {...anchorProps}>{children}</a>
  </Link>
);

export default NextLink;
