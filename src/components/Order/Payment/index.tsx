import { loadPaymentWidget, PaymentWidgetInstance } from '@tosspayments/payment-widget-sdk';
import { useEffect, useRef } from 'react';

import { useGetOrderPaymentWidgetInfo } from '@/hooks/@queries/order';

import { DeliveryInformationType } from '@/@types/delivery';
import { OrderPayementWidgetInfoType } from '@/@types/order';

import { PATH, PAYMENT_KEY } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';

import { Title } from '../Order.style';
import * as S from './Payment.style';

interface PaymentPropsType {
  basicDeliveryInfo: DeliveryInformationType | null;
  handleMoveToDeliveryElement: () => void;
}

function Payment(props: PaymentPropsType) {
  const { data: paymentWidgetInfo, status } = useGetOrderPaymentWidgetInfo();

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);

  useEffect(() => {
    if (status === STATUS_TYPE.SUCCESS && paymentWidgetInfo) {
      onLoadPaymentWidget(paymentWidgetInfo.price, paymentWidgetInfo.customerKey);
    }
  }, [status]);

  const onLoadPaymentWidget = (price: number, customerKey: string) => {
    loadPaymentWidget(PAYMENT_KEY.CLIENT, customerKey).then((paymentWidget) => {
      paymentWidget.renderPaymentMethods('#payment-widget', {
        value: price,
      });
      paymentWidget.renderAgreement('#agreement');
      paymentWidgetRef.current = paymentWidget;
    });
  };

  const requestPayment = (paymentWidgetInfo: OrderPayementWidgetInfoType | undefined) => {
    const paymentWidget = paymentWidgetRef.current;

    if (paymentWidget && paymentWidgetInfo) {
      paymentWidget
        .requestPayment({
          orderId: paymentWidgetInfo.paymentOrderId,
          orderName: paymentWidgetInfo.orderName,
          customerName: paymentWidgetInfo.customerName,
          customerEmail: paymentWidgetInfo.customerEmail,
          successUrl: `${PATH.CLIENT_URL + PATH.ORDER}/success`,
          failUrl: `${PATH.CLIENT_URL + PATH.ORDER}/fail`,
        })
        .then((res) => console.log(res))
        .catch((error) => console.log(error));
    }
  };

  const handleClickPaymentsButton = async () => {
    if (!props.basicDeliveryInfo || props.basicDeliveryInfo.message.length === 0) {
      return props.handleMoveToDeliveryElement();
    }

    requestPayment(paymentWidgetInfo);
  };

  return (
    <>
      <Title>★ 최종결제 - {paymentWidgetInfo?.price} KRW</Title>

      <S.Container>
        <div id="payment-widget" />

        <div id="agreement" />

        <S.PaymentsButton onClick={handleClickPaymentsButton}>결제</S.PaymentsButton>
      </S.Container>
    </>
  );
}

export default Payment;
