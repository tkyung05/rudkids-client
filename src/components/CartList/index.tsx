import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useGetCartList, usePatchSelectedCartItemList } from '@/hooks/@queries/cart';
import useCursor from '@/hooks/useCursor';
import useAlert from '@/hooks/useToast';

import { CURSOR_STATUS, PATH } from '@/constants';
import { STATUS_TYPE } from '@/constants/api';
import { PALETTE } from '@/constants/style';

import Loading from '../@common/Loading';
import CartItem from './CartItem';
import * as S from './CartList.style';

export type SelectedCartItemType = { id: string; price: number; amount: number };

const CHECKOUT_BUTTON_CLASSNAME = 'checkout-button';

function CartList() {
  const { push } = useRouter();

  const { onToast } = useAlert();

  const { offCursor } = useCursor([
    {
      onCursorStatus: CURSOR_STATUS.THUMBS_UP,
      targetClassName: CHECKOUT_BUTTON_CLASSNAME,
    },
  ]);

  const { data: cartListData, status } = useGetCartList();
  const { mutate: patchSelectedCartItemIds } = usePatchSelectedCartItemList();

  const [selectedCartItemList, setSelectedCartItemList] = useState<SelectedCartItemType[]>([]);
  const isNotEmptySelectedCartItemList = selectedCartItemList.length > 0;

  useEffect(() => {
    if (cartListData) {
      setSelectedCartItemList(
        cartListData.map((item) => ({
          id: item.id,
          price: item.price,
          amount: item.amount,
        }))
      );
    }
  }, [cartListData]);

  const checkIsInSelectedItemList = (itemIdx: number) => itemIdx !== -1;

  const getSelectedItemIndex = (targetId: string) =>
    selectedCartItemList?.findIndex((item) => item.id === targetId);

  const handleChangeSelectedCartItem = (cartItem: SelectedCartItemType) => {
    const itemIdx = getSelectedItemIndex(cartItem.id);

    // 선택 해제
    if (checkIsInSelectedItemList(itemIdx) && isNotEmptySelectedCartItemList) {
      setSelectedCartItemList([...selectedCartItemList].filter((_, idx) => idx !== itemIdx));
    }
    // 선택 하기
    if (!checkIsInSelectedItemList(itemIdx)) {
      if (isNotEmptySelectedCartItemList) {
        setSelectedCartItemList([...selectedCartItemList, cartItem]);
      } else {
        setSelectedCartItemList([cartItem]);
      }
    }
  };

  const onCalculateItemAmount = (itemId: string, setNumber: number) => {
    const itemIdx = getSelectedItemIndex(itemId);

    if (checkIsInSelectedItemList(itemIdx)) {
      const copySelectedCartItemList = [...selectedCartItemList];
      const price = copySelectedCartItemList[itemIdx].price;
      const amount = copySelectedCartItemList[itemIdx].amount + setNumber;

      copySelectedCartItemList[itemIdx] = { id: itemId, price, amount };
      setSelectedCartItemList(copySelectedCartItemList);
    }
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    selectedCartItemList?.forEach((item) => (totalPrice += item.price * item.amount));

    return totalPrice;
  };

  const handleClickCheckOutButton = () => {
    offCursor();
    onToast('info', 'coming soon..!');

    // if (!isNotEmptySelectedCartItemList) return push(PATH.RECOMMEND);

    // patchSelectedCartItemIds([...selectedCartItemList].map((item) => item.id));
  };

  return (
    <>
      {(status === STATUS_TYPE.LOADING || status === STATUS_TYPE.ERROR) && (
        <Loading circleColor={PALETTE.YELLOW} bgColor={PALETTE.BLUE} />
      )}

      {status === STATUS_TYPE.SUCCESS && cartListData && (
        <S.Container>
          <S.ShoppingCartContainer>
            <S.CartTitle>🛒 Shopping Cart</S.CartTitle>

            <S.CartItemListContainer>
              {cartListData?.map((cartItem) => (
                <CartItem
                  cartItem={cartItem}
                  handleChangeSelectedCartItem={handleChangeSelectedCartItem}
                  onCalculateItemAmount={onCalculateItemAmount}
                  key={cartItem.id}
                />
              ))}
            </S.CartItemListContainer>

            <S.TotalContainer>
              <S.TotalAmount>Total Amount</S.TotalAmount>
              <S.TotalAmount>{getTotalPrice()} KRW</S.TotalAmount>

              <S.CartCheckout
                className={CHECKOUT_BUTTON_CLASSNAME}
                onClick={handleClickCheckOutButton}
              >
                Checkout
              </S.CartCheckout>
            </S.TotalContainer>
          </S.ShoppingCartContainer>
        </S.Container>
      )}
    </>
  );
}

export default CartList;
