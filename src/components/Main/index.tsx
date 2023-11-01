import MAIN_DESK from '@/assets/png/main_desk.webp';
import MAIN_MOBILE from '@/assets/png/main_mobile.webp';
import { useEffect, useState } from 'react';

import useGetWindowSize from '@/hooks/useGetWindowSize';

import { RESPONSIVE } from '@/constants/style';

import ProductList from '../Product/ProductList';
import * as S from './Main.style';

function Main() {
  const { curWidth } = useGetWindowSize();
  const [mainImage, setMainImage] = useState(MAIN_DESK.src);

  useEffect(() => {
    setMainImage(
      curWidth <= parseInt(RESPONSIVE.MOBILE.MAX_WIDTH) ? MAIN_MOBILE.src : MAIN_DESK.src
    );
  }, [curWidth]);

  return (
    <S.Container>
      <S.ImageContent priority width={1000} height={1000} src={mainImage} alt="루키즈 사진" />

      <S.ProductContainer>
        <ProductList />
      </S.ProductContainer>
    </S.Container>
  );
}

export default Main;
