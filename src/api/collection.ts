import { GetCollectionResponseType } from '@/@types/collection';

import rudkidsApi from '.';

const collectionApi = {
  endPoint: {
    get: '/collection',
  },

  get: async (categoryName: string) => {
    const { data } = (await rudkidsApi.get(collectionApi.endPoint.get, {
      params: {
        category: categoryName,
      },
    })) as GetCollectionResponseType;

    return data;
  },
};

export default collectionApi;
