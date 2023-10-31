import {
  ApprovalPaymentRequestType,
  GetOrderDetailResponseType,
  GetOrderListResponseType,
  GetOrderPaymentWidgetInfoResponseType,
  RefundOrderResponseType,
  RefundOrderType,
} from '@/@types/order';

import rudkidsApi from '.';

const orderApi = {
  endPoint: {
    getList: '/order',
    getDetail: '/order/',
    getCanceledList: '/order/cancel',
    refund: '/order/',
    getPaymentWidgetInfo: '/order/payment/widget',
    paymentApproval: '/order',
  },

  getList: async () => {
    const { data } = (await rudkidsApi.get(orderApi.endPoint.getList)) as GetOrderListResponseType;

    return data;
  },

  getDetail: async (orderId: string | null) => {
    const response = (await rudkidsApi.get(
      orderApi.endPoint.getDetail + orderId
    )) as GetOrderDetailResponseType;

    return response.data;
  },

  getCanceledList: async () => {
    const { data } = (await rudkidsApi.get(
      orderApi.endPoint.getCanceledList
    )) as GetOrderListResponseType;

    return data;
  },

  refund: async (refundData: RefundOrderType) => {
    const { data } = (await rudkidsApi.post(orderApi.endPoint.refund + refundData.orderId, {
      cancelReason: refundData.cancelReason,
    })) as RefundOrderResponseType;

    return data;
  },

  getPaymentWidget: async () => {
    const { data } = (await rudkidsApi.get(
      orderApi.endPoint.getPaymentWidgetInfo
    )) as GetOrderPaymentWidgetInfoResponseType;

    return data;
  },

  paymentApproval: async (requestData: ApprovalPaymentRequestType) => {
    const response = await rudkidsApi.post(orderApi.endPoint.paymentApproval, requestData);

    return response;
  },
};

export default orderApi;
