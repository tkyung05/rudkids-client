/* eslint-disable react/destructuring-assignment */

/* eslint-disable no-restricted-globals */
import { PATH, QUERY_KEY } from '@/constants';

import * as S from './ProductArt.style';

function ProductArt(props: { productId: string }) {
  return (
    <S.ProductArtContainer>
      <S.PurchaseButton
        onClick={() => {
          location.replace(`${PATH.PRODUCT_DETAIL}?${QUERY_KEY.PRODUCT_ID}=${props.productId}`);
        }}
      >
        Skip
      </S.PurchaseButton>
    </S.ProductArtContainer>
  );
}

export default ProductArt;
