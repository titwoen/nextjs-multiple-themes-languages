import '../styles/global.css';

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'next-themes';
import { Provider } from 'react-redux';

import { store } from '@/store/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme={pageProps.theme}>
        <Component pageProps={pageProps} />
      </ThemeProvider>
    </Provider>
  );
};

export default appWithTranslation(MyApp);
