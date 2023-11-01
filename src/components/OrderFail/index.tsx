import ERROR_ICON from '@/assets/png/error_icon.png';

import { getSearchParam } from '@/utils';

import * as S from './OrderFail.style';

function OrderFail() {
  const message = getSearchParam('message');

  return (
    <S.Container>
      <S.PaymentInfoBox>
        <S.ErrorIcon src={ERROR_ICON} alt="error" width={1000} height={1000} />
        <S.ErrorText>주문에 실패했습니다.</S.ErrorText>

        <S.Button>이유: {message ?? '알 수 없음'}</S.Button>
      </S.PaymentInfoBox>
    </S.Container>
  );
}

export default OrderFail;
