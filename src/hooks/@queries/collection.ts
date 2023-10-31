import { useQuery } from '@tanstack/react-query';

import { CACHE_KEY } from '@/constants/api';

import collectionApi from '@/api/collection';

function useGetCollection(categoryName: string) {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.COLLECTION, categoryName],
    queryFn: () => collectionApi.get(categoryName),
  });

  return { data, status };
}

export { useGetCollection };
