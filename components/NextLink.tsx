import Link from 'next/link';

import type { LinkProps } from 'next/link';
import type { PropsWithChildren, AnchorHTMLAttributes } from 'react';

export type LinkToProps = PropsWithChildren<LinkProps & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>>;

const LinkTo: React.FC<LinkToProps> = ({ children, href, as, replace, scroll, shallow, prefetch, locale, ...anchorProps }) => (
  <Link {...{ href, as, replace, scroll, shallow, prefetch, locale }}>
    <a {...anchorProps}>{children}</a>
  </Link>
);

export default LinkTo;
