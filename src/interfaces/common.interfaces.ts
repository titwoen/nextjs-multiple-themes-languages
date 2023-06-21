import type { Types } from '@/types';

export declare namespace ICommon {
  type Theme = {
    id: Types.ITheme;
    name: string;
  };

  type Language = {
    id: Types.ILanguage;
    name: string;
    image: string;
  };

  type IOption = {
    id: number | string;
    label: string;
    value: string;
  };
}
