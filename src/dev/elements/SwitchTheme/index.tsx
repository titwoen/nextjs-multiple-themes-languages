import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useTheme } from 'next-themes';

import type { Types } from '@/types';

export default function SwitchTheme() {
  const { setTheme, theme } = useTheme();
  const currentTheme = theme as Types.ITheme;
  const changeTheme: (theme: Types.ITheme) => void = setTheme;

  return (
    <div className="flex gap-3">
      {currentTheme === 'light' ? (
        <MoonIcon
          className="h-10 w-10 cursor-pointer"
          onClick={() => changeTheme('dark')}
        />
      ) : (
        <SunIcon
          className="h-10 w-10 cursor-pointer"
          onClick={() => changeTheme('light')}
        />
      )}
    </div>
  );
}
