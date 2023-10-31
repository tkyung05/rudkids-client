import { NextSeo } from 'next-seo';

import Product from '@/components/Product';

import { PATH } from '@/constants';

function ProductListPage() {
  return (
    <>
      <NextSeo
        title="Categories"
        description="카테고리 리스트 페이지"
        canonical={PATH.CLIENT_URL + PATH.SHOP}
        openGraph={{
          url: `${PATH.CLIENT_URL + PATH.SHOP}`,
        }}
      />

      <Product />
    </>
  );
}

export default ProductListPage;
