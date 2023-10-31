import { useInfiniteQuery } from '@tanstack/react-query';

import { CACHE_KEY } from '@/constants/api';

import productApi from '@/api/product';

function useGetProductList() {
  const getProductList = async ({ pageParam = 0 }) => {
    const productListData = await productApi.getProductList(pageParam);
    return productListData;
  };

  const { data, status, fetchNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.PRODUCT_LIST],
    queryFn: getProductList,
    getNextPageParam: (lastPage) => {
      if (lastPage?.last) return;
      return (lastPage?.pageable.pageNumber as number) + 1;
    },
  });

  return { data, status, fetchNextPage };
}

function useGetProductDetail(productId: string | null) {
  const getProductDetail = async ({ pageParam = 0 }) => {
    const productDetailData = await productApi.getProcutDetail(productId, pageParam);
    return productDetailData;
  };

  const { data, status, fetchNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: productId ? [CACHE_KEY.PRODUCT_DETAIL, productId] : undefined,
    queryFn: getProductDetail,
    getNextPageParam: (lastPage) => {
      if (lastPage?.items.last) return;
      return (lastPage?.items.pageable.pageNumber as number) + 1;
    },
  });

  return { data, status, fetchNextPage };
}

export { useGetProductList, useGetProductDetail };
