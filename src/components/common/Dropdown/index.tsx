import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import clsx from 'clsx';
import { Fragment } from 'react';

import type { ICommon } from '@/interfaces';

interface IProps {
  labelE?: React.ReactNode;
  options?: ICommon.IOption[];
  classOption?: string;
  classActiveOption?: string;
  onChange: (ot: ICommon.IOption) => void;
  selected?: ICommon.IOption;
  classList?: string;
}

export default function Dropdown({
  labelE = 'Options',
  options = [
    { id: 0, label: 'option 1', value: 'value 1' },
    { id: 1, label: 'option 2', value: 'value 2' },
  ],
  classOption,
  classActiveOption = 'text-red-500',
  classList,
  onChange,
  selected,
}: IProps) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        {String(labelE) ? (
          <div className="flex items-center gap-3">
            {labelE}
            <ChevronDownIcon
              className="-mr-1 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        ) : (
          labelE
        )}
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'absolute right-0 z-10 w-56 focus:outline-none',
            classList
          )}
        >
          {options.map((option) => (
            <Menu.Item key={option.id}>
              {({ active: isHighlight }) => (
                <div
                  onClick={() => onChange(option)}
                  className={clsx(
                    isHighlight,
                    'cursor-pointer',
                    classOption,
                    selected?.id === option.id && classActiveOption
                  )}
                  aria-hidden="true"
                >
                  {option.label}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
