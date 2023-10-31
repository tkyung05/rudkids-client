import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

import { CartAddItemRequestType, CartItemPatchQuantityRequestType } from '@/@types/cart';

import { PATH } from '@/constants';
import { CACHE_KEY, RESPONSE } from '@/constants/api';

import cartApi from '@/api/cart';

import useAlert from '../useToast';

function usePostCartItem() {
  const { push } = useRouter();
  const { onConfirm, onToast } = useAlert();

  const queryClient = useQueryClient();

  const { mutate } = useMutation((item: CartAddItemRequestType) => cartApi.post(item), {
    onSuccess: (res) => {
      if (res?.status === RESPONSE.STATUS.OK) {
        queryClient.invalidateQueries([CACHE_KEY.CART_LIST]);

        onConfirm(
          '장바구니에 상품을 담았습니다.',
          '장바구니로 이동할까요?',
          'Cart',
          'Keep Shopping',
          true,
          () => push(PATH.CART)
        );
      }
    },
    onError: (res: any) => {
      if (res?.response?.status === 409) {
        onToast('info', '곧 나타날 상품입니다!');
      }
    },
  });

  return { mutate };
}

function useGetCartList() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.CART_LIST],
    queryFn: () => cartApi.getCartList(),
  });

  return { data, status };
}

function usePatchQuantityCartItem() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    (item: CartItemPatchQuantityRequestType) => cartApi.patchQuantity(item),
    {
      onSuccess: () => {
        queryClient.invalidateQueries([CACHE_KEY.CART_LIST]);
      },
    }
  );

  return { mutate };
}

function useDeleteCartItem(onSuccessDelete: () => void) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation((cartItemId: string) => cartApi.delete(cartItemId), {
    onSuccess: () => {
      queryClient.invalidateQueries([CACHE_KEY.CART_LIST]);
      onSuccessDelete();
    },
    onError: () => {},
  });

  return { mutate };
}

function useGetSelectedCartItemList() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.SELECTED_CART_ITEM_LIST],
    queryFn: () => cartApi.getSelectedList(),
  });

  return { data, status };
}

function usePatchSelectedCartItemList() {
  const { push } = useRouter();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (selectedCartItemIds: string[]) => cartApi.patchSelectedList(selectedCartItemIds),
    onSuccess: (res) => {
      if (res.status === RESPONSE.STATUS.OK) {
        queryClient.invalidateQueries([CACHE_KEY.SELECTED_CART_ITEM_LIST]);

        push(PATH.ORDER);
      }
    },
  });

  return { mutate };
}

export {
  usePostCartItem,
  useGetCartList,
  usePatchQuantityCartItem,
  usePatchSelectedCartItemList,
  useDeleteCartItem,
  useGetSelectedCartItemList,
};
