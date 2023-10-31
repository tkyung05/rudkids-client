import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { CACHE_KEY } from '@/constants/api';

import { getQueryKeyToDefaultText } from '@/utils/validation';

import videoApi from '@/api/video';

function useGetVideoThumbnailList() {
  const getThumbnailList = async ({ pageParam = 0 }) => {
    const thumbnailListData = await videoApi.getThumbnailList(pageParam);
    return thumbnailListData;
  };

  const { data, status, fetchNextPage } = useInfiniteQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.VIDEO_THUMBNAIL_LIST],
    queryFn: getThumbnailList,
    getNextPageParam: (lastPage) => {
      if (lastPage?.last) return;
      return (lastPage?.pageable.pageNumber as number) + 1;
    },
  });

  return { data, status, fetchNextPage };
}

function useGetVideoDetail(itemName: string | null) {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: itemName ? [CACHE_KEY.VIDEO_DETAIL, itemName] : undefined,
    queryFn: () => videoApi.getVideoDetail(getQueryKeyToDefaultText(itemName)),
  });

  return { data, status };
}

export { useGetVideoThumbnailList, useGetVideoDetail };
