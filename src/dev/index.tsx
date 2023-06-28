'use client';

import { LifebuoyIcon } from '@heroicons/react/20/solid';
import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useState } from 'react';
import { atomOneDark, CodeBlock } from 'react-code-blocks';

import type { IComponent } from './dev.constants';
import { COMPONENTS } from './dev.constants';
import { SwitchLanguages, SwitchTheme } from './elements';

export default function Dev() {
  const [isShow, setIsShow] = useState(false);

  const handleToggle = () => setIsShow(!isShow);

  const [currentComponent, setIsCurrentComponent] = useState<
    IComponent | undefined
  >(undefined);

  const isDev = process.env.NODE_ENV === 'development';

  if (!isDev) return null;

  return (
    <div>
      <div
        className={
          isShow
            ? 'fixed left-0 top-0 z-[100] h-full w-full overflow-y-auto'
            : 'hidden'
        }
      >
        <div className="m-6 rounded-3xl bg-colors-titwo-2 shadow-2xl backdrop-blur-2xl md:m-10 lg:m-20">
          <div className="flex items-center justify-end gap-10 p-10 pb-0">
            <SwitchLanguages />
            <SwitchTheme />
          </div>
          <div className="relative h-full w-full">
            <div className="flex">
              <div className="sticky top-10 h-screen p-10">
                {COMPONENTS.map((component) => (
                  <div
                    className={clsx(
                      currentComponent?.name === component.name && 'font-bold',
                      'relative z-20 w-full cursor-pointer p-1 uppercase'
                    )}
                    key={component.name}
                    onClick={() => setIsCurrentComponent(component)}
                    aria-hidden
                  >
                    {component.name}
                  </div>
                ))}
              </div>
              {currentComponent?.data.ui && (
                <div className="flex w-full justify-center p-10">
                  <div className="flex w-full flex-col gap-5">
                    <h1 className="uppercase">{currentComponent.name}</h1>
                    <div className="relative border p-20">
                      {currentComponent?.data.ui}
                    </div>
                    {currentComponent.data.renderSource && (
                      <CodeBlock
                        theme={atomOneDark}
                        language="jsx"
                        text={currentComponent.data.renderSource}
                      />
                    )}

                    {currentComponent.data.iProps && (
                      <CodeBlock
                        theme={atomOneDark}
                        language="tsx"
                        text={currentComponent.data.iProps}
                        showLineNumbers={false}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div>
        {!isShow ? (
          <LifebuoyIcon
            onClick={handleToggle}
            className="fixed bottom-10 left-1 z-[100] h-10 w-10 cursor-pointer"
          />
        ) : (
          <XMarkIcon
            onClick={handleToggle}
            className="fixed bottom-10 left-1 z-[100] h-10 w-10 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
}
