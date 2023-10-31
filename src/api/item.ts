import { GetItemDetailResponseType, GetRecommendItemListResponseType } from '@/@types/item';

import { PATH } from '@/constants';

import rudkidsApi from '.';

const itemApi = {
  endPoint: {
    getItemDetail: '/item',
    getRecommendItemList: '/item/popular',
  },

  getItemDetail: async (itemName: string | null) => {
    if (itemName === '?') return location.replace(PATH.SHOP);

    const { data } = (await rudkidsApi.get(itemApi.endPoint.getItemDetail, {
      params: {
        name: itemName,
      },
    })) as GetItemDetailResponseType;

    return data;
  },

  getRecommendItemList: async (page: number) => {
    const { data } = (await rudkidsApi.get(itemApi.endPoint.getRecommendItemList, {
      params: {
        page,
        size: 8,
      },
    })) as GetRecommendItemListResponseType;

    return data;
  },
};

export default itemApi;
