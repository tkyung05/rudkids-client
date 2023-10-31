import { NextSeo } from 'next-seo';

import Privacy from '@/components/Policys/Privacy';

import { PATH } from '@/constants';

function PrivacyPage() {
  return (
    <>
      <NextSeo
        title="Privacy - policy"
        description="개인정보처리방침 페이지"
        canonical={PATH.CLIENT_URL + '/policy/privacy'}
        openGraph={{
          url: `${PATH.CLIENT_URL + '/policy/privacy'}`,
        }}
      />

      <Privacy />
    </>
  );
}

export default PrivacyPage;
