import type { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import HomeContainer from '@/containers/home';
import { Meta } from '@/layouts/Meta';

const Index = () => {
  return (
    <>
      <Meta />
      <HomeContainer />
    </>
  );
};

export const getStaticProps: GetStaticProps<{}> = async ({ locale = '' }) => {
  // theme and props will get by server, example : data by api from service

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      theme: 'dark',
    },
  };
};

export default Index;
