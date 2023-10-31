import { GetProductListResponseType, ProductDetailResponseType } from '@/@types/product';

import rudkidsApi from '.';

const productApi = {
  endPoint: {
    getProductList: '/product',
    getProductDetail: '/product/',
  },

  getProductList: async (page: number) => {
    const { data } = (await rudkidsApi.get(productApi.endPoint.getProductList, {
      params: {
        page,
        size: 6,
      },
    })) as GetProductListResponseType;

    return data;
  },

  getProcutDetail: async (productId: string | null, page: number) => {
    const { data } = (await rudkidsApi.get(productApi.endPoint.getProductDetail + productId, {
      params: {
        page,
        size: 6,
      },
    })) as ProductDetailResponseType;

    return data;
  },
};

export default productApi;
