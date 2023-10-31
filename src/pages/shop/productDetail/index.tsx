import { NextSeo } from 'next-seo';

import ProductDetail from '@/components/ProductDetail';

import { PATH, QUERY_KEY } from '@/constants';

import { getSearchParam } from '@/utils';

function ProductDetailPage() {
  const productId = getSearchParam(QUERY_KEY.PRODUCT_ID);

  return (
    <>
      <NextSeo
        title="Category"
        description="카테고리 상세 페이지"
        canonical={PATH.CLIENT_URL + PATH.PRODUCT_DETAIL + '/' + productId}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.PRODUCT_DETAIL + '/' + productId}`,
        }}
      />

      <ProductDetail />
    </>
  );
}

export default ProductDetailPage;
