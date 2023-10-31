import { NextSeo } from 'next-seo';

import FAQ from '@/components/Policys/FAQ';

import { PATH } from '@/constants';

function FAQPage() {
  return (
    <>
      <NextSeo
        title="FAQ - policy"
        description="환불정책 페이지"
        canonical={PATH.CLIENT_URL + '/policy/faq'}
        openGraph={{
          url: `${PATH.CLIENT_URL + '/policy/faq'}`,
        }}
      />

      <FAQ />
    </>
  );
}

export default FAQPage;
