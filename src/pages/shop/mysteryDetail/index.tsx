import { NextSeo } from 'next-seo';

import MysteryDetail from '@/components/MysteryDetail';

import { PATH, QUERY_KEY } from '@/constants';

import { getSearchParam } from '@/utils';

function ProductDetailPage() {
  const mysteryId = getSearchParam(QUERY_KEY.MYSTERY_ID);

  return (
    <>
      <NextSeo
        title="Mystery"
        description="미스테리 상세 페이지"
        canonical={PATH.CLIENT_URL + PATH.MYSTERY_DETAIL + '/' + mysteryId}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.MYSTERY_DETAIL + '/' + mysteryId}`,
        }}
      />

      <MysteryDetail />
    </>
  );
}

export default ProductDetailPage;
