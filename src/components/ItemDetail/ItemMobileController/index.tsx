import BACK_ARROW_ICON from '@/assets/svg/back_arrow_icon.svg';
import SHARE_ICON from '@/assets/svg/share_icon.svg';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { PATH, QUERY_KEY } from '@/constants';

import { AddToCartButton } from '../ItemDetail.style';
import * as S from './ItemMobileController.style';

interface ItemMobileControllerPropsType {
  optionListElement: JSX.Element;
  handleClickAddToCartButton: () => void;
  onInitialSelectedOption: () => void;
  price: number;
  productId: string;
}

function ItemMobileController(props: ItemMobileControllerPropsType) {
  const { push } = useRouter();

  const [isMobileOptionBox, setIsMobileOptionBox] = useState(false);

  const handleClickBackArrowButton = () => {
    push(PATH.PRODUCT_DETAIL + `?${QUERY_KEY.PRODUCT_ID}=${props.productId}`);
  };

  const handleClickShareLikeButton = () => {
    navigator.clipboard.writeText(location.href).then().catch();
  };

  const handleClickModalBackground = () => {
    setIsMobileOptionBox(false);
    props.onInitialSelectedOption();
  };

  return (
    <>
      <S.MobileBuyController>
        {!isMobileOptionBox ? (
          <S.BeforeMobileOption>
            <S.ShareAndGiftBundle>
              <S.IconButton
                src={BACK_ARROW_ICON}
                onClick={handleClickBackArrowButton}
                width={100}
                height={100}
                alt="공유 버튼"
              />
              <S.IconButton
                src={SHARE_ICON}
                onClick={handleClickShareLikeButton}
                width={100}
                height={100}
                alt="공유 버튼"
              />
            </S.ShareAndGiftBundle>

            <AddToCartButton size="45%" onClick={() => setIsMobileOptionBox(true)}>
              Add to Cart
            </AddToCartButton>
          </S.BeforeMobileOption>
        ) : (
          <AddToCartButton size="80%" onClick={props.handleClickAddToCartButton}>
            Add to Cart
          </AddToCartButton>
        )}
      </S.MobileBuyController>

      {isMobileOptionBox && (
        <S.MobileOptionModalContainer>
          <S.ModalBackgroundLayer onClick={handleClickModalBackground} />

          <S.MobileOptionContainer>
            <S.MobileOptionBox>
              {props.optionListElement}
              <S.ItemPrice>{props.price} KRW</S.ItemPrice>
            </S.MobileOptionBox>
          </S.MobileOptionContainer>
        </S.MobileOptionModalContainer>
      )}
    </>
  );
}

export default ItemMobileController;
