export declare namespace Types {
  type ITheme = 'light' | 'dark' | 'oled';
  type ILanguage = 'vi' | 'en';
}

declare module 'react' {
  // eslint-disable-next-line unused-imports/no-unused-vars
  interface HTMLAttributes<T> {
    'data-theme'?: Types.ITheme;
  }
}
