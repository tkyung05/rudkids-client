import { NextSeo } from 'next-seo';

import TermsOfUse from '@/components/Policys/TermsOfUse';

import { PATH } from '@/constants';

function TermsOfUsePage() {
  return (
    <>
      <NextSeo
        title="Terms of use - policy"
        description="이용약관 페이지"
        canonical={PATH.CLIENT_URL + '/policy/termsOfUse'}
        openGraph={{
          url: `${PATH.CLIENT_URL + '/policy/termsOfUse'}`,
        }}
      />

      <TermsOfUse />
    </>
  );
}

export default TermsOfUsePage;
