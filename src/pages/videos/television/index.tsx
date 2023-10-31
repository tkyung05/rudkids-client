import { NextSeo } from 'next-seo';

import Television from '@/components/Television';

import { PATH } from '@/constants';

function TelevisionPage() {
  return (
    <>
      <NextSeo
        title="Television"
        description="Television 페이지"
        canonical={PATH.CLIENT_URL + PATH.VIDEO_DETAIL}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.VIDEO_DETAIL}`,
        }}
      />

      <Television />
    </>
  );
}

export default TelevisionPage;
