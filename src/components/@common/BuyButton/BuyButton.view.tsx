import Link from 'next/link';

import { PATH } from '@/constants';

import { BUY_BUTTON_CLASSNAME, BuyButtonPropsType } from '.';
import * as S from './BuyButton.style';

function BuyButtonView(props: BuyButtonPropsType) {
  return (
    <Link href={PATH.CART} className={BUY_BUTTON_CLASSNAME}>
      <S.Container size={props.size} style={props.style} onClick={props.handleClickButton}>
        CART
      </S.Container>
    </Link>
  );
}

export default BuyButtonView;
