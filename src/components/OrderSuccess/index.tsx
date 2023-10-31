import CHECK_ICON from '@/assets/svg/check_icon.svg';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useApprovalPayment } from '@/hooks/@queries/order';

import { PATH } from '@/constants';
import { PALETTE } from '@/constants/style';

import { getSearchParam } from '@/utils';

import Loading from '../@common/Loading';
import { TAB_MENU_KEY } from '../Profile';
import * as S from './OrderSuccess.style';

function OrderSuccess() {
  const { push } = useRouter();

  const [isSuccessPayment, setIsSuccessPayment] = useState(true);

  const { mutate: approvalPayment } = useApprovalPayment({
    onSuccessApprovalPayement: () => setIsSuccessPayment(true),
  });

  useEffect(() => {
    const paymentKey = getSearchParam('paymentKey');
    const amount = getSearchParam('amount');
    const orderId = getSearchParam('orderId');

    if (paymentKey && orderId && amount) {
      approvalPayment({ paymentKey, orderId, amount: parseInt(amount) });
    }
  }, []);

  return (
    <>
      {!isSuccessPayment && <Loading circleColor={PALETTE.BLACK} bgColor={PALETTE.YELLOW_LIGHT} />}

      {isSuccessPayment && (
        <S.Container>
          <S.PaymentInfoBox>
            <S.CheckIcon src={CHECK_ICON} alt="완료 아이콘" width={1000} height={1000} />
            <S.SuccessText>주문에 성공했습니다.</S.SuccessText>

            <S.Button onClick={() => push(PATH.PROFILE + `?tab=${TAB_MENU_KEY.ORDER_LIST}`)}>
              내 주문 보러가기 👈
            </S.Button>
          </S.PaymentInfoBox>
        </S.Container>
      )}
    </>
  );
}

export default OrderSuccess;
