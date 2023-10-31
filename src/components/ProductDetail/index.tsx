import { useRef } from 'react';

import { useGetProductDetail } from '@/hooks/@queries/product';
import useObserver from '@/hooks/useObserver';

import Loading from '@/components/@common/Loading';

import { QUERY_KEY } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';

import ProductDetailtView from './ProductDetail.view';

function ProductDetail() {
  const productId = getSearchParam(QUERY_KEY.PRODUCT_ID);
  const { data: productDetailData, status, fetchNextPage } = useGetProductDetail(productId);

  const scrollPoint = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useObserver(scrollPoint, onIntersect);

  return (
    <>
      {status === STATUS_TYPE.LOADING && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && productDetailData && (
        <ProductDetailtView productDetailData={productDetailData.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default ProductDetail;
