import { DeliveryInformationType, GetDeliveryInformationListResponseType } from '@/@types/delivery';

import rudkidsApi from '.';

const deliveryApi = {
  endPoint: {
    post: '/delivery',
    getList: '/delivery',
    patchBasicDelivery: '/delivery/',
  },

  post: async (deliveryInfo: DeliveryInformationType) => {
    const response = await rudkidsApi.post(deliveryApi.endPoint.post, deliveryInfo);

    return response;
  },

  getList: async () => {
    const { data } = (await rudkidsApi.get(
      deliveryApi.endPoint.getList
    )) as GetDeliveryInformationListResponseType;

    return data;
  },

  patchBasicDelivery: async (id: string) => {
    const response = await rudkidsApi.patch(deliveryApi.endPoint.patchBasicDelivery + id);

    return response;
  },
};

export default deliveryApi;
