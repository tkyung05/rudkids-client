import Link from 'next/link';

import { useDeleteCartItem, usePatchQuantityCartItem } from '@/hooks/@queries/cart';

import { CartItemPatchQuantityRequestType, CartItemType } from '@/@types/cart';

import { PATH, QUERY_KEY } from '@/constants';

import { getDefaultToQueryKeyText, parseToOriginalItemName } from '@/utils/validation';

import { SelectedCartItemType } from '..';
import * as S from './CartItem.style';

interface CartItemPropsType {
  cartItem: CartItemType;
  handleChangeSelectedCartItem: (cartItem: SelectedCartItemType) => void;
  onCalculateItemAmount: (itemId: string, setNumber: number) => void;
}

function CartItem({
  cartItem,
  handleChangeSelectedCartItem,
  onCalculateItemAmount,
}: CartItemPropsType) {
  const { mutate: patchQuantityCartItem } = usePatchQuantityCartItem();
  const { mutate: deleteCartItem } = useDeleteCartItem(() =>
    handleChangeSelectedCartItem({
      id: cartItem.id,
      price: cartItem.price,
      amount: cartItem.amount,
    })
  );

  const handleClickCalculateItemAmount = (item: CartItemPatchQuantityRequestType) => {
    if (item.amount + item.setNumber === 0) return;

    patchQuantityCartItem(item);
    onCalculateItemAmount(item.cartItemId, item.setNumber);
  };

  const handleDeleteItem = (cartItemId: string) => {
    deleteCartItem(cartItemId);
  };

  return (
    <S.ItemContainer>
      <S.ItemInfoBundle>
        <S.SelectButtonContainer>
          <input
            style={{ display: 'none' }}
            type="checkbox"
            id={'select-item-button' + cartItem.id}
            onChange={() =>
              handleChangeSelectedCartItem({
                id: cartItem.id,
                price: cartItem.price,
                amount: cartItem.amount,
              })
            }
            defaultChecked
          />

          <S.SelectButton htmlFor={'select-item-button' + cartItem.id}>
            <svg
              width="8rem"
              height="8rem"
              xmlns="http://w3.org/2000/svg"
              version="1.1"
              viewBox="0 10 70 35"
            >
              <polyline className="check-icon" points="9.06 20.89 25.85 35.74 50.46 9.35" />
            </svg>
          </S.SelectButton>
        </S.SelectButtonContainer>

        <Link
          href={{
            pathname: PATH.ITEM_DETAIL,
            query: {
              [QUERY_KEY.ITEM_NAME]: getDefaultToQueryKeyText(
                parseToOriginalItemName(cartItem.name)
              ),
            },
          }}
          style={{ display: 'flex' }}
        >
          <S.ItemImage src={cartItem.imageUrl} height={100} width={100} alt="상품 이미지" />

          <S.ItemTextBundle>
            <S.ItemInfoText>{cartItem.name}</S.ItemInfoText>
            <S.ItemInfoText>{cartItem.price}</S.ItemInfoText>
          </S.ItemTextBundle>
        </Link>
      </S.ItemInfoBundle>

      <S.CartCalculateContainer>
        <S.QuantityControllerBundle>
          <S.QuantityController
            onClick={() => {
              handleClickCalculateItemAmount({
                cartItemId: cartItem.id,
                amount: cartItem.amount,
                setNumber: 1,
              });
            }}
          >
            +
          </S.QuantityController>
          <S.Quantity>{cartItem.amount}</S.Quantity>
          <S.QuantityController
            onClick={() => {
              handleClickCalculateItemAmount({
                cartItemId: cartItem.id,
                amount: cartItem.amount,
                setNumber: -1,
              });
            }}
          >
            －
          </S.QuantityController>
        </S.QuantityControllerBundle>

        <S.ItemRemoveButton
          onClick={() => {
            handleDeleteItem(cartItem.id);
          }}
        >
          Remove
        </S.ItemRemoveButton>
      </S.CartCalculateContainer>
    </S.ItemContainer>
  );
}

export default CartItem;
