import Image from 'next/image';

import type { ImageProps } from 'next/image';

const NextImage: React.FC<ImageProps> = (props) => (
  <div className="text-[0]">
    {/* eslint-disable-next-line jsx-a11y/alt-text */}
    <Image {...props} loading="lazy" />
  </div>
);

export default NextImage;
