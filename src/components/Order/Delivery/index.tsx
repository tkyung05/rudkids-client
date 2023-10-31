import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from 'react';

import { useGetDeliveryInfoList } from '@/hooks/@queries/delivery';

import { DeliveryInformationType } from '@/@types/delivery';

import { Title } from '../Order.style';
import * as S from './Delivery.style';
import DeliveryInfoListModal from './DeliveryInfoListModal';

export interface BasicDeliveryPropsType {
  basicDeliveryInfo: DeliveryInformationType | null;
  setBasicDeliveryInfo: Dispatch<SetStateAction<DeliveryInformationType | null>>;
}

function Delivery(props: BasicDeliveryPropsType) {
  const { data: deliveryInfoList } = useGetDeliveryInfoList();

  const [isOnDeliveryInfoListModal, setIsOnDeliveryInfoListModal] = useState(false);

  useEffect(() => {
    choiceBasicDeliveryInfo();
  }, [deliveryInfoList]);

  const choiceBasicDeliveryInfo = () => {
    props.setBasicDeliveryInfo(
      deliveryInfoList?.find((deliveryInfo) => deliveryInfo.isBasic) ?? null
    );
  };

  const handleChangeMessageInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.basicDeliveryInfo) {
      const newBasicDeliveryInfo = { ...props.basicDeliveryInfo };
      newBasicDeliveryInfo.message = event.currentTarget.value;
      props.setBasicDeliveryInfo(newBasicDeliveryInfo);
    }
  };

  return (
    <>
      <Title>★ 수령인 정보</Title>

      {props.basicDeliveryInfo === null && (
        <S.Content>상품을 받을 배송지를 추가해주세요^^</S.Content>
      )}

      {props.basicDeliveryInfo && (
        <S.DeliveryInfoContainer>
          <S.Content>
            <S.FieldName>이름</S.FieldName> {props.basicDeliveryInfo.receiverName}
          </S.Content>
          <S.Content>
            <S.FieldName>연락처</S.FieldName> {props.basicDeliveryInfo.receiverPhone}
          </S.Content>
          <S.Content>
            <S.FieldName>우편번호</S.FieldName> {props.basicDeliveryInfo.zipCode}
          </S.Content>
          <S.Content>
            <S.FieldName>주소</S.FieldName> {props.basicDeliveryInfo.address}
          </S.Content>
          <S.Content>
            <S.FieldName>상세주소</S.FieldName> {props.basicDeliveryInfo.extraAddress}
          </S.Content>
          <S.Content>
            <S.FieldName>요청사항</S.FieldName>
            <S.Input
              maxLength={15}
              value={props.basicDeliveryInfo.message}
              onChange={handleChangeMessageInput}
            />
          </S.Content>
        </S.DeliveryInfoContainer>
      )}

      {isOnDeliveryInfoListModal && (
        <DeliveryInfoListModal
          deliveryInfoList={deliveryInfoList ?? null}
          handleCloseModal={() => setIsOnDeliveryInfoListModal(false)}
        />
      )}

      <S.Button onClick={() => setIsOnDeliveryInfoListModal(true)}>배송지 변경</S.Button>
    </>
  );
}

export default Delivery;
