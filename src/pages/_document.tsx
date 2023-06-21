/* eslint-disable no-underscore-dangle */
import type { DocumentProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

type Props = DocumentProps & {};
class MyDocument extends Document<Props> {
  // eslint-disable-next-line class-methods-use-this
  render() {
    const { theme } = this.props.__NEXT_DATA__.props.pageProps;
    const currentLocale =
      this.props.__NEXT_DATA__.locale ?? this.props.__NEXT_DATA__.defaultLocale;
    return (
      <Html lang={currentLocale} data-theme={theme}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
