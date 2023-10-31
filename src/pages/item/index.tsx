import { NextSeo } from 'next-seo';

import ItemDetail from '@/components/ItemDetail';

import { PATH, QUERY_KEY } from '@/constants';

import { getSearchParam } from '@/utils';
import { getQueryKeyToDefaultText } from '@/utils/validation';

function ItemDetailPage() {
  const itemName = getQueryKeyToDefaultText(getSearchParam(QUERY_KEY.ITEM_NAME)) ?? '';

  return (
    <>
      <NextSeo
        title={itemName}
        description="아이템 상세 페이지"
        canonical={PATH.CLIENT_URL + PATH.ITEM_DETAIL + itemName}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.ITEM_DETAIL + itemName}`,
        }}
      />

      <ItemDetail />
    </>
  );
}

export default ItemDetailPage;
