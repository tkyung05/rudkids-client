import { DefaultApiResponseType } from './api';

export interface DeliveryInformationType {
  receiverName: string;
  receiverPhone: string;
  zipCode: string;
  address: string;
  extraAddress: string;
  message: string;
  isBasic: boolean;
  deliveryId: string;
}

export interface GetDeliveryInformationListResponseType extends DefaultApiResponseType {
  data: DeliveryInformationType[];
}
