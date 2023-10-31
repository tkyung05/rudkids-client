import {
  CartAddItemRequestType,
  CartItemPatchQuantityRequestType,
  GetCartListResonseType,
  GetSelectedCartItemListResponseType,
} from '@/@types/cart';

import rudkidsApi from '.';

const cartApi = {
  endPoint: {
    post: '/cart',
    getCartList: '/cart',
    getSelectedList: '/cart/select',
    patchQuantity: '/cart',
    patchSelectedList: '/cart/select',
    delete: '/cart/',
  },

  post: async (item: CartAddItemRequestType) => {
    const response = await rudkidsApi.post(cartApi.endPoint.post, item);

    return response;
  },

  getCartList: async () => {
    const { data } = (await rudkidsApi.get(cartApi.endPoint.getCartList)) as GetCartListResonseType;

    return data;
  },

  getSelectedList: async () => {
    const { data } = (await rudkidsApi.get(
      cartApi.endPoint.getSelectedList
    )) as GetSelectedCartItemListResponseType;

    return data;
  },

  patchQuantity: async (item: CartItemPatchQuantityRequestType) => {
    const response = await rudkidsApi.patch(cartApi.endPoint.patchQuantity, {
      cartItemId: item.cartItemId,
      amount: item.amount + item.setNumber,
    });

    return response;
  },

  patchSelectedList: async (ids: string[]) => {
    const response = await rudkidsApi.patch(cartApi.endPoint.patchSelectedList, { ids });

    return response;
  },

  delete: async (id: string) => {
    const response = await rudkidsApi.delete(cartApi.endPoint.delete + id);

    return response;
  },
};

export default cartApi;
