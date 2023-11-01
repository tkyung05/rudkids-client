import { useRouter } from 'next/navigation';

import { useGetCanceledOrderList } from '@/hooks/@queries/order';

import Loading from '@/components/@common/Loading';

import { PATH } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import * as S from './CanceledOrderList.style';

function CanceledOrderList() {
  const { data: canceledOrderList, status } = useGetCanceledOrderList();

  const { push } = useRouter();

  const handleClickDetailOrderButton = (orderId: string) => {
    push(PATH.ORDER_DETAIL + `?orderId=${orderId}`);
  };

  return (
    <>
      {status === STATUS_TYPE.LOADING && (
        <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />
      )}

      {status === STATUS_TYPE.SUCCESS && canceledOrderList && (
        <S.Container>
          {canceledOrderList.map((itemOrder) => (
            <S.OrderContainer key={itemOrder.orderId}>
              <S.HeadLine>
                <S.OrderDay>{itemOrder.createdAt} 주문</S.OrderDay>
                <S.DetailOrderButton
                  onClick={() => handleClickDetailOrderButton(itemOrder.orderId)}
                >
                  자세히 보기
                </S.DetailOrderButton>
              </S.HeadLine>
              <S.ItemStatus>{itemOrder.orderStatus}</S.ItemStatus>

              {itemOrder.orderItems?.map((item) => (
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
          ))}
        </S.Container>
      )}
    </>
  );
}

export default CanceledOrderList;
