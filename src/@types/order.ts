import { DefaultApiResponseType } from './api';

export type OrderItemType = {
  imageUrl: string;
  name: string;
  amount: number;
  price: number;
};

export interface OrderType {
  orderId: string;
  createdAt: string;
  orderStatus: string;
  orderItems: OrderItemType[];
}

export interface GetOrderListResponseType extends DefaultApiResponseType {
  data: OrderType[];
}

export interface OrderDetailDeliveryType {
  message: string;
  receivedAddress: string;
  receiverName: string;
  receiverPhone: string;
}

export interface OrderDetailType {
  orderId: string;
  createdAt: string;
  orderStatus: string;
  orderItems: OrderItemType[];
  delivery: OrderDetailDeliveryType;
  paymentMethod: string;
  bankName: string;
  accountNumber: string;
  customerName: string;
}

export interface GetOrderDetailResponseType extends DefaultApiResponseType {
  data: OrderDetailType;
}

export interface OrderPayementWidgetInfoType {
  customerKey: string;
  price: number;
  paymentOrderId: string;
  orderName: string;
  customerName: string;
  customerEmail: string;
}

export interface GetOrderPaymentWidgetInfoResponseType extends DefaultApiResponseType {
  data: OrderPayementWidgetInfoType;
}

export interface ApprovalPaymentRequestType {
  paymentKey: string;
  orderId: string;
  amount: number;
}

export interface RefundOrderType {
  orderId: string;
  cancelReason: string;
}

export interface RefundOrderResponseType extends DefaultApiResponseType {
  data: {
    orderId: string;
  };
}
