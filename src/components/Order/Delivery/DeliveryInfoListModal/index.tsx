import ORDER_DECO from '@/assets/png/order_paper_deco.png';
import SHIPPING_ADDRESS_TITLE from '@/assets/svg/shipping_address_title.svg';
import { useEffect, useState } from 'react';

import { usePatchBasicDelivery } from '@/hooks/@queries/delivery';

import { DeliveryInformationType } from '@/@types/delivery';

import PostDeliveryInfo from '../PostDeliveryInfo';
import * as S from './DeliveryInfoListModal.style';

interface DeliveryInfoListModalPropsType {
  deliveryInfoList: DeliveryInformationType[] | null;
  handleCloseModal: () => void;
}

function DeliveryInfoListModal(props: DeliveryInfoListModalPropsType) {
  const { mutate: patchBasicDelivery } = usePatchBasicDelivery();

  const [isPostDelivery, setIsPostDelivery] = useState(false);

  useEffect(() => {
    // 외부 스크롤 차단
    document.body.setAttribute('style', 'overflow: hidden');

    return () => document.body.setAttribute('style', 'overflow: auto');
  }, []);

  const handleClickDeliveryInfoBox = (id: string) => {
    patchBasicDelivery(id);
    props.handleCloseModal();
  };

  return (
    <S.Container>
      <S.BackgroundLayer onClick={props.handleCloseModal} />

      <S.ModalContainer>
        <S.OrderTopDeco
          src={ORDER_DECO.src}
          width={ORDER_DECO.width}
          height={ORDER_DECO.height}
          alt="오더 페이지 기영이 머리 뾰족"
        />

        <S.ModalBox>
          <S.CloseButton onClick={props.handleCloseModal}>닫기</S.CloseButton>

          <S.TitleImage src={SHIPPING_ADDRESS_TITLE} alt="배송지 모달창 제목" />

          {isPostDelivery && <PostDeliveryInfo handleCloseModal={props.handleCloseModal} />}

          {isPostDelivery === false && (
            <>
              {props.deliveryInfoList === null && (
                <S.Content style={{ width: '50%', marginTop: '10rem' }}>
                  배송지 정보를 추가하세요!
                </S.Content>
              )}

              {props.deliveryInfoList?.map((deliveryInfo) => (
                <S.DeliveryInfoContainer
                  onClick={() => handleClickDeliveryInfoBox(deliveryInfo.deliveryId)}
                  isBasic={deliveryInfo.isBasic}
                  key={deliveryInfo.deliveryId}
                >
                  <S.Content>
                    <S.FieldName>이름</S.FieldName> {deliveryInfo.receiverName}
                  </S.Content>
                  <S.Content>
                    <S.FieldName>연락처</S.FieldName> {deliveryInfo.receiverPhone}
                  </S.Content>
                  <S.Content>
                    <S.FieldName>우편번호</S.FieldName> {deliveryInfo.zipCode}
                  </S.Content>
                  <S.Content>
                    <S.FieldName>주소</S.FieldName> {deliveryInfo.address}
                  </S.Content>
                  <S.Content>
                    <S.FieldName>상세주소</S.FieldName> {deliveryInfo.extraAddress}
                  </S.Content>
                  <S.Content>
                    <S.FieldName>요청사항</S.FieldName> {deliveryInfo.message}
                  </S.Content>
                </S.DeliveryInfoContainer>
              ))}
            </>
          )}

          {!isPostDelivery && (
            <S.PlusDeliveryInfoButton onClick={() => setIsPostDelivery(true)}>
              배송지 추가
            </S.PlusDeliveryInfoButton>
          )}
        </S.ModalBox>

        <S.OrderBottomDeco
          src={ORDER_DECO.src}
          width={ORDER_DECO.width}
          height={ORDER_DECO.height}
          alt="오더 페이지 기영이 머리 뾰족"
        />
      </S.ModalContainer>
    </S.Container>
  );
}

export default DeliveryInfoListModal;
