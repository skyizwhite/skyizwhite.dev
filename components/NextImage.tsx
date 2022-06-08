import classNames from 'classnames';
import Image from 'next/image';

import type { ImageProps } from 'next/image';

const NextImage: React.FC<ImageProps> = ({ className, ...props }) => (
  <div className={classNames('text-[0]', className)}>
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image {...props} loading="lazy" />
  </div>
);

export default NextImage;
