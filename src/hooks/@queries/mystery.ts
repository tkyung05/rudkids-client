import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { CACHE_KEY } from '@/constants/api';

import mysteryApi from '@/api/mystery';

function useGetMystery() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.MYSTERY],
    queryFn: () => mysteryApi.getMystery(),
  });

  return { data, status };
}

function useGetMysteryDetail(mysteryId: string | null) {
  const getMysteryDetail = async ({ pageParam = 0 }) => {
    const mysteryDetailData = await mysteryApi.getMysteryDetail(mysteryId, pageParam);
    return mysteryDetailData;
  };

  const { data, status, fetchNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: mysteryId ? [CACHE_KEY.PRODUCT_DETAIL, mysteryId] : undefined,
    queryFn: getMysteryDetail,
    getNextPageParam: (lastPage) => {
      if (lastPage?.items.last) return;
      return (lastPage?.items.pageable.pageNumber as number) + 1;
    },
  });

  return { data, status, fetchNextPage };
}

export { useGetMystery, useGetMysteryDetail };
