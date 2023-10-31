import ORDER_DECO from '@/assets/png/order_paper_deco.png';
import BUYER_INFO from '@/assets/svg/buyer_info.svg';
import ORDER_PAYMENT_TITLE from '@/assets/svg/order_payment.svg';
import RECEIVER_INFO from '@/assets/svg/receiver.svg';
import SHIPPING_ITEM_INFO from '@/assets/svg/shipping_item_info.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import useMoveToElement from '@/hooks/useMoveToElement';

import { DeliveryInformationType } from '@/@types/delivery';

import { PATH } from '@/constants';

import Buyer from './Buyer';
import Delivery from './Delivery';
import Items from './Items';
import * as S from './Order.style';
import Payment from './Payment';

function Order() {
  const [basicDeliveryInfo, setBasicDeliveryInfo] = useState<DeliveryInformationType | null>(null);

  const { targetRef: deliveryRef, handleMoveToTargetElement } = useMoveToElement();

  const { push } = useRouter();

  useEffect(() => {
    push(PATH.CART);
  });

  return (
    <S.Container>
      <S.OrderTopDeco
        src={ORDER_DECO.src}
        width={ORDER_DECO.width}
        height={ORDER_DECO.height}
        alt="오더 페이지 기영이 머리 뾰족"
      />
      <S.OrderContainer>
        <S.OrderDecoImage
          src={ORDER_PAYMENT_TITLE}
          width={1000}
          height={1000}
          size="80"
          alt="주문, 결제 제목"
        />

        <S.OrderBox>
          <S.FieldContainer ref={deliveryRef}>
            <S.FieldBox>
              <S.FieldBundle default="60%" mobile="100%">
                <Buyer />
              </S.FieldBundle>

              <S.OrderDecoImage
                src={BUYER_INFO}
                width={1000}
                height={1000}
                size="10"
                alt="구매자 정보 태그"
                id="info-tag-img"
              />
            </S.FieldBox>
          </S.FieldContainer>

          <S.FieldContainer>
            <S.FieldBox>
              <S.FieldBundle default="60%" mobile="100%">
                <Delivery
                  basicDeliveryInfo={basicDeliveryInfo}
                  setBasicDeliveryInfo={setBasicDeliveryInfo}
                />
              </S.FieldBundle>

              <S.OrderDecoImage
                src={RECEIVER_INFO}
                width={1000}
                height={1000}
                size="10"
                alt="수령인 정보 태그"
                id="info-tag-img"
              />
            </S.FieldBox>
          </S.FieldContainer>

          <S.FieldContainer>
            <S.FieldBox>
              <S.FieldBundle default="60%" mobile="100%">
                <Items />
              </S.FieldBundle>

              <S.OrderDecoImage
                src={SHIPPING_ITEM_INFO}
                width={1000}
                height={1000}
                size="10"
                alt="배송상품 정보 태그"
                id="info-tag-img"
              />
            </S.FieldBox>
          </S.FieldContainer>

          <S.FieldContainer>
            <S.FieldBundle default="90%" mobile="100%">
              <Payment
                basicDeliveryInfo={basicDeliveryInfo}
                handleMoveToDeliveryElement={handleMoveToTargetElement}
              />
            </S.FieldBundle>
          </S.FieldContainer>
        </S.OrderBox>
      </S.OrderContainer>
    </S.Container>
  );
}

export default Order;
