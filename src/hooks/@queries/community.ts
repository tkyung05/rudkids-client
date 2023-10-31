import { useInfiniteQuery } from '@tanstack/react-query';

import { CommunityType } from '@/@types/community';

import { CACHE_KEY } from '@/constants/api';

import communityApi from '@/api/community';

function useGetCommunityList(type: CommunityType) {
  const getCommunityList = async ({ pageParam = 0 }) => {
    const communityListData = await communityApi.getCommunityList(pageParam, type);
    return communityListData;
  };

  const { data, status, fetchNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.COMMUNITY_LIST, type],
    queryFn: getCommunityList,
    getNextPageParam: (lastPage) => {
      if (lastPage?.last) return;
      return (lastPage?.pageable.pageNumber as number) + 1;
    },
  });

  return { data, status, fetchNextPage };
}

function useGetCommunityDetail() {}

export { useGetCommunityList, useGetCommunityDetail };
