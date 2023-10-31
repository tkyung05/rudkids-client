import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { ApprovalPaymentRequestType, RefundOrderType } from '@/@types/order';

import { PATH } from '@/constants';
import { CACHE_KEY } from '@/constants/api';

import orderApi from '@/api/order';

function useGetOrderList() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.ORDER_LIST],
    queryFn: () => orderApi.getList(),
  });

  return { data, status };
}

function useGetOrderDetail(orderId: string | null) {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: orderId ? [CACHE_KEY.ORDER_DETAIL, orderId] : undefined,
    queryFn: () => orderApi.getDetail(orderId),
  });

  return { data, status };
}

function useGetCanceledOrderList() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.CANCELED_ORDER_LIST],
    queryFn: () => orderApi.getCanceledList(),
  });

  return { data, status };
}

interface UseApprovalPaymentPropsType {
  onSuccessApprovalPayement: () => void;
}

function useApprovalPayment({ onSuccessApprovalPayement }: UseApprovalPaymentPropsType) {
  const { mutate } = useMutation(
    (requestData: ApprovalPaymentRequestType) => orderApi.paymentApproval(requestData),
    {
      onSuccess: (res) => {
        if (!res) return onError();

        onSuccessApprovalPayement();
      },
      onError: () => onError(),
    }
  );

  const onError = () => location.replace(PATH.ORDER + '/fail');

  return { mutate };
}

function useGetOrderPaymentWidgetInfo() {
  const { data, status } = useQuery({
    staleTime: Infinity,
    cacheTime: Infinity,
    queryKey: [CACHE_KEY.ORDER_PAYMENT_WIDGET],
    queryFn: () => orderApi.getPaymentWidget(),
  });

  return { data, status };
}

function useRefundOrder(onSuccessRefund: () => void) {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: (requestRefundData: RefundOrderType) => orderApi.refund(requestRefundData),
    onSuccess: ({ orderId }) => {
      queryClient.invalidateQueries([CACHE_KEY.ORDER_DETAIL, orderId]);
      queryClient.invalidateQueries([CACHE_KEY.ORDER_LIST]);

      onSuccessRefund();
    },
  });

  return { mutate };
}

export {
  useGetCanceledOrderList,
  useGetOrderPaymentWidgetInfo,
  useApprovalPayment,
  useGetOrderList,
  useGetOrderDetail,
  useRefundOrder,
};
