import { NextSeo } from 'next-seo';

import About from '@/components/About';

import { PATH } from '@/constants';

function AboutPage() {
  return (
    <>
      <NextSeo
        title="About"
        description="루키즈 소개 페이지"
        canonical={PATH.CLIENT_URL + PATH.ABOUT}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.ABOUT}`,
        }}
      />

      <About />
    </>
  );
}

export default AboutPage;
