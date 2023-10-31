import { useRouter } from 'next/navigation';

import { PATH } from '@/constants';

import * as S from './CartModal.style';

interface CartModalPropsType {
  closeModal: () => void;
}

function CartModal(props: CartModalPropsType) {
  const { push } = useRouter();

  return (
    <S.Container>
      <S.CloseButton onClick={() => props.closeModal()}>Keep Shopping</S.CloseButton>

      <S.InfoText>장바구니에 상품을 담았습니다.</S.InfoText>

      <S.MoveCartButton onClick={() => push(PATH.CART)}>View Cart</S.MoveCartButton>
    </S.Container>
  );
}

export default CartModal;
