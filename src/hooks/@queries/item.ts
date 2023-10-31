import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { CACHE_KEY } from '@/constants/api';

import { getQueryKeyToDefaultText } from '@/utils/validation';

import itemApi from '@/api/item';

function useGetItemDetail(itemName: string | null) {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: itemName ? [CACHE_KEY.ITEM_DETAIL, itemName] : undefined,
    queryFn: () => itemApi.getItemDetail(getQueryKeyToDefaultText(itemName)),
  });

  return { data, status };
}

function useGetRecommendItemList() {
  const getRecommendItemList = async ({ pageParam = 0 }) => {
    const recommendItemListData = await itemApi.getRecommendItemList(pageParam);
    return recommendItemListData;
  };

  const { data, status, fetchNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.ITEM_RECOMMEND_LIST],
    queryFn: getRecommendItemList,
    getNextPageParam: (lastPage) => {
      if (lastPage?.last) return;
      return (lastPage?.pageable.pageNumber as number) + 1;
    },
  });

  return { data, status, fetchNextPage };
}

export { useGetItemDetail, useGetRecommendItemList };
