import { CSSProperties } from 'react';

import useCursor from '@/hooks/useCursor';

import { CURSOR_STATUS } from '@/constants';

import BuyButtonView from './BuyButton.view';

export interface BuyButtonPropsType {
  size: number;
  style?: CSSProperties;
  handleClickButton?: () => void;
}

export const BUY_BUTTON_CLASSNAME = 'buy-button';

function BuyButton(props: BuyButtonPropsType) {
  const { offCursor } = useCursor([
    {
      onCursorStatus: CURSOR_STATUS.THUMBS_UP,
      targetClassName: BUY_BUTTON_CLASSNAME,
    },
  ]);

  const handleClickBuyButton = () => {
    offCursor();
  };

  return (
    <BuyButtonView
      size={props.size}
      style={props.style}
      handleClickButton={() => {
        handleClickBuyButton();
        props.handleClickButton && props.handleClickButton();
      }}
    />
  );
}

export default BuyButton;
