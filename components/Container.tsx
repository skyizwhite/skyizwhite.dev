import classNames from 'classnames';

import type { HTMLAttributes, ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

const Container: React.FC<ContainerProps> = ({ className, children, ...props }) => (
  <div className={classNames('container', className)} {...props}>
    {children}
  </div>
);

export default Container;
