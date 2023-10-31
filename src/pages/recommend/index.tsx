import { NextSeo } from 'next-seo';

import RecommendItemList from '@/components/Recommend';

import { PATH } from '@/constants';

function RecommendItemListPage() {
  return (
    <>
      <NextSeo
        title="Recommend & Hot"
        description="추천 아이템 페이지"
        canonical={PATH.CLIENT_URL + PATH.RECOMMEND}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.RECOMMEND}`,
        }}
      />

      <RecommendItemList />
    </>
  );
}

export default RecommendItemListPage;
