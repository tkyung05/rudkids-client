import {
  GetMysteryListResponseType,
  GetProductListResponseType,
  ProductDetailResponseType,
} from '@/@types/product';

import rudkidsApi from '.';

const mysteryApi = {
  endPoint: {
    getMystery: '/product/mystery',
    getMysteryDetail: '/product/mystery/detail/',
  },

  getMystery: async () => {
    const { data } = (await rudkidsApi.get(
      mysteryApi.endPoint.getMystery
    )) as GetMysteryListResponseType;

    return data;
  },

  getMysteryDetail: async (mysteryId: string | null, page: number) => {
    const { data } = (await rudkidsApi.get(mysteryApi.endPoint.getMysteryDetail + mysteryId, {
      params: {
        page,
        size: 6,
      },
    })) as ProductDetailResponseType;

    return data;
  },
};

export default mysteryApi;
