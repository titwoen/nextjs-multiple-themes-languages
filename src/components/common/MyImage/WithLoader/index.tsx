import clsx from 'clsx';
import type { ImageProps } from 'next/image';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { useState } from 'react';

import type { TProps } from '@/types';

interface IPropsWrap extends Omit<TProps<{}>, ''> {
  // loader: ReactNode;
  // children({ setIsLoading }: { setIsLoading?: (e: boolean) => void }): ReactNode;
}

function Wrap({ children, className, ...div }: IPropsWrap) {
  return (
    <div className={clsx(className, 'relative overflow-hidden')} {...div}>
      {children}
    </div>
  );
}

function Img({
  alt = 'Picture of TiTwoEn',
  onLoadingComplete = () => {},
  className,
  loaderJsx,
  ...image
}: ImageProps & {
  loaderJsx: ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && loaderJsx}
      <Image
        onLoadingComplete={(im) => {
          setIsLoading(false);
          onLoadingComplete(im);
        }}
        fill
        className={clsx('h-full w-full', className)}
        {...image}
        alt={alt}
      />
    </>
  );
}

const ImgWithLoader = () => {
  return null;
};

ImgWithLoader.Wrap = Wrap;
ImgWithLoader.Img = Img;

export default ImgWithLoader;
