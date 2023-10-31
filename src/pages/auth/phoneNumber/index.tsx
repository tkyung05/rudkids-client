import { NextSeo } from 'next-seo';

import PhoneNumber from '@/components/Auth/PhoneNumber';

import { PATH } from '@/constants';

function PhoneNumberPage() {
  return (
    <>
      <NextSeo
        title="Welcome"
        description="회원 전화번호 인증 페이지"
        canonical={PATH.CLIENT_URL + PATH.OAUTH_REDIRECT_URL}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.OAUTH_REDIRECT_URL}`,
        }}
      />

      <PhoneNumber />
    </>
  );
}

export default PhoneNumberPage;
