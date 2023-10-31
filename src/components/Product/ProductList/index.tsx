import { useEffect, useRef, useState } from 'react';

import { useGetMystery } from '@/hooks/@queries/mystery';
import { useGetProductList } from '@/hooks/@queries/product';
import useObserver from '@/hooks/useObserver';

import Loading from '@/components/@common/Loading';

import { PALETTE } from '@/constants/style';

import ProductListView from './ProductList.view';

function ProductList() {
  const [isSuccessProductList, setIsSuccessProductList] = useState(false);

  const { data: productListData, status: productListStatus, fetchNextPage } = useGetProductList();
  const { data: mystery, status: mysteryStatus } = useGetMystery();

  useEffect(() => {
    if (productListData?.pages && mystery) {
      if (
        productListData.pages[productListData.pages.length - 1].content[
          productListData.pages[productListData.pages.length - 1].content.length - 1
        ].title !== 'MYSTERY'
      ) {
        productListData.pages.map((productList) => productList.content.push(mystery));
      }
      setIsSuccessProductList(true);
    }
  }, [productListStatus, mysteryStatus]);

  const scrollPoint = useRef(null);
  const onIntersect = ([entry]: any) => entry.isIntersecting && fetchNextPage();
  useObserver(scrollPoint, onIntersect);

  return (
    <>
      {!isSuccessProductList && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {isSuccessProductList && productListData?.pages && (
        <ProductListView productList={productListData?.pages} />
      )}

      <div ref={scrollPoint} />
    </>
  );
}

export default ProductList;
