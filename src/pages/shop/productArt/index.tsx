/* eslint-disable @typescript-eslint/no-unused-expressions */
import { useEffect, useState } from 'react';

import ProductArt from '@/components/ProductArt';

import { QUERY_KEY } from '@/constants';

import { getSearchParam } from '@/utils';

function ProductArtPage() {
  const [productIdProps, setProductIdProps] = useState('');

  useEffect(() => {
    const productId = getSearchParam(QUERY_KEY.PRODUCT_ID);
    productId && setProductIdProps(productId);
  }, []);

  return <ProductArt productId={productIdProps} />;
}

export default ProductArtPage;
