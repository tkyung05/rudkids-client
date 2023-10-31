import { useState } from 'react';

import { useGetOrderDetail } from '@/hooks/@queries/order';
import useMoveToElement from '@/hooks/useMoveToElement';

import Loading from '@/components/@common/Loading';

import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';

import * as S from './OrderDetail.style';
import RefundForm from './RefundForm';

function OrderDetail() {
  const orderId = getSearchParam('orderId');
  const { data: order, status } = useGetOrderDetail(orderId);

  const [isOnRefundForm, setIsOnRefundForm] = useState(false);

  const { targetRef: refundFormRef, handleMoveToTargetElement } = useMoveToElement();

  const handleClickRefundButton = () => {
    if (order?.orderStatus === '취소완료') return alert('이미 취소된 주문입니다.');

    setIsOnRefundForm(true);
    setTimeout(() => handleMoveToTargetElement(), 100);
  };

  return (
    <>
      {status === STATUS_TYPE.LOADING && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && order && (
        <S.Container>
          <S.OrderInfo>
            {order.createdAt} - {order.orderStatus} / {order.paymentMethod}
          </S.OrderInfo>

          <S.OrderContainer key={order.orderId}>
            {order.orderItems?.map((item) => (
              <S.OrderItemBox key={item.name}>
                <S.ItemImage src={item.imageUrl} alt={item.name} width={1000} height={1000} />

                <S.ItemInfoContainer>
                  <S.ItemName>{item.name}</S.ItemName>
                  <S.ItemPrice>
                    {item.price}원 {item.amount}개
                  </S.ItemPrice>
                </S.ItemInfoContainer>
              </S.OrderItemBox>
            ))}
          </S.OrderContainer>

          <S.DeliveryInfoContainer>
            <S.Content>
              <S.FieldName>이름</S.FieldName> {order.delivery.receiverName}
            </S.Content>
            <S.Content>
              <S.FieldName>연락처</S.FieldName> {order.delivery.receiverPhone}
            </S.Content>
            <S.Content>
              <S.FieldName>주소</S.FieldName> {order.delivery.receivedAddress}
            </S.Content>
            <S.Content>
              <S.FieldName>요청사항</S.FieldName> {order.delivery.message}
            </S.Content>
          </S.DeliveryInfoContainer>

          <div ref={refundFormRef} />
          {isOnRefundForm && orderId && (
            <RefundForm orderId={orderId} onSuccessRefund={() => setIsOnRefundForm(false)} />
          )}

          {!isOnRefundForm &&
            (order.orderStatus === '배송중' || order.orderStatus === '주문완료') && (
              <S.CancelButton onClick={handleClickRefundButton}>환불 신청</S.CancelButton>
            )}
        </S.Container>
      )}
    </>
  );
}

export default OrderDetail;
