import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useTheme } from 'next-themes';
import { useState } from 'react';

import { Dropdown } from '@/components/common';
import type { ICommon } from '@/interfaces';
import type { Types } from '@/types';

// interface IProps {}

export default function HomeContainer() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { setTheme } = useTheme();

  const changeTheme: (theme: Types.ITheme) => void = setTheme;

  const changeTo: Types.ILanguage =
    router.locale === router.defaultLocale ? 'en' : 'vi';
  const options: ICommon.IOption[] = [
    { id: 1, label: '1', value: '1' },
    { id: 2, label: '2', value: '2' },
  ];
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Link href="/" locale={changeTo}>
        {t('changeLocale', { changeTo })}
      </Link>

      <Dropdown
        options={options}
        selected={selected}
        onChange={(option) => setSelected(option)}
        labelE="Select option"
        classList="left-0"
        classOption=""
        classActiveOption=""
      />

      <div className="flex gap-3">
        <MoonIcon
          className="h-10 w-10 cursor-pointer"
          onClick={() => changeTheme('dark')}
        />
        <SunIcon
          className="h-10 w-10 cursor-pointer"
          onClick={() => changeTheme('light')}
        />
      </div>
    </div>
  );
}
