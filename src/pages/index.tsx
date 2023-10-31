import { NextSeo } from 'next-seo';

import Main from '@/components/Main';

import { PATH } from '@/constants';

function Home() {
  return (
    <>
      <NextSeo
        title="루키즈"
        description="웃음상점 루키즈"
        canonical={PATH.CLIENT_URL + PATH.MAIN}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.MAIN}`,
        }}
      />

      <Main />
    </>
  );
}

export default Home;
