import classNames from 'classnames';

import type { HTMLAttributes } from 'react';

const ContentBox: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className, children, ...props }) => (
  <div className={classNames('bg-base-100 bg-opacity-80 p-3 sm:p-5 rounded-xl', className)} {...props}>
    {children}
  </div>
);

export default ContentBox;
