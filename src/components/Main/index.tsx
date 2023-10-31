import MAIN_DESK from '@/assets/png/main_desk.jpeg';
import MAIN_MOBILE from '@/assets/png/main_mobile.jpeg';
import { useEffect, useState } from 'react';

import useGetWindowSize from '@/hooks/useGetWindowSize';

import { RESPONSIVE } from '@/constants/style';

import ProductList from '../Product/ProductList';
import * as S from './Main.style';

function Main() {
  const { curWidth } = useGetWindowSize();
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    setMainImage(
      curWidth <= parseInt(RESPONSIVE.MOBILE.MAX_WIDTH) ? MAIN_MOBILE.src : MAIN_DESK.src
    );
  }, [curWidth]);

  return (
    <S.Container>
      <S.ImageContent src={mainImage} width={10000} height={10000} alt="루키즈 대표 사진" />

      <S.ProductContainer>
        <ProductList />
      </S.ProductContainer>
    </S.Container>
  );
}

export default Main;
