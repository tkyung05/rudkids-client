import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { DeliveryInformationType } from '@/@types/delivery';

import { CACHE_KEY } from '@/constants/api';

import deliveryApi from '@/api/delivery';

function usePostDeliveryInfo(onSuccessFn: () => void) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (deliveryInfo: DeliveryInformationType) => deliveryApi.post(deliveryInfo),
    onSuccess: () => {
      queryClient.invalidateQueries([CACHE_KEY.DELIVERY_INFO_LIST]);

      onSuccessFn();
    },
    onError: () => {},
  });

  return { mutate };
}

function useGetDeliveryInfoList() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.DELIVERY_INFO_LIST],
    queryFn: () => deliveryApi.getList(),
  });

  return { data, status };
}

function usePatchBasicDelivery() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((id: string) => deliveryApi.patchBasicDelivery(id), {
    onSuccess: () => {
      queryClient.invalidateQueries([CACHE_KEY.DELIVERY_INFO_LIST]);
    },
    onError: () => {},
  });

  return { mutate };
}

export { usePostDeliveryInfo, useGetDeliveryInfoList, usePatchBasicDelivery };
